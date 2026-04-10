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

def fetch_competitor(url: str, max_chars: int = 3000) -> str:
    """Rakip sayfanın ana içeriğini çeker."""
    try:
        headers = {"User-Agent": "Mozilla/5.0 (compatible; research-bot/1.0)"}
        r = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.text, "html.parser")
        for tag in soup(["script","style","nav","footer","header","aside","form"]):
            tag.decompose()
        text = soup.get_text(separator=" ", strip=True)
        text = re.sub(r'\s+', ' ', text)
        return text[:max_chars]
    except Exception as e:
        logger.warning(f"Rakip fetch hatası {url}: {e}")
        return ""

def build_serp_context(keyword: str, lang: str = "tr") -> str:
    """SERP + rakip içerik analizini metin olarak döner."""
    serp = serp_analyze(keyword, lang)
    if not serp:
        return ""

    label = "Türkiye" if lang == "tr" else "US/Global"
    lines = [f"SERP ANALİZİ — '{keyword}' ({label})\n"]
    lines.append("İlk 5 Rakip:")
    competitor_contents = []
    for i, res in enumerate(serp.get("results", []), 1):
        lines.append(f"{i}. {res['title']}\n   URL: {res['url']}\n   Snippet: {res['snippet']}")
        if i <= 3:
            content = fetch_competitor(res["url"])
            if content:
                competitor_contents.append(f"--- Rakip {i}: {res['title']} ---\n{content}")

    if serp.get("related"):
        lines.append("\nİlgili Sorular ve Aramalar:")
        for q in serp["related"]:
            lines.append(f"  • {q}")

    if competitor_contents:
        lines.append("\nRakip İçerik Özeti (Content Gap için):")
        lines.extend(competitor_contents)

    return "\n".join(lines)

def build_dual_serp_context(topic_tr: str) -> tuple[str, str]:
    """TR ve EN için ayrı ayrı SERP analizi yapar. (tr_ctx, en_ctx) döner."""
    topic_en = translate_topic(topic_tr)
    logger.info(f"EN konu çevirisi: {topic_en}")
    tr_ctx = build_serp_context(topic_tr, lang="tr")
    en_ctx = build_serp_context(topic_en, lang="en")
    return tr_ctx, en_ctx

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

def gh_slugs(lang="tr"):
    r = requests.get(f"https://api.github.com/repos/{GH_REPO}/contents/content/blog/{lang}?ref={GH_BRANCH}",
                     headers=_gh_h(), timeout=10)
    return [f["name"][:-3] for f in r.json() if f["name"].endswith(".md")] if r.status_code == 200 else []

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

def generate_post(topic: str, tr_serp: str = "", en_serp: str = "") -> dict:
    today = datetime.now().strftime("%Y-%m-%d")

    tr_paa = extract_paa(tr_serp)
    en_paa = extract_paa(en_serp)

    tr_block = f"\n\nTR SERP & RAKİP ANALİZİ (Türkiye):\n{tr_serp}" if tr_serp else ""
    en_block = f"\n\nEN SERP & RAKİP ANALİZİ (US/Global):\n{en_serp}" if en_serp else ""

    tr_paa_block = f"\nTR PAA SORULARI (bunları FAQ olarak kullan):\n" + "\n".join(f"- {q}" for q in tr_paa) if tr_paa else ""
    en_paa_block = f"\nEN PAA SORULARI (use these as FAQ):\n" + "\n".join(f"- {q}" for q in en_paa) if en_paa else ""

    prompt = f""""{topic}" konusunda TR + EN blog yazısı üret.

KRİTİK KURAL: title ve slug alanlarına asla yıl (2024, 2025, 2026 vb.) ekleme. Evergreen başlık yaz.

TR yazısı için:{tr_block}{tr_paa_block}

EN yazısı için:{en_block}{en_paa_block}

Her dil için kendi SERP analizini kullan:
- TR yazısı: Türkiye rakiplerinin eksik bıraktığı açıları doldur, TR anahtar kelimelerine odaklan
- EN yazısı: Global rakiplerin eksik bıraktığı açıları doldur, EN anahtar kelimelerine odaklan
- PAA sorularını H2/H3 başlık olarak içeriğe entegre et

FAQ KURALLARI (AEO + AI SEO):
- 6-8 soru üret (PAA + ilgili aramalardan)
- Her cevap: önce direkt cevap (1 cümle), sonra 2-3 cümle bağlam
- Toplam her cevap 60-80 kelime
- Sorular: gerçek arama sorgularını yansıtsın (Nasıl? Ne? Neden? Ne zaman?)

JSON formatında döndür (başka hiçbir şey ekleme):
{{
  "tr": {{
    "title": "SEO dostu Türkçe başlık (50-60 karakter)",
    "slug": "url-dostu-turkce-slug",
    "description": "Meta açıklama (150-160 karakter, ana anahtar kelime başta)",
    "category": "SEO veya Dijital Pazarlama veya Sosyal Medya veya UI/UX veya Yapay Zeka",
    "tags": ["tag1", "tag2", "tag3", "tag4"],
    "readTime": "X dk",
    "image_keyword": "seo veya google veya social veya marketing veya design veya ai veya content veya analytics veya email veya ads",
    "content": "Tam markdown (frontmatter yok, 1000-1200 kelime, AEO+GEO+EEAT). Sonunda ## Sıkça Sorulan Sorular bölümü olsun.",
    "faq": [{{"question": "...", "answer": "..."}}, ...]
  }},
  "en": {{
    "title": "SEO friendly English title (50-60 chars)",
    "slug": "url-friendly-english-slug",
    "description": "Meta description (150-160 chars, keyword first)",
    "category": "SEO or Digital Marketing or Social Media or UI/UX or Artificial Intelligence",
    "tags": ["tag1", "tag2", "tag3", "tag4"],
    "readTime": "X min",
    "image_keyword": "seo or google or social or marketing or design or ai or content or analytics or email or ads",
    "content": "Full markdown (no frontmatter, 1000-1200 words, AEO+GEO+EEAT). End with ## Frequently Asked Questions section.",
    "faq": [{{"question": "...", "answer": "..."}}, ...]
  }}
}}"""

    resp = claude.messages.create(
        model="claude-opus-4-5", max_tokens=6000,
        system=SYSTEM,
        messages=[{"role": "user", "content": prompt}]
    )
    raw = resp.content[0].text.strip()
    raw = re.sub(r"^```(?:json)?\n?", "", raw)
    raw = re.sub(r"\n?```$", "", raw)
    data = json.loads(raw)
    tr, en = data["tr"], data["en"]

    def fm(d, translation_slug):
        faq_yaml = ""
        if d.get("faq"):
            faq_lines = ["faq:"]
            for item in d["faq"]:
                q = item["question"].replace('"', '\\"')
                a = item["answer"].replace('"', '\\"')
                faq_lines.append(f'  - question: "{q}"')
                faq_lines.append(f'    answer: "{a}"')
            faq_yaml = "\n" + "\n".join(faq_lines)
        return f"""---
title: "{d['title']}"
slug: "{d['slug']}"
description: "{d['description']}"
date: "{today}"
category: "{d['category']}"
tags: {json.dumps(d['tags'], ensure_ascii=False)}
readTime: "{d['readTime']}"
image: "{img_url(d['image_keyword'])}"
translationSlug: "{translation_slug}"{faq_yaml}
---"""

    return {
        "tr": {"slug": tr["slug"], "title": tr["title"],
               "file": f"content/blog/tr/{tr['slug']}.md",
               "content": fm(tr, en["slug"]) + "\n\n" + tr["content"]},
        "en": {"slug": en["slug"], "title": en["title"],
               "file": f"content/blog/en/{en['slug']}.md",
               "content": fm(en, tr["slug"]) + "\n\n" + en["content"]},
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

    tr_ctx, en_ctx = await loop.run_in_executor(None, build_dual_serp_context, topic)

    if _cancel:
        await msg.edit_text("🛑 İptal edildi (SERP sonrası).")
        return

    serp_info = "✅ TR + EN SERP analizi tamamlandı" if (tr_ctx or en_ctx) else "⚠️ SerpAPI yok, genel yazı üretilecek"
    await msg.edit_text(
        f"{serp_info}\n✍️ Yazı üretiliyor _(1-2 dk)_...", parse_mode="Markdown")

    try:
        post = await loop.run_in_executor(None, generate_post, topic, tr_ctx, en_ctx)

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
            tr_ctx, en_ctx = await loop.run_in_executor(None, build_dual_serp_context, topic)
            post = await loop.run_in_executor(None, generate_post, topic, tr_ctx, en_ctx)
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
