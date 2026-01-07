export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  image: string;
  content: string;
}

// Turkish Blog Posts
const blogPostsTR: BlogPost[] = [
  {
    slug: "seo-nedir-nasil-yapilir",
    title: "SEO Nedir, SEO Çalışmaları Nasıl Yapılır?",
    description: "SEO, arama motoru optimizasyonu anlamına gelir. Sitenizin ilgili aramalar için görünürlüğünü artırmak için yapılan optimizasyon sürecidir.",
    date: "2020-10-02",
    updatedDate: "2025-01-15",
    category: "SEO",
    tags: ["SEO", "Arama Motoru Optimizasyonu", "Google", "Dijital Pazarlama"],
    readTime: "8 dk",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    content: `
## SEO nedir?

SEO, "arama motoru optimizasyonu" anlamına gelir. Basit bir ifadeyle, sitenizin ilgili aramalar için görünürlüğünü artırmak için iyileştirme süreci anlamına gelir. Sayfalarınızın arama sonuçlarında daha iyi görünürlüğü ne kadar yüksek olursa, dikkat çekme ve potansiyel ve mevcut müşterileri işletmenize çekme olasılığınız o kadar artar.

## SEO nasıl çalışır?

Google ve Bing gibi arama motorları, web'deki sayfaları taramak, siteden siteye gitmek, bu sayfalar hakkında bilgi toplamak ve bunları bir dizine koymak için botları kullanır. Ardından, algoritmalar, belirli bir sorgu için arama sonuçlarında sıralı sayfaların görünmesi gerektiğini belirlemek için yüzlerce sıralama faktörünü veya sinyalini dikkate alarak dizindeki sayfaları analiz eder.

## SEO pazarlama için neden önemlidir?

SEO, dijital pazarlamanın temel bir parçasıdır çünkü insanlar her yıl trilyonlarca arama yapar ve genellikle ticari amaçla ürünler ve hizmetler hakkında bilgi bulurlar. Arama genellikle markalar için birincil dijital trafik kaynağıdır ve diğer pazarlama kanallarını tamamlar.

Profesyonel SEO danışmanlığı için [iletişime geçin](/iletisim).
    `
  },
  {
    slug: "ui-ux-designer-nedir-nasil-calisirlar",
    title: "UI-UX Designer Nedir, Nasıl Çalışırlar?",
    description: "UI ve UX tasarımcılarının ne yaptığını, nasıl çalıştıklarını ve dijital ürün geliştirme sürecindeki rollerini keşfedin.",
    date: "2020-09-22",
    updatedDate: "2025-01-15",
    category: "UI-UX",
    tags: ["UI Design", "UX Design", "Kullanıcı Deneyimi", "Arayüz Tasarımı"],
    readTime: "7 dk",
    featured: true,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80",
    content: `
## UX Designer Nedir?

UX Designer'lar veya kullanıcı deneyimi tasarımcıları, kullanıcı deneyiminin önemi konusuyla ilgilenir. Bunun için ürün geliştirme sürecinin geliştirilmesine veya mevcut bir ürünün iyileştirilmesine odaklanır.

## UI Designer Nedir?

Aslında grafik tasarım ile UI tasarımı arasında pek bir fark yoktur. Bir web sitesi veya uygulama yapılırken yazı tipleri, simgeler, düğmeler, renkler ve duyarlı tasarım seçeneklerinin tümünü kapsayan disiplindir.

Detaylı bilgi için [UI-UX tasarım hizmetlerimize](/hizmetler/ui-ux-tasarim) göz atın.
    `
  },
  {
    slug: "kaliteli-backlink-nedir-nasil-alinir",
    title: "Kaliteli Backlink Nedir? Nasıl Alınır?",
    description: "Kaliteli backlink stratejileri, backlink türleri ve SEO için doğru link building teknikleri hakkında kapsamlı rehber.",
    date: "2020-09-25",
    updatedDate: "2025-01-15",
    category: "SEO",
    tags: ["Backlink", "Link Building", "SEO", "Off-Page SEO"],
    readTime: "9 dk",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    content: `
## Backlink Nedir?

Backlink, bir web sitesinden başka bir web sitesine verilen bağlantılara denir. Arama motorları, web sayfaları arasında gezinmek için de backlinklerden faydalanır.

## Kaliteli Backlink Özellikleri

- Kendi site içeriğinize yakın olan sitelerden backlink almak, daha çok işe yarar.
- Link aldığınız sitenin ziyaretçi ve içerik bakımından zengin ve aktif bir site olması çok önemlidir.
- Link alınan sitenin Domain Authority (DA) ve Page Authority (PA) değerleri yüksek olmalıdır.

Profesyonel SEO ve backlink danışmanlığı için [iletişime geçin](/iletisim).
    `
  },
  {
    slug: "inbound-marketing-nedir-nasil-yapilir",
    title: "Inbound Marketing Nedir, Nasıl Yapılır?",
    description: "Inbound marketing stratejileri, gelen pazarlama teknikleri ve müşteri çekme yöntemleri hakkında detaylı rehber.",
    date: "2020-10-07",
    updatedDate: "2025-01-15",
    category: "Dijital Pazarlama",
    tags: ["Inbound Marketing", "İçerik Pazarlaması", "Dijital Pazarlama", "Lead Generation"],
    readTime: "8 dk",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80",
    content: `
## Inbound Marketing Nedir?

Inbound Marketing, kaliteli içerikle müşterinin bizi bulmasını sağlayan pazarlama stratejisi olarak ifade edilebilir. Bu yöntemde, potansiyel müşterilerin size gelmesi için onlara değerli içerikler sunarsınız.

## Inbound Marketing Aşamaları

1. **Dikkat Çekin (Attract):** Blog yazıları, sosyal medya paylaşımları ve SEO çalışmaları ile potansiyel müşterilerin dikkatini çekin.
2. **Dönüştür (Convert):** Ziyaretçileri potansiyel müşterilere dönüştürün.
3. **İlgiyi Koru (Close):** E-posta pazarlaması ile ilişkinizi sürdürün.
4. **Değerlendir (Delight):** Müşterilerinizi memnun edin ve marka elçilerine dönüştürün.

Dijital pazarlama danışmanlığı için [iletişime geçin](/iletisim).
    `
  },
  {
    slug: "profesyonel-seo-uzmani-nedir-nasil-olunur",
    title: "Profesyonel SEO Uzmanı Nedir, Nasıl Olunur?",
    description: "SEO uzmanı olmak için gereken beceriler, eğitimler ve kariyer yolu hakkında kapsamlı rehber.",
    date: "2020-10-13",
    updatedDate: "2025-01-15",
    category: "SEO",
    tags: ["SEO Uzmanı", "SEO Danışmanı", "Kariyer", "Dijital Pazarlama"],
    readTime: "15 dk",
    featured: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    content: `
## SEO Uzmanı, SEO Danışmanı Nedir?

SEO Uzmanı için, SEO çalışmalarını verimli biçimde yürütecek olan uzman kişi ifadesi doğru olur. SEO Uzmanı tarafından yapılacak çalışmalar arasında; sitenizi ziyaretçi için en uygun hale getirmek, arama motorları tarafından dikkat çekecek hale gelmesi için gerekli olan iyileştirme çalışmaları yapmak vardır.

## SEO Uzmanı Neler Yapar?

- Web sitesinin içerik ve kod yapısını analiz etmek
- Kurumsal ya da kişisel web siteleri için optimizasyon çalışması yürütmek
- Arama motoru algoritmalarındaki güncellemeleri takip etmek
- Backlink, tanıtım yazısı, forum tanıtımı gibi konularda çalışma yapmak

Profesyonel SEO danışmanlığı için [iletişime geçin](/iletisim).
    `
  }
];

// English Blog Posts
const blogPostsEN: BlogPost[] = [
  {
    slug: "what-is-seo-how-to-do-it",
    title: "What is SEO? How to Do SEO?",
    description: "SEO stands for Search Engine Optimization. It's the process of optimizing your site to increase visibility for relevant searches.",
    date: "2020-10-02",
    updatedDate: "2025-01-15",
    category: "SEO",
    tags: ["SEO", "Search Engine Optimization", "Google", "Digital Marketing"],
    readTime: "8 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    content: `
## What is SEO?

SEO stands for "search engine optimization." In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines.

## How does SEO work?

Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Algorithms then analyze pages in the index, taking into account hundreds of ranking factors or signals, to determine the order pages should appear in the search results for a given query.

## Why is SEO important for marketing?

SEO is a fundamental part of digital marketing because people conduct trillions of searches every year, often with commercial intent to find information about products and services. Search is often the primary source of digital traffic for brands and complements other marketing channels.

For professional SEO consulting, [contact us](/en/contact).
    `
  },
  {
    slug: "what-is-ui-ux-designer",
    title: "What is a UI/UX Designer? How Do They Work?",
    description: "Discover what UI and UX designers do, how they work, and their role in the digital product development process.",
    date: "2020-09-22",
    updatedDate: "2025-01-15",
    category: "UI-UX",
    tags: ["UI Design", "UX Design", "User Experience", "Interface Design"],
    readTime: "7 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80",
    content: `
## What is a UX Designer?

UX Designers, or user experience designers, focus on the importance of user experience. They work on improving the product development process or enhancing existing products to ensure usability and seamless user interaction.

## What is a UI Designer?

UI design encompasses typography, icons, buttons, colors, and responsive design options when building a website or application. A UI Designer ensures the visual aesthetics of applications and websites.

For detailed information, check out our [UI/UX design services](/en/services/ui-ux-design).
    `
  },
  {
    slug: "what-is-quality-backlink",
    title: "What is a Quality Backlink? How to Get Them?",
    description: "Comprehensive guide on quality backlink strategies, types of backlinks, and proper link building techniques for SEO.",
    date: "2020-09-25",
    updatedDate: "2025-01-15",
    category: "SEO",
    tags: ["Backlink", "Link Building", "SEO", "Off-Page SEO"],
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    content: `
## What is a Backlink?

A backlink is a link from one website to another. Search engines also use backlinks to navigate between web pages.

## Quality Backlink Characteristics

- Getting backlinks from sites close to your own content works better.
- It's crucial that the site you get links from is rich in visitors and content.
- The Domain Authority (DA) and Page Authority (PA) values of the linking site should be high.

For professional SEO and backlink consulting, [contact us](/en/contact).
    `
  },
  {
    slug: "what-is-inbound-marketing",
    title: "What is Inbound Marketing? How to Do It?",
    description: "Detailed guide on inbound marketing strategies, inbound marketing techniques, and customer attraction methods.",
    date: "2020-10-07",
    updatedDate: "2025-01-15",
    category: "Digital Marketing",
    tags: ["Inbound Marketing", "Content Marketing", "Digital Marketing", "Lead Generation"],
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80",
    content: `
## What is Inbound Marketing?

Inbound Marketing is a marketing strategy that attracts customers to you through quality content. In this method, you provide valuable content to attract potential customers to you.

## Inbound Marketing Stages

1. **Attract:** Capture the attention of potential customers with blog posts, social media shares, and SEO work.
2. **Convert:** Convert visitors into potential customers.
3. **Close:** Maintain your relationship through email marketing.
4. **Delight:** Satisfy your customers and turn them into brand ambassadors.

For digital marketing consulting, [contact us](/en/contact).
    `
  },
  {
    slug: "what-is-seo-specialist",
    title: "What is a Professional SEO Specialist? How to Become One?",
    description: "Comprehensive guide on the skills, training, and career path needed to become an SEO specialist.",
    date: "2020-10-13",
    updatedDate: "2025-01-15",
    category: "SEO",
    tags: ["SEO Specialist", "SEO Consultant", "Career", "Digital Marketing"],
    readTime: "15 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80",
    content: `
## What is an SEO Specialist/Consultant?

An SEO Specialist is an expert who efficiently carries out SEO work. The work done by an SEO Specialist includes making your site optimal for visitors and making the improvements necessary to attract attention from search engines.

## What Does an SEO Specialist Do?

- Analyze the content and code structure of websites
- Conduct optimization work for corporate or personal websites
- Track updates in search engine algorithms
- Work on backlinks, promotional articles, forum promotion

For professional SEO consulting, [contact us](/en/contact).
    `
  }
];

// Helper functions
export function getAllPosts(locale: string = 'tr'): BlogPost[] {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale: string = 'tr'): BlogPost | undefined {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  return posts.find(post => post.slug === slug);
}

export function getFeaturedPosts(locale: string = 'tr'): BlogPost[] {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  return posts.filter(post => post.featured);
}

export function getPostsByCategory(category: string, locale: string = 'tr'): BlogPost[] {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  return posts.filter(post => post.category === category);
}

export function getAllCategories(locale: string = 'tr'): string[] {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

export function getAllTags(locale: string = 'tr'): string[] {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  const tags = new Set(posts.flatMap(post => post.tags));
  return Array.from(tags);
}

export function getRelatedPosts(currentSlug: string, locale: string = 'tr', limit: number = 3): BlogPost[] {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  const currentPost = getPostBySlug(currentSlug, locale);
  if (!currentPost) return [];
  
  return posts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
}

// Get all slugs for static generation
export function getAllSlugs(locale: string = 'tr'): string[] {
  const posts = locale === 'en' ? blogPostsEN : blogPostsTR;
  return posts.map(post => post.slug);
}
