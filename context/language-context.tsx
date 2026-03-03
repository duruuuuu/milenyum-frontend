"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "tr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // ─── Navigation ───────────────────────────────────────────────
  "nav.home": { tr: "Ana Sayfa", en: "Home" },
  "nav.corporate": { tr: "Kurumsal", en: "Corporate" },
  "nav.services": { tr: "Hizmetlerimiz", en: "Our Services" },
  "nav.jobseeker": { tr: "İş Arayan", en: "Job Seekers" },
  "nav.jobseeker.domestic": { tr: "Yurt İçi", en: "Domestic" },
  "nav.jobseeker.international": { tr: "Yurt Dışı", en: "International" },
  "nav.employer": { tr: "İşveren", en: "Employers" },
  "nav.contact": { tr: "Bize Ulaşın", en: "Contact Us" },
  "nav.blog": { tr: "Blog", en: "Blog" },
  "nav.dataprotection": {
    tr: "Kişisel Verilerin Korunması",
    en: "Data Protection",
  },

  // ─── Hero Section ─────────────────────────────────────────────
  "hero.title": {
    tr: "Milenyum İnsan Kaynakları",
    en: "Milenyum Human Resources",
  },
  "hero.subtitle": {
    tr: "Stratejik İşe Alım ve İş Gücü Yönetimi Çözüm Ortağınız",
    en: "Your Strategic Recruitment & Workforce Management Partner",
  },
  "hero.description": {
    tr: "Ulusal ve uluslararası ölçekte faaliyet gösteren, stratejik işe alım ve iş gücü yönetimi alanında uzmanlaşmış insan kaynakları danışmanlık şirketiyiz.",
    en: "We are a human resources consulting company operating on a national and international scale, specializing in strategic recruitment and workforce management.",
  },
  "hero.cta": { tr: "Hizmetlerimizi Keşfedin", en: "Discover Our Services" },
  "hero.contact": { tr: "Bize Ulaşın", en: "Contact Us" },

  // ─── Biz Kimiz / About Section ────────────────────────────────
  "about.label": { tr: "Biz Kimiz", en: "Who We Are" },
  "about.title": {
    tr: "Milenyum İnsan Kaynakları",
    en: "Milenyum Human Resources",
  },
  "about.paragraph1": {
    tr: "Milenyum İnsan Kaynakları, ulusal ve uluslararası ölçekte faaliyet gösteren, stratejik işe alım ve iş gücü yönetimi alanında uzmanlaşmış bir insan kaynakları danışmanlık şirketidir.",
    en: "Milenyum Human Resources is a human resources consulting company operating on a national and international scale, specializing in strategic recruitment and workforce management.",
  },
  "about.paragraph2": {
    tr: "İnsanı bir maliyet kalemi ya da finansal unsur olarak değil, kurumların kültürünü, performansını ve gelecekteki yönünü belirleyen temel değer kaynağı olarak konumlandırıyoruz.",
    en: "We position people not as a cost item or financial element, but as the fundamental source of value that determines an organization's culture, performance, and future direction.",
  },
  "about.paragraph3": {
    tr: "Bizim için işe alım, yalnızca bir pozisyonun doldurulması değil, organizasyonel yapıya uzun vadeli katkı sağlayacak doğru değerin doğru yapı ile buluşturulmasıdır.",
    en: "For us, recruitment is not just about filling a position, but about connecting the right value with the right structure to provide long-term contribution to the organizational framework.",
  },
  "about.paragraph4": {
    tr: "15 yılı aşkın uluslararası deneyimimizle, teknik uzmanlık gerektiren kritik rollerden yüksek hacimli proje mobilizasyonlarına kadar geniş kapsamlı çözümler sunmaktayız.",
    en: "With over 15 years of international experience, we provide comprehensive solutions ranging from critical roles requiring technical expertise to high-volume project mobilizations.",
  },

  // ─── Uzmanlık Alanları ────────────────────────────────────────
  "expertise.label": { tr: "Uzmanlık Alanlarımız", en: "Our Areas of Expertise" },
  "expertise.construction": {
    tr: "İnşaat ve altyapı projeleri",
    en: "Construction and infrastructure projects",
  },
  "expertise.energy": {
    tr: "Enerji ve santral yatırımları",
    en: "Energy and power plant investments",
  },
  "expertise.health": {
    tr: "Sağlık sektörü",
    en: "Healthcare sector",
  },
  "expertise.factory": {
    tr: "Fabrika ve endüstriyel üretim tesisleri",
    en: "Factory and industrial production facilities",
  },
  "expertise.tourism": {
    tr: "Turizm ve konaklama sektörü",
    en: "Tourism and hospitality sector",
  },
  "expertise.outro": {
    tr: "Bu sektörlerde yerel ve uluslararası iş gücü dinamiklerine hâkimiyetimizi, sınır ötesi mobilite, kültürel uyum ve mevzuat bilgisi ile bütünleştiriyoruz.",
    en: "In these sectors, we integrate our command of local and international workforce dynamics with cross-border mobility, cultural adaptation, and regulatory knowledge.",
  },
  "expertise.closing": {
    tr: "Her projede organizasyonel analiz, net yetkinlik çerçevesi ve planlı süreç yönetimi ile ilerleriz. Amacımız yalnızca pozisyon kapatmak değil; ölçülebilir, sürdürülebilir ve kurumsal değeri artıran eşleşmeler kurmaktır.",
    en: "In every project, we proceed with organizational analysis, clear competency frameworks, and planned process management. Our goal is not just to fill positions; it is to create measurable, sustainable matches that increase institutional value.",
  },
  "expertise.partners": {
    tr: "Firmalarımızı uzun vadeli stratejik iş ortağı olarak konumlandırır; adaylarımızı ise yalnızca bir kaynak değil, kariyer yolculuklarında desteklenen profesyoneller olarak görürüz.",
    en: "We position our clients as long-term strategic business partners; and our candidates not merely as resources, but as professionals supported throughout their career journeys.",
  },

  // ─── Neden Milenyum ──────────────────────────────────────────
  "why.label": { tr: "Neden Milenyum İnsan Kaynakları?", en: "Why Milenyum Human Resources?" },

  "why.pillar1.title": {
    tr: "Stratejik ve Analitik Süreç Modeli",
    en: "Strategic and Analytical Process Model",
  },
  "why.pillar1.description": {
    tr: "Her işe alım süreci, organizasyonel analiz, görev tanımı netliği ve yetkinlik matrisi ile başlatılır. Süreçler planlı, ölçülebilir ve raporlanabilir bir yapı içinde yürütülür.",
    en: "Every recruitment process begins with organizational analysis, job description clarity, and a competency matrix. Processes are conducted within a planned, measurable, and reportable framework.",
  },

  "why.pillar2.title": {
    tr: "Proaktif ve Seçici Yetenek Erişimi",
    en: "Proactive and Selective Talent Access",
  },
  "why.pillar2.description": {
    tr: "İlan temelli pasif yöntemler yerine doğrudan hedefleme ve araştırma metodolojisi kullanırız. Pasif aday pazarına erişim sağlayarak doğrulanmış ve yüksek nitelikli profesyonellere ulaşırız.",
    en: "Instead of passive ad-based methods, we use direct targeting and research methodology. By accessing the passive candidate market, we reach verified and highly qualified professionals.",
  },

  "why.pillar3.title": {
    tr: "Çok Katmanlı Değerlendirme Disiplini",
    en: "Multi-Layered Assessment Discipline",
  },
  "why.pillar3.description": {
    tr: "Yetkinlik bazlı mülakatlar, teknik analizler, yabancı dil ölçümleri ve kapsamlı referans kontrolleri ile objektif ve karar destekleyici değerlendirme sunarız.",
    en: "We provide objective, decision-supporting assessments through competency-based interviews, technical analyses, language proficiency measurements, and comprehensive reference checks.",
  },

  "why.pillar4.title": {
    tr: "Yerleştirme Sonrası Uyum ve Performans Takibi",
    en: "Post-Placement Adaptation and Performance Tracking",
  },
  "why.pillar4.description": {
    tr: "Hizmet modelimiz işe alım kararıyla sınırlı değildir. Yerleştirme sonrasında adaptasyon süreci, ilk dönem performans göstergeleri ve organizasyonel uyum değerlendirilir. Böylece sürdürülebilir katkı ve uzun vadeli başarı hedeflenir.",
    en: "Our service model is not limited to the hiring decision. After placement, the adaptation process, initial performance indicators, and organizational fit are evaluated. This targets sustainable contribution and long-term success.",
  },

  "why.pillar5.title": {
    tr: "Gizlilik ve Kurumsal Sorumluluk",
    en: "Confidentiality and Corporate Responsibility",
  },
  "why.pillar5.description": {
    tr: "Tüm süreçler gizlilik, veri koruma ve profesyonel etik standartlar çerçevesinde yürütülür. Her aşamada iş ortaklarımızı temsil ettiğimiz bilinciyle hareket ederiz.",
    en: "All processes are conducted within the framework of confidentiality, data protection, and professional ethical standards. At every stage, we act with the awareness that we represent our business partners.",
  },

  // ─── Hizmet Felsefesi ─────────────────────────────────────────
  "philosophy.label": { tr: "Hizmet Felsefemiz ve Temel İlkelerimiz", en: "Our Service Philosophy and Core Principles" },
  "philosophy.p1": {
    tr: "Hizmet anlayışımız, mevzuata uyum, etik sorumluluk, şeffaflık ve sürdürülebilir değer üretimi ilkeleri üzerine kuruludur.",
    en: "Our service approach is built on the principles of regulatory compliance, ethical responsibility, transparency, and sustainable value creation.",
  },
  "philosophy.p2": {
    tr: "İşe alım süreçlerinin stratejik doğasının bilinciyle hareket ederiz; operasyonel, hukuki ve organizasyonel riskleri önceden analiz ederiz.",
    en: "We act with awareness of the strategic nature of recruitment processes; we analyze operational, legal, and organizational risks in advance.",
  },
  "philosophy.p3": {
    tr: "Aday değerlendirmelerinde yalnızca teknik yeterlilik değil, kültürel uyum, liderlik kapasitesi, uzun vadeli performans potansiyeli ve organizasyona sağlayacağı bütünsel katkı esas alınır.",
    en: "In candidate assessments, not only technical competency, but also cultural fit, leadership capacity, long-term performance potential, and the holistic contribution to the organization are taken into account.",
  },
  "philosophy.p4": {
    tr: "Şeffaf iletişim ve düzenli bilgilendirme temel prensibimizdir. Süreçler ölçülebilir kriterler doğrultusunda yürütülür.",
    en: "Transparent communication and regular updates are our core principles. Processes are conducted according to measurable criteria.",
  },

  // ─── Yasal Uyum Section ───────────────────────────────────────
  "legal.label": { tr: "Yasal Uyum ve Uluslararası İş Gücü Yönetimi", en: "Legal Compliance and International Workforce Management" },
  "legal.intro": {
    tr: "Uluslararası işe alım ve iş gücü mobilitesi süreçlerinde ilgili ülkelerin yürürlükteki mevzuatına ve uluslararası düzenlemelere tam uyum sağlanır.",
    en: "Full compliance with the applicable legislation and international regulations of relevant countries is ensured in international recruitment and workforce mobility processes.",
  },
  "legal.regions": {
    tr: "Avrupa Birliği ülkeleri, Orta Doğu ve Afrika bölgelerinde yürütülen projelerde;",
    en: "In projects conducted in European Union countries, the Middle East, and Africa regions;",
  },
  "legal.item1": {
    tr: "Çalışma izinleri ve oturum süreçleri",
    en: "Work permits and residence processes",
  },
  "legal.item2": {
    tr: "Büyük ölçekli iş gücü mobilizasyon planlaması",
    en: "Large-scale workforce mobilization planning",
  },
  "legal.item3": {
    tr: "Yerel iş hukuku ve sosyal güvenlik yükümlülükleri",
    en: "Local labor law and social security obligations",
  },
  "legal.item4": {
    tr: "Sınır ötesi görevlendirme prosedürleri",
    en: "Cross-border assignment procedures",
  },
  "legal.item5": {
    tr: "Veri koruma ve gizlilik düzenlemeleri",
    en: "Data protection and privacy regulations",
  },
  "legal.closing": {
    tr: "Uluslararası projelerde yalnızca aday temini değil; hukuki uyum, operasyonel planlama ve risk minimizasyonu birlikte ele alınır. Böylece iş ortaklarımız için güvenli, denetlenebilir ve sürdürülebilir bir istihdam modeli oluşturulur.",
    en: "In international projects, not only candidate sourcing but also legal compliance, operational planning, and risk minimization are handled together. This creates a secure, auditable, and sustainable employment model for our business partners.",
  },

  // ─── Services Section ─────────────────────────────────────────
  "services.label": { tr: "Hizmetlerimiz", en: "Our Services" },
  "services.title": {
    tr: "Kapsamlı İK Çözümleri",
    en: "Comprehensive HR Solutions",
  },
  "services.subtitle": {
    tr: "İşletmenizin ihtiyaçlarına özel profesyonel insan kaynakları hizmetleri sunuyoruz.",
    en: "We offer professional human resources services tailored to the needs of your business.",
  },

  "service1.title": {
    tr: "Profesyonel Pozisyonlar için Araştırma ve İşe Alım",
    en: "Executive Search & Recruitment for Professional Positions",
  },
  "service1.description": {
    tr: "Mühendis ve uzman kadrolar için hedef odaklı araştırma, yetkinlik bazlı değerlendirme ve uçtan uca süreç yönetimi.",
    en: "Target-oriented search for engineers and specialists, competency-based assessment, and end-to-end process management.",
  },

  "service2.title": {
    tr: "Teknik Personel için Araştırma ve İşe Alım",
    en: "Technical Staff Search & Recruitment",
  },
  "service2.description": {
    tr: "Yurtiçi ve yurtdışı şantiye, fabrika ve endüstriyel projeler için nitelikli teknik personel temini ve mobilizasyon yönetimi.",
    en: "Qualified technical personnel supply and mobilization management for domestic and international construction sites, factories, and industrial projects.",
  },

  "service3.title": {
    tr: "Proje Bazlı Toplu İşe Alım",
    en: "Project-Based Mass Recruitment",
  },
  "service3.description": {
    tr: "Büyük ölçekli yatırımlar için kısa sürede yüksek hacimli personel temini ve organizasyonel planlama.",
    en: "High-volume personnel supply and organizational planning for large-scale investments in a short timeframe.",
  },

  "service4.title": {
    tr: "Geçici İK Yönetim Desteği",
    en: "Interim HR Management Support",
  },
  "service4.description": {
    tr: "Yapılanma sürecindeki kurumlara yurtiçi ve yurtdışı bordro, performans ve organizasyonel yapı desteği.",
    en: "Domestic and international payroll, performance, and organizational structure support for companies in the structuring phase.",
  },

  "service5.title": {
    tr: "Sınır Ötesi SGK ve İŞKUR Danışmanlığı",
    en: "Cross-Border Social Security & Labor Agency Consulting",
  },
  "service5.description": {
    tr: "Yurtdışı görevlendirmelerde sosyal güvenlik ve yasal bildirim süreçlerinin mevzuata uygun yürütülmesi.",
    en: "Legally compliant management of social security and statutory notification processes for international assignments.",
  },

  "service6.title": {
    tr: "İş Sözleşmeleri ve İK Politikaları Danışmanlığı",
    en: "Employment Contracts & HR Policy Advisory",
  },
  "service6.description": {
    tr: "Yurt içi ve yurt dışı operasyonlara uygun sözleşme ve politika yapılandırması.",
    en: "Contract and policy structuring tailored to domestic and international operations.",
  },

  "service7.title": {
    tr: "Global İşçilik Maliyetleri Danışmanlığı",
    en: "Global Labor Cost Consulting",
  },
  "service7.description": {
    tr: "Farklı ülkelerdeki işçilik maliyetleri, sosyal güvenlik yükümlülükleri ve vergi yapılarının analizi ile sürdürülebilir maliyet planlaması.",
    en: "Analysis of labor costs, social security obligations, and tax structures across different countries, along with sustainable cost planning.",
  },

  "service8.title": {
    tr: "Çalışma İzinleri Danışmanlığı",
    en: "Work Permits Advisory",
  },
  "service8.description": {
    tr: "Yurt içi ve yurt dışı projeler için çalışma ve oturum izin süreçlerinin planlanması ve yürütülmesi.",
    en: "Planning and execution of work and residence permit processes for domestic and international projects.",
  },

  "service9.title": {
    tr: "Outplacement Hizmeti (İşten Çıkış Süreç Yönetimi)",
    en: "Outplacement Services (Offboarding Process Management)",
  },
  "service9.description": {
    tr: "Yeniden yapılanma, proje kapanışı veya küçülme süreçlerinde işten çıkış operasyonlarını hukuki uyum, etik sorumluluk ve kurumsal itibar çerçevesinde yönetiyoruz.",
    en: "We manage offboarding operations during restructuring, project closures, or downsizing within the framework of legal compliance, ethical responsibility, and corporate reputation.",
  },

  // ─── Job Seekers Section ──────────────────────────────────────
  "jobseeker.label": { tr: "İş Arayan", en: "Job Seekers" },
  "jobseeker.title": {
    tr: "Kariyer Yolculuğunuzda Yanınızdayız",
    en: "We Are With You on Your Career Journey",
  },
  "jobseeker.description": {
    tr: "Yurt içi ve yurt dışı fırsatlarla kariyerinizi bir adım öteye taşıyın. Uzman ekibimiz sizi doğru pozisyonla buluşturmak için yanınızda.",
    en: "Take your career one step further with domestic and international opportunities. Our expert team is here to connect you with the right position.",
  },
  "jobseeker.domestic.title": { tr: "Yurt İçi Fırsatlar", en: "Domestic Opportunities" },
  "jobseeker.domestic.description": {
    tr: "Türkiye genelinde inşaat, enerji, sağlık, sanayi ve turizm sektörlerinde profesyonel ve teknik pozisyonlar için iş fırsatları.",
    en: "Job opportunities for professional and technical positions in construction, energy, healthcare, industry, and tourism sectors across Turkey.",
  },
  "jobseeker.international.title": { tr: "Yurt Dışı Fırsatlar", en: "International Opportunities" },
  "jobseeker.international.description": {
    tr: "Avrupa Birliği ülkeleri, Orta Doğu ve Afrika bölgelerinde yürütülen projelerde uluslararası kariyer fırsatları. Çalışma izni ve mobilizasyon süreçlerinde tam destek.",
    en: "International career opportunities in projects across European Union countries, the Middle East, and Africa. Full support with work permits and mobilization processes.",
  },

  // ─── Job Listings Pages ────────────────────────────────────────
  "jobs.domestic.hero.title": {
    tr: "Yurt İçi İş Fırsatları",
    en: "Domestic Job Opportunities",
  },
  "jobs.domestic.hero.subtitle": {
    tr: "Türkiye genelinde inşaat, enerji, sağlık, sanayi ve turizm sektörlerinde profesyonel ve teknik pozisyonlar",
    en: "Professional and technical positions in construction, energy, healthcare, industry, and tourism sectors across Turkey",
  },
  "jobs.international.hero.title": {
    tr: "Yurt Dışı İş Fırsatları",
    en: "International Job Opportunities",
  },
  "jobs.international.hero.subtitle": {
    tr: "Avrupa Birliği, Orta Doğu ve Afrika bölgelerinde uluslararası kariyer fırsatları",
    en: "International career opportunities in the European Union, Middle East, and Africa regions",
  },
  "jobs.openPositions": { tr: "Açık Pozisyonlar", en: "Open Positions" },
  "jobs.noPositions": {
    tr: "Şu anda açık pozisyon bulunmamaktadır. Yeni fırsatlar için düzenli olarak kontrol edin.",
    en: "There are no open positions at the moment. Check back regularly for new opportunities.",
  },
  "jobs.apply": { tr: "Başvur", en: "Apply" },
  "jobs.applyNow": { tr: "Şimdi Başvur", en: "Apply Now" },
  "jobs.location": { tr: "Konum", en: "Location" },
  "jobs.sector": { tr: "Sektör", en: "Sector" },
  "jobs.type": { tr: "Çalışma Şekli", en: "Employment Type" },
  "jobs.fulltime": { tr: "Tam Zamanlı", en: "Full-Time" },
  "jobs.parttime": { tr: "Yarı Zamanlı", en: "Part-Time" },
  "jobs.contract": { tr: "Sözleşmeli", en: "Contract" },
  "jobs.backToHome": { tr: "Ana Sayfaya Dön", en: "Back to Home" },
  "jobs.application.title": { tr: "Pozisyona Başvur", en: "Apply for Position" },
  "jobs.application.name": { tr: "Ad Soyad", en: "Full Name" },
  "jobs.application.email": { tr: "E-posta", en: "Email" },
  "jobs.application.phone": { tr: "Telefon", en: "Phone" },
  "jobs.application.cv": { tr: "CV Yükle (PDF)", en: "Upload CV (PDF)" },
  "jobs.application.coverLetter": { tr: "Ön Yazı (İsteğe Bağlı)", en: "Cover Letter (Optional)" },
  "jobs.application.submit": { tr: "Başvuruyu Gönder", en: "Submit Application" },
  "jobs.application.success": {
    tr: "Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.",
    en: "Your application has been received successfully. We will contact you as soon as possible.",
  },
  "jobs.application.close": { tr: "Kapat", en: "Close" },
  "jobs.filter.all": { tr: "Tümü", en: "All" },
  "jobs.filter.sector": { tr: "Sektöre Göre Filtrele", en: "Filter by Sector" },
  "jobs.viewDomestic": { tr: "Yurt İçi İlanları Gör", en: "View Domestic Listings" },
  "jobs.viewInternational": { tr: "Yurt Dışı İlanları Gör", en: "View International Listings" },

  // ─── Employer Section ─────────────────────────────────────────
  "employer.label": { tr: "İşveren", en: "Employers" },
  "employer.title": {
    tr: "Stratejik İş Gücü Çözümleri",
    en: "Strategic Workforce Solutions",
  },
  "employer.description": {
    tr: "İşletmeniz için doğru yetenekleri bulmak, değerlendirmek ve yerleştirmek konusunda stratejik iş ortağınız olarak yanınızdayız.",
    en: "We stand by you as your strategic partner in finding, evaluating, and placing the right talent for your business.",
  },

  // ─── Contact Section ──────────────────────────────────────────
  "contact.label": { tr: "Bize Ulaşın", en: "Contact Us" },
  "contact.title": {
    tr: "İletişime Geçin",
    en: "Get in Touch",
  },
  "contact.description": {
    tr: "Sorularınız, iş birliği teklifleriniz veya iş başvurularınız için bizimle iletişime geçin.",
    en: "Contact us for your questions, partnership proposals, or job applications.",
  },
  "contact.name": { tr: "Ad Soyad", en: "Full Name" },
  "contact.email": { tr: "E-posta", en: "Email" },
  "contact.phone": { tr: "Telefon", en: "Phone" },
  "contact.message": { tr: "Mesajınız", en: "Your Message" },
  "contact.send": { tr: "Mesaj Gönder", en: "Send Message" },

  // ─── Blog ─────────────────────────────────────────────────────
  "blog.label": { tr: "Blog", en: "Blog" },
  "blog.title": {
    tr: "Güncel Yazılar",
    en: "Latest Articles",
  },
  "blog.comingsoon": {
    tr: "Blog yazılarımız çok yakında burada olacak.",
    en: "Our blog articles will be here very soon.",
  },

  // ─── Stats ────────────────────────────────────────────────────
  "stat1.number": { tr: "500+", en: "500+" },
  "stat1.label": { tr: "Mutlu Müşteri", en: "Happy Clients" },
  "stat2.number": { tr: "15+", en: "15+" },
  "stat2.label": { tr: "Yıllık Deneyim", en: "Years of Experience" },
  "stat3.number": { tr: "10K+", en: "10K+" },
  "stat3.label": { tr: "Yerleştirilen Personel", en: "Placed Personnel" },
  "stat4.number": { tr: "50+", en: "50+" },
  "stat4.label": { tr: "Uzman Kadro", en: "Expert Staff" },

  // ─── Footer ───────────────────────────────────────────────────
  "footer.description": {
    tr: "Ulusal ve uluslararası ölçekte stratejik işe alım ve iş gücü yönetimi çözümleri.",
    en: "Strategic recruitment and workforce management solutions on a national and international scale.",
  },
  "footer.quicklinks": { tr: "Hızlı Bağlantılar", en: "Quick Links" },
  "footer.contact": { tr: "İletişim", en: "Contact" },
  "footer.legal": { tr: "Yasal", en: "Legal" },
  "footer.privacy": { tr: "Gizlilik Politikası", en: "Privacy Policy" },
  "footer.cookie": { tr: "Çerez Politikası", en: "Cookie Policy" },
  "footer.kvkk": { tr: "KVKK Aydınlatma Metni", en: "KVKK Disclosure Notice" },
  "footer.dataretention": { tr: "Veri Saklama ve İmha Politikası", en: "Data Retention & Destruction Policy" },
  "footer.candidatedata": { tr: "Aday Veri Saklama Politikası", en: "Candidate Data Retention Policy" },
  "footer.rights": { tr: "Tüm hakları saklıdır.", en: "All rights reserved." },
  "footer.address": {
    tr: "[BURAYA ADRES GİRİN]",
    en: "[ENTER YOUR ADDRESS HERE]",
  },
  "footer.phone": {
    tr: "[BURAYA TELEFON GİRİN]",
    en: "[ENTER YOUR PHONE HERE]",
  },
  "footer.email": {
    tr: "info@milenyumik.com",
    en: "info@milenyumik.com",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
