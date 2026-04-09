#!/bin/bash
# tonguckaracay.com - VPS Kurulum Scripti
# Ubuntu 22.04 / Debian 12 için

set -e

echo "======================================"
echo "  tonguckaracay.com Bot Kurulumu"
echo "======================================"

# ── 1. Sistem paketleri ───────────────────────────────────────────────────────
echo ""
echo "▶ Sistem paketleri güncelleniyor..."
apt-get update -q
apt-get install -y -q git curl python3 python3-pip python3-venv

# ── 2. Node.js 20 LTS ────────────────────────────────────────────────────────
if ! command -v node &> /dev/null; then
    echo ""
    echo "▶ Node.js 20 kuruluyor..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y -q nodejs
fi
echo "✅ Node.js: $(node -v)"

# ── 3. PM2 ───────────────────────────────────────────────────────────────────
if ! command -v pm2 &> /dev/null; then
    echo ""
    echo "▶ PM2 kuruluyor..."
    npm install -g pm2
fi
echo "✅ PM2: $(pm2 -v)"

# ── 4. Site dizini ────────────────────────────────────────────────────────────
SITE_DIR="/var/www/tonguckaracay"
BOT_DIR="$SITE_DIR/telegram-bot"

if [ ! -d "$SITE_DIR" ]; then
    echo ""
    echo "▶ Repo klonlanıyor..."
    mkdir -p /var/www
    git clone https://github.com/tonguc/tonguckaracay.git "$SITE_DIR"
else
    echo "✅ Site dizini mevcut: $SITE_DIR"
fi

# ── 5. Next.js bağımlılıkları ─────────────────────────────────────────────────
echo ""
echo "▶ npm install yapılıyor..."
cd "$SITE_DIR"
npm install

# ── 6. .env dosyası ──────────────────────────────────────────────────────────
if [ ! -f "$SITE_DIR/.env.local" ]; then
    echo ""
    echo "⚠️  .env.local dosyası bulunamadı!"
    echo "    Oluşturmak için:"
    echo "    cp $SITE_DIR/.env.example $SITE_DIR/.env.local"
    echo "    ve RESEND_API_KEY değerini doldurun."
fi

# ── 7. İlk build ─────────────────────────────────────────────────────────────
echo ""
echo "▶ Next.js build yapılıyor (ilk kez)..."
npm run build

# ── 8. PM2 ile site başlatma ──────────────────────────────────────────────────
echo ""
echo "▶ PM2 ile site başlatılıyor..."
pm2 start npm --name "tonguckaracay" -- start -- -p 3000
pm2 save
pm2 startup | tail -1 | bash  # Boot'ta otomatik başlat

# ── 9. Python sanal ortamı ────────────────────────────────────────────────────
echo ""
echo "▶ Python sanal ortamı kuruluyor..."
cd "$BOT_DIR"
python3 -m venv venv
source venv/bin/activate
pip install -q -r requirements.txt
deactivate

# ── 10. Bot .env dosyası ─────────────────────────────────────────────────────
if [ ! -f "$BOT_DIR/.env" ]; then
    cp "$BOT_DIR/.env.example" "$BOT_DIR/.env"
    echo ""
    echo "⚠️  Bot yapılandırma dosyası oluşturuldu: $BOT_DIR/.env"
    echo "    Şu değerleri doldurun:"
    echo "    - TELEGRAM_BOT_TOKEN"
    echo "    - ALLOWED_USER_IDS"
    echo "    - ANTHROPIC_API_KEY"
fi

# ── 11. PM2 ile bot başlatma ──────────────────────────────────────────────────
echo ""
echo "▶ Bot PM2 ile kaydediliyor..."
pm2 start "$BOT_DIR/start_bot.sh" --name "tonguckaracay-bot" --interpreter bash
pm2 save

# ── 12. Nginx kurulumu (isteğe bağlı) ────────────────────────────────────────
echo ""
echo "▶ Nginx kuruluyor..."
apt-get install -y -q nginx

cat > /etc/nginx/sites-available/tonguckaracay << 'NGINX'
server {
    listen 80;
    server_name tonguckaracay.com www.tonguckaracay.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/tonguckaracay /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

echo ""
echo "======================================"
echo "  ✅ Kurulum tamamlandı!"
echo "======================================"
echo ""
echo "Yapılacaklar:"
echo "1. Bot ayarlarını düzenle:  nano $BOT_DIR/.env"
echo "2. PM2 durumunu kontrol et: pm2 status"
echo "3. Bot loglarını izle:      pm2 logs tonguckaracay-bot"
echo "4. SSL için:                certbot --nginx -d tonguckaracay.com -d www.tonguckaracay.com"
echo ""
