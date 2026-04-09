"""
tonguckaracay.com Telegram Botu
Her gün otomatik blog yazısı üretir ve siteyi günceller.
"""

import os
import logging
import asyncio
from dotenv import load_dotenv

from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)
from apscheduler.schedulers.asyncio import AsyncIOScheduler

import generate_post
import git_manager

load_dotenv()

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)

# ── Ortam değişkenleri ──────────────────────────────────────────────────────
BOT_TOKEN = os.environ["TELEGRAM_BOT_TOKEN"]
ALLOWED_IDS = set(
    int(x) for x in os.getenv("ALLOWED_USER_IDS", "").split(",") if x.strip()
)
SITE_DIR = os.getenv("SITE_DIR", "/var/www/tonguckaracay")
GIT_PUSH = os.getenv("GIT_PUSH_ENABLED", "true").lower() == "true"
GIT_REMOTE = os.getenv("GIT_REMOTE", "origin")
GIT_BRANCH = os.getenv("GIT_BRANCH", "main")
PM2_APP = os.getenv("PM2_APP_NAME", "tonguckaracay")
DAILY_HOUR = int(os.getenv("DAILY_POST_HOUR", "7"))
DAILY_MINUTE = int(os.getenv("DAILY_POST_MINUTE", "0"))


# ── Yetki kontrolü ──────────────────────────────────────────────────────────
def authorized(update: Update) -> bool:
    if not ALLOWED_IDS:
        return True
    return update.effective_user.id in ALLOWED_IDS


async def deny(update: Update) -> None:
    await update.message.reply_text("⛔ Bu botu kullanma yetkiniz yok.")


# ── Komutlar ────────────────────────────────────────────────────────────────

async def cmd_start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if not authorized(update):
        return await deny(update)
    text = (
        "👋 *tonguckaracay.com Bot'a hoş geldiniz!*\n\n"
        "📝 `/yazi [konu]` — Belirtilen konuda yazı üret\n"
        "🤖 `/gunluk` — Otomatik konu seçip yazı üret\n"
        "📊 `/durum` — Site ve git durumunu göster\n"
        "🔄 `/guncelle` — Git pull + rebuild yap\n"
        "📋 `/liste` — Son 10 blog yazısını listele\n"
        "❓ `/yardim` — Bu menüyü göster\n"
    )
    await update.message.reply_text(text, parse_mode="Markdown")


async def cmd_yardim(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await cmd_start(update, context)


async def cmd_durum(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if not authorized(update):
        return await deny(update)
    status = git_manager.get_status(SITE_DIR)
    await update.message.reply_text(status, parse_mode="Markdown")


async def cmd_liste(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if not authorized(update):
        return await deny(update)
    slugs = git_manager.get_existing_slugs(SITE_DIR)
    if not slugs:
        await update.message.reply_text("Henüz blog yazısı yok.")
        return
    recent = sorted(slugs)[-10:]
    lines = "\n".join(f"• `{s}`" for s in recent)
    await update.message.reply_text(
        f"📋 *Son {len(recent)} yazı (TR):*\n{lines}", parse_mode="Markdown"
    )


async def cmd_guncelle(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if not authorized(update):
        return await deny(update)
    msg = await update.message.reply_text("🔄 Git pull yapılıyor...")
    ok, result = git_manager.pull_latest(SITE_DIR, GIT_REMOTE, GIT_BRANCH)
    if not ok:
        await msg.edit_text(f"❌ Pull hatası:\n{result}")
        return

    await msg.edit_text(f"{result}\n\n⚙️ Site rebuild ediliyor...")
    ok, build_result = git_manager.rebuild_site(SITE_DIR, PM2_APP)
    if not ok:
        await msg.edit_text(f"{result}\n\n❌ Build hatası:\n{build_result}")
        return

    await msg.edit_text(f"{result}\n\n{build_result}\n\n✅ Site güncellendi!")


async def cmd_yazi(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if not authorized(update):
        return await deny(update)

    # Konu argümanını al
    topic = " ".join(context.args).strip() if context.args else ""
    if not topic:
        await update.message.reply_text(
            "❌ Lütfen konu girin.\nÖrnek: `/yazi Google Ads optimizasyonu`",
            parse_mode="Markdown"
        )
        return

    await _generate_and_publish(update, topic)


async def cmd_gunluk(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if not authorized(update):
        return await deny(update)

    existing = git_manager.get_existing_slugs(SITE_DIR)
    topic = generate_post.get_next_topic(existing)
    await _generate_and_publish(update, topic)


# ── Ana içerik üretme fonksiyonu ─────────────────────────────────────────────

async def _generate_and_publish(update: Update, topic: str) -> None:
    msg = await update.message.reply_text(
        f"✍️ *\"{topic}\"* konusunda yazı üretiliyor...\n_(Bu 30-60 saniye sürebilir)_",
        parse_mode="Markdown"
    )

    try:
        # İçerik üret (blocking → thread'de çalıştır)
        loop = asyncio.get_event_loop()
        post_data = await loop.run_in_executor(
            None, generate_post.generate_blog_post, topic
        )

        tr_title = post_data["tr"]["title"]
        en_title = post_data["en"]["title"]

        await msg.edit_text(
            f"✅ Yazılar üretildi:\n"
            f"🇹🇷 `{tr_title}`\n"
            f"🇬🇧 `{en_title}`\n\n"
            f"💾 Dosyalar kaydediliyor...",
            parse_mode="Markdown"
        )

        # Dosyaları kaydet
        tr_path, en_path = generate_post.save_post(SITE_DIR, post_data)

        await msg.edit_text(
            f"✅ Yazılar kaydedildi:\n"
            f"🇹🇷 `{post_data['tr']['slug']}.md`\n"
            f"🇬🇧 `{post_data['en']['slug']}.md`\n\n"
            f"📦 Git commit & push yapılıyor...",
            parse_mode="Markdown"
        )

        # Git işlemleri
        ok, git_result = git_manager.commit_and_push(
            SITE_DIR,
            post_data["tr"]["slug"],
            post_data["en"]["slug"],
            push_enabled=GIT_PUSH,
            remote=GIT_REMOTE,
            branch=GIT_BRANCH,
        )

        if not ok:
            await msg.edit_text(
                f"⚠️ Git hatası: {git_result}\n\nDosyalar kaydedildi ama push edilemedi.",
                parse_mode="Markdown"
            )
            return

        await msg.edit_text(
            f"✅ *Yazılar yayınlandı!*\n\n"
            f"🇹🇷 `{post_data['tr']['slug']}`\n"
            f"🇬🇧 `{post_data['en']['slug']}`\n\n"
            f"{git_result}\n\n"
            f"⚙️ Site rebuild ediliyor...",
            parse_mode="Markdown"
        )

        # Rebuild
        ok, build_result = await loop.run_in_executor(
            None, git_manager.rebuild_site, SITE_DIR, PM2_APP
        )

        final_msg = (
            f"🎉 *Tamamlandı!*\n\n"
            f"🇹🇷 [{tr_title}](https://tonguckaracay.com/blog/{post_data['tr']['slug']})\n"
            f"🇬🇧 [{en_title}](https://tonguckaracay.com/en/blog/{post_data['en']['slug']})\n\n"
            f"{build_result if ok else '⚠️ Rebuild manuel yapılmalı: `pm2 restart ' + PM2_APP + '`'}"
        )
        await msg.edit_text(final_msg, parse_mode="Markdown")

    except Exception as e:
        logger.exception("İçerik üretme hatası")
        await msg.edit_text(f"❌ Hata oluştu:\n```\n{str(e)[:500]}\n```", parse_mode="Markdown")


# ── Günlük zamanlayıcı ───────────────────────────────────────────────────────

async def daily_job(app: Application) -> None:
    """Her gün otomatik çalışır, tüm yetkili kullanıcılara yazı üretir."""
    logger.info("Günlük otomatik yazı üretimi başlıyor...")
    if not ALLOWED_IDS:
        logger.warning("ALLOWED_USER_IDS ayarlı değil, günlük görev atlandı.")
        return

    existing = git_manager.get_existing_slugs(SITE_DIR)
    topic = generate_post.get_next_topic(existing)

    for user_id in ALLOWED_IDS:
        try:
            await app.bot.send_message(
                chat_id=user_id,
                text=f"🕐 *Günlük otomatik yazı başlıyor...*\n📌 Konu: _{topic}_",
                parse_mode="Markdown"
            )
        except Exception:
            pass

    try:
        loop = asyncio.get_event_loop()
        post_data = await loop.run_in_executor(
            None, generate_post.generate_blog_post, topic
        )
        generate_post.save_post(SITE_DIR, post_data)
        ok, git_result = git_manager.commit_and_push(
            SITE_DIR,
            post_data["tr"]["slug"],
            post_data["en"]["slug"],
            push_enabled=GIT_PUSH,
            remote=GIT_REMOTE,
            branch=GIT_BRANCH,
        )
        ok_build, build_result = await loop.run_in_executor(
            None, git_manager.rebuild_site, SITE_DIR, PM2_APP
        )

        result_msg = (
            f"✅ *Günlük yazı yayınlandı!*\n\n"
            f"🇹🇷 `{post_data['tr']['slug']}`\n"
            f"🇬🇧 `{post_data['en']['slug']}`\n\n"
            f"{git_result}\n{build_result if ok_build else '⚠️ Rebuild başarısız'}"
        )
    except Exception as e:
        result_msg = f"❌ Günlük yazı üretilemedi:\n```\n{str(e)[:300]}\n```"

    for user_id in ALLOWED_IDS:
        try:
            await app.bot.send_message(
                chat_id=user_id,
                text=result_msg,
                parse_mode="Markdown"
            )
        except Exception:
            pass


# ── Ana giriş noktası ────────────────────────────────────────────────────────

def main() -> None:
    app = Application.builder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", cmd_start))
    app.add_handler(CommandHandler("yardim", cmd_yardim))
    app.add_handler(CommandHandler("durum", cmd_durum))
    app.add_handler(CommandHandler("liste", cmd_liste))
    app.add_handler(CommandHandler("guncelle", cmd_guncelle))
    app.add_handler(CommandHandler("yazi", cmd_yazi))
    app.add_handler(CommandHandler("gunluk", cmd_gunluk))

    # Günlük zamanlayıcı
    scheduler = AsyncIOScheduler(timezone="UTC")
    scheduler.add_job(
        daily_job,
        "cron",
        hour=DAILY_HOUR,
        minute=DAILY_MINUTE,
        args=[app],
    )
    scheduler.start()
    logger.info(f"Zamanlayıcı: her gün {DAILY_HOUR:02d}:{DAILY_MINUTE:02d} UTC")

    logger.info("Bot başlatılıyor...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
