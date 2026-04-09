#!/usr/bin/env python3
"""
Growth Agent v1.0 - tonguckaracay.com
Blog İçerik Üretim Motoru — Telegram + Claude + GitHub
"""

import os
import json
import asyncio
import logging
import re
import base64
import time as time_module
from datetime import datetime, timedelta
from pathlib import Path

from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
import anthropic
import requests

# ============================================================
# LOGGING
# ============================================================

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO,
    handlers=[
        logging.FileHandler('agent.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ============================================================
# CONFIG
# ============================================================

def load_config(path: str = "config-tc.env") -> dict:
    config = {}
    try:
        with open(path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, _, v = line.partition('=')
                    config[k.strip()] = v.strip()
    except FileNotFoundError:
        logger.warning(f"{path} bulunamadı, ortam değişkenleri kullanılıyor")
    # Ortam değişkenleri config'i geçersiz kılar
    for key in [
        'TELEGRAM_BOT_TOKEN', 'TELEGRAM_ALLOWED_IDS',
        'ANTHROPIC_API_KEY', 'GITHUB_TOKEN',
        'GITHUB_REPO', 'GITHUB_BRANCH',
        'DAILY_POST_HOUR', 'DAILY_POST_MINUTE',
    ]:
        if os.environ.get(key):
            config[key] = os.environ[key]
    return config

config = load_config()

# ============================================================
# CLIENTS
# ============================================================

claude = anthropic.Anthropic(api_key=config.get("ANTHROPIC_API_KEY", ""))

ALLOWED_IDS = set(
    int(x) for x in config.get("TELEGRAM_ALLOWED_IDS", "").split(",")
    if x.strip().isdigit()
)

GITHUB_REPO   = config.get("GITHUB_REPO", "tonguc/tonguckaracay")
GITHUB_BRANCH = config.get("GITHUB_BRANCH", "main")
GITHUB_TOKEN  = config.get("GITHUB_TOKEN", "")

# ============================================================
# BLOG KONU HAVUZU
# ============================================================

TOPIC_POOL = [
    "Google Ads kampanya optimizasyonu 2025",
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
    "Dijital pazarlamada A/B testi nasıl yapılır",
    "Remarketing stratejileri ve ROI",
    "Teknik SEO denetimi nasıl yapılır",
    "Backlink kazanma stratejileri 2025",
    "Conversion Rate Optimization (CRO) rehberi",
    "Influencer marketing ROI nasıl ölçülür",
    "E-ticaret ürün sayfası SEO optimizasyonu",
    "Google Search Console kullanım rehberi",
    "Mobil SEO ve AMP nedir",
    "Schema markup ile zengin sonuçlar elde etme",
    "Rakip analizi için dijital araçlar",
    "Sosyal medya reklamlarında kreatif stratejiler",
    "SEO için iç linkleme stratejisi",
    "GEO (Generative Engine Optimization) nedir",
]

# ============================================================
# GITHUB API
# ============================================================

def _gh_headers() -> dict:
    return {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json",
    }

def github_get_file_sha(file_path: str) -> str | None:
    """Dosyanın mevcut SHA'sını döner (güncelleme için gerekli)."""
    r = requests.get(
        f"https://api.github.com/repos/{GITHUB_REPO}/contents/{file_path}?ref={GITHUB_BRANCH}",
        headers=_gh_headers(), timeout=10
    )
    if r.status_code == 200:
        return r.json().get("sha")
    return None

def github_push_file(file_path: str, content: str, commit_message: str) -> bool:
    """Dosyayı doğrudan main branch'e push eder."""
    sha = github_get_file_sha(file_path)
    payload = {
        "message": commit_message,
        "content": base64.b64encode(content.encode()).decode(),
        "branch": GITHUB_BRANCH,
    }
    if sha:
        payload["sha"] = sha

    r = requests.put(
        f"https://api.github.com/repos/{GITHUB_REPO}/contents/{file_path}",
        headers=_gh_headers(),
        json=payload,
        timeout=15,
    )
    if r.status_code in (200, 201):
        logger.info(f"GitHub push OK: {file_path}")
        return True
    logger.error(f"GitHub push HATA {r.status_code}: {r.text[:200]}")
    return False

def github_list_blog_slugs() -> list[str]:
    """Mevcut TR blog yazılarının slug listesini döner."""
    r = requests.get(
        f"https://api.github.com/repos/{GITHUB_REPO}/contents/content/blog/tr?ref={GITHUB_BRANCH}",
        headers=_gh_headers(), timeout=10
    )
    if r.status_code == 200:
        return [f["name"].replace(".md", "") for f in r.json() if f["name"].endswith(".md")]
    return []

# ============================================================
# BLOG İÇERİK ÜRETİCİ
# ============================================================

SEO_SYSTEM_PROMPT = """Sen Tonguç Karaçay'ın dijital pazarlama ve SEO danışmanlığı blogu için içerik üreten kıdemli bir SEO ve içerik stratejistisin.

UZMANLIK ALANLARIN:
- SEO (Arama Motoru Optimizasyonu)
- Google Ads ve Meta Reklam yönetimi
- Sosyal medya pazarlaması
- UI/UX tasarım
- Yapay zeka araçları ve dijital dönüşüm
- İçerik pazarlaması

İÇERİK STANDARTLARI:
- Her yazı 900-1200 kelime
- H2 ve H3 başlıklar kullan
- Pratik, uygulanabilir, güncel (2025) bilgiler
- Türkçe yazılarda CTA: "Profesyonel danışmanlık için [iletişime geçin](/iletisim)."
- İngilizce yazılarda CTA: "For professional consulting [get in touch](/contact)."
- Gerçek örnekler ve rakamlar kullan
- E-E-A-T sinyalleri: deneyim, uzmanlık, otorite, güven

KESİNLİKLE YASAKLAR:
- Genel, sıradan içerik
- Yanlış veya uydurma istatistikler
- Jenerik tavsiyeler
"""

UNSPLASH_IDS = {
    "seo": "1460925895917-afdab827c52f",
    "google": "1573804633927-bfcbcd909acd",
    "social": "1611162617213-7d7a39e9b1d7",
    "marketing": "1533750349088-cd871a92f312",
    "design": "1561070791-2526d30994b5",
    "ai": "1677442136019-21780ecad995",
    "content": "1542744094-3a31f272c490",
    "analytics": "1551288049-bebda4e38f71",
    "email": "1596526131083-e8c633360a4c",
    "ads": "1611974789855-9c2a0a7236a3",
    "mobile": "1512941937669-90a1b58e7e9c",
    "default": "1460925895917-afdab827c52f",
}

def get_image_url(keyword: str) -> str:
    k = keyword.lower()
    for key, pid in UNSPLASH_IDS.items():
        if key in k:
            return f"https://images.unsplash.com/photo-{pid}?w=1200&auto=format&fit=crop&q=80"
    return f"https://images.unsplash.com/photo-{UNSPLASH_IDS['default']}?w=1200&auto=format&fit=crop&q=80"

def generate_blog_post(topic: str) -> dict:
    """Claude API ile TR + EN blog yazısı üretir."""
    today = datetime.now().strftime("%Y-%m-%d")

    prompt = f""""{topic}" konusunda iki blog yazısı üret: Türkçe ve İngilizce.

JSON formatında döndür (başka hiçbir şey ekleme):
{{
  "tr": {{
    "title": "Türkçe başlık (SEO dostu, 50-60 karakter)",
    "slug": "url-dostu-turkce-slug",
    "description": "Meta açıklama (150-160 karakter, anahtar kelime içermeli)",
    "category": "SEO veya Dijital Pazarlama veya Sosyal Medya veya UI/UX veya Yapay Zeka",
    "tags": ["tag1", "tag2", "tag3", "tag4"],
    "readTime": "X dk",
    "image_keyword": "seo veya google veya social veya marketing veya design veya ai veya content veya analytics veya email veya ads",
    "content": "Tam markdown içerik (frontmatter olmadan, 900-1200 kelime)"
  }},
  "en": {{
    "title": "English title (SEO friendly, 50-60 chars)",
    "slug": "url-friendly-english-slug",
    "description": "Meta description (150-160 chars, include keyword)",
    "category": "SEO or Digital Marketing or Social Media or UI/UX or Artificial Intelligence",
    "tags": ["tag1", "tag2", "tag3", "tag4"],
    "readTime": "X min",
    "image_keyword": "seo or google or social or marketing or design or ai or content or analytics or email or ads",
    "content": "Full markdown content (no frontmatter, 900-1200 words)"
  }}
}}"""

    response = claude.messages.create(
        model="claude-opus-4-5",
        max_tokens=4000,
        system=SEO_SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}]
    )

    raw = response.content[0].text.strip()
    raw = re.sub(r"^```(?:json)?\n?", "", raw)
    raw = re.sub(r"\n?```$", "", raw)
    data = json.loads(raw)

    tr, en = data["tr"], data["en"]
    today_str = today

    tr_fm = f"""---
title: "{tr['title']}"
slug: "{tr['slug']}"
description: "{tr['description']}"
date: "{today_str}"
category: "{tr['category']}"
tags: {json.dumps(tr['tags'], ensure_ascii=False)}
readTime: "{tr['readTime']}"
image: "{get_image_url(tr['image_keyword'])}"
translationSlug: "{en['slug']}"
---"""

    en_fm = f"""---
title: "{en['title']}"
slug: "{en['slug']}"
description: "{en['description']}"
date: "{today_str}"
category: "{en['category']}"
tags: {json.dumps(en['tags'], ensure_ascii=False)}
readTime: "{en['readTime']}"
image: "{get_image_url(en['image_keyword'])}"
translationSlug: "{tr['slug']}"
---"""

    return {
        "tr": {
            "slug": tr["slug"],
            "title": tr["title"],
            "file_path": f"content/blog/tr/{tr['slug']}.md",
            "content": f"{tr_fm}\n\n{tr['content']}",
        },
        "en": {
            "slug": en["slug"],
            "title": en["title"],
            "file_path": f"content/blog/en/{en['slug']}.md",
            "content": f"{en_fm}\n\n{en['content']}",
        },
    }

def pick_topic(used_slugs: list[str]) -> str:
    """Henüz yazılmamış bir konu seç."""
    from difflib import SequenceMatcher

    def already_covered(topic: str) -> bool:
        t = topic.lower().replace(" ", "-")
        for s in used_slugs:
            ratio = SequenceMatcher(None, t, s).ratio()
            if ratio > 0.5:
                return True
        return False

    for topic in TOPIC_POOL:
        if not already_covered(topic):
            return topic

    # Hepsi yazıldıysa Claude'dan yeni konu iste
    r = claude.messages.create(
        model="claude-opus-4-5",
        max_tokens=100,
        messages=[{"role": "user", "content":
            "Dijital pazarlama ve SEO blogu için özgün bir yazı konusu öner. "
            "Sadece konu başlığını yaz."
        }]
    )
    return r.content[0].text.strip()

# ============================================================
# TELEGRAM KOMUTLARI
# ============================================================

def auth(update: Update) -> bool:
    if not ALLOWED_IDS:
        return True
    return update.effective_user.id in ALLOWED_IDS

async def deny(update: Update):
    await update.message.reply_text("⛔ Yetkisiz erişim.")

async def cmd_start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    if not auth(update): return await deny(update)
    await update.message.reply_text(
        "👋 *tonguckaracay.com Growth Agent*\n\n"
        "📝 `/yazi [konu]` — Konuda TR+EN yazı üret\n"
        "🤖 `/gunluk` — Otomatik konu seçip yazı üret\n"
        "📋 `/liste` — Son blog yazılarını listele\n"
        "📊 `/durum` — Agent durumu\n"
        "❓ `/yardim` — Bu menü\n",
        parse_mode="Markdown"
    )

async def cmd_yardim(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    await cmd_start(update, ctx)

async def cmd_durum(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    if not auth(update): return await deny(update)
    slugs = github_list_blog_slugs()
    await update.message.reply_text(
        f"📊 *Agent Durumu*\n\n"
        f"🌐 Repo: `{GITHUB_REPO}`\n"
        f"🌿 Branch: `{GITHUB_BRANCH}`\n"
        f"📝 TR yazı sayısı: `{len(slugs)}`\n"
        f"🕐 Saat (UTC): `{datetime.utcnow().strftime('%H:%M')}`\n",
        parse_mode="Markdown"
    )

async def cmd_liste(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    if not auth(update): return await deny(update)
    slugs = github_list_blog_slugs()
    if not slugs:
        return await update.message.reply_text("Henüz yazı yok.")
    recent = sorted(slugs)[-12:]
    lines = "\n".join(f"• `{s}`" for s in recent)
    await update.message.reply_text(
        f"📋 *Son {len(recent)} TR yazı:*\n{lines}", parse_mode="Markdown"
    )

async def cmd_yazi(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    if not auth(update): return await deny(update)
    topic = " ".join(ctx.args).strip() if ctx.args else ""
    if not topic:
        return await update.message.reply_text(
            "❌ Konu girin.\nÖrnek: `/yazi Google Ads optimizasyonu`",
            parse_mode="Markdown"
        )
    await _run_post(update, topic)

async def cmd_gunluk(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    if not auth(update): return await deny(update)
    slugs = github_list_blog_slugs()
    topic = pick_topic(slugs)
    await _run_post(update, topic)

async def _run_post(update: Update, topic: str):
    msg = await update.message.reply_text(
        f"✍️ *\"{topic}\"* konusunda yazı üretiliyor...\n_(30-60 saniye sürebilir)_",
        parse_mode="Markdown"
    )
    try:
        loop = asyncio.get_event_loop()
        post = await loop.run_in_executor(None, generate_blog_post, topic)

        await msg.edit_text(
            f"📦 Yazılar üretildi, GitHub'a push ediliyor...\n"
            f"🇹🇷 `{post['tr']['slug']}`\n"
            f"🇬🇧 `{post['en']['slug']}`",
            parse_mode="Markdown"
        )

        ok_tr = await loop.run_in_executor(
            None, github_push_file,
            post["tr"]["file_path"],
            post["tr"]["content"],
            f"blog: {post['tr']['slug']}",
        )
        ok_en = await loop.run_in_executor(
            None, github_push_file,
            post["en"]["file_path"],
            post["en"]["content"],
            f"blog: {post['en']['slug']}",
        )

        if ok_tr and ok_en:
            await msg.edit_text(
                f"✅ *Yayınlandı!*\n\n"
                f"🇹🇷 [{post['tr']['title']}]"
                f"(https://tonguckaracay.com/blog/{post['tr']['slug']})\n"
                f"🇬🇧 [{post['en']['title']}]"
                f"(https://tonguckaracay.com/en/blog/{post['en']['slug']})\n\n"
                f"_Vercel deploy ~1-2 dk içinde tamamlanır._",
                parse_mode="Markdown"
            )
        else:
            await msg.edit_text("⚠️ Push kısmen başarısız. `agent.log` kontrol et.")

    except Exception as e:
        logger.exception("Post üretme hatası")
        await msg.edit_text(f"❌ Hata:\n```\n{str(e)[:400]}\n```", parse_mode="Markdown")

# ============================================================
# GÜNLÜK ZAMANLAYICI
# ============================================================

DAILY_HOUR   = int(config.get("DAILY_POST_HOUR", "7"))
DAILY_MINUTE = int(config.get("DAILY_POST_MINUTE", "0"))

async def daily_scheduler(app: Application):
    """Her gün belirli saatte otomatik yazı üretir."""
    while True:
        now = datetime.utcnow()
        target = now.replace(hour=DAILY_HOUR, minute=DAILY_MINUTE, second=0, microsecond=0)
        if now >= target:
            target += timedelta(days=1)
        wait_sec = (target - now).total_seconds()
        logger.info(f"Sonraki günlük yazı: {target.strftime('%Y-%m-%d %H:%M')} UTC ({wait_sec/3600:.1f} saat)")
        await asyncio.sleep(wait_sec)

        try:
            slugs = github_list_blog_slugs()
            topic = pick_topic(slugs)
            logger.info(f"Günlük konu: {topic}")

            for uid in ALLOWED_IDS:
                try:
                    await app.bot.send_message(
                        uid,
                        f"🕐 *Günlük otomatik yazı başlıyor...*\n📌 Konu: _{topic}_",
                        parse_mode="Markdown"
                    )
                except Exception:
                    pass

            loop = asyncio.get_event_loop()
            post = await loop.run_in_executor(None, generate_blog_post, topic)

            ok_tr = await loop.run_in_executor(
                None, github_push_file,
                post["tr"]["file_path"], post["tr"]["content"],
                f"blog: {post['tr']['slug']}"
            )
            ok_en = await loop.run_in_executor(
                None, github_push_file,
                post["en"]["file_path"], post["en"]["content"],
                f"blog: {post['en']['slug']}"
            )

            result = (
                f"✅ *Günlük yazı yayınlandı!*\n\n"
                f"🇹🇷 `{post['tr']['slug']}`\n"
                f"🇬🇧 `{post['en']['slug']}`"
                if ok_tr and ok_en else
                f"⚠️ Günlük yazı kısmen başarısız."
            )

            for uid in ALLOWED_IDS:
                try:
                    await app.bot.send_message(uid, result, parse_mode="Markdown")
                except Exception:
                    pass

        except Exception as e:
            logger.exception("Günlük zamanlayıcı hatası")
            for uid in ALLOWED_IDS:
                try:
                    await app.bot.send_message(uid, f"❌ Günlük yazı hatası: {e}")
                except Exception:
                    pass

# ============================================================
# ANA GİRİŞ
# ============================================================

async def post_init(app: Application):
    asyncio.create_task(daily_scheduler(app))
    logger.info(f"Günlük zamanlayıcı aktif: {DAILY_HOUR:02d}:{DAILY_MINUTE:02d} UTC")

def main():
    token = config.get("TELEGRAM_BOT_TOKEN", "")
    if not token:
        raise ValueError("TELEGRAM_BOT_TOKEN config-tc.env dosyasında tanımlı değil")

    app = (
        Application.builder()
        .token(token)
        .post_init(post_init)
        .build()
    )

    app.add_handler(CommandHandler("start",   cmd_start))
    app.add_handler(CommandHandler("yardim",  cmd_yardim))
    app.add_handler(CommandHandler("durum",   cmd_durum))
    app.add_handler(CommandHandler("liste",   cmd_liste))
    app.add_handler(CommandHandler("yazi",    cmd_yazi))
    app.add_handler(CommandHandler("gunluk",  cmd_gunluk))

    logger.info(f"Agent başlatılıyor → {GITHUB_REPO}:{GITHUB_BRANCH}")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()
