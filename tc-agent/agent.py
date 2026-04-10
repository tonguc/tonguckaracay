#!/usr/bin/env python3
"""
Growth Agent v2.0 - tonguckaracay.com
SERP Analizi + Rakip İçerik + GEO/AEO/E-E-A-T
"""

import os, json, asyncio, logging, re, base64, time
from datetime import datetime, timedelta
from bs4 import BeautifulSoup

from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
import anthropic, requests

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
claude     = anthropic.Anthropic(api_key=config.get("ANTHROPIC_API_KEY",""))
ALLOWED    = set(int(x) for x in config.get("TELEGRAM_ALLOWED_IDS","").split(",") if x.strip().isdigit())
GH_REPO    = config.get("GITHUB_REPO","tonguc/tonguckaracay")
GH_BRANCH  = config.get("GITHUB_BRANCH","main")
GH_TOKEN   = config.get("GITHUB_TOKEN","")
SERP_KEY   = config.get("SERPAPI_KEY","")
DAILY_H    = int(config.get("DAILY_POST_HOUR","7"))
DAILY_M    = int(config.get("DAILY_POST_MINUTE","0"))

_cancel = False   # /stop komutu bunu True yapar

# ── SYSTEM PROMPT ────────────────────────────────────────────────────────────

SYSTEM = f"""Sen Tonguç Karaçay'ın dijital pazarlama ve SEO danışmanlığı blogu için içerik üreten kıdemli bir SEO stratejisti ve içerik uzmanısın.

BUGÜNÜN TARİHİ: {datetime.now().strftime('%d %B %Y')}

YIL KURALI — KESİNLİKLE UYULMASI ZORUNLU:
- Başlık, slug, açıklama ve içerikte asla "2024", "2025", "2026" veya herhangi bir yıl rakamı kullanma
- "2024 Rehberi", "2025 İpuçları" gibi ifadeler yasak
- Bunların yerine: "Kapsamlı Rehber", "Pratik İpuçları", "Adım Adım" gibi evergreen ifadeler kullan
- Gerçek istatistiklerde yıl zorunluysa sadece içerik metninde kullanabilirsin, başlıkta asla

TONGUÇ KARAÇAY KİMDİR:
- Türkiye merkezli kıdemli dijital pazarlama ve SEO danışmanı
- Google Ads, Meta Ads, sosyal medya, UI/UX ve yapay zeka araçlarında uzman
- Türkiye'deki KOBİ ve e-ticaret işletmelerine danışmanlık yapıyor
- Hedef kitlesi: pazarlama müdürleri, girişimciler, e-ticaret sahipleri

SES TONU:
- Uzman ama anlaşılır — jargonu açıkla
- Veri odaklı — gerçek rakamlar kullan
- Pratik — her bölümde uygulanabilir adım ver
- Türkiye piyasasına özel örnekler

AEO (Answer Engine Optimization) KRİTERLERİ:
- İlk paragrafta direkt cevap ver (40-60 kelime, featured snippet hedefi)
- H2 başlıkları soru formatında yaz: "Nasıl?", "Nedir?", "Neden?"
- Her soru için: önce direkt cevap, sonra 2-3 cümle bağlam
- "People Also Ask" sorularını içeriğe entegre et

GEO (Generative Engine Optimization) KRİTERLERİ:
- Entity-first yazım: tam isimler kullan (Google Ads değil "Google Ads platformu")
- Her bölümde 1-2 alıntılanabilir, bağımsız duran cümle
- Yüksek bilgi yoğunluğu: gerçek istatistikler, yüzdeler, tarihler
- Yapılandırılmış bilgi: liste + tablo + adımlar karışımı

E-E-A-T SİNYALLERİ:
- Deneyim: "Müşterilerimizde gözlemlediğimize göre..." veya "Uygulamada..."
- Uzmanlık: Teknik derinlik, platform terminolojisi
- Otorite: Gerçek araç, platform ve çalışmalara atıf
- Güven: Doğru veriler, abartısız ifadeler

RAKIP ANALİZİ KULLANIMI:
- Rakiplerin eksik bıraktığı açıları doldur
- Rakiplerde olmayan orijinal bakış açısı ekle
- Daha güncel veriler kullan

İÇERİK YAPISI:
1. Giriş: Direkt cevap + neden önemli (AEO)
2. Ana bölümler: H2 sorular, H3 alt başlıklar
3. Pratik uygulama: adım adım veya liste
4. Türkiye'ye özel örnek veya veri
5. CTA: Doğal, yardımcı

KESİNLİKLE YASAK:
- Uydurma istatistik
- "Günümüzde dijital dünya..." gibi klişe girişler
- Genel, yüzeysel tavsiyeler
- Fazla uzun cümleler"""

# ── SERP ANALİZİ ─────────────────────────────────────────────────────────────

def translate_topic(topic: str) -> str:
    """Konuyu Türkçe'den İngilizce'ye çevirir (EN SERP için)."""
    try:
        r = claude.messages.create(
            model="claude-haiku-4-5-20251001", max_tokens=60,
            messages=[{"role": "user", "content":
                f"Translate this Turkish SEO topic to English. Return only the translation, nothing else: '{topic}'"}]
        )
        return r.content[0].text.strip()
    except Exception:
        return topic

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
    """TR ve EN için SERP analizi + meta. Dict döner."""
    topic_en = translate_topic(topic_tr)
    logger.info(f"EN konu çevirisi: {topic_en}")
    tr = build_serp_context(topic_tr, lang="tr")
    en = build_serp_context(topic_en, lang="en")
    target = (tr["target_words"] + en["target_words"]) // 2 if (tr["context"] and en["context"]) \
             else tr["target_words"] or en["target_words"] or 1200
    return {
        "tr_ctx": tr["context"], "en_ctx": en["context"],
        "tr_intent": tr["intent"], "en_intent": en["intent"],
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
            lines.append(f"  {base}/blog/{slug}")
        return "\n".join(lines)
    except Exception:
        return ""

# ── BLOG ÜRETİCİ ─────────────────────────────────────────────────────────────

IMAGES = {
    "seo":       "1460925895917-afdab827c52f",
    "google":    "1573804633927-bfcbcd909acd",
    "social":    "1611162617213-7d7a39e9b1d7",
    "marketing": "1533750349088-cd871a92f312",
    "design":    "1561070791-2526d30994b5",
    "ai":        "1677442136019-21780ecad995",
    "content":   "1542744094-3a31f272c490",
    "analytics": "1551288049-bebda4e38f71",
    "email":     "1596526131083-e8c633360a4c",
    "ads":       "1611974789855-9c2a0a7236a3",
}

def img_url(kw):
    for k, pid in IMAGES.items():
        if k in kw.lower():
            return f"https://images.unsplash.com/photo-{pid}?w=1200&auto=format&fit=crop&q=80"
    return f"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"

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

def generate_post(topic: str, tr_serp: str = "", en_serp: str = "",
                  tr_intent: str = "informational", en_intent: str = "informational",
                  target_words: int = 1200,
                  tr_links: str = "", en_links: str = "") -> dict:
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

    tr_links_block = f"\n\n{tr_links}" if tr_links else ""
    en_links_block = f"\n\n{en_links}" if en_links else ""

    prompt = f""""{topic}" konusunda TR ve EN blog yazısı yaz.

KURALLAR:
- Başlık ve slug'da asla yıl (2024/2025/2026) kullanma — evergreen yaz
- Hedef kelime sayısı: {target_words} (her iki dil için)
- TR intent: {tr_intent} — {tr_intent_desc}
- EN intent: {en_intent} — {en_intent_desc}
- İç link: verilen URL listesinden 3-5 tanesine doğal anchor text ile link ver
- Dış link: 2-3 güvenilir kaynak (Google, Moz, HubSpot, Statista vb.)
- FAQ: 6-8 soru, her cevap 60-80 kelime, PAA sorgularından üret

TR için:{tr_block}{tr_paa_block}{tr_links_block}

EN için:{en_block}{en_paa_block}{en_links_block}

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
image_keyword: "seo veya google veya social veya marketing veya design veya ai veya content veya analytics"
translationSlug: "(EN slug)"
faq:
  - question: "Soru 1?"
    answer: "Cevap 1 (60-80 kelime)."
  - question: "Soru 2?"
    answer: "Cevap 2."
---

(TR markdown içerik — {target_words} kelime, AEO+GEO+EEAT, iç+dış linkler, sonunda ## Sıkça Sorulan Sorular bölümü)

===TR_END===
===EN_START===
---
title: "EN title (50-60 chars, no year)"
slug: "en-url-slug"
description: "Meta description (150-160 chars)"
date: "{today}"
category: "SEO or Digital Marketing or Social Media or UI/UX or Artificial Intelligence"
tags: ["tag1", "tag2", "tag3", "tag4"]
readTime: "X min"
image_keyword: "seo or google or social or marketing or design or ai or content or analytics"
translationSlug: "(TR slug)"
faq:
  - question: "Question 1?"
    answer: "Answer 1 (60-80 words)."
  - question: "Question 2?"
    answer: "Answer 2."
---

(EN markdown content — {target_words} words, AEO+GEO+EEAT, internal+external links, end with ## Frequently Asked Questions)

===EN_END==="""

    resp = claude.messages.create(
        model="claude-opus-4-5", max_tokens=8000,
        system=SYSTEM,
        messages=[{"role": "user", "content": prompt}]
    )
    raw = resp.content[0].text.strip()
    logger.info(f"Claude raw yanıt ({len(raw)} karakter): {raw[:500]}")

    tr_match = re.search(r"===TR_START===\s*(.*?)\s*===TR_END===", raw, re.DOTALL)
    en_match = re.search(r"===EN_START===\s*(.*?)\s*===EN_END===", raw, re.DOTALL)

    if not tr_match:
        logger.error(f"TR_START bulunamadı. İlk 1000 karakter:\n{raw[:1000]}")
        raise ValueError(f"TR yazı üretilemedi. Claude yanıtı: {raw[:200]}")
    if not en_match:
        logger.error(f"EN_START bulunamadı. İlk 1000 karakter:\n{raw[:1000]}")
        raise ValueError(f"EN yazı üretilemedi. Claude yanıtı: {raw[:200]}")

    tr_file = tr_match.group(1).strip()
    en_file = en_match.group(1).strip()

    def fm_field(content, key):
        m = re.search(rf'^{key}:\s*"([^"]+)"', content, re.MULTILINE)
        return m.group(1) if m else ""

    tr_slug  = fm_field(tr_file, "slug")
    tr_title = fm_field(tr_file, "title")
    en_slug  = fm_field(en_file, "slug")
    en_title = fm_field(en_file, "title")

    # image_keyword → gerçek Unsplash URL ile değiştir
    for kw_field in ["image_keyword"]:
        tr_kw = fm_field(tr_file, kw_field)
        en_kw = fm_field(en_file, kw_field)
        tr_file = re.sub(r'^image_keyword:.*$', f'image: "{img_url(tr_kw)}"', tr_file, flags=re.MULTILINE)
        en_file = re.sub(r'^image_keyword:.*$', f'image: "{img_url(en_kw)}"', en_file, flags=re.MULTILINE)

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
    r = claude.messages.create(model="claude-opus-4-5", max_tokens=80,
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

    await msg.edit_text(f"✍️ Revize ediliyor: _{talimat}_", parse_mode="Markdown")

    try:
        prompt = f"""Şu blog yazısını revize et.

TALİMAT: {talimat}

MEVCUT TR YAZI:
{tr_content}

{"MEVCUT EN YAZI:" + chr(10) + en_content if en_content else ""}

KURALLAR:
- slug ve translationSlug alanlarını kesinlikle değiştirme.
- YIL KURALI: Başlık ve slug'da asla yıl rakamı kullanma.
- Eğer talimat "faq ekle" veya "faq güncelle" içeriyorsa, frontmatter'a faq alanı ekle/güncelle:
  faq:
    - question: "Soru?"
      answer: "Cevap (2-3 cümle)."
  En az 5, en fazla 8 soru-cevap. Sorular içerikten veya PAA mantığıyla üret.
  TR yazı için Türkçe, EN yazı için İngilizce soru-cevap yaz.
- Diğer durumlarda frontmatter'ı olduğu gibi koru, sadece içeriği düzenle.

Tam olarak şu formatta döndür (başka hiçbir şey ekleme):
===TR_START===
(düzenlenmiş TR markdown, frontmatter dahil)
===TR_END===
===EN_START===
(düzenlenmiş EN markdown, frontmatter dahil)
===EN_END==="""

        resp = claude.messages.create(
            model="claude-opus-4-5", max_tokens=6000,
            system=SYSTEM,
            messages=[{"role": "user", "content": prompt}]
        )
        raw = resp.content[0].text.strip()

        tr_match = re.search(r"===TR_START===\n(.*?)===TR_END===", raw, re.DOTALL)
        en_match = re.search(r"===EN_START===\n(.*?)===EN_END===", raw, re.DOTALL)

        if not tr_match:
            return await msg.edit_text("❌ Claude beklenen formatta yanıt vermedi. Tekrar dene.")

        new_tr = tr_match.group(1).strip()
        new_en = en_match.group(1).strip() if en_match else None

        await msg.edit_text("📦 Revize edilmiş yazı GitHub'a yükleniyor...", parse_mode="Markdown")

        ok_tr = await loop.run_in_executor(None, gh_push,
            f"content/blog/tr/{slug}.md", new_tr, f"revize: {slug}")

        ok_en = False
        if new_en and en_content:
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
    serp_info = (f"✅ TR + EN SERP | Intent: TR={serp['tr_intent']} EN={serp['en_intent']} | Hedef: ~{serp['target_words']} kelime"
                 if (tr_ctx or en_ctx) else "⚠️ SerpAPI yok, genel yazı üretilecek")
    await msg.edit_text(
        f"{serp_info}\n✍️ Yazı üretiliyor _(1-2 dk)_...", parse_mode="Markdown")

    try:
        post = await loop.run_in_executor(None, generate_post, topic, tr_ctx, en_ctx,
                                          serp["tr_intent"], serp["en_intent"],
                                          serp["target_words"], tr_links, en_links)

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
                f"🇹🇷 [{post['tr']['title']}](https://tonguckaracay.com/blog/{post['tr']['slug']})\n"
                f"🇬🇧 [{post['en']['title']}](https://tonguckaracay.com/en/blog/{post['en']['slug']})\n\n"
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
                serp["target_words"], tr_links, en_links)
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
    asyncio.create_task(scheduler(app))

def main():
    token = config.get("TELEGRAM_BOT_TOKEN","")
    if not token: raise ValueError("TELEGRAM_BOT_TOKEN eksik")
    app = Application.builder().token(token).post_init(post_init).build()
    for cmd, fn in [("start",cmd_start),("yardim",cmd_start),("durum",cmd_durum),
                    ("liste",cmd_liste),("brief",cmd_brief),("revize",cmd_revize),
                    ("yazi",cmd_yazi),("gunluk",cmd_gunluk),("stop",cmd_stop)]:
        app.add_handler(CommandHandler(cmd, fn))
    logger.info(f"Agent v2 başlatılıyor → {GH_REPO}:{GH_BRANCH}")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()
