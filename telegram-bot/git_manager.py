"""
Git ve site yönetimi işlemleri.
"""

import os
import subprocess
import logging

logger = logging.getLogger(__name__)


def run(cmd: str, cwd: str) -> tuple[str, int]:
    """Shell komutu çalıştırır. (output, returncode) döner."""
    result = subprocess.run(
        cmd, shell=True, cwd=cwd,
        capture_output=True, text=True
    )
    output = (result.stdout + result.stderr).strip()
    return output, result.returncode


def get_status(site_dir: str) -> str:
    """Git durumunu döner."""
    out, _ = run("git status --short", site_dir)
    log, _ = run("git log --oneline -5", site_dir)
    return f"📂 *Git Status:*\n```\n{out or 'clean'}\n```\n\n📋 *Son 5 commit:*\n```\n{log}\n```"


def commit_and_push(
    site_dir: str,
    tr_slug: str,
    en_slug: str,
    push_enabled: bool = True,
    remote: str = "origin",
    branch: str = "main",
) -> tuple[bool, str]:
    """
    Yeni blog yazılarını commit eder ve push eder.
    (success, message) döner.
    """
    messages = []

    # Stage
    out, code = run("git add content/blog/", site_dir)
    if code != 0:
        return False, f"git add hatası: {out}"
    messages.append("✅ Dosyalar staged")

    # Commit
    commit_msg = f"blog: {tr_slug} / {en_slug}"
    out, code = run(f'git commit -m "{commit_msg}"', site_dir)
    if code != 0:
        if "nothing to commit" in out:
            return False, "Commit edilecek değişiklik yok."
        return False, f"git commit hatası: {out}"
    messages.append(f"✅ Commit: `{commit_msg}`")

    # Push
    if push_enabled:
        out, code = run(f"git push {remote} {branch}", site_dir)
        if code != 0:
            return False, f"git push hatası: {out}"
        messages.append(f"✅ Push → {remote}/{branch}")

    return True, "\n".join(messages)


def rebuild_site(site_dir: str, pm2_app: str) -> tuple[bool, str]:
    """
    Next.js sitesini rebuild eder ve PM2 ile yeniden başlatır.
    (success, message) döner.
    """
    messages = []

    # npm build
    out, code = run("npm run build", site_dir)
    if code != 0:
        return False, f"Build hatası:\n```\n{out[-500:]}\n```"
    messages.append("✅ npm run build tamamlandı")

    # PM2 restart
    if pm2_app:
        out, code = run(f"pm2 restart {pm2_app}", site_dir)
        if code != 0:
            # PM2 yoksa veya uygulama başlatılmamışsa start dene
            out, code = run(f"pm2 start npm --name {pm2_app} -- start", site_dir)
            if code != 0:
                return False, f"PM2 hatası: {out}"
        messages.append(f"✅ PM2 restart: {pm2_app}")

    return True, "\n".join(messages)


def pull_latest(site_dir: str, remote: str = "origin", branch: str = "main") -> tuple[bool, str]:
    """En son kodu çeker."""
    out, code = run(f"git pull {remote} {branch}", site_dir)
    if code != 0:
        return False, f"git pull hatası: {out}"
    return True, f"✅ Pull tamamlandı:\n```\n{out}\n```"


def get_existing_slugs(site_dir: str) -> list[str]:
    """Mevcut blog yazısı slug'larını döner."""
    tr_dir = os.path.join(site_dir, "content", "blog", "tr")
    slugs = []
    if os.path.isdir(tr_dir):
        for fname in os.listdir(tr_dir):
            if fname.endswith(".md"):
                slugs.append(fname[:-3])
    return slugs
