export type ProjectLocale = "tr" | "en";
export type LocalizedText = Record<ProjectLocale, string>;
export interface AiProject {
  slug: string;
  name: string;
  title: LocalizedText;
  summary: LocalizedText;
  responsibility: LocalizedText;
  highlights: Record<ProjectLocale, string[]>;
  stack: string[];
  image?: string;
  imageAlt?: LocalizedText;
  externalUrl?: string;
  status: "ai-product" | "ai-assisted";
  source: "etsy" | "independent";
  confirmedAiTools?: string[];
  initials: string;
}
const etsy = (id: string, path: string) => "https://www.etsy.com/listing/" + id + "/" + path;
const etsyImg = (path: string) => "https://i.etsystatic.com/54551047/r/il/" + path;
export const aiProjects: AiProject[] = [
  {
    slug: "povlex", name: "Povlex", initials: "PV", source: "independent", status: "ai-product",
    title: {tr:"Yapay Zeka Destekli Povlex: SEO, GEO ve UX Analiz Platformu",en:"AI-Powered Povlex: SEO, GEO & UX Analysis Platform"},
    summary: {tr:"Web sitelerinin teknik SEO, yapay zeka arama görünürlüğü ve kullanıcı deneyimi sorunlarını değerlendirip iyileştirme alanlarını sunmak için geliştirilen ürün.",en:"A product initiative evaluating technical SEO, AI-search visibility and UX issues to highlight areas for improvement."},
    responsibility:{tr:"Ürün stratejisi, analiz kapsamı, deneyim mimarisi ve geliştirme önceliklerinin yönetimi.",en:"Product strategy, audit scope, experience architecture and development prioritization."},
    highlights:{tr:["SEO, GEO ve UX değerlendirmelerinin ortak ürün deneyiminde kurgulanması","Analiz raporlarının ve aksiyon önceliklendirme akışının tasarlanması","Pilot geliştirme, doğrulama ve ürün yol haritasının yönetimi"],en:["Structuring SEO, GEO and UX diagnostics in one product","Designing reporting and prioritized recommendations","Managing pilot delivery, validation and the product roadmap"]},
    stack:["Product Management","SEO","GEO","UX","AI Workflows"]
  },
  {
    slug:"agencyos",name:"AgencyOS",initials:"AO",source:"independent",status:"ai-product",
    title:{tr:"AI Agent Tabanlı AgencyOS: Dijital Fırsat Analizi",en:"AI Agent-Based AgencyOS: Digital Opportunity Analysis"},
    summary:{tr:"İşletmelerde dijital dönüşüm fırsatlarını belirlemeye ve araştırma çıktılarından önceliklendirilebilir iş listeleri oluşturmaya yönelik agent sistemi.",en:"An agent-oriented initiative to find digital transformation gaps and turn business research into prioritized opportunities."},
    responsibility:{tr:"İş hedeflerinin tanımlanması, agent iş akışlarının modellenmesi, veri toplama ve raporlama süreçlerinin koordinasyonu.",en:"Defining business objectives, shaping agent workflows and coordinating data collection and reporting."},
    highlights:{tr:["İşletmelerin dijital varlıkları üzerinden fırsat değerlendirme kurgusu","Agent tabanlı araştırma ve analiz adımlarının tasarımı","Çıktıların önceliklendirilmesi ve takip süreçlerinin geliştirilmesi"],en:["Opportunity analysis using business digital presence signals","Designing agent-based research and analysis steps","Prioritizing findings and tracking execution"]},
    stack:["AI Agents","Automation","Product Strategy","Workflow Design"],
    externalUrl:"https://github.com/tonguc/agencyos-bot"
  },
  {
    slug:"auditpro",name:"AuditPro",initials:"AP",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen AuditPro: 211 Maddelik SEO, GEO ve UX Denetimi",en:"AI-Assisted AuditPro: 211-Point SEO, GEO & UX Audit Toolkit"},
    summary:{tr:"Manuel web sitesi denetimini puanlama, önceliklendirme, markalı PDF rapor, teklif ve sunuma dönüştüren çevrimdışı ürün.",en:"An offline toolkit turning manual website reviews into scoring, prioritized findings, branded PDF reports, proposals and presentations."},
    responsibility:{tr:"Ürün kapsamı, bilgi mimarisi, UI/UX, raporlama modülleri ve teslim süreçlerinin yönetimi.",en:"Product scope, information architecture, UX, reporting features and delivery leadership."},
    highlights:{tr:["211 kontrol noktası: teknik SEO, içerik, UX, CRO ve AI görünürlüğü","Markalı PDF rapor, müşteri teklifi ve sunum akışları","Denetim kontrolü manuel; yazılım otomatik AI taraması yapıyor olarak sunulmuyor"],en:["211 checkpoints covering SEO, content, UX, CRO and AI visibility","Branded PDF reports, proposals and presentation workflows","Manual checkpoint review; not presented as an automated AI scanner"]},
    stack:["Product Design","UX","HTML/JavaScript","SEO","GEO","Claude"],
    confirmedAiTools:["Claude"],
    image:etsyImg("ed6f99/8402700086/il_794xN.8402700086_sz8k.jpg"),
    externalUrl:etsy("4510766367","white-label-website-audit-toolkit-for")
  },
  {
    slug:"ai-visibility-scorecard",name:"AI Visibility Scorecard",initials:"AI",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen AI Visibility Scorecard: Marka Görünürlük Analizi",en:"AI-Assisted AI Visibility Scorecard: Brand Visibility Assessment"},
    summary:{tr:"ChatGPT, Claude, Gemini ve diğer AI arama ortamları için işletmenin görünürlük hazırlığını ölçen rehberli değerlendirme ve iyileştirme aracı.",en:"A guided self-assessment of business readiness for AI-powered discovery channels including ChatGPT, Claude and Gemini."},
    responsibility:{tr:"Değerlendirme modeli, soru akışları, karşılaştırma deneyimi, rapor ve yol haritasının ürünleştirilmesi.",en:"Designing the assessment model, question flows, comparison experience, reporting and improvement roadmap."},
    highlights:{tr:["Görünürlük skoru ve platform bazlı hazırlık değerlendirmesi","Rehberli analiz ve altı adımlı iyileştirme planı","Canlı AI yanıtlarını otomatik sorgulayan sistem değil; öz değerlendirme aracıdır"],en:["Visibility score and platform readiness assessment","Guided diagnosis with a six-step roadmap","A self-assessment, not a live AI response-tracking engine"]},
    stack:["AI Search","GEO","UX","Product Strategy","PDF Reports"],
    image:etsyImg("03c880/8601230336/il_794xN.8601230336_lufe.jpg"),
    externalUrl:etsy("4515236980","why-ai-recommends-your-competitors-ai")
  },
  {
    slug:"hostiq",name:"HostIQ / Airbnb Host Dashboard",initials:"HI",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen HostIQ: Airbnb Performans ve Fiyatlama Ürünü",en:"AI-Assisted HostIQ: Airbnb Performance & Pricing Product"},
    summary:{tr:"Kısa dönem konaklama işletmeleri için değerlendirme puanı, fiyatlama senaryoları ve rezervasyon iyileştirme yol haritası sunan ürün.",en:"A vacation-rental product combining performance assessment, pricing scenarios and booking improvement guidance."},
    responsibility:{tr:"Ürün kurgusu, skor modeli, fiyatlama karar ekranları ve kullanıcı yolculuğunun yönetimi.",en:"Owning the product concept, scoring model, pricing decisions and user journeys."},
    highlights:{tr:["Konaklama performansının farklı başlıklarda puanlanması","Hafta içi, hafta sonu ve sezonluk fiyatlama senaryoları","Çıktıları eylem planına dönüştüren kullanıcı deneyimi"],en:["Performance scoring across hosting dimensions","Weekday, weekend and seasonal pricing scenarios","A user flow turning results into actionable plans"]},
    stack:["Product Design","UX","Pricing Models","Hospitality Analytics"],
    image:etsyImg("1b4936/8155997739/il_794xN.8155997739_cbb8.jpg"),
    externalUrl:etsy("4517682128","airbnb-host-dashboard-pricing-calculator")
  },
  {
    slug:"finance-os",name:"Finance OS",initials:"FO",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen Finance OS: Finansal Yönetim Dashboard'u",en:"AI-Assisted Finance OS: Personal Finance Management Dashboard"},
    summary:{tr:"Bütçe, borç kapatma, tasarruf hedefleri ve net varlığı ortak bir etkileşimli arayüzde birleştiren çevrimdışı ürün.",en:"An offline interactive app unifying budgets, debt payoff, savings goals and net worth."},
    responsibility:{tr:"Ürün stratejisi, finansal bilgi mimarisi, dashboard ve karar destek deneyimlerinin tasarlanması.",en:"Product strategy, financial information architecture, dashboard and decision-support UX."},
    highlights:{tr:["Güvenli harcama limiti ve bütçe sağlığı görünümü","Snowball/Avalanche borç planlama ve tasarruf hedefleri","Çevrimdışı çalışan, abonelik gerektirmeyen ürün yapısı"],en:["Safe-to-spend and budget health dashboard","Snowball/Avalanche debt planning and savings goals","Offline-first experience without a recurring app subscription"]},
    stack:["Finance UX","Dashboards","Offline Web App","Product Design"],
    image:etsyImg("33dc86/8429601003/il_794xN.8429601003_9z8k.jpg"),
    externalUrl:etsy("4553936660","finance-os-budget-dashboard-debt-payoff")
  },
  {
    slug:"clearpath",name:"ClearPath",initials:"CP",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen ClearPath: Borç Yönetimi ve Ödeme Simülasyonu",en:"AI-Assisted ClearPath: Debt Payoff Planning & Simulation"},
    summary:{tr:"Borç kartopu ve çığ yöntemlerini karşılaştıran, ödeme takvimi ve tahmini kapanış tarihi sunan etkileşimli planlama uygulaması.",en:"An interactive debt-payoff tool comparing snowball and avalanche approaches with payment timelines."},
    responsibility:{tr:"Finansal karar akışlarının ürünleştirilmesi, senaryo karşılaştırma ve görselleştirme tasarımı.",en:"Turning financial decision scenarios into a comparison and visualization product."},
    highlights:{tr:["Snowball ve Avalanche karşılaştırması","Tahmini borç bitiş tarihi ve aylık yol haritası","Çevrimdışı HTML deneyimi ve CSV çıktı"],en:["Snowball versus avalanche comparisons","Estimated payoff date and monthly milestones","Offline HTML experience with CSV output"]},
    stack:["Simulation UX","JavaScript","Offline App","Product Design"],
    image:etsyImg("7764c1/8605883744/il_794xN.8605883744_2njl.jpg"),
    externalUrl:etsy("4586244352","debt-payoff-planner-app-snowball")
  },
  {
    slug:"renewly",name:"Renewly",initials:"RL",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen Renewly: Abonelik ve Yenileme Yönetimi",en:"AI-Assisted Renewly: Subscription & Renewal Management"},
    summary:{tr:"Yenileme takvimi, yıllık maliyet, 12 aylık nakit akışı ve iptal planlamasını tek ekranda birleştiren uygulama.",en:"An offline subscription organizer combining renewals, annual costs, cash-flow forecasting and cancellation planning."},
    responsibility:{tr:"Ürün gereksinimleri, finansal takvim akışı, veri saklama ve raporlama deneyiminin yönetimi.",en:"Product requirements, renewal calendar, local data handling and reporting UX."},
    highlights:{tr:["12 aylık ödeme öngörüsü ve yenileme takvimi","Abonelik maliyetleri ve iptal adaylarının takibi","Yerel saklama, JSON yedekleme ve CSV dışa aktarma"],en:["12-month scheduled-cost outlook and renewal calendar","Tracking recurring costs and potential cancellations","Local storage with JSON backups and CSV reports"]},
    stack:["Offline Web App","Dashboard UX","Data Visualization"],
    image:etsyImg("01b495/8624056716/il_794xN.8624056716_dzyu.jpg"),
    externalUrl:etsy("4588598046","subscription-tracker-app-offline-bill")
  },
  {
    slug:"renewary",name:"Renewary",initials:"RY",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen Renewary: Abonelik Kontrol Paneli",en:"AI-Assisted Renewary: Subscription Control Dashboard"},
    summary:{tr:"Düzenli ödemeler, yenileme günleri ve olası iptal tasarrufları için tasarlanan abonelik kontrol paneli.",en:"A browser-based subscription dashboard for recurring charges, renewal dates and cancellation savings."},
    responsibility:{tr:"Ürün akışları, kullanıcı deneyimi, filtreleme ve abonelik yaşam döngüsünün yönetimi.",en:"Product flows, user experience, filtering and subscription lifecycle design."},
    highlights:{tr:["Yenileme takvimi ve maliyet özetleri","İptal listesi, yenileme işaretleme ve geri alma","Çevrimdışı kullanım ve JSON yedekleme"],en:["Renewal calendar and expense summaries","Cancellation shortlist and renewal tracking","Offline usage and JSON backups"]},
    stack:["UX","Offline Web App","Subscription Planning"],
    image:etsyImg("3d6344/8640121815/il_794xN.8640121815_jfgz.jpg"),
    externalUrl:etsy("4584443956","subscription-tracker-dashboard-renewal")
  },
  {
    slug:"paycheck-budget",name:"Paycheck Budget Tracker",initials:"PB",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen Paycheck Budget: Gelir Dönemi Bütçe Yönetimi",en:"AI-Assisted Paycheck Budget: Pay-Period Finance Tracker"},
    summary:{tr:"Haftalık ve aylık ödeme dönemlerine göre gelir, gider ve kategori bütçesini izleyen etkileşimli dashboard.",en:"An interactive dashboard tracking income, spending and category budgets by pay period."},
    responsibility:{tr:"Bütçeleme deneyimi, farklı ödeme sıklıkları ve mobil uyumlu dashboard yapısının tasarımı.",en:"Designing budgeting flows for multiple pay frequencies and a responsive dashboard."},
    highlights:{tr:["Haftalık, iki haftalık ve aylık gelir dönemleri","Kategori bazlı grafikler ve bütçe görünümü","Yerel veri saklama ve CSV dışa aktarma"],en:["Weekly, biweekly and monthly pay-period views","Category charts and budget status","Local data handling and CSV export"]},
    stack:["Dashboard UX","Offline Web App","Budgeting"],
    image:etsyImg("d3e4e4/8400892798/il_794xN.8400892798_mun4.jpg"),
    externalUrl:etsy("4556511586","paycheck-budget-tracker-digital-budget")
  },
  {
    slug:"simple-budget",name:"Simple Budget Spreadsheet",initials:"SB",source:"etsy",status:"ai-assisted",
    title:{tr:"AI ile Hazırlanan Simple Budget: Google Sheets Bütçe Şablonu",en:"AI-Assisted Simple Budget: Google Sheets Tracker"},
    summary:{tr:"Gelir, gider ve tasarrufları otomatik hesaplayan, erişilebilir bir Google Sheets bütçe aracı.",en:"A Google Sheets template tracking income, expenses and savings with automatic calculations."},
    responsibility:{tr:"Bilgi yapısı, kategori sistemi ve görsel raporlama mantığının oluşturulması.",en:"Designing the information structure, budget categories and visual reporting logic."},
    highlights:{tr:["Aylık gelir ve gider takibi","Otomatik formüller ve basit grafikler","Google Sheets üzerinde kolay düzenlenebilir şablon"],en:["Monthly income and expense tracking","Automatic calculations and simple charts","Editable Google Sheets template"]},
    stack:["Google Sheets","Spreadsheet UX","Finance"],
    image:etsyImg("9eece9/8381859928/il_794xN.8381859928_lxhp.jpg"),
    externalUrl:etsy("4555536650","simple-budget-spreadsheet-google-sheets")
  },
  {
    slug:"whattime-city",name:"whattime.city",initials:"WT",source:"independent",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen whattime.city: Küresel Saat ve Zaman Dilimi Platformu",en:"AI-Assisted whattime.city: World Clock & Time Zone Platform"},
    summary:{tr:"Dünya saati, şehir karşılaştırmaları, toplantı saati planlama ve zaman dilimi dönüşümleri sunan içerik ve araç platformu.",en:"A world-clock, city comparison, meeting-planner and time-zone conversion platform."},
    responsibility:{tr:"Ürün kapsamı, bilgi mimarisi, SEO odaklı içerik sistemi ve web deneyiminin planlanması.",en:"Planning the product scope, information architecture, SEO-driven content and web UX."},
    highlights:{tr:["Şehir ve ülke bazlı dünya saati ekranları","Saat dilimi dönüşümü ve toplantı planlama araçları","Uluslararası bilgi mimarisi ve çok sayıda şehir sayfası"],en:["City and country clocks","Time-zone conversion and meeting planning","Global information architecture with city-specific pages"]},
    stack:["Next.js","SEO","Product Strategy","Web UX"],
    image:"https://raw.githubusercontent.com/tonguc/whattime-city/main/public/og-image.svg",
    externalUrl:"https://whattime.city"
  },
  {
    slug:"hastaonay",name:"hastaOnay",initials:"HO",source:"independent",status:"ai-assisted",
    title:{tr:"AI ile Prototiplenen hastaOnay: Dijital Hasta Onay Süreçleri",en:"AI-Assisted hastaOnay Prototype: Digital Patient Consent Workflow"},
    summary:{tr:"Hasta bilgilendirme, onay akışı, kayıt ve doğrulama adımlarını dijitalleştirmeye yönelik ürün çalışması.",en:"A product concept for digitizing patient information, consent, recordkeeping and verification workflows."},
    responsibility:{tr:"İş akışı analizi, onay ve kayıt deneyimi, süreç tasarımı ve prototip kapsamının yönetimi.",en:"Workflow analysis, consent and record UX, process design and prototype scope."},
    highlights:{tr:["Hasta, hekim ve kurum süreçlerinin akış bazında modellenmesi","SMS/e-posta doğrulama ve kayıt izleri için ürün tasarımı","Hukuki geçerlilik veya KVKK uyumu doğrulanmış ürün olarak tanıtılmıyor"],en:["Modeling patient, clinician and provider workflows","Designing email/SMS verification and record trails","Not represented as a legally certified consent system"]},
    stack:["Product Strategy","Healthcare UX","Workflow Automation","Prototype"]
  },
  {
    slug:"inventory-profit",name:"Inventory & Profit Tracker",initials:"IP",source:"independent",status:"ai-assisted",
    title:{tr:"AI ile Geliştirilen Stok ve Kârlılık Takip Uygulaması",en:"AI-Assisted Inventory & Profit Tracking App"},
    summary:{tr:"Küçük işletmelerin stok hareketlerini, ürün bazlı kârlılığı ve satış verilerini izleyebilmesi için geliştirilen dashboard.",en:"A small-business dashboard for inventory movements, product profitability and sales tracking."},
    responsibility:{tr:"Stok ve maliyet veri modeli, raporlama ekranları, düşük stok uyarıları ve ürün akışlarının yönetimi.",en:"Inventory and cost model, reporting UX, low-stock alerts and product flows."},
    highlights:{tr:["Stok ve satış hareketlerinin izlenmesi","Ürün bazlı kârlılık ve satış görselleştirmeleri","Raporlama ve CSV çıktısı"],en:["Inventory and sales tracking","Product profitability and sales insights","Reporting and CSV exports"]},
    stack:["Product Design","Inventory Analytics","Dashboard UX"]
  }
];
export function findAiProject(slug: string) { return aiProjects.find(p=>p.slug===slug); }
export function aiProjectHref(locale: ProjectLocale, slug: string) {
  return (locale === "tr" ? "" : "/en") + "/ai-projects/" + slug;
}
