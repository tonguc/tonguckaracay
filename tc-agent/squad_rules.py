"""AI SEO Squad kuralları — tc-agent (Telegram botu) için.

Bot, Claude skill dosyalarını doğrudan çalıştıramaz. Bu modül AI SEO Squad v6.5
(ai-seo-squad + seo-engine + ai-seo-engine) içerik kurallarının bot için
uyarlanmış halidir ve üç şey sağlar:

  1. SQUAD_RULES          — her Claude çağrısının sistem talimatına eklenen kurallar
                            (Squad FAST profili: kanıt, cevap-önce, fan-out, başlık,
                            alıntılanabilir cümle, SSS, metadata, iç link, Türkçe üslup)
  2. deterministic_checks — kodla yapılan kontroller (title/description uzunluğu,
                            gövdede H1, yıl, TOC, gövdede SSS kopyası, iç linkler,
                            [DATA NEEDED] işaretleri, uydurma deneyim kalıpları)
  3. gate_prompt / fix_prompt — Squad kapısı (VERA + Module A/B/E/G özeti) için
                            ikinci bir Claude çağrısının talimatı ve düzeltme talimatı

Kaynak kurallar: ai-seo-squad SKILL.md (Section 0 FAST, 11.5 VERA, 12 Validation),
ai-seo-engine SKILL.md (9.1–9.9, 12.0–12.6, references/tr.md),
seo-engine SKILL.md (5.2–5.4, 7, 8, references/tr.md). Skill güncellenirse bu
dosyayı da güncelle (docs/seo/KARARLAR.md'ye not düş).
"""

import re

SQUAD_VERSION = "AI SEO Squad v6.5 — FAST profili (bot uyarlaması)"

# ── 1. SİSTEM TALİMATINA EKLENEN KURALLAR ────────────────────────────────────

SQUAD_RULES = """══════════════════════════════════
AI SEO SQUAD KURALLARI (v6.5) — ÖNCELİKLİ
══════════════════════════════════
Bu bölüm bu talimattaki her kuraldan önce gelir. Başka bir kuralla çelişirse BU BÖLÜM kazanır.
Öncelik sırası: güvenlik ve doğruluk > okuyucunun niyeti > açıklık > güven/kanıt > arama ve AI optimizasyonu.

1) KANIT — UYDURMA YOK
- Uydurma istatistik, oran, yüzde, fiyat, tarih, çalışma, rapor, kaynak, alıntı, sıralama, müşteri sayısı ve vaka YASAK.
- Bir rakamı yalnızca şu durumda yaz: verilen SERP/rakip verisinde açıkça geçiyor VE kaynağı belli, ya da var olduğundan emin olduğun resmi bir belgeye dayanıyor. Kaynağı cümlenin içinde ver ("Google Search Central belgelerine göre …").
- Emin değilsen rakamı YAZMA; cümleyi rakamsız kur. "Gerçekçi tahmin" yazmak da uydurmadır.
- Maliyet/fiyat bölümlerinde rakam yerine maliyeti belirleyen faktörleri yaz. Fiyat ancak resmi fiyat sayfasına dayanıyorsa verilir ve "fiyatlar değişebilir" notuyla tarihlenir.
- Yazının ihtiyaç duyduğu ama kaynağını bilmediğin bir iddia varsa iddiayı yazma. Çok gerekliyse `[DATA NEEDED: kaynak — <kurum, belge>]` işaretiyle bırak (işaretli yazı yayına çıkmaz, Tonguç'a onaya gider). Bir rakam uydurup yanına işaret koymak da uydurmadır.

2) DENEYİM — UYDURMA YOK
- "Müşterilerimizde test ettiğimizde…", "Danışmanlık projelerinde gördüğümüz…", "Uygulamada gözlemlediğimiz…", "In our experience…", "When we tested this with clients…" gibi birinci el deneyim, müşteri, vaka ve sonuç cümleleri YAZILMAZ — bu bilgi bize verilmedi.
- Uzmanlığı bunlarla göster: adım adım yöntem, karar çerçevesi, kontrol listesi, kriter tablosu, yaygın bir yanlışın doğrusu, açıkça "Örnek senaryo:" diye etiketlenmiş işlenmiş örnek.

3) CEVAP-ÖNCE
- Gövde, ilk H2'den ÖNCE, ana soruya doğrudan cevap veren 1–3 cümlelik (40–60 kelime) bir paragrafla başlar. Sayfa başlığı (title) zaten H1 olarak basılıyor.
- Soru soran her H2 kendi cevabıyla başlar. Her başlığın altına ayrıca "kısa cevap" kutusu koyma.
- Evet/hayır sorularına "Evet/Hayır, çünkü …" ile cevap ver (doğruysa). Soruya soruyla cevap verme.

4) FAN-OUT (alt sorular)
- Ana soru için okuyucunun soracağı alt soruları belirle (konuya uyanlar: tanım, nasıl çalışır, maliyeti etkileyen faktörler, süre, kimin için uygun, riskler/sınırlar, alternatifler/karşılaştırma, adımlar, sonraki adım).
- Her alt soru bir bölümde, o bölümün ilk cümlesinde cevaplanır. Başka bir yazının konusu olan alt soruya o yazıya iç link ver; tekrar yazma. Sırf kapsamak için içi boş bölüm açma.

5) BAŞLIK KURALI
- Yazı ≥300 kelime veya ≥2 alt konu ise H2/H3 kullan. H3 yalnızca bir H2'nin altında.
- Gövdede H1 (`# `) KULLANMA.
- Soru başlıklarını insanların gerçekten yazdığı biçimde kur ("… nedir?", "… nasıl yapılır?", "… ne kadar sürer?", "… mı yoksa … mı?", "… için hangisi daha iyi?"). Her H2 zorla soru olmak zorunda değil.

6) ALINTILANABİLİR CÜMLE (en az 3)
- Tam bir fikir, açık özne (tam isim: "Google Search Console", "platform" değil), net fiil; kaynaksız üstünlük iddiası yok ("en iyi", "kesinlikle", "garanti" yok); paragrafından koparılınca da anlaşılır; doğrulanmış veya kaynaklı.

7) TEKRAR YOK
- Aynı cümle veya aynı iddia giriş, SSS ve sonuçta tekrar edilmez. Ana fikri yalnızca yeni bir şey ekliyorsa farklı kelimelerle yeniden an.

8) SSS (frontmatter `faq`)
- Site SSS'yi frontmatter'daki `faq` alanından kendisi basar ve şemasını üretir. Gövdeye "## Sıkça Sorulan Sorular" / "## Frequently Asked Questions" bölümü YAZMA (sayfada iki kez çıkar).
- Yalnızca gerçek sorular: verilen PAA / ilgili aramalar listesinden ya da insanların gerçekten sorduğu biçimde. Kota yok, en fazla 8. Uygun gerçek soru yoksa `faq: []` bırak.
- Cevap ilk cümlede verilir, kendi başına anlaşılır, gövdedeki cümleleri kopyalamaz.

9) METADATA
- title: 30–60 karakter (Türkçe karakterler dahil), birincil arama ifadesi başta, yıl yok, abartı yok.
- description: hedef 120–155 karakter (70–160 dışı hata); ilk cümlede cevap/değer, sayfanın desteklemediği vaat yok.

10) LİNKLER
- İç link: YALNIZCA verilen listedeki URL'ler, Markdown `[anlamlı anchor](/slug)` biçiminde. Liste dışı URL uydurma, kendine link verme, cümle içinde ham URL yazma.
- Dış link: yalnızca var olduğundan emin olduğun resmi sayfalar (ör. developers.google.com/search/docs). Emin değilsen kurumun adını an, link verme.

11) PLATFORM İDDİALARI (Google, AI arama, ChatGPT vb.)
- Tarihli platform iddiası yalnızca resmi dokümana dayanır; emin değilsen "platforma bağlı — güncel resmi dokümana bakın" de. "Aralık 2025 Core Update" gibi tarih ve güncelleme adı uydurma.
- Doğrulanmış (2026-10): Google FAQ rich result'ları 7 Mayıs 2026'dan beri göstermiyor · Google Search llms.txt kullanmıyor · AI Overviews/AI Mode için özel şema veya özel dosya gerekmiyor; dizine eklenmiş ve snippet'e uygun sayfa yeterli.

12) YMYL (sağlık, hukuk, finans, güvenlik iddiası varsa)
- Teşhis veya kişiye özel tavsiye yok, garanti edilen sonuç yok, kurum kaynağı zorunlu, "kendi uzmanınız (doktor, avukat, mali müşavir) karar verir" notu.

13) BİLGİ KAZANCI
- Verilen rakip başlıklarına bak; rakiplerde olmayan en az bir gerçek katkı ekle: karar çerçevesi, kontrol listesi, işlenmiş örnek/hesap (varsayımları açık), kriter tablosu ya da yaygın bir yanlışın doğrusu. Uydurma veri bilgi kazancı değildir; uzunluk da değildir.

14) ÜSLUP
- TR: "siz" hitabı; kısa-orta cümle, cümle başına tek fikir; Türkçe terim önce, İngilizcesi parantezde ve ilk geçtiği yerde açıklanır; çeviri kokan kalıplar yok ("… olarak bilinmektedir", "bu bağlamda", "son derece önemlidir"); "Günümüzde…", "Herkesin bildiği gibi…" gibi dolgu girişler yok; sayılar Türkçe biçimde (1.250, %15, 21 Ekim 2026); Türkçe karakterler her zaman doğru.
- EN: native US/UK English, written for that reader — never a translation of the Turkish post.

15) ŞEMA
- Site Article, Breadcrumb ve FAQPage JSON-LD'yi kendisi üretiyor. Yazıya JSON-LD koyma.
"""

# ── 2. KODLA YAPILAN KONTROLLER ──────────────────────────────────────────────

STATIC_ROUTES = {
    "tr": {"/", "/iletisim", "/hakkimda", "/blog", "/projeler", "/ai-egitimi",
           "/hizmetler/seo-danismanligi", "/hizmetler/geo-optimizasyonu",
           "/hizmetler/ui-ux-tasarim", "/hizmetler/online-reklamcilik",
           "/hizmetler/yapay-zeka-cozumleri", "/hizmetler/sosyal-medya-yonetimi"},
    "en": {"/en", "/en/contact", "/en/about", "/en/blog", "/en/case-studies", "/en/ai-training",
           "/en/services/seo-consulting", "/en/services/geo-optimization",
           "/en/services/ui-ux-design", "/en/services/online-advertising",
           "/en/services/ai-solutions", "/en/services/social-media-management"},
}

FABRICATED_EXPERIENCE = [
    r"müşterilerimiz(de|le|in)\s+(test|deneme|gördü|uygula)",
    r"danışmanlık projelerimiz(de)?",
    r"danışmanlık projelerinde (karşılaştığımız|gördüğümüz)",
    r"uygulamada (gördüğümüz|gözlemlediğimiz)",
    r"deneyimlerimize göre",
    r"test ettiğimizde",
    r"in our experience",
    r"when we tested",
    r"we['’]ve (seen|observed|found)",
    r"across (our )?consulting engagements",
    r"with our clients",
]

FILLER_TR = [r"\bgünümüzde\b", r"herkesin bildiği gibi", r"olarak bilinmektedir",
             r"bu bağlamda", r"son derece önemlidir"]

MARKER_RE = re.compile(r"\[(DATA NEEDED|PLACEHOLDER|LINK TO VERIFY)[^\]]*\]")
YEAR_RE = re.compile(r"\b20[12]\d\b")


def split_post(md: str) -> tuple[str, str]:
    m = re.match(r'^---\s*\n(.*?)\n---\s*\n?(.*)$', md, re.DOTALL)
    return (m.group(1), m.group(2)) if m else ("", md)


def fm_value(fm: str, key: str) -> str:
    m = re.search(rf'^{key}:\s*"((?:[^"\\]|\\.)*)"', fm, re.MULTILINE)
    return m.group(1).replace('\\"', '"') if m else ""


def deterministic_checks(md: str, lang: str, allowed_slugs: list[str] | None = None,
                         own_slug: str = "") -> list[dict]:
    """Squad Module A SPEC/HARD GATE + VERA 6 (link) + markers, kodla.
    Her bulgu: {code, severity: blocker|fix|advisory, detail}."""
    issues = []
    fm, body = split_post(md)
    add = lambda code, sev, detail: issues.append({"code": code, "severity": sev, "detail": detail})

    title = fm_value(fm, "title")
    desc = fm_value(fm, "description")
    slug = fm_value(fm, "slug") or own_slug

    if not title:
        add("A-TITLE", "blocker", "title yok")
    elif not 30 <= len(title) <= 60:
        add("A-TITLE-LEN", "fix", f"title {len(title)} karakter (30–60 olmalı): {title}")
    if not desc:
        add("A-META", "blocker", "description yok")
    elif not 70 <= len(desc) <= 160:
        add("A-META-LEN", "fix", f"description {len(desc)} karakter (70–160 olmalı)")
    if YEAR_RE.search(title) or YEAR_RE.search(slug):
        add("A-YEAR", "fix", "title veya slug'da yıl var")

    if re.search(r"^#\s+\S", body, re.MULTILINE):
        add("A-H1", "blocker", "gövdede H1 (# ) var — title zaten H1; gövdede ikinci H1 olur")
    if re.search(r"^##\s*(İçindekiler|Table of Contents)", body, re.MULTILINE | re.IGNORECASE):
        add("TOC", "fix", "manuel İçindekiler bölümü var (site otomatik üretiyor)")
    if re.search(r"^##\s*(Sıkça Sorulan Sorular|Frequently Asked Questions|SSS\b|FAQ\b)",
                 body, re.MULTILINE | re.IGNORECASE):
        add("V-FAQ-DUP", "fix", "gövdede SSS bölümü var — site frontmatter faq'ı ayrıca basıyor (sayfada iki kez çıkar)")

    words = len(re.findall(r"\w+", body))
    if words >= 300 and not re.search(r"^##\s+\S", body, re.MULTILINE):
        add("B-HEADING", "fix", f"{words} kelime ama H2 yok (başlık kuralı)")

    # cevap-önce: gövdenin ilk bloğu bir paragraf olmalı (ilk H2'den önce)
    first_block = next((b.strip() for b in re.split(r"\n\s*\n", body) if b.strip()), "")
    if first_block.startswith("#") or first_block.startswith("|") or first_block.startswith("```"):
        add("B-ANSWER-FIRST", "fix", "gövde cevap paragrafıyla değil başlık/tablo/kodla başlıyor")

    low = body.lower()
    for pat in FABRICATED_EXPERIENCE:
        m = re.search(pat, low)
        if m:
            add("E-EXPERIENCE", "blocker", f"uydurma deneyim kalıbı: '{m.group(0)}'")
            break
    if lang == "tr":
        for pat in FILLER_TR:
            m = re.search(pat, low)
            if m:
                add("STYLE", "advisory", f"dolgu/çeviri kalıbı: '{m.group(0)}'")

    markers = MARKER_RE.findall(md)
    if markers:
        add("E-PENDING", "blocker",
            f"{len(markers)} adet [DATA NEEDED]/[PLACEHOLDER] işareti — kaynak gelmeden yayınlanamaz")

    # iç linkler (VERA 6)
    if allowed_slugs is not None:
        base = "" if lang == "tr" else "/en"
        allowed = {f"{base}/{s}" for s in allowed_slugs} | STATIC_ROUTES[lang]
        for href in re.findall(r"\]\((/[^)\s#]*)", body):
            h = href.rstrip("/") or "/"
            if h == f"{base}/{slug}":
                add("V-LINK-SELF", "fix", f"kendine link: {href}")
            elif h not in allowed:
                add("V-LINK", "fix", f"listede olmayan iç link: {href}")
        if re.search(r"(?<!\()https?://\S+", re.sub(r"\]\([^)]*\)", "]", body)):
            add("V-RAWURL", "advisory", "cümle içinde ham URL var")
    return issues


def strip_marked_sentences(md: str) -> tuple[str, list[str]]:
    """[DATA NEEDED]/[PLACEHOLDER] işaretli cümleleri ve SSS maddelerini çıkarır.
    Squad: işaretli iddia yayınlanmaz; kullanıcıya 'çıkarılmış varyant' sunulur."""
    removed = []
    fm, body = split_post(md)

    # SSS maddeleri: işaretli soru/cevap çiftini komple çıkar
    lines, out, i = fm.split("\n"), [], 0
    while i < len(lines):
        ln = lines[i]
        if re.match(r"^\s*-\s*question:", ln):
            block = [ln]
            j = i + 1
            while j < len(lines) and not re.match(r"^\s*-\s*question:", lines[j]) \
                    and re.match(r"^\s{2,}", lines[j]):
                block.append(lines[j]); j += 1
            if MARKER_RE.search("\n".join(block)):
                removed.append("SSS: " + ln.split("question:", 1)[1].strip().strip('"'))
            else:
                out.extend(block)
            i = j
            continue
        out.append(ln); i += 1
    fm = "\n".join(out)
    if re.search(r"^faq:\s*$", fm, re.MULTILINE) and not re.search(r"^\s*-\s*question:", fm, re.MULTILINE):
        fm = re.sub(r"^faq:\s*$", "faq: []", fm, flags=re.MULTILINE)

    # gövde: işaretli cümleyi çıkar (liste/tablo satırıysa satırı çıkar)
    new_lines = []
    for ln in body.split("\n"):
        if not MARKER_RE.search(ln):
            new_lines.append(ln); continue
        if re.match(r"^\s*([-*]|\d+\.|\|)", ln):
            removed.append(ln.strip()); continue
        parts = re.split(r"(?<=[.!?])\s+", ln)
        keep = [p for p in parts if not MARKER_RE.search(p)]
        removed.extend(p.strip() for p in parts if MARKER_RE.search(p))
        if keep:
            new_lines.append(" ".join(keep))
    return f"---\n{fm}\n---\n" + "\n".join(new_lines), removed


# ── 3. SQUAD KAPISI (ikinci Claude çağrısı) ──────────────────────────────────

def gate_prompt(md: str, lang: str, primary_question: str, paa: list[str],
                competitor_headings: str, code_issues: list[dict]) -> str:
    paa_txt = "\n".join(f"- {q}" for q in paa) or "(verilmedi)"
    ci = "\n".join(f"- [{i['code']}] {i['detail']}" for i in code_issues) or "(yok)"
    return f"""Sen AI SEO Squad'ın doğrulama kapısısın (VERA + Module A/B/E/G). Aşağıdaki {lang.upper()} blog yazısını DÜZELTME — sadece denetle ve JSON döndür.

ANA SORU (primary prompt): {primary_question}
GERÇEK SORU LİSTESİ (PAA / ilgili aramalar):
{paa_txt}
RAKİP BAŞLIKLARI (bilgi kazancı karşılaştırması için):
{competitor_headings or "(verilmedi)"}
KODUN BULDUĞU SORUNLAR:
{ci}

DENETLE:
E1 Kaynaksız rakam: kaynağı cümlede verilmeyen her istatistik, yüzde, fiyat, süre, sayı, tarih (örnek senaryodaki açıkça varsayım olan rakamlar hariç).
E2 Uydurma deneyim/vaka/müşteri/sonuç cümlesi.
E3 Uydurma veya şüpheli kaynak, kurum, rapor, alıntı; var olduğundan emin olunamayan dış link.
E4 Doğrulanamayan tarihli platform iddiası (Google güncellemesi adı/tarihi, özellik davranışı).
A1 Gövde ilk 1–3 cümlede ana soruya doğrudan cevap veriyor mu?
B1 Ana sorunun cevaplanmamış kritik alt soruları (fan-out boşlukları).
B2 Alıntılanabilir cümle sayısı (tam fikir, açık özne, kaynaklı/doğrulanmış) ≥3 mü?
B3 Bilgi kazancı: rakiplerde olmayan gerçek katkı ne? Yoksa "yok".
V1 Tekrar: aynı cümle/iddia giriş, SSS cevapları ve sonuçta tekrar mı?
V2 Tutarsızlık: aynı konuda bölümler arası çelişen rakam/iddia.
F1 SSS soruları gerçek soru mu (listeden ya da doğal arama biçiminde), cevaplar gövdeyi kopyalıyor mu?
G1 YMYL iddiası (sağlık/hukuk/finans/güvenlik) var mı; varsa kurum kaynağı ve "uzmanınız karar verir" notu var mı?
G2 Abartılı reklam dili: "en iyi", "garanti", "kesin sonuç" gibi kanıtsız üstünlük/garanti.

SEVERITY:
- blocker: E1, E2, E3, E4, V2, G1-eksik, G2 — yayına çıkamaz, düzeltilmeli
- fix: A1, B1, B2<3, V1, F1 — düzeltilmeli
- advisory: B3 yok, üslup

SADECE ŞU JSON'U DÖN (başka metin yok):
{{"issues":[{{"code":"E1","severity":"blocker","where":"bölüm/cümlenin başı","detail":"ne yanlış","fix":"nasıl düzeltilir (rakamı sil / kaynağını yaz / cümleyi kaldır)"}}],
"citable_count":0,"information_gain":"tek satır veya yok","ymyl":false}}

YAZI:
{md}"""


def fix_prompt(md: str, lang: str, issues: list[dict], allowed_links: str) -> str:
    lst = "\n".join(f"- [{i['code']}] {i.get('where','')}: {i['detail']} → {i.get('fix','')}"
                    for i in issues)
    return f"""Aşağıdaki {lang.upper()} blog yazısında AI SEO Squad kapısı şu sorunları buldu. YALNIZCA bunları düzelt; geri kalan her şeyi (slug, translationSlug, date, image, category, tags, başlık yapısı, doğru bilgiler, iç linkler) koru.

DÜZELTME KURALLARI:
- Kaynaksız rakamı kaynak uydurarak düzeltme: rakamı sil ve cümleyi rakamsız kur, ya da cümleyi kaldır.
- Uydurma deneyim/vaka cümlesini kaldır; yerine yöntem/kontrol listesi/"Örnek senaryo:" etiketli örnek koy.
- Şüpheli kaynak/linki kaldır.
- Gövdedeki SSS bölümünü kaldır (SSS frontmatter faq'ta kalır); cevaplar gövdeyi kopyalamasın.
- Gövdede H1 (# ) varsa kaldır; gövde cevap paragrafıyla başlasın.
- Listede olmayan iç linkleri kaldır (anchor metni düz metin olarak kalsın).
- title 30–60, description 70–160 karakter.
- Frontmatter YAML geçerli kalsın: çift tırnaklı değerlerin içinde düz " kullanma.

SORUNLAR:
{lst}

İZİNLİ İÇ LİNKLER:
{allowed_links or "(liste yok — iç link ekleme)"}

Tam olarak şu formatta döndür:
===FIX_START===
(düzeltilmiş markdown, frontmatter dahil)
===FIX_END===

YAZI:
{md}"""


VERDICT_LABELS = {
    "READY": "✅ Yayına hazır (Squad kapısı geçti)",
    "HOLD": "⏸ İnsan incelemesi gerekli — yayınlanmadı",
}
