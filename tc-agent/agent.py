#!/usr/bin/env python3
"""
Growth Agent v2.0 - tonguckaracay.com
SERP Analizi + Rakip İçerik + GEO/AEO/E-E-A-T

Not: Bu dosya değiştiğinde /root/tc-agent/auto-deploy.sh (cron, 5 dk) main'den
çekip `pm2 restart bot` ile otomatik devreye alır — elle restart gerekmez.
"""

import os, json, asyncio, logging, re, base64, time
from datetime import datetime, timedelta
from bs4 import BeautifulSoup

from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes, filters
import anthropic, requests

try:
    import yaml as _yaml   # frontmatter doğrulaması için (opsiyonel)
except ImportError:
    _yaml = None

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO,
    handlers=[logging.FileHandler('agent.log'), logging.StreamHandler()]
)
logger = logging.getLogger(__name__)

# ── CONFIG ───────────────────────────────────────────────────────────────────

def load_config(path="config-tc.env"):
    cfg = {}
    try:
        with open(path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, _, v = line.partition('=')
                    cfg[k.strip()] = v.strip()
    except FileNotFoundError:
        pass
    for key in ['TELEGRAM_BOT_TOKEN','TELEGRAM_ALLOWED_IDS','ANTHROPIC_API_KEY',
                'GITHUB_TOKEN','GITHUB_REPO','GITHUB_BRANCH','SERPAPI_KEY',
                'DAILY_POST_HOUR','DAILY_POST_MINUTE']:
        if os.environ.get(key):
            cfg[key] = os.environ[key]
    return cfg

config     = load_config()
# max_retries: SDK'nın kendi backoff'u (429/5xx/bağlantı için). Aşağıdaki
# _claude_create sarmalayıcısı bunun da üstünde daha uzun bir retry penceresi sağlar.
claude     = anthropic.Anthropic(
    api_key=config.get("ANTHROPIC_API_KEY",""),
    max_retries=4,
    timeout=600.0,
)
ALLOWED    = set(int(x) for x in config.get("TELEGRAM_ALLOWED_IDS","").split(",") if x.strip().isdigit())
GH_REPO    = config.get("GITHUB_REPO","tonguc/tonguckaracay")
GH_BRANCH  = config.get("GITHUB_BRANCH","main")
GH_TOKEN   = config.get("GITHUB_TOKEN","")
SERP_KEY   = config.get("SERPAPI_KEY","")
DAILY_H    = int(config.get("DAILY_POST_HOUR","7"))
DAILY_M    = int(config.get("DAILY_POST_MINUTE","0"))

_cancel = False   # /stop komutu bunu True yapar

# ── CLAUDE API ÇAĞRISI (geçici hatalara karşı dayanıklı) ──────────────────────

def _claude_create(**kwargs):
    """claude.messages.create için retry sarmalayıcısı.

    Anthropic API yoğun saatlerde ara sıra geçici hata döndürür:
      • 500 Internal Server Error
      • 529 Overloaded
      • 502/503
      • 429 Rate limit
      • bağlantı kopması / timeout
    Bu çağrı, böyle bir hatada exponential backoff ile (2s, 4s, 8s, 16s, 32s)
    tekrar dener. Aksi halde tek seferlik bir 500 — özellikle yazı üretimindeki
    İKİNCİ (EN) çağrıda — tüm üretimi düşürüyor ve hem TR hem EN kaybediliyordu.

    Kalıcı hatalar (geçersiz API key=401, bozuk istek=400 gibi 4xx) tekrar
    denenmez, anında fırlatılır."""
    max_attempts = 6
    delay = 2.0
    for attempt in range(1, max_attempts + 1):
        try:
            return claude.messages.create(**kwargs)
        except anthropic.APIStatusError as e:
            status = getattr(e, "status_code", 0) or 0
            # 5xx ve 429 geçici → tekrar dene; diğer 4xx kalıcı → hemen fırlat
            if not (status >= 500 or status == 429) or attempt == max_attempts:
                raise
            logger.warning(
                f"Claude API geçici hata {status} "
                f"(deneme {attempt}/{max_attempts}); {delay:.0f}s sonra tekrar denenecek...")
        except anthropic.APIConnectionError as e:
            if attempt == max_attempts:
                raise
            logger.warning(
                f"Claude API bağlantı hatası "
                f"(deneme {attempt}/{max_attempts}): {e}; {delay:.0f}s sonra tekrar denenecek...")
        time.sleep(delay)
        delay = min(delay * 2, 32)

# ── SYSTEM PROMPT ────────────────────────────────────────────────────────────

SYSTEM = f"""Sen Tonguç Karaçay'ın dijital pazarlama ve SEO danışmanlığı blogu için içerik üreten kıdemli SEO stratejisti, AEO/GEO uzmanı ve içerik mimarısın.

BUGÜNÜN TARİHİ: {datetime.now().strftime('%d %B %Y')}

YIL KURALI — KESİNLİKLE UYULMASI ZORUNLU:
- Başlık, slug ve meta açıklamada asla "2024", "2025", "2026" veya herhangi bir yıl kullanma
- "2024 Rehberi", "2025 İpuçları" gibi ifadeler yasak → evergreen: "Kapsamlı Rehber", "Adım Adım"
- Gerçek istatistiklerde yıl zorunluysa sadece içerik metninde kullanabilirsin

TONGUÇ KARAÇAY KİMDİR:
- Türkiye merkezli kıdemli dijital pazarlama ve SEO danışmanı, 25+ yıl deneyim
- Google Ads, Meta Ads, sosyal medya, UI/UX ve yapay zeka araçlarında uzman
- Türkiye'deki KOBİ ve e-ticaret işletmelerine danışmanlık yapıyor
- Hedef kitlesi: pazarlama müdürleri, girişimciler, e-ticaret sahipleri

══════════════════════════════════
ÇİFT DİL POLİTİKASI — KRİTİK
══════════════════════════════════
- TR ve EN aynı konuyu işler ama BİRBİRİNİN ÇEVİRİSİ DEĞİLDİR
- TR yazı: Türkiye pazarına özel — TL fiyatlar, yerel platform örnekleri (Trendyol, Hepsiburada, n11), Türkiye'deki KOBİ gerçeği, Türkçe SEO/AI ekosistemi
- EN yazı: ABD/UK ağırlıklı uluslararası kitle — USD fiyatlar, global platform örnekleri (Shopify, Amazon, Etsy), Batı pazarı vakaları, İngilizce SEO/AI ekosistemi
- H2 başlık sırası, örnekler, istatistikler, vaka çalışmaları, CTA tonu her dilde BAĞIMSIZ tasarlanır
- "TR'de bu vardı, EN'e de aynısını koyayım" yaklaşımı YASAK — her dil kendi okuyucusunun aklındaki soruyu cevaplar
- Tek ortak nokta: konu (topic) ve temel SEO/AI gerçekleri. Kalan her şey (giriş, örnekler, kültürel referanslar, fiyat aralıkları, kaynak isimleri) o dilin kitlesine göre sıfırdan kurgulanır

SES TONU:
- Uzman ama anlaşılır — jargonu açıkla, teknik derinlik göster
- Veri odaklı — gerçek rakamlar, platform isimleri, somut sonuçlar
- Pratik — her bölümde uygulanabilir adım ver
- Türkiye piyasasına özel örnekler ve bağlam

══════════════════════════════════
AEO (ANSWER ENGINE OPTIMIZATION)
══════════════════════════════════
- İlk paragrafta direkt cevap ver (40-60 kelime, featured snippet hedefi)
- H2 başlıkları soru formatında yaz: "Nasıl?", "Nedir?", "Neden?", "Hangisi?"
- Her soru için: önce direkt tek cümle cevap, sonra 2-3 cümle bağlam
- "People Also Ask" sorularını H2/H3 olarak içeriğe entegre et
- Her H2 bölümü bağımsız okunabilmeli — okuyucu direkt o bölüme atlasa anlayabilmeli

══════════════════════════════════
GEO (GENERATIVE ENGINE OPTIMIZATION) — ChatGPT / Perplexity / Google AI
══════════════════════════════════
TEMEL PRENSİPLER:
1. CEVAP-ÖNCE YAKLAŞIM: Her bölüm yanıtıyla başlar, sonra açıklar
2. ÇIKARILABİLİRLİK: Her kritik iddia bağımsız bir cümle olarak çıkarılabilmeli
3. BAĞIMSIZ CÜMLELER: Bir cümle önceki cümleye referans vermeden anlam taşımalı
4. BEYAN EDİCİ YAZIM: "[Konu], [özellik]'e sahip [kategori]'dir" formatı kullan
5. STRATEJİK TEKRAR: Anahtar gerçeği farklı formatlarda 2-3 kez ifade et
6. ENTITY NETLİĞİ: Tam isimler kullan — "Google Ads" değil sadece "platform"

ALINTILANABİLİR CÜMLE KALIPLARI (her yazıda en az 3 tane):
- "[Araç/Yöntem], [somut sonuç]'u [zaman diliminde/şartla] sağlar."
- "[Kategori]'nin en etkili yaklaşımı [yöntem]'dir, çünkü [neden]."
- "[İstatistik]'e göre, [bulgu] — bu [sonuç] anlamına gelir."

YAPISAL UNSURLAR (her yazıda):
- Markdown tablo: karşılaştırma veya özellik listesi
- Numaralı adım listesi: uygulanabilir eylemler
- Madde listesi: kısa, taranabilir bilgi
- Kalın **vurgu**: her bölümde 1-2 anahtar ifade

══════════════════════════════════
E-E-A-T (Aralık 2025 Core Update Sonrası)
══════════════════════════════════
DENEYİM (birinci el kanıt — ZORUNLU):
- "Müşterilerimizde test ettiğimizde [sonuç] gördük."
- "Danışmanlık projelerinde karşılaştığımız en yaygın hata..."
- "Uygulamada gözlemlediğimiz: [spesifik bulgu]"
- Her yazıda en az 2 birinci el deneyim ifadesi

UZMANLIK (teknik derinlik):
- Platform terminolojisini doğru kullan (Google Search Console, Core Web Vitals, CLS/LCP/INP)
- Karmaşık kavramları adım adım açıkla
- Teorik bilgiyi pratik uygulamayla eşleştir

OTORİTE (dış referanslar):
- Google, Moz, Semrush, HubSpot, Statista, Nielsen, Gartner gibi güvenilir kaynaklara atıf
- Akademik çalışma veya resmi platform duyurusu mümkünse belirt
- İstatistikleri her zaman kaynaklı ver

GÜVEN (doğruluk ve dürüstlük):
- Abartısız, kanıta dayalı ifadeler
- "Kesinlikle", "mutlaka" yerine "genellikle", "çoğunlukla" kullan
- Sınırlamaları ve dezavantajları da göster

══════════════════════════════════
RAKIP ANALİZİ & İÇERİK FARKLILIĞI
══════════════════════════════════
- Rakiplerin ele almadığı açıyı bul ve o açıyı ana eksen yap
- Rakiplerde olmayan özgün veri, örnek veya perspektif ekle
- Content gap: rakiplerin 3 cümleyle geçtiği konuyu 3 paragrafla aç
- Her iddia için "rakip bunu söylemiyor, biz söylüyoruz" testi yap

══════════════════════════════════
TEKNİK SEO & SCHEMA (2026 Durumu)
══════════════════════════════════
- FAQ içeriği yazarken frontmatter faq alanına da yaz (JSON-LD için)
- Her yazıda en az 1 karşılaştırma tablosu veya yapılandırılmış liste (tarama kolaylığı)
- Başlıklar hiyerarşik: H1 (başlık) → H2 (ana sorular) → H3 (alt konular)
- İç linkler: /slug formatı (TR için), /en/slug formatı (EN için) — /blog/ eklemeden
- CTA linki: TR yazıda mutlaka `/iletisim`, EN yazıda mutlaka `/en/contact` — başka URL kullanma

══════════════════════════════════
DÖNÜŞÜM KATMANI (CRO Sinyalleri)
══════════════════════════════════
- Her yazıda okuyucunun "bir sonraki adımı" net olmalı
- Transactional intent: net CTA + güven sinyali (garantiler, sonuçlar)
- Commercial intent: karar çerçevesi sun, okuyucuyu doğru seçime yönlendir
- Informational: "Bu bilgiyi uygulamak için..." bağlantısıyla ilgili yazıya yönlendir

══════════════════════════════════
ARAÇ İÇERİĞİ MİMARİSİ (Tool Page)
══════════════════════════════════
Konu bir araç, platform veya AI kullanımı içeriyorsa (ChatGPT, Google Ads, GA4, Canva, SEMrush vb.):

ZORUNLU BLOKLAR:
1. **Copy-paste prompt veya komut** (en az 2-3 adet, kod bloğu içinde):
   ```
   [Hazır kullanılabilir prompt veya komut buraya]
   ```
   → Okuyucu kopyalayıp yapıştırabilmeli, düzenleme gerekmemeli

2. **Before / After tablosu** — somut dönüşüm örneği:
   | Önce (Kötü) | Sonra (İyi) |
   |-------------|-------------|
   | [gerçekçi kötü örnek] | [optimize örnek] |
   → En az 2-3 satır, gerçekçi ürün/içerik örnekleriyle

3. **Doldurulabilir şablon** (template):
   ```
   Ürün adı: [...]
   Hedef kitle: [...]
   Ana fayda: [...]
   ```
   → Okuyucu kendi bilgilerini yazıp kullanabilmeli

4. **Senaryo bazlı rehber**: Shopify satıcısı / Trendyol satıcısı / Dropshipper gibi
   gerçek profiller için ayrı ayrı uygulama talimatı

KURAL: "Anlatan içerik" değil, "kullanan içerik" yaz.
Okuyucu makaleyi kapatınca elinde kullanılabilir bir şey olmalı.

══════════════════════════════════
İÇERİK MİMARİSİ (Standart Yapı)
══════════════════════════════════
1. **İçeriğe özgün ilk H2** (40-60 kelime, featured snippet için optimize) — "Kısa Cevap" değil, konuya özel başlık
2. **Giriş**: neden önemli + okuyucuya ne kazandıracak
3. **Ana bölümler**: H2 soru formatı, her birinde alıntılanabilir cümle
4. **Araç içeriği ise**: prompt + before/after + şablon (yukarıdaki kurala göre)
5. **Karşılaştırma tablosu** (commercial intent için zorunlu)
6. **Hangi Durumda Hangisi?** — persona/senaryo kılavuzu
7. **Türkiye'ye özel bağlam**: yerel veri, platform fiyatları (TL), pazar gerçeği
8. **CTA** + iç link
9. **FAQ** (frontmatter + içerik sonu bölümü)

KESİNLİKLE YASAK:
- Uydurma istatistik veya kaynak
- "Günümüzde dijital dünya..." gibi klişe girişler
- Genel, yüzeysel tavsiyeler — spesifik ol
- Fazla uzun cümleler (30+ kelime)
- Promosyonel, haber bülteni dili — beyan edici ve nötr yaz
- "## İçindekiler" / "## Table of Contents" / TOC bölümü YAZMA — site zaten otomatik TOC üretir (mobilde yazı üstünde, desktop'ta sağ sidebar). Manuel TOC eklenirse renderer'ın slugify'ı ile uyuşmaz (Türkçe karakterleri ve tireleri siler), anchor linkler kırılır."""

# ── SERP ANALİZİ ─────────────────────────────────────────────────────────────

def pick_english_keyword(topic_tr: str) -> str:
    """TR konusu için native İngilizce ana anahtar kelimeyi döner.
    Çeviri DEĞİL — ABD/UK pazarındaki gerçek arama davranışına ve
    İngilizce SEO/AI ekosisteminde kullanılan terminolojiye göre seçilir."""
    try:
        r = _claude_create(
            model="claude-haiku-4-5-20251001", max_tokens=80,
            messages=[{"role": "user", "content":
                f"""Turkish SEO topic: '{topic_tr}'

Suggest the SINGLE most likely native English search query that a US/UK reader would type into Google for this topic. This is NOT a translation — it must reflect actual English search behavior, common English phrasing, and terminology used in the English-speaking SEO/AI/marketing ecosystem.

Examples (note these are reframings, not direct translations):
- 'yapay zeka ile ürün açıklaması yazma' → 'AI product description generator'
- 'sosyal medya yönetimi araçları' → 'best social media management tools'
- 'google ads dönüşüm optimizasyonu' → 'google ads conversion optimization'
- 'e-ticaret için yerel SEO' → 'local SEO for ecommerce'

Return ONLY the English search query string, nothing else."""}]
        )
        return r.content[0].text.strip().strip('"').strip("'")
    except Exception:
        return topic_tr

def serp_analyze(keyword: str, lang: str = "tr") -> dict:
    """SerpAPI ile SERP analizi yapar. lang='tr' veya 'en'."""
    if not SERP_KEY:
        return {}
    params = {
        "q": keyword, "num": "10", "api_key": SERP_KEY,
        "gl": "tr" if lang == "tr" else "us",
        "hl": "tr" if lang == "tr" else "en",
    }
    try:
        r = requests.get("https://serpapi.com/search.json", params=params, timeout=15)
        data = r.json()
        results = []
        for item in data.get("organic_results", [])[:5]:
            results.append({
                "title":   item.get("title", ""),
                "url":     item.get("link", ""),
                "snippet": item.get("snippet", ""),
            })
        related = [q.get("query", "") for q in data.get("related_questions", [])[:6]]
        related += [s.get("query", "") for s in data.get("related_searches", [])[:4]]
        return {"results": results, "related": related}
    except Exception as e:
        logger.warning(f"SerpAPI hatası ({lang}): {e}")
        return {}

def fetch_competitor(url: str, max_chars: int = 4000) -> tuple[str, int]:
    """Rakip sayfanın içeriğini + kelime sayısını döner."""
    try:
        headers = {"User-Agent": "Mozilla/5.0 (compatible; research-bot/1.0)"}
        r = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.text, "html.parser")
        for tag in soup(["script","style","nav","footer","header","aside","form"]):
            tag.decompose()
        text = soup.get_text(separator=" ", strip=True)
        text = re.sub(r'\s+', ' ', text)
        word_count = len(text.split())
        return text[:max_chars], word_count
    except Exception as e:
        logger.warning(f"Rakip fetch hatası {url}: {e}")
        return "", 0

def _classify_intent(titles: list[str], related: list[str]) -> str:
    """SERP başlık ve sorgulardan search intent çıkarır."""
    all_text = " ".join(titles + related).lower()
    scores = {
        "informational": sum(all_text.count(s) for s in [
            "nedir","nasil","what is","how to","guide","rehber","neden","why","anlam","tanim","what are","açıklama"]),
        "commercial": sum(all_text.count(s) for s in [
            "en iyi","best","karsilastirma","comparison","review","alternative","vs ","top ","önerilen","recommended","hangi"]),
        "transactional": sum(all_text.count(s) for s in [
            "buy","satin","fiyat","price","download","free","ucretsiz","siparis","hizmet","teklif"]),
    }
    return max(scores, key=scores.get) if max(scores.values()) > 0 else "informational"

def build_serp_context(keyword: str, lang: str = "tr") -> dict:
    """SERP + rakip analizi. {context, intent, target_words} döner."""
    serp = serp_analyze(keyword, lang)
    if not serp:
        return {"context": "", "intent": "informational", "target_words": 1200}

    label = "Türkiye" if lang == "tr" else "US/Global"
    lines = [f"SERP ANALİZİ — '{keyword}' ({label})\n", "İlk 10 Rakip:"]
    competitor_contents = []
    word_counts = []
    all_titles = []

    for i, res in enumerate(serp.get("results", []), 1):
        lines.append(f"{i}. {res['title']}\n   URL: {res['url']}\n   Snippet: {res['snippet']}")
        all_titles.append(res["title"])
        if i <= 5:  # top 3 → top 5
            content, wc = fetch_competitor(res["url"])
            if content:
                competitor_contents.append(f"--- Rakip {i}: {res['title']} ---\n{content}")
            if wc > 300:
                word_counts.append(wc)

    intent = _classify_intent(all_titles, serp.get("related", []))
    avg_wc = sum(word_counts) / len(word_counts) if word_counts else 1200
    target_words = max(1000, min(2500, int(avg_wc * 1.2)))

    if serp.get("related"):
        lines.append("\nİlgili Sorular ve Aramalar:")
        for q in serp["related"]:
            lines.append(f"  • {q}")
    if competitor_contents:
        lines.append("\nRakip İçerik Özeti (Content Gap / Depth için):")
        lines.extend(competitor_contents)

    return {"context": "\n".join(lines), "intent": intent, "target_words": target_words}

def build_dual_serp_context(topic_tr: str) -> dict:
    """TR ve EN için SERP analizi + meta. Dict döner.
    EN sorgusu için TR konunun çevirisini değil, native İngilizce keyword'ü kullanır."""
    topic_en = pick_english_keyword(topic_tr)
    logger.info(f"EN native keyword: {topic_en}")
    tr = build_serp_context(topic_tr, lang="tr")
    en = build_serp_context(topic_en, lang="en")
    target = (tr["target_words"] + en["target_words"]) // 2 if (tr["context"] and en["context"]) \
             else tr["target_words"] or en["target_words"] or 1200
    return {
        "tr_ctx": tr["context"], "en_ctx": en["context"],
        "tr_intent": tr["intent"], "en_intent": en["intent"],
        "topic_en": topic_en,
        "target_words": target,
    }

# ── GITHUB API ───────────────────────────────────────────────────────────────

def _gh_h():
    return {"Authorization": f"token {GH_TOKEN}", "Accept": "application/vnd.github.v3+json"}

def gh_sha(path):
    r = requests.get(f"https://api.github.com/repos/{GH_REPO}/contents/{path}?ref={GH_BRANCH}",
                     headers=_gh_h(), timeout=10)
    return r.json().get("sha") if r.status_code == 200 else None

def gh_push(path, content, msg):
    payload = {"message": msg, "content": base64.b64encode(content.encode()).decode(), "branch": GH_BRANCH}
    sha = gh_sha(path)
    if sha:
        payload["sha"] = sha
    r = requests.put(f"https://api.github.com/repos/{GH_REPO}/contents/{path}",
                     headers=_gh_h(), json=payload, timeout=15)
    ok = r.status_code in (200, 201)
    if not ok:
        logger.error(f"gh_push HATA {r.status_code}: {r.text[:200]}")
    return ok

def gh_read(path: str) -> str:
    """GitHub'dan dosya içeriğini okur."""
    r = requests.get(
        f"https://api.github.com/repos/{GH_REPO}/contents/{path}?ref={GH_BRANCH}",
        headers=_gh_h(), timeout=10
    )
    if r.status_code == 200:
        return base64.b64decode(r.json()["content"]).decode("utf-8")
    return ""

def gh_update_slug_mappings(tr_slug: str, en_slug: str) -> bool:
    """lib/slug-mappings.ts dosyasına yeni TR->EN mapping ekler."""
    try:
        content = gh_read("lib/slug-mappings.ts")
        if not content or f'"{tr_slug}"' in content:
            return True  # Zaten var veya dosya okunamadı
        new_entry = f'  "{tr_slug}": "{en_slug}",'
        # slugMappingTrToEn objesinin kapanış }; den önce ekle
        updated = content.replace(
            '  "yapay-zeka-ui-tasarim-araclari": "ai-ui-design-tools",\n};',
            f'  "yapay-zeka-ui-tasarim-araclari": "ai-ui-design-tools",\n{new_entry}\n}};'
        )
        # Eğer tam string bulunamazsa sondan ekle (yeni yazılar eklendikçe son entry değişir)
        if updated == content:
            # };  ile biten satırı bul ve önüne ekle
            import re as _re
            updated = _re.sub(
                r'(\n\};)\s*\n(export const slugMappingEnToTr)',
                f'\n{new_entry}\n}};\n\\2',
                content,
                count=1
            )
        if updated != content:
            return gh_push("lib/slug-mappings.ts", updated, f"feat: add slug mapping {tr_slug}")
        return False
    except Exception:
        logger.exception("Slug mapping güncelleme hatası")
        return False

def gh_slugs(lang="tr"):
    r = requests.get(f"https://api.github.com/repos/{GH_REPO}/contents/content/blog/{lang}?ref={GH_BRANCH}",
                     headers=_gh_h(), timeout=10)
    return [f["name"][:-3] for f in r.json() if f["name"].endswith(".md")] if r.status_code == 200 else []

def get_internal_links(lang="tr") -> str:
    """Mevcut blog yazılarının URL listesini döner (iç link için Claude'a verilir)."""
    try:
        slugs = gh_slugs(lang)
        if not slugs:
            return ""
        base = "" if lang == "tr" else "/en"
        label = "MEVCUT TR YAZILARI — 3-5 tanesine doğal anchor text ile iç link ver:" \
                if lang == "tr" else \
                "EXISTING EN POSTS — add 3-5 internal links with natural anchor text:"
        lines = [label]
        for slug in slugs[:25]:
            lines.append(f"  {base}/{slug}")
        return "\n".join(lines)
    except Exception:
        return ""

# ── BLOG ÜRETİCİ ─────────────────────────────────────────────────────────────
# Kategori bazlı görsel havuzu. Her kategoride 6 ID var.
# pick_image(topic, index): kategoriye uygun görsel seçer, index ile offset
# verir → aynı kategoride bile farklı yazılar farklı görsel alır.
CATEGORY_IMAGES: dict[str, list[str]] = {
    "seo": [
        "1504868584819-f8e8b4b6d7e3",
        "1432888498266-38ffec3eaf0a",
        "1519389950473-47ba0277781c",
        "1571721795195-a2ca2d3370e9",
        "1553877522-43269d4ea984",
        "1516116216624-53ad697a8648",
    ],
    "google": [
        "1611162617213-7d7a39e9b1d7",
        "1549924231-f129b911d442",
        "1497366811353-6870744d04b2",
        "1516251193007-45ef944ab0c6",
        "1520333789090-1afc82db536a",
        "1563986768609-322da13575f3",
    ],
    "social": [
        "1563986768609-322da13575f3",
        "1516251193007-45ef944ab0c6",
        "1520333789090-1afc82db536a",
        "1526178613658-3f1622045557",
        "1562577309-4f401e5e5b31",
        "1553484771-047a44eab61a",
    ],
    "market": [
        "1533750349088-cd871a92f312",
        "1454165804606-c3d57bc86b40",
        "1552664730-d307ca884978",
        "1556761175-b413da4baf72",
        "1497366216548-37526070297c",
        "1551434678-e076c223a692",
    ],
    "design": [
        "1561070791-2526d30994b5",
        "1558655702-b1a49a557e15",
        "1541462608143-67571c6738dd",
        "1507238691740-187a5b1d37b7",
        "1517976487492-5750f3195933",
        "1563237819-2aefb2a12e56",
    ],
    "ai": [
        "1677442136019-21780ecad995",
        "1485827404703-89b55fcc595e",
        "1555255707-c07966088b7b",
        "1633356122544-f134324a6cee",
        "1676299081847-824916de030a",
        "1611162617213-7d7a39e9b1d7",
    ],
    "content": [
        "1542744094-3a31f272c490",
        "1499750310-25496d3e5ed6",
        "1486312338219-ce68d2c6f44d",
        "1504711434969-e33886168f5c",
        "1432888498266-38ffec3eaf0a",
        "1571721795195-a2ca2d3370e9",
    ],
    "analytic": [
        "1551288049-bebda4e38f71",
        "1460925895917-afdab827c52f",
        "1553877522-43269d4ea984",
        "1551434678-e076c223a692",
        "1497366216548-37526070297c",
        "1516116216624-53ad697a8648",
    ],
    "email": [
        "1596526131083-e8c633360a4c",
        "1517976487492-5750f3195933",
        "1526178613658-3f1622045557",
        "1563237819-2aefb2a12e56",
        "1499750310-25496d3e5ed6",
        "1486312338219-ce68d2c6f44d",
    ],
    "ads": [
        "1611974789855-9c2a0a7236a3",
        "1562577309-4f401e5e5b31",
        "1553484771-047a44eab61a",
        "1556761175-b413da4baf72",
        "1552664730-d307ca884978",
        "1454165804606-c3d57bc86b40",
    ],
}

_FALLBACK_POOL = [
    "1460925895917-afdab827c52f", "1486312338219-ce68d2c6f44d",
    "1504711434969-e33886168f5c", "1519389950473-47ba0277781c",
    "1542744094-3a31f272c490",   "1551288049-bebda4e38f71",
]


def pick_image(topic: str, post_index: int) -> str:
    """Konuya uygun kategoriden, post_index ile offset'li görsel seçer."""
    t = topic.lower()
    pool = _FALLBACK_POOL
    for cat, ids in CATEGORY_IMAGES.items():
        if cat in t:
            pool = ids
            break
    pid = pool[post_index % len(pool)]
    return f"https://images.unsplash.com/photo-{pid}?w=1200&auto=format&fit=crop&q=80"


def extract_paa(serp_data: str) -> list[str]:
    """SERP verisinden PAA (People Also Ask) sorularını çeker."""
    questions = []
    for line in serp_data.split('\n'):
        line = line.strip()
        if line.startswith('•') and '?' in line:
            q = line.lstrip('• ').strip()
            if q:
                questions.append(q)
    return questions[:8]

def _call_claude(prompt: str, max_tokens: int = 8000) -> str:
    """Claude API çağrısı yapar, raw metni döner."""
    resp = _claude_create(
        model="claude-sonnet-4-5", max_tokens=max_tokens,
        system=SYSTEM,
        messages=[{"role": "user", "content": prompt}]
    )
    return resp.content[0].text.strip()


def _parse_block(raw: str, start_tag: str, end_tag: str, lang: str) -> str:
    """Delimiter arasındaki içeriği çıkarır. Kapanış eksikse sona kadar alır."""
    m = re.search(rf"{re.escape(start_tag)}\s*(.*?)\s*{re.escape(end_tag)}", raw, re.DOTALL)
    if not m:
        m = re.search(rf"{re.escape(start_tag)}\s*(.*)", raw, re.DOTALL)
    if not m:
        logger.error(f"{lang} bloğu bulunamadı. Raw:\n{raw[:500]}")
        raise ValueError(f"{lang} yazı üretilemedi. Claude yanıtı: {raw[:300]}")
    return m.group(1).strip()


def _fix_yaml_quoted_value(line: str) -> str:
    """Tek satırlık `key: "değer"` (veya `- key: "değer"`) YAML alanındaki
    kaçırılmamış iç çift tırnakları escape eder. LLM bazen description/answer
    gibi alanların metnine düz " koyuyor (örn: (e.g., "x")) → çift tırnaklı
    YAML scalar'ı bozuluyor. İlk ve son tırnak gerçek sınırlayıcıdır; arasındaki
    her şey değerdir, dolayısıyla içteki tüm tırnaklar \\" olmalı."""
    m = re.match(r'^(\s*(?:-\s*)?[A-Za-z_][\w]*:\s*)"(.*)"\s*$', line)
    if not m:
        return line
    prefix, value = m.group(1), m.group(2)
    value = value.replace('\\"', '"')   # önce mevcut escape'i geri al (idempotent olsun)
    value = value.replace('"', '\\"')   # sonra tüm iç tırnakları escape et
    return f'{prefix}"{value}"'


def _sanitize_frontmatter(md: str) -> str:
    """Markdown'ın frontmatter (---...---) bloğundaki çift tırnaklı YAML
    değerlerini güvene alır. Gövdedeki (body) tırnaklara dokunmaz."""
    m = re.match(r'^(---\s*\n)(.*?)(\n---\s*\n?)(.*)$', md, re.DOTALL)
    if not m:
        return md
    head, fm, sep, body = m.groups()
    fixed = "\n".join(_fix_yaml_quoted_value(ln) for ln in fm.split("\n"))
    return head + fixed + sep + body


def _validate_frontmatter(md: str, lang: str) -> None:
    """Sanitize sonrası frontmatter'ın geçerli YAML olduğunu doğrular.
    Geçersizse ValueError fırlatır → bozuk içerik GitHub'a PUSH EDİLMEZ
    (aksi halde gray-matter build'i çöküp tüm site deploy'unu kilitliyordu)."""
    if _yaml is None:
        return
    fm = re.match(r'^---\s*\n(.*?)\n---\s*\n?', md, re.DOTALL)
    if not fm:
        raise ValueError(f"{lang}: frontmatter bulunamadı")
    try:
        _yaml.safe_load(fm.group(1))
    except _yaml.YAMLError as e:
        raise ValueError(f"{lang} frontmatter geçersiz YAML (sanitize sonrası): {e}")


def generate_post(topic: str, tr_serp: str = "", en_serp: str = "",
                  tr_intent: str = "informational", en_intent: str = "informational",
                  target_words: int = 1200,
                  tr_links: str = "", en_links: str = "",
                  topic_en: str = "") -> dict:
    topic_en = topic_en or topic
    today = datetime.now().strftime("%Y-%m-%d")

    tr_paa = extract_paa(tr_serp)
    en_paa = extract_paa(en_serp)

    tr_block = f"\n\nTR SERP & RAKİP ANALİZİ (Türkiye):\n{tr_serp}" if tr_serp else ""
    en_block = f"\n\nEN SERP & RAKİP ANALİZİ (US/Global):\n{en_serp}" if en_serp else ""
    tr_paa_block = ("\nTR PAA SORULARI:\n" + "\n".join(f"- {q}" for q in tr_paa)) if tr_paa else ""
    en_paa_block = ("\nEN PAA QUESTIONS:\n" + "\n".join(f"- {q}" for q in en_paa)) if en_paa else ""

    intent_map = {
        "informational": "Eğitici, satış yok. Soru-cevap formatı, detaylı açıklama.",
        "commercial": "Karşılaştırma, avantaj/dezavantaj, öneriler. Karar vermeye yardım.",
        "transactional": "Dönüşüm odaklı. Net CTA, somut adımlar, güven sinyalleri.",
    }
    tr_intent_desc = intent_map.get(tr_intent, intent_map["informational"])
    en_intent_desc = intent_map.get(en_intent, intent_map["informational"])

    # Intent'e göre kelime sayısı hedefi
    intent_word_targets = {
        "informational": "1200-1800",
        "commercial": "2000-2800",
        "transactional": "1500-2000",
    }
    tr_word_target = intent_word_targets.get(tr_intent, "1200-1800")
    en_word_target = intent_word_targets.get(en_intent, "1200-1800")

    # Tool page tespiti: konu belirli bir araç/platform kullanımı içeriyor mu?
    _topic_lower = topic.lower()
    _tool_keywords = [
        "ile ", "kullan", "nasıl yaz", "nasıl yap", "prompt", "şablon", "template",
        "rehber", "chatgpt", "gemini", "claude", "copilot", "canva", "semrush",
        "ahrefs", "google ads", "meta ads", "analytics", "search console",
        "shopify", "wordpress", "woocommerce", "trendyol", "hepsiburada",
        "instagram", "linkedin", "youtube", "midjourney", "dall-e",
    ]
    is_tool_page = any(kw in _topic_lower for kw in _tool_keywords)

    # Commercial intent için zorunlu bölümler (TR)
    tr_commercial_sections = ""
    if tr_intent == "commercial":
        tr_commercial_sections = """
COMMERCIAL INTENT — ZORUNLU BÖLÜMLER:
- Karşılaştırma tablosu: En az 5 satırlı Markdown tablosu ekle (araç/yöntem/seçenek karşılaştırması) — ZORUNLU
- "Hangi Durumda Hangisi?" bölümü: 3 farklı persona/senaryo için net öneri ver (örn: startup, freelancer, kurumsal şirket) — ZORUNLU
- Gerçek maliyet analizi: Araç/hizmet maliyetlerini somut rakamlarla tahmin et (TL veya USD) — ZORUNLU"""

    # Commercial intent için zorunlu bölümler (EN)
    en_commercial_sections = ""
    if en_intent == "commercial":
        en_commercial_sections = """
COMMERCIAL INTENT — MANDATORY SECTIONS:
- Comparison table: Include a Markdown table with at least 5 rows comparing tools/methods/options — MANDATORY
- "Which Scenario Uses What?" section: Give clear recommendations for 3 personas/scenarios (e.g. startup, freelancer, enterprise) — MANDATORY
- Real cost analysis section: Estimate actual costs with specific figures (USD or local currency) — MANDATORY"""

    # Tool page için zorunlu bölümler (TR)
    tr_tool_sections = ""
    if is_tool_page:
        tr_tool_sections = """
TOOL PAGE — ZORUNLU BÖLÜMLER (konu araç/platform kullanımı içeriyor):
- COPY-PASTE PROMPT: En az 2 farklı kullanım senaryosu için hazır prompt ver (``` kod bloğu içinde, direkt kopyalanabilir):
    → Genel kullanım promptu
    → SEO/profesyonel odaklı prompt
    → Bonus: sektöre özel 1 prompt (giyim / elektronik / hizmet vb.)
- BEFORE/AFTER TABLOSU: En az 3 satır — sol sütun kötü örnek, sağ sütun optimize örnek (gerçekçi, uydurma değil)
- DOLDURULABİLİR ŞABLON: Okuyucunun kendi bilgilerini yazabileceği alan yapısı:
    Ürün/Konu adı: [...]
    Hedef kitle: [...]
    Ana fayda: [...]
    Ton: [...]
    (konuya göre uyarla)
- KATEGORİ/NİŞ ÖRNEKLERİ: En az 3 farklı sektör veya kullanım tipine özel örnek ver (e-ticaret, hizmet, B2B vb.)
- "NE ZAMAN İŞE YARAMAZ?" bölümü: Aracın/yöntemin sınırlılıklarını, risklerini ve başarısız olduğu senaryoları dürüstçe yaz — bu E-E-A-T'nin en güçlü sinyali
- KARAR BLOĞU (yazı sonu): "Yeni başlıyorsan → şunu yap", "İleri seviyedeysen → şunu yap" formatında net yönlendirme"""

    # Tool page için zorunlu bölümler (EN)
    en_tool_sections = ""
    if is_tool_page:
        en_tool_sections = """
TOOL PAGE — MANDATORY SECTIONS (topic involves a specific tool/platform):
- COPY-PASTE PROMPTS: At least 2 ready-to-use prompts for different scenarios (inside ``` code blocks, directly usable):
    → General use prompt
    → SEO/professional-focused prompt
    → Bonus: 1 industry-specific prompt (fashion / electronics / services etc.)
- BEFORE/AFTER TABLE: At least 3 rows — left column bad example, right column optimized example (realistic, not fabricated)
- FILLABLE TEMPLATE: A structure readers can fill in with their own information:
    Product/Topic name: [...]
    Target audience: [...]
    Main benefit: [...]
    Tone: [...]
    (adapt to topic)
- CATEGORY/NICHE EXAMPLES: At least 3 examples for different industries or use cases (e-commerce, services, B2B etc.)
- "WHEN DOES IT FAIL?" section: Honestly describe the tool's/method's limitations, risks, and failure scenarios — this is the strongest E-E-A-T signal
- DECISION BLOCK (end of post): Clear direction in "If you're just starting → do this", "If you're advanced → do this" format"""

    tr_links_block = f"\n\n{tr_links}" if tr_links else ""
    en_links_block = f"\n\n{en_links}" if en_links else ""

    # Tool page için içerik yapısı şablonu (sıra kritik)
    tr_tool_structure = ""
    en_tool_structure = ""
    if is_tool_page:
        tr_tool_structure = """
TOOL PAGE İÇERİK YAPISI — BU SIRAYI KORU (blog yapısı değil, utility yapısı):
1. İÇERİĞE ÖZGÜN İLK H2 → 5 maddelik NUMARALI LİSTE (her madde bold: başlık + kısa açıklama), snippet için liste formatı
   BAŞLIK KURALI: "Kısa Cevap" yazma — konuyu doğrudan ifade eden başlık yaz (örn: "[Konu] İçin 5 Kritik Adım", "En İyi X [Araç] Komutu", "[Konu] Nasıl Yapılır? X Adımda")
2. ## Hazır Şablonlar → Çıktı şablonu (açıklamanın nasıl görüneceği, köşeli parantez ile) + Prompt şablonu (ChatGPT'ye gönderilecek metin) — SAYFANIN ÜSTÜNDE, kaydırmadan görünmeli
3. ## Hazır Promptlar → SEO odaklı + Satış odaklı + Kategori bazlı (en az 3 farklı niş), hepsi ``` kod bloğu içinde
4. ## Önce/Sonra Karşılaştırması → Tablo (en az 4 satır, gerçekçi örnekler)
5. Açıklama bölümleri → Avantajlar, nasıl çalışır, detaylar (blog içeriği)
6. ## Ne Zaman İşe Yaramaz? → Sınırlamalar + riskler + çözüm önerileri
7. ## Kime Göre Ne Yapmalı? → Yeni başlayan / orta seviye / ileri seviye için karar bloğu
8. ## Sıkça Sorulan Sorular

KRİTİK: Kullanılabilir içerik (şablon + promptlar) ÖNCE gelir, açıklama SONRA."""

        en_tool_structure = """
TOOL PAGE CONTENT STRUCTURE — FOLLOW THIS ORDER (utility structure, not blog structure):
1. CONTENT-SPECIFIC FIRST H2 → 5-item NUMBERED LIST (each item bold: title + short explanation), list format for snippet
   HEADING RULE: Never write "Quick Answer" — use a topic-specific, benefit-driven heading (e.g., "5 Critical Steps for [Topic]", "The Best X [Tool] Commands", "How to [Topic] in X Steps")
2. ## Ready-to-Use Templates → Output template (what the result looks like, with bracketed placeholders) + Prompt template (what to send to ChatGPT) — NEAR TOP, visible without scrolling
3. ## Ready-to-Use Prompts → SEO-focused + Sales-focused + Category-based (at least 3 different niches), all inside ``` code blocks
4. ## Before/After Comparison → Table (at least 4 rows, realistic examples)
5. Explanation sections → Advantages, how it works, details (blog content)
6. ## When Does It Fail? → Limitations + risks + workarounds
7. ## Which Approach for Which Level? → Decision block for beginner / intermediate / advanced
8. ## Frequently Asked Questions

CRITICAL: Usable content (templates + prompts) comes FIRST, explanation comes AFTER."""

    def fm_field(content, key):
        m = re.search(rf'^{key}:\s*"([^"]+)"', content, re.MULTILINE)
        return m.group(1) if m else ""

    # ── 1. ÇAĞRI: Türkçe yazı ────────────────────────────────────────────────
    tr_prompt = f""""{topic}" konusunda Türkçe blog yazısı yaz.

KURALLAR:
- Başlık ve slug'da asla yıl (2024/2025/2026) kullanma — evergreen yaz
- Hedef kelime sayısı: {tr_word_target} kelime (bu aralığa ulaş, altında kalma)
- Intent: {tr_intent} — {tr_intent_desc}
- İç link: verilen URL listesinden 3-5 tanesine doğal anchor text ile link ver
- Dış link: 2-3 güvenilir kaynak (Google, Moz, HubSpot, Statista vb.)
- FAQ: 6-8 soru, her cevap 60-80 kelime, PAA sorgularından üret{tr_block}{tr_paa_block}{tr_links_block}
{tr_commercial_sections}
{tr_tool_sections}
{tr_tool_structure}
KARAR MİMARİSİ (tüm intentler için zorunlu):
- Her H2 başlığı okuyucunun aklındaki bir soruyu cevaplar (karar-odaklı yapı)
- İlk H2'yi içeriğe özgün, fayda ifaden bir başlık olarak yaz — "Kısa Cevap" YAZMA:
  • Tool page ise: 5 maddelik NUMARALI LİSTE (her madde: **bold başlık** — kısa açıklama)
  • Diğer içerik ise: 40-60 kelime net paragraf özet
  • BAŞLIK ÖRNEKLERİ: "[Konu]: X Adımda Nasıl Yapılır?", "X [Araç] Adımı", "[Konu] İçin X Kritik Adım", "En İyi X [Konu] Yöntemi"
- Yazı sonunda okuyucu ne yapması gerektiğini net olarak bilmeli

EEAT SİNYALLERİ (zorunlu):
- En az 2 yerde şu ifade kalıplarını kullan: "Uygulamada gördüğümüz...", "Müşterilerimizde test ettiğimizde...", "Danışmanlık projelerinde karşılaştığımız..."
- Gerçek istatistik veya sayı içeren en az 3 cümle ekle (kaynak belirt veya gerçekçi tahmin sun)

TAM OLARAK ŞU FORMATTA DÖN (başka hiçbir şey ekleme):
===TR_START===
---
title: "TR başlık (50-60 karakter, yıl yok)"
slug: "tr-url-slug"
description: "Meta açıklama (150-160 karakter)"
date: "{today}"
category: "SEO veya Dijital Pazarlama veya Sosyal Medya veya UI/UX veya Yapay Zeka"
tags: ["tag1", "tag2", "tag3", "tag4"]
readTime: "X dk"
featured: false
image_keyword: "seo veya google veya social veya marketing veya design veya ai veya content veya analytics"
translationSlug: "PLACEHOLDER_EN_SLUG"
faq:
  - question: "Soru 1?"
    answer: "Cevap 1 (60-80 kelime)."
  - question: "Soru 2?"
    answer: "Cevap 2."
---

(TR markdown içerik — {tr_word_target} kelime, AEO+GEO+EEAT, iç+dış linkler, EEAT deneyim ifadeleri, istatistikler{', TOOL PAGE YAPISI: İçeriğe özgün ilk H2 (numaralı liste) → Şablonlar → Promptlar → Karşılaştırma → Açıklama → Ne Zaman İşe Yaramaz → Karar Bloğu → SSS' if is_tool_page else ', içeriğe özgün ilk H2 (paragraph özet), karar mimarisi, sonunda ## Sıkça Sorulan Sorular bölümü'})

===TR_END==="""

    logger.info("TR yazı üretiliyor...")
    tr_raw = _call_claude(tr_prompt)
    logger.info(f"TR yanıt ({len(tr_raw)} karakter): {tr_raw[:300]}")
    tr_file = _parse_block(tr_raw, "===TR_START===", "===TR_END===", "TR")
    tr_slug  = fm_field(tr_file, "slug")
    tr_title = fm_field(tr_file, "title")

    # ── 2. ÇAĞRI: İngilizce yazı ─────────────────────────────────────────────
    en_prompt = f""""{topic_en}" — write an English blog post on this topic.

NATIVE KEYWORD CONTEXT (mandatory):
- Primary head term for this post: "{topic_en}" — this is a native English search query, NOT a translation of the Turkish topic
- Build slug, title, meta description, H1, and H2 headings around this native term and its semantically related English keywords (use the EN SERP related searches and PAA below to discover them)
- Do NOT mirror the Turkish slug structure or word order; use natural English phrasing that an American/British reader would actually search for
- Secondary keywords must come from English search ecosystem (e.g., "ecommerce" not "e-ticaret", "social media" not "sosyal medya")

RULES:
- Never use years (2024/2025/2026) in title or slug — write evergreen
- Target word count: {en_word_target} words (reach this range, do not fall short)
- Intent: {en_intent} — {en_intent_desc}
- Internal links: naturally link 3-5 URLs from the list below
- External links: 2-3 authoritative sources (Google, Moz, HubSpot, Statista etc.)
- FAQ: 6-8 questions, each answer 60-80 words, based on PAA queries{en_block}{en_paa_block}{en_links_block}
{en_commercial_sections}
{en_tool_sections}
{en_tool_structure}
DECISION ARCHITECTURE (mandatory for all intents):
- Each H2 heading answers a question the reader has in mind (decision-based structure)
- Write the first H2 as a content-specific, benefit-driven heading — NEVER write "Quick Answer":
  • Tool page: 5-item NUMBERED LIST (each item: **bold title** — short explanation)
  • Other content: 40-60 word concise paragraph summary
  • HEADING EXAMPLES: "[Topic]: How to Do It in X Steps", "X [Tool] Steps That Work", "X Critical Steps for [Topic]", "The Best X [Topic] Methods"
- At the end of the post, the reader must clearly know what action to take next

EEAT SIGNALS (mandatory):
- Use at least 2 first-person authority phrases such as: "In practice, we've seen...", "When we tested this with clients...", "Across consulting engagements, we've found..."
- Include at least 3 sentences containing real statistics or specific numbers (cite the source or present a credible estimate)

The Turkish version of this post has slug: "{tr_slug}" — this is for cross-language linking ONLY. DO NOT translate the Turkish content. Write a fully native English article for a US/UK audience: USD pricing, global platforms (Shopify, Amazon, Etsy), Western market case studies, English-language SEO/AI ecosystem. The two posts share the topic and core facts but must NOT mirror each other in H2 order, examples, statistics, or framing — design this English version independently for an English-speaking reader.

RESPOND IN EXACTLY THIS FORMAT (nothing else):
===EN_START===
---
title: "EN title (50-60 chars, no year)"
slug: "en-url-slug"
description: "Meta description (150-160 chars)"
date: "{today}"
category: "SEO or Digital Marketing or Social Media or UI/UX or Artificial Intelligence"
tags: ["tag1", "tag2", "tag3", "tag4"]
readTime: "X min"
featured: false
image_keyword: "seo or google or social or marketing or design or ai or content or analytics"
translationSlug: "{tr_slug}"
faq:
  - question: "Question 1?"
    answer: "Answer 1 (60-80 words)."
  - question: "Question 2?"
    answer: "Answer 2."
---

(EN markdown content — {en_word_target} words, AEO+GEO+EEAT, internal+external links, EEAT experience phrases, statistics{', TOOL PAGE STRUCTURE: Content-specific first H2 (numbered list) → Templates → Prompts → Comparison → Explanation → When Does It Fail → Decision Block → FAQ' if is_tool_page else ', content-specific first H2 (paragraph summary), decision architecture, end with ## Frequently Asked Questions'})

===EN_END==="""

    logger.info("EN yazı üretiliyor...")
    en_raw = _call_claude(en_prompt)
    logger.info(f"EN yanıt ({len(en_raw)} karakter): {en_raw[:300]}")
    en_file = _parse_block(en_raw, "===EN_START===", "===EN_END===", "EN")
    en_slug  = fm_field(en_file, "slug")
    en_title = fm_field(en_file, "title")

    # translationSlug alanlarını gerçek karşı slug ile zorla ayarla.
    # LLM bazen PLACEHOLDER_EN_SLUG'ı kendi tahminiyle dolduruyor; bu durumda
    # düz .replace() çalışmaz ve TR↔EN slug mismatch'i oluşur (dil switcher + /hero kırılır).
    tr_file = re.sub(r'^translationSlug:.*$', f'translationSlug: "{en_slug}"',
                     tr_file, count=1, flags=re.MULTILINE)
    en_file = re.sub(r'^translationSlug:.*$', f'translationSlug: "{tr_slug}"',
                     en_file, count=1, flags=re.MULTILINE)

    # Görsel seçimi: konuya uygun kategoriden, post sayısı ile offset
    # TR ve EN farklı index aldığından asla aynı görseli alamazlar
    post_index = len(gh_slugs("tr"))
    img = pick_image(topic, post_index)
    tr_file = re.sub(r'^image_keyword:.*$', f'image: "{img}"', tr_file, flags=re.MULTILINE)
    en_file = re.sub(r'^image_keyword:.*$', f'image: "{img}"', en_file, flags=re.MULTILINE)

    # Frontmatter güvenliği: LLM'in ürettiği YAML'i onar + doğrula.
    # Geçersizse fırlatır → bozuk yazı push edilmez, site deploy'u kilitlenmez.
    tr_file = _sanitize_frontmatter(tr_file)
    en_file = _sanitize_frontmatter(en_file)
    _validate_frontmatter(tr_file, "TR")
    _validate_frontmatter(en_file, "EN")

    return {
        "tr": {"slug": tr_slug, "title": tr_title,
               "file": f"content/blog/tr/{tr_slug}.md",
               "content": tr_file},
        "en": {"slug": en_slug, "title": en_title,
               "file": f"content/blog/en/{en_slug}.md",
               "content": en_file},
    }

# ── KONU SEÇİMİ ──────────────────────────────────────────────────────────────

TOPICS = [
    "Google Ads kampanya optimizasyonu",
    "Meta reklamlarında hedefleme stratejileri",
    "E-ticaret için yerel SEO rehberi",
    "Core Web Vitals ve SEO ilişkisi",
    "İçerik pazarlamasında başarı formülü",
    "LinkedIn B2B pazarlama stratejileri",
    "YouTube SEO ve video optimizasyonu",
    "E-posta pazarlamasında dönüşüm oranı artırma",
    "Yapay zeka ile içerik üretimi ve SEO",
    "Google Analytics 4 tam kullanım rehberi",
    "Sosyal medya algoritmaları nasıl çalışır",
    "Dijital pazarlamada A/B testi",
    "Remarketing ve retargeting stratejileri",
    "Teknik SEO denetimi nasıl yapılır",
    "Backlink kazanma stratejileri",
    "Conversion Rate Optimization rehberi",
    "Influencer marketing ROI ölçümü",
    "E-ticaret ürün sayfası SEO optimizasyonu",
    "Google Search Console kullanım rehberi",
    "Schema markup ile zengin sonuçlar",
    "GEO — Generative Engine Optimization nedir",
    "Rakip analizi için dijital araçlar",
    "Sosyal medya reklamlarında kreatif stratejiler",
    "SEO için iç linkleme stratejisi",
    "Mobil SEO optimizasyonu rehberi",
]

def pick_topic(used: list[str]) -> str:
    from difflib import SequenceMatcher
    for t in TOPICS:
        slug = t.lower().replace(" ", "-")
        if not any(SequenceMatcher(None, slug, u).ratio() > 0.5 for u in used):
            return t
    r = _claude_create(model="claude-sonnet-4-5", max_tokens=80,
        messages=[{"role":"user","content":"Dijital pazarlama ve SEO blogu için özgün bir yazı konusu öner. Sadece başlık."}])
    return r.content[0].text.strip()

# ── TELEGRAM ─────────────────────────────────────────────────────────────────

def auth(u): return not ALLOWED or u.effective_user.id in ALLOWED
async def deny(u): await u.message.reply_text("⛔ Yetkisiz.")

async def cmd_start(u, _):
    if not auth(u): return await deny(u)
    await u.message.reply_text(
        "👋 *tonguckaracay.com Growth Agent v2*\n\n"
        "📝 `/yazi [konu]` — SERP analizi yapıp yazı üret\n"
        "💡 `/fikir [konu]` — Trafik getirecek 7 konu önerisi\n"
        "🔢 `/fikirler` — Son fikir listesini tekrar göster (numara seç)\n"
        "🌐 `/site hero [talimat]` — Ana sayfa slider metnini güncelle\n"
        "✏️ `/revize [slug] [istek]` — Mevcut yazıyı düzenle\n"
        "🤖 `/gunluk` — Otomatik konu seç ve yaz\n"
        "📋 `/brief [konu]` — Sadece içerik brief göster\n"
        "📋 `/liste` — Blog yazılarını listele\n"
        "📊 `/durum` — Agent durumu\n",
        parse_mode="Markdown")

async def cmd_durum(u, _):
    if not auth(u): return await deny(u)
    tr = gh_slugs("tr"); en = gh_slugs("en")
    await u.message.reply_text(
        f"📊 *Agent Durumu*\n\n"
        f"🌐 `{GH_REPO}` → `{GH_BRANCH}`\n"
        f"🇹🇷 TR: `{len(tr)}` yazı\n"
        f"🇬🇧 EN: `{len(en)}` yazı\n"
        f"🔍 SerpAPI: `{'aktif' if SERP_KEY else 'pasif'}`\n"
        f"🕐 UTC: `{datetime.utcnow().strftime('%H:%M')}`\n",
        parse_mode="Markdown")

async def cmd_liste(u, ctx):
    if not auth(u): return await deny(u)
    tr_slugs = sorted(gh_slugs("tr"))
    en_slugs = gh_slugs("en")
    if not tr_slugs: return await u.message.reply_text("Yazı yok.")

    # Sayfa parametresi: /liste 2 → ikinci sayfa
    page = int(ctx.args[0]) if ctx.args and ctx.args[0].isdigit() else 1
    per_page = 20
    total = len(tr_slugs)
    pages = (total + per_page - 1) // per_page
    chunk = tr_slugs[(page-1)*per_page : page*per_page]

    lines = "\n".join(f"• `{s}`" for s in chunk)
    nav = f"Sayfa {page}/{pages} — " if pages > 1 else ""
    await u.message.reply_text(
        f"📋 *TR: {total} yazı | EN: {len(en_slugs)} yazı*\n"
        f"_{nav}/liste {page+1} ile devam_\n\n{lines}",
        parse_mode="Markdown")

async def cmd_brief(u, ctx):
    if not auth(u): return await deny(u)
    topic = " ".join(ctx.args).strip() if ctx.args else ""
    if not topic:
        return await u.message.reply_text("❌ Konu girin: `/brief Google Ads optimizasyonu`", parse_mode="Markdown")
    msg = await u.message.reply_text(f"🔍 *'{topic}'* için SERP analizi yapılıyor...", parse_mode="Markdown")
    loop = asyncio.get_event_loop()
    serp_ctx = await loop.run_in_executor(None, build_serp_context, topic)
    if not serp_ctx:
        return await msg.edit_text("❌ SerpAPI yanıt vermedi. SERPAPI_KEY'i kontrol et.")
    brief = serp_ctx[:3500]
    await msg.edit_text(f"📋 *Brief — {topic}*\n\n```\n{brief}\n```", parse_mode="Markdown")

async def cmd_revize(u, ctx):
    if not auth(u): return await deny(u)
    args = ctx.args if ctx.args else []
    if not args:
        return await u.message.reply_text(
            "❌ Kullanım: `/revize [slug] [istek]`\n"
            "Örnek: `/revize google-ads-kampanya-optimizasyonu yıl ifadelerini kaldır, daha pratik yap`",
            parse_mode="Markdown")

    slug = args[0]
    talimat = " ".join(args[1:]) if len(args) > 1 else "Genel kalite iyileştirmesi yap"

    msg = await u.message.reply_text(
        f"🔍 `{slug}` GitHub'dan okunuyor...", parse_mode="Markdown")

    loop = asyncio.get_event_loop()

    # TR ve EN dosyaları oku
    tr_content = await loop.run_in_executor(None, gh_read, f"content/blog/tr/{slug}.md")
    if not tr_content:
        return await msg.edit_text(f"❌ `content/blog/tr/{slug}.md` bulunamadı.", parse_mode="Markdown")

    # EN slug'ını frontmatter'dan bul
    en_slug_match = re.search(r'translationSlug:\s*"([^"]+)"', tr_content)
    en_slug = en_slug_match.group(1) if en_slug_match else slug
    en_content = await loop.run_in_executor(None, gh_read, f"content/blog/en/{en_slug}.md")

    await msg.edit_text(f"✍️ TR revize ediliyor: _{talimat}_", parse_mode="Markdown")

    kurallar = """KURALLAR:
- slug ve translationSlug alanlarını kesinlikle değiştirme.
- YIL KURALI: Başlık ve slug'da asla yıl rakamı kullanma.
- Eğer talimat "faq ekle" veya "faq güncelle" içeriyorsa, frontmatter'a faq alanı ekle/güncelle:
  faq:
    - question: "Soru?"
      answer: "Cevap (2-3 cümle)."
  En az 5, en fazla 8 soru-cevap. TR yazı için Türkçe, EN için İngilizce yaz.
- Diğer durumlarda frontmatter'ı olduğu gibi koru, sadece içeriği düzenle."""

    try:
        # ── 1. ÇAĞRI: TR revize ──────────────────────────────────────────────
        tr_prompt = f"""Şu Türkçe blog yazısını revize et.

TALİMAT: {talimat}

MEVCUT TR YAZI:
{tr_content}

{kurallar}

Tam olarak şu formatta döndür (başka hiçbir şey ekleme):
===TR_START===
(düzenlenmiş TR markdown, frontmatter dahil)
===TR_END==="""

        tr_raw = await loop.run_in_executor(None, lambda: _claude_create(
            model="claude-sonnet-4-5", max_tokens=8000,
            system=SYSTEM,
            messages=[{"role": "user", "content": tr_prompt}]
        ).content[0].text.strip())

        tr_match = re.search(r"===TR_START===\s*(.*?)\s*===TR_END===", tr_raw, re.DOTALL) or \
                   re.search(r"===TR_START===\s*(.*)", tr_raw, re.DOTALL)
        if not tr_match:
            return await msg.edit_text("❌ TR revize başarısız: Claude beklenen formatta yanıt vermedi.")
        new_tr = _sanitize_frontmatter(tr_match.group(1).strip())

        # ── 2. ÇAĞRI: EN revize (EN içerik varsa) ───────────────────────────
        new_en = None
        if en_content:
            await msg.edit_text(f"✍️ EN revize ediliyor: _{talimat}_", parse_mode="Markdown")
            en_prompt = f"""Revise this English blog post.

INSTRUCTION: {talimat}

CURRENT EN POST:
{en_content}

{kurallar}

Respond in exactly this format (nothing else):
===EN_START===
(revised EN markdown, including frontmatter)
===EN_END==="""

            en_raw = await loop.run_in_executor(None, lambda: _claude_create(
                model="claude-sonnet-4-5", max_tokens=8000,
                system=SYSTEM,
                messages=[{"role": "user", "content": en_prompt}]
            ).content[0].text.strip())

            en_match = re.search(r"===EN_START===\s*(.*?)\s*===EN_END===", en_raw, re.DOTALL) or \
                       re.search(r"===EN_START===\s*(.*)", en_raw, re.DOTALL)
            if en_match:
                new_en = _sanitize_frontmatter(en_match.group(1).strip())

        await msg.edit_text("📦 Revize edilmiş yazı GitHub'a yükleniyor...", parse_mode="Markdown")

        ok_tr = await loop.run_in_executor(None, gh_push,
            f"content/blog/tr/{slug}.md", new_tr, f"revize: {slug}")

        ok_en = False
        if new_en:
            ok_en = await loop.run_in_executor(None, gh_push,
                f"content/blog/en/{en_slug}.md", new_en, f"revize: {en_slug}")

        status = "✅ TR + EN" if (ok_tr and ok_en) else "✅ TR" if ok_tr else "⚠️ Başarısız"
        await msg.edit_text(
            f"{status} revize tamamlandı!\n\n"
            f"🇹🇷 `{slug}`\n"
            f"_Vercel deploy ~1-2 dk içinde._",
            parse_mode="Markdown")

    except Exception as e:
        logger.exception("Revize hatası")
        await msg.edit_text(f"❌ Hata:\n```\n{str(e)[:400]}\n```", parse_mode="Markdown")

async def cmd_optimize(u, ctx):
    """SEO otomatik optimizasyonu: /optimize <tr-slug>
    Sabit checklist uygular: ilk H2 başlık kontrolü, tablo, senaryo, EEAT, iç link düzeltmesi.
    """
    if not auth(u): return await deny(u)
    if not ctx.args:
        return await u.message.reply_text(
            "❌ Kullanım: `/optimize [slug]`\n"
            "Örnek: `/optimize ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir`",
            parse_mode="Markdown")

    slug = ctx.args[0].strip()
    msg = await u.message.reply_text(f"🔍 `{slug}` okunuyor...", parse_mode="Markdown")
    loop = asyncio.get_event_loop()

    tr_content = await loop.run_in_executor(None, gh_read, f"content/blog/tr/{slug}.md")
    if not tr_content:
        return await msg.edit_text(f"❌ `content/blog/tr/{slug}.md` bulunamadı.")

    en_slug_match = re.search(r'translationSlug:\s*"([^"]+)"', tr_content)
    en_slug = en_slug_match.group(1) if en_slug_match else slug
    en_content = await loop.run_in_executor(None, gh_read, f"content/blog/en/{en_slug}.md")

    await msg.edit_text("⚙️ SEO optimizasyonu uygulanıyor...", parse_mode="Markdown")

    OPTIMIZE_CHECKLIST_TR = """SEO OPTİMİZASYON CHECKLİST — tüm maddeleri uygula:

1. İLK H2 BAŞLIĞI: İçeriğin ilk H2 başlığının konuya özgün ve fayda ifaden olduğunu kontrol et. "Kısa Cevap" veya "Quick Answer" yazıyorsa içeriğe uygun bir başlıkla değiştir (örn: "[Konu]: X Adımda Nasıl Yapılır?", "[Konu] İçin X Kritik Adım"). Başlığın ardındaki içerik 40-60 kelime, direkt cevap, featured snippet için optimize olmalı.

2. KARAR MİMARİSİ: Her H2 bir soruyu cevaplar şekilde düzenle. Yazı sonunda okuyucu ne yapacağını net bilmeli.

3. KARŞILAŞTIRMA TABLOSU: Eğer içerik commercial/karşılaştırma türündeyse en az 6 satırlı markdown tablo ekle/güncelle. Yoksa atlayabilirsin.

4. SENARYO REHBERİ: "Hangi Durumda Hangisi?" veya benzer bir bölüm yoksa ekle — en az 3 kullanıcı profili (başlangıç/freelancer, büyüyen işletme, kurumsal).

5. EEAT SİNYALLERİ: En az 2 yerde "Uygulamada gördüğümüz...", "Müşterilerimizde test ettiğimizde...", "Deneyimlerimize göre..." gibi ifadeler ekle.

6. GERÇEK VERİ: En az 3 cümlede somut sayı, istatistik veya maliyet bilgisi olsun.

7. GEO ALINTILANABİLİR CÜMLELER: Her H2 bölümünde en az 1 bağımsız, alıntılanabilir cümle ekle. Format örnekleri:
   - "[Araç/Yöntem], [somut sonuç]'u [şartla] sağlar."
   - "[Kategori]'nin en etkili yaklaşımı [yöntem]'dir, çünkü [neden]."
   ChatGPT veya Perplexity bu cümleleri direkt yanıt olarak kullanabilmeli.

8. İÇ LİNK DÜZELTMESİ: Tüm "/blog/slug" formatındaki linkleri "/slug" formatına çevir.

9. KELIME SAYISI: Commercial intent ise 2000+ kelime hedefle. Informational ise 1500+ yeterli.

10. ARAÇ İÇERİĞİ KONTROLÜ: Eğer konu bir araç/platform/AI kullanımıyla ilgiliyse (ChatGPT, GA4, Google Ads, Canva vb.):
    a) En az 2 adet copy-paste prompt veya komut ekle (``` kod bloğu içinde)
    b) Before/After tablosu ekle (kötü örnek → iyi örnek, en az 2 satır)
    c) Doldurulabilir şablon ekle (Ürün adı: [...], Hedef kitle: [...] formatında)
    → Bu bloklar yoksa içerik "anlatıyor ama kullandırmıyor" — eklenmesi ZORUNLU

11. FAQ: 6-8 soru-cevap yoksa ekle veya güncelle (frontmatter faq alanına).

KURALLAR:
- slug, translationSlug, date, image, category, tags değiştirme
- Başlık ve slug'da yıl rakamı kullanma
- TR yazı için Türkçe yaz"""

    OPTIMIZE_CHECKLIST_EN = """SEO OPTIMIZATION CHECKLIST — apply all items:

1. FIRST H2 HEADING: Check that the first H2 is content-specific and benefit-driven. If it says "Quick Answer" or "Kısa Cevap", replace it with a topic-specific heading (e.g., "[Topic]: How to Do It in X Steps", "X Critical Steps for [Topic]"). The content under that heading should be 40-60 words, a direct answer, optimized for featured snippets.

2. DECISION ARCHITECTURE: Each H2 should answer a reader question. Reader should know what to do at the end.

3. COMPARISON TABLE: If content is commercial/comparison type, add/update a markdown table with at least 6 rows. Skip if not applicable.

4. SCENARIO GUIDE: Add "Which Option for Which Use Case?" section if missing — at least 3 profiles (starter/freelancer, growing business, enterprise).

5. EEAT SIGNALS: Add at least 2 experience phrases: "In our experience...", "When we tested this with clients...", "We've observed..."

6. REAL DATA: At least 3 sentences with concrete numbers, statistics or cost figures.

7. GEO QUOTABLE SENTENCES: Add at least 1 independently extractable sentence per H2 section. Format examples:
   - "[Tool/Method] delivers [concrete result] when [condition]."
   - "The most effective approach to [category] is [method], because [reason]."
   ChatGPT or Perplexity must be able to use these sentences as direct answers.

8. INTERNAL LINK FIX: Convert all "/en/blog/slug" links to "/en/slug" format.

9. WORD COUNT: 2000+ words for commercial intent. 1500+ for informational.

10. TOOL PAGE CHECK: If the topic involves using a tool/platform/AI (ChatGPT, GA4, Google Ads, Canva etc.):
    a) Add at least 2 copy-paste prompts or commands (inside ``` code blocks)
    b) Add a Before/After table (bad example → good example, at least 2 rows)
    c) Add a fill-in-the-blank template (Product name: [...], Target audience: [...] format)
    → Without these blocks, content "explains but doesn't enable" — MANDATORY to add

11. FAQ: Add or update 6-8 Q&A pairs in frontmatter faq field if missing.

RULES:
- Do not change slug, translationSlug, date, image, category, tags
- No year numbers in title or slug"""

    try:
        tr_prompt = f"""Şu Türkçe blog yazısını SEO açısından optimize et.

{OPTIMIZE_CHECKLIST_TR}

MEVCUT TR YAZI:
{tr_content}

Tam olarak şu formatta döndür (başka hiçbir şey ekleme):
===TR_START===
(optimize edilmiş TR markdown, frontmatter dahil)
===TR_END==="""

        await msg.edit_text("✍️ TR optimize ediliyor...", parse_mode="Markdown")
        tr_raw = await loop.run_in_executor(None, lambda: _claude_create(
            model="claude-sonnet-4-5", max_tokens=16000,
            system=SYSTEM,
            messages=[{"role": "user", "content": tr_prompt}]
        ).content[0].text.strip())

        tr_match = re.search(r"===TR_START===\s*(.*?)\s*===TR_END===", tr_raw, re.DOTALL) or \
                   re.search(r"===TR_START===\s*(.*)", tr_raw, re.DOTALL)
        if not tr_match:
            return await msg.edit_text("❌ TR optimize başarısız: Claude beklenen formatta yanıt vermedi.")
        new_tr = _sanitize_frontmatter(tr_match.group(1).strip())

        new_en = None
        if en_content:
            en_prompt = f"""Optimize this English blog post for SEO.

{OPTIMIZE_CHECKLIST_EN}

CURRENT EN POST:
{en_content}

Respond in exactly this format (nothing else):
===EN_START===
(optimized EN markdown, including frontmatter)
===EN_END==="""

            await msg.edit_text("✍️ EN optimize ediliyor...", parse_mode="Markdown")
            en_raw = await loop.run_in_executor(None, lambda: _claude_create(
                model="claude-sonnet-4-5", max_tokens=16000,
                system=SYSTEM,
                messages=[{"role": "user", "content": en_prompt}]
            ).content[0].text.strip())

            en_match = re.search(r"===EN_START===\s*(.*?)\s*===EN_END===", en_raw, re.DOTALL) or \
                       re.search(r"===EN_START===\s*(.*)", en_raw, re.DOTALL)
            if en_match:
                new_en = _sanitize_frontmatter(en_match.group(1).strip())

        await msg.edit_text("📦 GitHub'a yükleniyor...", parse_mode="Markdown")
        ok_tr = await loop.run_in_executor(None, gh_push,
            f"content/blog/tr/{slug}.md", new_tr, f"optimize: {slug}")
        ok_en = False
        if new_en:
            ok_en = await loop.run_in_executor(None, gh_push,
                f"content/blog/en/{en_slug}.md", new_en, f"optimize: {en_slug}")

        status = "✅ TR + EN" if (ok_tr and ok_en) else "✅ TR" if ok_tr else "⚠️ Başarısız"
        await msg.edit_text(
            f"{status} *optimize tamamlandı!*\n\n"
            f"🇹🇷 `{slug}`\n"
            f"🇬🇧 `{en_slug}`\n\n"
            f"_Vercel deploy ~1-2 dk içinde._",
            parse_mode="Markdown")

    except Exception as e:
        logger.exception("Optimize hatası")
        await msg.edit_text(f"❌ Hata:\n```\n{str(e)[:400]}\n```", parse_mode="Markdown")


async def cmd_site(u, ctx):
    """Site içerik alanlarını Telegram'dan günceller.
    Kullanım: /site hero [talimat]
    """
    if not auth(u): return await deny(u)
    args = ctx.args if ctx.args else []

    AREAS = {
        "hero": {
            "tr": "messages/tr.json",
            "en": "messages/en.json",
            "key": "hero",
            "label": "Ana Sayfa Hero / Slider",
        }
    }

    if not args or args[0] not in AREAS:
        bolumler = "\n".join(f"• `{k}` — {v['label']}" for k, v in AREAS.items())
        return await u.message.reply_text(
            f"🌐 *Site İçerik Editörü*\n\n"
            f"Kullanım: `/site [bölüm] [talimat]`\n\n"
            f"Mevcut bölümler:\n{bolumler}\n\n"
            f"Örnek: `/site hero Başlığı daha güçlü yap, dönüşüme odaklan`",
            parse_mode="Markdown")

    alan = AREAS[args[0]]
    talimat = " ".join(args[1:]).strip() if len(args) > 1 else ""

    if not talimat:
        # Mevcut içeriği göster
        loop = asyncio.get_event_loop()
        tr_raw = await loop.run_in_executor(None, gh_read, alan["tr"])
        if not tr_raw:
            return await u.message.reply_text("❌ Dosya okunamadı.")
        import json as _json
        tr_data = _json.loads(tr_raw)
        current = _json.dumps(tr_data.get(alan["key"], {}), ensure_ascii=False, indent=2)
        return await u.message.reply_text(
            f"📄 *{alan['label']} — Mevcut İçerik*\n\n```json\n{current[:2000]}\n```\n\n"
            f"Düzenlemek için: `/site {args[0]} [talimat]`",
            parse_mode="Markdown")

    msg = await u.message.reply_text(
        f"✍️ *{alan['label']}* revize ediliyor...", parse_mode="Markdown")

    loop = asyncio.get_event_loop()
    import json as _json

    tr_raw = await loop.run_in_executor(None, gh_read, alan["tr"])
    en_raw = await loop.run_in_executor(None, gh_read, alan["en"])
    if not tr_raw or not en_raw:
        return await msg.edit_text("❌ Dosyalar okunamadı.")

    tr_data = _json.loads(tr_raw)
    en_data = _json.loads(en_raw)
    tr_section = _json.dumps(tr_data.get(alan["key"], {}), ensure_ascii=False, indent=2)
    en_section = _json.dumps(en_data.get(alan["key"], {}), ensure_ascii=False, indent=2)

    prompt = f"""Bir web sitesinin "{alan['label']}" bölümünü revize et.

TALİMAT: {talimat}

MEVCUT TR İÇERİK (JSON):
{tr_section}

MEVCUT EN İÇERİK (JSON):
{en_section}

KURALLAR:
- JSON key'lerini değiştirme, sadece value'ları güncelle
- TR için Türkçe, EN için İngilizce yaz
- Kısa, güçlü, dönüşüm odaklı metinler

TAM OLARAK ŞU FORMATTA DÖN:
===TR_JSON===
{{düzenlenmiş TR JSON objesi}}
===TR_JSON_END===
===EN_JSON===
{{düzenlenmiş EN JSON objesi}}
===EN_JSON_END==="""

    try:
        resp = await loop.run_in_executor(None, lambda: _claude_create(
            model="claude-sonnet-4-5", max_tokens=2000,
            messages=[{"role": "user", "content": prompt}]
        ).content[0].text.strip())

        tr_m = re.search(r"===TR_JSON===\s*(.*?)\s*===TR_JSON_END===", resp, re.DOTALL)
        en_m = re.search(r"===EN_JSON===\s*(.*?)\s*===EN_JSON_END===", resp, re.DOTALL)

        if not tr_m or not en_m:
            return await msg.edit_text("❌ Claude beklenen formatta yanıt vermedi.")

        new_tr_section = _json.loads(tr_m.group(1).strip())
        new_en_section = _json.loads(en_m.group(1).strip())

        tr_data[alan["key"]] = new_tr_section
        en_data[alan["key"]] = new_en_section

        new_tr_raw = _json.dumps(tr_data, ensure_ascii=False, indent=2)
        new_en_raw = _json.dumps(en_data, ensure_ascii=False, indent=2)

        await msg.edit_text("📦 GitHub'a yükleniyor...", parse_mode="Markdown")
        ok_tr = await loop.run_in_executor(None, gh_push, alan["tr"], new_tr_raw, f"site: {alan['key']} TR güncellendi")
        ok_en = await loop.run_in_executor(None, gh_push, alan["en"], new_en_raw, f"site: {alan['key']} EN güncellendi")

        if ok_tr and ok_en:
            preview = _json.dumps(new_tr_section, ensure_ascii=False, indent=2)
            await msg.edit_text(
                f"✅ *{alan['label']}* güncellendi!\n\n"
                f"```json\n{preview[:800]}\n```\n\n"
                f"_Vercel deploy ~1-2 dk içinde._",
                parse_mode="Markdown")
        else:
            await msg.edit_text("⚠️ Push başarısız. `agent.log` kontrol et.")

    except _json.JSONDecodeError as e:
        await msg.edit_text(f"❌ JSON parse hatası: `{str(e)[:200]}`", parse_mode="Markdown")
    except Exception as e:
        logger.exception("Site komutu hatası")
        await msg.edit_text(f"❌ Hata:\n```\n{str(e)[:400]}\n```", parse_mode="Markdown")


# Kullanıcı başına son /fikir sonuçlarını saklar: {user_id: [başlık1, başlık2, ...]}
# Diske yazılır → bot restart olsa bile fikirler kaybolmaz, eski listeden numara seçilebilir.
_IDEAS_FILE = "pending_ideas.json"

def _load_ideas() -> dict:
    try:
        with open(_IDEAS_FILE, encoding="utf-8") as f:
            return {int(k): v for k, v in json.load(f).items()}
    except (FileNotFoundError, ValueError, OSError):
        return {}

def _save_ideas(data: dict) -> None:
    try:
        with open(_IDEAS_FILE, "w", encoding="utf-8") as f:
            json.dump({str(k): v for k, v in data.items()}, f, ensure_ascii=False)
    except OSError:
        logger.warning("pending_ideas.json yazılamadı")

_pending_ideas: dict[int, list[str]] = _load_ideas()

async def cmd_hero(u, ctx):
    """Blog yazısını hero'ya öne çıkar: /hero <tr-slug>"""
    if not auth(u): return await deny(u)
    if not ctx.args:
        return await u.message.reply_text(
            "❌ Slug girin: `/hero ai-agent-musteri-hizmetleri-otomasyonu`", parse_mode="Markdown")
    tr_slug = ctx.args[0].strip()

    msg = await u.message.reply_text(f"📖 `{tr_slug}` okunuyor...", parse_mode="Markdown")
    import json as _json

    # TR blog dosyasını oku
    tr_raw_md = gh_read(f"content/blog/tr/{tr_slug}.md")
    if not tr_raw_md:
        return await msg.edit_text(f"❌ `{tr_slug}.md` bulunamadı. Slug'ı kontrol et.")

    # Frontmatter parse
    fm_match = re.match(r'^---\s*\n(.*?)\n---', tr_raw_md, re.DOTALL)
    if not fm_match:
        return await msg.edit_text("❌ Frontmatter okunamadı.")
    fm = fm_match.group(1)

    def fm_val(key):
        m = re.search(rf'^{key}:\s*"?(.+?)"?\s*$', fm, re.MULTILINE)
        return m.group(1).strip('"').strip() if m else ""

    tr_title = fm_val("title")
    tr_desc = fm_val("description")
    en_slug = fm_val("translationSlug")

    if not en_slug:
        return await msg.edit_text("❌ `translationSlug` frontmatter'da bulunamadı.")

    # EN blog dosyasını oku
    en_raw_md = gh_read(f"content/blog/en/{en_slug}.md")
    if not en_raw_md:
        return await msg.edit_text(f"❌ EN dosyası `{en_slug}.md` bulunamadı.")

    fm_en_match = re.match(r'^---\s*\n(.*?)\n---', en_raw_md, re.DOTALL)
    fm_en = fm_en_match.group(1) if fm_en_match else ""

    def fm_en_val(key):
        m = re.search(rf'^{key}:\s*"?(.+?)"?\s*$', fm_en, re.MULTILINE)
        return m.group(1).strip('"').strip() if m else ""

    en_title = fm_en_val("title")
    en_desc = fm_en_val("description")
    en_slug_clean = fm_en_val("slug") or en_slug

    await msg.edit_text("📦 JSON dosyaları güncelleniyor...")

    # tr.json güncelle
    tr_json_raw = gh_read("messages/tr.json")
    en_json_raw = gh_read("messages/en.json")
    if not tr_json_raw or not en_json_raw:
        return await msg.edit_text("❌ messages/tr.json veya en.json okunamadı.")

    tr_data = _json.loads(tr_json_raw)
    en_data = _json.loads(en_json_raw)

    tr_data["hero"]["featuredPost"] = {"title": tr_title, "description": tr_desc, "slug": tr_slug}
    en_data["hero"]["featuredPost"] = {"title": en_title, "description": en_desc, "slug": en_slug_clean}

    ok_tr = gh_push("messages/tr.json", _json.dumps(tr_data, ensure_ascii=False, indent=2), f"hero: featured post → {tr_slug}")
    ok_en = gh_push("messages/en.json", _json.dumps(en_data, ensure_ascii=False, indent=2), f"hero: featured post → {en_slug_clean}")

    if ok_tr and ok_en:
        await msg.edit_text(
            f"✅ *Hero güncellendi!*\n\n"
            f"🇹🇷 _{tr_title}_\n"
            f"🇬🇧 _{en_title}_\n\n"
            f"_Vercel deploy ~1-2 dk içinde._",
            parse_mode="Markdown")
    else:
        await msg.edit_text("⚠️ Push başarısız. `agent.log` kontrol et.")


async def cmd_fikir(u, ctx):
    if not auth(u): return await deny(u)
    konu = " ".join(ctx.args).strip() if ctx.args else ""

    konu_label = f"*'{konu}'* için" if konu else "Genel niş için"
    msg = await u.message.reply_text(
        f"🔍 {konu_label} trafik fırsatları analiz ediliyor...", parse_mode="Markdown")

    loop = asyncio.get_event_loop()

    # SERP verisi — konu varsa ona göre, yoksa genel nişe göre
    arama = konu if konu else "dijital pazarlama SEO stratejisi"
    serp = await loop.run_in_executor(None, build_serp_context, arama, "tr")
    serp_block = f"\nSERP VERİSİ:\n{serp['context'][:2000]}" if serp.get("context") else ""

    # Zaten yazılmış sluglar — tekrar önermemek için
    used_slugs = gh_slugs("tr")
    used_block = ("\nZATEN YAZILMIŞ KONULAR (bunları ve benzerlerini önerme):\n"
                  + "\n".join(f"- {s}" for s in used_slugs[:40])) if used_slugs else ""

    konu_block = f'"{konu}" konusuna odaklanarak' if konu else \
        "dijital pazarlama, SEO, UI/UX, yapay zeka, Google Ads, içerik pazarlaması konularında"

    prompt = f"""tonguckaracay.com için {konu_block} trafik getirecek 7 blog yazısı öner.

Site: Tonguç Karaçay — dijital pazarlama ve SEO danışmanlığı (tonguckaracay.com)
Hedef kitle: Türk dijital pazarlamacılar, KOBİ sahipleri, girişimciler
{serp_block}
{used_block}

KRİTİK KURAL — ÖNCELIK SIRASI:
1. UZUN KUYRUK keyword seç: 4+ kelimeli, çok spesifik sorgular ("Google Ads için hedefleme nasıl yapılır" değil "Shopify mağazası için Google Ads hedefleme stratejileri")
2. DÜŞÜK REKABETLİ konular tercih et: büyük markalar ve medya sitelerinin yazmadığı nişler
3. Arama hacmi düşük ama dönüşümü yüksek olsun: arayanın satın alma / danışmanlık alma niyeti yüksek

Her öneri için TAM OLARAK şu formatı kullan:

**1. Başlık buraya (uzun kuyruk, spesifik, yıl yok)**
📌 Format: how-to / listicle / comparison / what-is / case-study
🎯 Intent: informational / commercial / transactional
🔑 Hedef keyword: (tam olarak bu kelime öbeğini hedefle)
📊 Rekabet: düşük / orta / yüksek
💡 Neden kazanılabilir: (tek cümle — rakip eksikliği veya niş)

Sadece 7 öneriyi listele, başka açıklama ekleme."""

    try:
        resp = await loop.run_in_executor(None, lambda: _claude_create(
            model="claude-sonnet-4-5", max_tokens=1500,
            messages=[{"role": "user", "content": prompt}]
        ))
        ideas = resp.content[0].text.strip()

        # Başlıkları parse et ve hafızaya kaydet (sayı ile seçim için)
        titles = re.findall(r'\*\*\d+\.\s+(.+?)\*\*', ideas)
        if titles:
            _pending_ideas[u.effective_user.id] = titles
            _save_ideas(_pending_ideas)

        baslik = f"💡 *{konu_label} İçerik Fikirleri*\n\n"
        footer = "\n\n_Yazmak için sadece numara gönder: `1`, `2` ... `7`_" if titles else ""
        # Telegram 4096 karakter limiti
        text = baslik + ideas + footer
        if len(text) > 4000:
            text = text[:4000] + "\n..."
        await msg.edit_text(text, parse_mode="Markdown")
    except Exception as e:
        logger.exception("Fikir hatası")
        await msg.edit_text(f"❌ Hata:\n```\n{str(e)[:300]}\n```", parse_mode="Markdown")


async def cmd_fikirler(u, ctx):
    """Son /fikir listesini numaralarıyla tekrar gösterir (restart sonrası da çalışır)."""
    if not auth(u): return await deny(u)
    titles = _pending_ideas.get(u.effective_user.id, [])
    if not titles:
        return await u.message.reply_text(
            "❌ Kayıtlı fikir yok. Önce `/fikir [konu]` ile liste al.", parse_mode="Markdown")
    lines = "\n".join(f"*{i}.* {t}" for i, t in enumerate(titles, 1))
    await u.message.reply_text(
        f"💡 *Son İçerik Fikirleri*\n\n{lines}\n\n"
        f"_Yazmak için numara gönder: `1` … `{len(titles)}`_",
        parse_mode="Markdown")


async def handle_idea_selection(u, ctx):
    """Kullanıcı /fikir sonrası numara gönderirse o başlıkla yazı üretir.
    Liste diske kayıtlı olduğu için aynı listeden birden çok numara seçilebilir;
    bot restart olsa bile eski liste korunur."""
    if not auth(u): return
    text = (u.message.text or "").strip()
    m = re.match(r'^([1-7])', text)
    if not m: return
    idx = int(m.group(1)) - 1
    titles = _pending_ideas.get(u.effective_user.id, [])
    if not titles:
        return await u.message.reply_text("❌ Önce `/fikir` komutuyla öneri listesi al.", parse_mode="Markdown")
    if idx >= len(titles):
        return await u.message.reply_text(f"❌ Geçersiz numara. 1-{len(titles)} arası gir.")
    topic = titles[idx]
    await u.message.reply_text(f"✍️ *{idx+1}. öneri* seçildi:\n_{topic}_", parse_mode="Markdown")
    await _run(u, topic)

async def cmd_yazi(u, ctx):
    if not auth(u): return await deny(u)
    topic = " ".join(ctx.args).strip() if ctx.args else ""
    if not topic:
        return await u.message.reply_text("❌ Konu girin: `/yazi Google Ads optimizasyonu`", parse_mode="Markdown")
    await _run(u, topic)

async def cmd_gunluk(u, _):
    if not auth(u): return await deny(u)
    used = gh_slugs("tr")
    topic = pick_topic(used)
    await _run(u, topic)

async def cmd_stop(u, _):
    global _cancel
    if not auth(u): return await deny(u)
    _cancel = True
    await u.message.reply_text("🛑 İptal sinyali gönderildi. Mevcut aşama bitince durur.")

async def _run(u, topic):
    global _cancel
    _cancel = False
    msg = await u.message.reply_text(
        f"🔍 *'{topic}'* — SERP analizi yapılıyor...", parse_mode="Markdown")
    loop = asyncio.get_event_loop()

    serp = await loop.run_in_executor(None, build_dual_serp_context, topic)
    tr_links = await loop.run_in_executor(None, get_internal_links, "tr")
    en_links = await loop.run_in_executor(None, get_internal_links, "en")

    if _cancel:
        await msg.edit_text("🛑 İptal edildi (SERP sonrası).")
        return

    tr_ctx, en_ctx = serp["tr_ctx"], serp["en_ctx"]
    topic_en = serp.get("topic_en", "")
    en_kw_line = f"\n🔑 EN native keyword: `{topic_en}`" if topic_en else ""
    serp_info = (f"✅ TR + EN SERP | Intent: TR={serp['tr_intent']} EN={serp['en_intent']} | Hedef: ~{serp['target_words']} kelime{en_kw_line}"
                 if (tr_ctx or en_ctx) else "⚠️ SerpAPI yok, genel yazı üretilecek")
    await msg.edit_text(
        f"{serp_info}\n✍️ Yazı üretiliyor _(1-2 dk)_...", parse_mode="Markdown")

    try:
        post = await loop.run_in_executor(None, generate_post, topic, tr_ctx, en_ctx,
                                          serp["tr_intent"], serp["en_intent"],
                                          serp["target_words"], tr_links, en_links,
                                          serp.get("topic_en", ""))

        if _cancel:
            await msg.edit_text("🛑 İptal edildi (yazı üretildi ama GitHub'a yüklenmedi).")
            return

        await msg.edit_text(
            f"📦 GitHub'a yükleniyor...\n"
            f"🇹🇷 `{post['tr']['slug']}`\n🇬🇧 `{post['en']['slug']}`",
            parse_mode="Markdown")

        ok_tr = await loop.run_in_executor(None, gh_push,
            post["tr"]["file"], post["tr"]["content"], f"blog: {post['tr']['slug']}")
        ok_en = await loop.run_in_executor(None, gh_push,
            post["en"]["file"], post["en"]["content"], f"blog: {post['en']['slug']}")

        if ok_tr and ok_en:
            # Slug mapping dosyasını güncelle
            await loop.run_in_executor(None, gh_update_slug_mappings,
                post["tr"]["slug"], post["en"]["slug"])
            await msg.edit_text(
                f"✅ *Yayınlandı!*\n\n"
                f"🇹🇷 [{post['tr']['title']}](https://tonguckaracay.com/{post['tr']['slug']})\n"
                f"🇬🇧 [{post['en']['title']}](https://tonguckaracay.com/en/{post['en']['slug']})\n\n"
                f"_Vercel deploy ~1-2 dk içinde tamamlanır._",
                parse_mode="Markdown")
        else:
            await msg.edit_text("⚠️ Push kısmen başarısız. `agent.log` kontrol et.")
    except Exception as e:
        logger.exception("Post hatası")
        await msg.edit_text(f"❌ Hata:\n```\n{str(e)[:400]}\n```", parse_mode="Markdown")

# ── ZAMANLAYICI ───────────────────────────────────────────────────────────────

async def scheduler(app):
    while True:
        now = datetime.utcnow()
        target = now.replace(hour=DAILY_H, minute=DAILY_M, second=0, microsecond=0)
        if now >= target:
            target += timedelta(days=1)
        await asyncio.sleep((target - now).total_seconds())
        try:
            used = gh_slugs("tr")
            topic = pick_topic(used)
            for uid in ALLOWED:
                try: await app.bot.send_message(uid, f"🕐 *Günlük yazı:* _{topic}_", parse_mode="Markdown")
                except: pass
            loop = asyncio.get_event_loop()
            serp = await loop.run_in_executor(None, build_dual_serp_context, topic)
            tr_links = await loop.run_in_executor(None, get_internal_links, "tr")
            en_links = await loop.run_in_executor(None, get_internal_links, "en")
            post = await loop.run_in_executor(None, generate_post, topic,
                serp["tr_ctx"], serp["en_ctx"], serp["tr_intent"], serp["en_intent"],
                serp["target_words"], tr_links, en_links,
                serp.get("topic_en", ""))
            ok_tr = await loop.run_in_executor(None, gh_push, post["tr"]["file"], post["tr"]["content"], f"blog: {post['tr']['slug']}")
            ok_en = await loop.run_in_executor(None, gh_push, post["en"]["file"], post["en"]["content"], f"blog: {post['en']['slug']}")
            result = (f"✅ *Günlük yazı yayınlandı!*\n🇹🇷 `{post['tr']['slug']}`\n🇬🇧 `{post['en']['slug']}`"
                      if ok_tr and ok_en else "⚠️ Günlük yazı başarısız.")
            for uid in ALLOWED:
                try: await app.bot.send_message(uid, result, parse_mode="Markdown")
                except: pass
        except Exception as e:
            logger.exception("Zamanlayıcı hatası")

async def post_init(app):
    pass  # Otomatik günlük yazı devre dışı

def main():
    token = config.get("TELEGRAM_BOT_TOKEN","")
    if not token: raise ValueError("TELEGRAM_BOT_TOKEN eksik")
    app = Application.builder().token(token).post_init(post_init).build()
    for cmd, fn in [("start",cmd_start),("yardim",cmd_start),("durum",cmd_durum),
                    ("liste",cmd_liste),("brief",cmd_brief),("revize",cmd_revize),
                    ("optimize",cmd_optimize),("yazi",cmd_yazi),("fikir",cmd_fikir),
                    ("fikirler",cmd_fikirler),
                    ("site",cmd_site),("hero",cmd_hero),("gunluk",cmd_gunluk),("stop",cmd_stop)]:
        app.add_handler(CommandHandler(cmd, fn))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_idea_selection))
    logger.info(f"Agent v2 başlatılıyor → {GH_REPO}:{GH_BRANCH}")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()
