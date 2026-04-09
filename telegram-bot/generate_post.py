"""
Blog yazısı oluşturma modülü.
Claude API kullanarak TR ve EN blog yazıları üretir.
"""

import os
import re
import json
import datetime
import anthropic

client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

TOPIC_POOL = [
    "Google Ads kampanya optimizasyonu",
    "Meta reklamlarında hedefleme stratejileri",
    "E-ticaret için SEO ipuçları",
    "Yerel SEO nasıl yapılır",
    "İçerik pazarlamasında başarı formülü",
    "LinkedIn B2B pazarlama stratejileri",
    "YouTube SEO ve video optimizasyonu",
    "E-posta pazarlamasında dönüşüm oranı artırma",
    "Web sitesi hız optimizasyonu ve Core Web Vitals",
    "Yapay zeka ile içerik üretimi",
    "Influencer marketing stratejileri",
    "Mobil SEO ve AMP",
    "Conversion Rate Optimization (CRO) nedir",
    "Google Analytics 4 kullanım rehberi",
    "Sosyal medya algoritmaları nasıl çalışır",
    "Dijital pazarlamada A/B testi",
    "Remarketing ve retargeting stratejileri",
    "SEO için teknik denetim nasıl yapılır",
    "Backlink kazanma stratejileri 2025",
    "Yapay zeka ve SEO'nun geleceği",
]


def slugify(text: str) -> str:
    """Metni URL-dostu slug'a çevirir."""
    tr_map = str.maketrans(
        "çğıöşüÇĞİÖŞÜ",
        "cgiosucgiosu"
    )
    text = text.lower().translate(tr_map)
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def get_next_topic(used_slugs: list[str] | None = None) -> str:
    """Henüz yazılmamış bir konu seçer."""
    if used_slugs is None:
        used_slugs = []

    for topic in TOPIC_POOL:
        if slugify(topic) not in used_slugs:
            return topic

    # Hepsi yazıldıysa Claude'a sor
    return _ask_claude_for_topic(used_slugs)


def _ask_claude_for_topic(used_slugs: list[str]) -> str:
    """Claude'dan yeni konu önerisi ister."""
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=200,
        messages=[{
            "role": "user",
            "content": (
                "Tonguç Karaçay'ın dijital pazarlama ve SEO blog'u için "
                "özgün bir blog yazısı konusu öner. "
                "Sadece konu başlığını yaz, başka bir şey ekleme. "
                f"Bu konular zaten yazıldı: {', '.join(used_slugs[:10])}"
            )
        }]
    )
    return response.content[0].text.strip()


def get_unsplash_image(topic_en: str) -> str:
    """Konuyla ilgili Unsplash görseli URL'i döner."""
    keyword_map = {
        "seo": "1460925895917-afdab827c52f",
        "google": "1573804633927-bfcbcd909acd",
        "social media": "1611162617213-7d7a39e9b1d7",
        "marketing": "1533750349088-cd871a92f312",
        "design": "1561070791-2526d30994b5",
        "ai": "1677442136019-21780ecad995",
        "content": "1542744094-3a31f272c490",
        "analytics": "1551288049-bebda4e38f71",
        "email": "1596526131083-e8c633360a4c",
        "ads": "1611974789855-9c2a0a7236a3",
    }

    topic_lower = topic_en.lower()
    photo_id = "1460925895917-afdab827c52f"  # default SEO
    for keyword, pid in keyword_map.items():
        if keyword in topic_lower:
            photo_id = pid
            break

    return f"https://images.unsplash.com/photo-{photo_id}?w=1200&auto=format&fit=crop&q=80"


def generate_blog_post(topic: str) -> dict:
    """
    Verilen konu için TR ve EN blog yazısı üretir.
    Dönen dict: {tr: {frontmatter, content, slug}, en: {frontmatter, content, slug}}
    """
    today = datetime.date.today().isoformat()

    prompt = f"""Tonguç Karaçay'ın dijital pazarlama ve SEO danışmanlığı blogu için "{topic}" konusunda iki blog yazısı üret: biri Türkçe, biri İngilizce.

ÖNEMLI KURALLAR:
1. Her yazı 800-1200 kelime olmalı
2. H2 ve H3 başlıklar kullan
3. Pratik, uygulanabilir bilgiler ver
4. Her yazının sonuna "Profesyonel danışmanlık için [iletişime geçin](/iletisim)" (TR) veya "For professional consulting [get in touch](/contact)" (EN) ekle
5. Bilimsel ve güncel bilgi ver, 2025 yılına uygun

JSON formatında döndür:
{{
  "tr": {{
    "title": "Türkçe başlık",
    "slug": "url-dostu-slug-turkce",
    "description": "150-160 karakter meta açıklama",
    "category": "SEO veya Dijital Pazarlama veya Sosyal Medya veya UI/UX veya Yapay Zeka",
    "tags": ["tag1", "tag2", "tag3", "tag4"],
    "readTime": "X dk",
    "image_keyword": "seo veya google veya social media veya marketing veya design veya ai veya content veya analytics veya email veya ads",
    "content": "Markdown içerik buraya (frontmatter olmadan)"
  }},
  "en": {{
    "title": "English title",
    "slug": "url-friendly-slug-english",
    "description": "150-160 character meta description",
    "category": "SEO or Digital Marketing or Social Media or UI/UX or Artificial Intelligence",
    "tags": ["tag1", "tag2", "tag3", "tag4"],
    "readTime": "X min",
    "image_keyword": "seo or google or social media or marketing or design or ai or content or analytics or email or ads",
    "content": "Markdown content here (without frontmatter)"
  }}
}}

Sadece JSON döndür, başka hiçbir şey ekleme."""

    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=4000,
        messages=[{"role": "user", "content": prompt}]
    )

    raw = response.content[0].text.strip()

    # JSON bloğunu temizle
    if raw.startswith("```"):
        raw = re.sub(r"^```(?:json)?\n?", "", raw)
        raw = re.sub(r"\n?```$", "", raw)

    data = json.loads(raw)

    tr_data = data["tr"]
    en_data = data["en"]

    tr_image = get_unsplash_image(tr_data.get("image_keyword", "marketing"))
    en_image = get_unsplash_image(en_data.get("image_keyword", "marketing"))

    tr_frontmatter = f"""---
title: "{tr_data['title']}"
slug: "{tr_data['slug']}"
description: "{tr_data['description']}"
date: "{today}"
category: "{tr_data['category']}"
tags: {json.dumps(tr_data['tags'], ensure_ascii=False)}
readTime: "{tr_data['readTime']}"
image: "{tr_image}"
translationSlug: "{en_data['slug']}"
---"""

    en_frontmatter = f"""---
title: "{en_data['title']}"
slug: "{en_data['slug']}"
description: "{en_data['description']}"
date: "{today}"
category: "{en_data['category']}"
tags: {json.dumps(en_data['tags'], ensure_ascii=False)}
readTime: "{en_data['readTime']}"
image: "{en_image}"
translationSlug: "{tr_data['slug']}"
---"""

    return {
        "tr": {
            "slug": tr_data["slug"],
            "filename": f"{tr_data['slug']}.md",
            "content": f"{tr_frontmatter}\n\n{tr_data['content']}",
            "title": tr_data["title"],
        },
        "en": {
            "slug": en_data["slug"],
            "filename": f"{en_data['slug']}.md",
            "content": f"{en_frontmatter}\n\n{en_data['content']}",
            "title": en_data["title"],
        },
    }


def save_post(site_dir: str, post_data: dict) -> tuple[str, str]:
    """Blog yazılarını dosyaya kaydeder. (tr_path, en_path) döner."""
    tr_path = os.path.join(site_dir, "content", "blog", "tr", post_data["tr"]["filename"])
    en_path = os.path.join(site_dir, "content", "blog", "en", post_data["en"]["filename"])

    os.makedirs(os.path.dirname(tr_path), exist_ok=True)
    os.makedirs(os.path.dirname(en_path), exist_ok=True)

    with open(tr_path, "w", encoding="utf-8") as f:
        f.write(post_data["tr"]["content"])

    with open(en_path, "w", encoding="utf-8") as f:
        f.write(post_data["en"]["content"])

    return tr_path, en_path
