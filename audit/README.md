# auditflow — Setup Guide

## Dosya Yapısı
```
auditflow/
├── app/
│   ├── api/audit/route.ts    ← Claude API endpoint
│   ├── page.tsx              ← Ana uygulama
│   ├── layout.tsx
│   └── globals.css
├── lib/
│   ├── audit-data.ts         ← 190 madde (Technical/OnPage/UX/CRO)
│   ├── scoring.ts            ← Puan hesaplama
│   └── supabase.ts           ← DB client
├── supabase-schema.sql       ← DB şeması
├── vercel.json
└── package.json
```

---

## Kurulum Adımları

### 1. Projeyi Bilgisayarına Al
```bash
# Bu klasörü bir yere kopyala, sonra:
cd auditflow
npm install
```

### 2. Supabase Kurulumu
1. https://app.supabase.com → New Project oluştur
2. Project Settings → API → şunları kopyala:
   - Project URL
   - anon/public key
   - service_role key (gizli tut)
3. SQL Editor → New Query → `supabase-schema.sql` içeriğini yapıştır → Run

### 3. Anthropic API Key
1. https://console.anthropic.com → API Keys → Create Key
2. Kopyala, bir yerde sakla

### 4. Environment Variables
Proje klasöründe `.env.local` dosyası oluştur:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Local Test
```bash
npm run dev
# → http://localhost:3000
```

### 6. Vercel'e Deploy
```bash
npm install -g vercel
vercel login
vercel
```
Vercel soracak:
- Project name: `auditflow`
- Framework: Next.js (otomatik algılar)

Sonra Vercel Dashboard → Project → Settings → Environment Variables'a
`.env.local`'daki 5 değişkeni ekle.

```bash
vercel --prod  # production deploy
```

---

## Özellikler

| Özellik | Durum |
|---------|-------|
| ⚡ AI Auto-Audit (URL gir → Claude analiz) | ✅ Hazır |
| ✍️ Manuel Audit (190 madde checklist) | ✅ Hazır |
| 📊 Dashboard (skor, kategori, issues) | ✅ Hazır |
| ◈ White Label (ajans adı + renk) | ✅ Hazır |
| ↓ PDF Export | 🔜 Sprint 2 |
| 🔐 Auth (login/signup) | 🔜 Sprint 2 |
| 📁 Report History | 🔜 Sprint 2 |
| 💳 Stripe Billing | 🔜 Sprint 3 |

---

## Fiyatlandırma Önerisi
- Solo Plan: $49/ay (5 audit/ay)
- Agency Plan: $99/ay (unlimited + white label)
- Pay-per-audit: $19/rapor (giriş)
