# video-sistemi — Tonguç Karaçay Reels kural dosyası

Her yeni videodan önce bu dosyayı oku ve tüm kurallara uy. Kaynak: `video-sistemi-rehberi.pdf` (Google Drive). Bitirmeden önce Ölçü ve Kural bölümlerine göre kendini kontrol et.

## 01 Kimlik (her videoda aynı)
- **Yazı tipi:** yalnızca Poppins (800 başlık, 700 etiket/alt başlık, 500–600 metin). İkinci yazı tipi yok.
- **Zemin:** sıcak siyah `#14110c`; sol üstte turuncu ışıma (`rgba(237,109,55,.42)` → saydam).
- **Kart:** `#211c18`, kenarlık `#322f2a` (2px), köşe 36px. İç satırlar arasında aynı renkte ince çizgi.
- **Metin:** krem `#f3ece4`; gövde `#c9bdb1`; soluk `#8c8176`.
- **Vurgu rengi (hiç değişmez):** turuncu `#ec6a38` (degrade `#ec6a38 → #e5832f`).
- **Başlık kalıbı:** üstte harf aralıklı turuncu küçük etiket (28px, BÜYÜK HARF), altında iki satır 112px başlık: 1. satır krem, 2. satır turuncu degrade.
- **Numara:** büyük turuncu rakam, ince turuncu çerçeve içinde (`01`, `02`…).
- **Etiket/pill:** turuncu kenarlıklı, koyu turuncu dolgulu yuvarlak etiket.
- **Konu tonu (videoda tek):** ses → camgöbeği `#4fb3a9`; para → yeşil; uyarı → kırmızı. Yalnızca küçük öğelerde (çalan dalga vb.).
- **İmza:** TK el yazısı logo + "TONGUÇ KARAÇAY" (harf aralıklı) + **tonguckaracay**.com — her sahnede aynı yerde.
- **Kapanış ekranı:** her videoda aynı düzen: etiket + iki satır CTA başlığı, portre (`public/tonguckaracay-ux-seo-ai.png`), aksiyon kartı.

## 02 Ölçü (1080×1920)
- Üst 0–220 boş (Instagram çubuğu).
- İçerik 230–1400 arası: başlık ~250'den başlar, görsel/kart ~600–1380.
- 1480 altına yazı yok.
- Logo 1565–1757 arası, ortalı.
- Kapak: ortadaki 3:4 alan (240–1680) içinde; profil ızgarasında başlık kesilmemeli.

## 03 Ritim
- Her sahne 3–6 sn. Özet ekranı ≥4,5 sn, kapanış ≥3,5 sn.
- Geçiş: ~0,33 sn, her sahnede aynı tip (opaklık + 28px yukarı kayma). Başka efekt yok.
- İlk kare boş değil: 0. saniyede başlık ve ana görsel ekranda.
- Görüntü cümleyle birlikte değişir; turuncu satır, vurgulu kelime söylendiği anda gelir.
- Ses seviyesi: seslendirme önde. Müzik fısıltı (efektlerin ~%40'ı), miks tepe −6 dB.

## 04 Kural
**Olur**
- Tek font (Poppins), tek vurgu rengi, tek konu tonu.
- Yazılar yalnızca güvenli alanda.
- Hareketler sesle aynı anda.
- Ekranda kısa etiket, sayı, çizim; cümleler seslendirme metninde.
- Sesler özgün (kendi sentezimiz ya da lisansı kontrol edilmiş kaynak).

**Olmaz**
- Ekranda söylenen cümlenin aynısı (tam cümle altyazı).
- Kenardan taşan/kesilen yazı.
- Üçüncü yazı tipi, rastgele renk; navy/mavi zemin.
- Herkesin kullandığı hazır şablon görünümü: gökkuşağı renkli bloklar, eğik "damga" yazılar, BÜYÜK HARF kelime kelime altyazı, yapay zeka aracının logo/yıldızı.
- Uydurma metrik ya da referans.

## Çıktı paketi (her video)
1. Dikey MP4 (1080×1920, 30 fps, ses dahil)
2. Kapak görseli (aynı kimlik, 3:4 güvenli alan)
3. Seslendirme metni (sahne-zaman tablosu) + Instagram açıklaması

## Hata kaydı (her hatadan sonra bir cümle ekle)
- 2026-10: İlk taslak site renkleriyle (navy) yapıldı → kimlik bu dosyadan alınır, siteden değil.
- 2026-10: Üst şeride logo/ilerleme çubuğu kondu → 0–220 her zaman boş.
- 2026-10: Ekranda tam cümle altyazı kullanıldı → ekranda kısa etiket, cümle seslendirmede.
