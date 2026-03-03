"use client"

import { LegalPageWrapper } from "@/components/legal-page-wrapper"
import { useLanguage } from "@/context/language-context"

function CandidateDataContent() {
  const { language } = useLanguage()

  if (language === "tr") {
    return (
      <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        <h1 className="text-3xl font-bold tracking-tight">ADAY VERİ SAKLAMA VE MUHAFAZA POLİTİKASI</h1>

        <h2>1. Amaç ve Kapsam</h2>
        <p>{"Bu politika, Milenyum İnsan Kaynakları Limited Şirketi (\"Şirket\") tarafından iş başvurusu süreçleri kapsamında elde edilen adaylara ait kişisel verilerin saklanması, korunması ve imhasına ilişkin esasları düzenlemektedir."}</p>
        <p>{"Şirket, kişisel verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") hükümlerine uygun olarak işlemekte; bilgi güvenliği süreçleri ISO/IEC 27001 Bilgi Güvenliği Yönetim Sistemi standartları referans alınarak yapılandırılmaktadır."}</p>

        <h2>2. Saklama Süreleri ve Hukuki Dayanak</h2>
        <h3>2.1 İş Başvuru Süreci</h3>
        <p>İş başvuru sürecinin tamamlanmasından itibaren adaylara ait kişisel veriler en fazla 2 yıl süreyle saklanır.</p>
        <p><strong>Hukuki Dayanak:</strong> KVKK m.5/2-f (Veri sorumlusunun meşru menfaati)</p>

        <h3>2.2 Aday Havuzu (Açık Rıza Bulunması Halinde)</h3>
        <p>Adayın açık rıza vermesi halinde, kişisel veriler ileride oluşabilecek uygun pozisyonlar için değerlendirilmek üzere en fazla 2 yıl daha saklanabilir.</p>
        <p><strong>Hukuki Dayanak:</strong> KVKK m.5/1 (Açık rıza)</p>
        <p>Açık rıza bulunmaması halinde aday verileri havuzda tutulmaz.</p>

        <h3>2.3 Mevzuat Gereği Saklama</h3>
        <p>İlgili mevzuat uyarınca daha uzun süre saklanması gereken veriler, ilgili kanuni süre boyunca muhafaza edilir.</p>

        <h2>3. Risk Temelli Saklama Yaklaşımı</h2>
        <ul>
          <li>Veri kategorileri sınıflandırılır</li>
          <li>Veri hassasiyet seviyeleri belirlenir</li>
          <li>Erişim yetkileri rol bazlı tanımlanır</li>
          <li>Risk değerlendirmeleri periyodik olarak gözden geçirilir</li>
        </ul>

        <h2>4. Veri Güvenliği ve ISO/IEC 27001 Prensipleri</h2>
        <h3>4.1 Teknik Kontroller</h3>
        <ul>
          <li>Güvenli sunucu altyapısı</li>
          <li>Erişim kontrol ve yetkilendirme sistemleri</li>
          <li>Log kayıtlarının tutulması ve izlenmesi</li>
          <li>Veri şifreleme yöntemleri</li>
          <li>Güvenli veri yedekleme prosedürleri</li>
          <li>Ağ ve sistem güvenliği önlemleri</li>
        </ul>
        <h3>4.2 İdari Kontroller</h3>
        <ul>
          <li>Gizlilik taahhütnameleri</li>
          <li>Yetki matrisi uygulamaları</li>
          <li>Personel erişim sınırlandırmaları</li>
          <li>Bilgi güvenliği farkındalık çalışmaları</li>
          <li>Periyodik iç denetim ve gözden geçirme mekanizmaları</li>
        </ul>

        <h2>5. İmha Süreci</h2>
        <p>Saklama süresi sona eren kişisel veriler:</p>
        <ul>
          <li>Dijital ortamda güvenli silme yöntemleri ile</li>
          <li>Fiziksel ortamda imha makineleri aracılığıyla</li>
          <li>Veya anonimleştirme teknikleri kullanılarak</li>
        </ul>
        <p>geri getirilemeyecek şekilde imha edilir. Periyodik imha işlemleri en geç altı ayda bir kez gerçekleştirilir.</p>

        <h2>6. Olay Yönetimi ve İş Sürekliliği</h2>
        <p>Bilgi güvenliği ihlali şüphesi oluşması halinde olay yönetim prosedürü devreye alınır, gerekli teknik ve hukuki değerlendirmeler yapılır.</p>

        <h2>7. İlgili Kişi Hakları</h2>
        <p>Adaylar, 6698 sayılı KVKK'nın 11. maddesi kapsamında sahip oldukları haklara ilişkin taleplerini <strong>info@milenyumik.com</strong> adresi üzerinden iletebilir.</p>
      </article>
    )
  }

  return (
    <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">CANDIDATE DATA RETENTION AND PRESERVATION POLICY</h1>

      <h2>1. Purpose and Scope</h2>
      <p>{"This policy regulates the principles regarding the storage, protection, and destruction of personal data belonging to candidates obtained within the scope of job application processes by Milenyum İnsan Kaynakları Limited Şirketi (\"Company\")."}</p>
      <p>The Company processes personal data in compliance with KVKK Law No. 6698. Information security processes are structured with reference to ISO/IEC 27001 Information Security Management System standards.</p>

      <h2>2. Retention Periods and Legal Basis</h2>
      <h3>2.1 Job Application Process</h3>
      <p>Personal data belonging to candidates is retained for a maximum of 2 years from the completion of the job application process.</p>
      <p><strong>Legal Basis:</strong> KVKK Art.5/2-f (Legitimate interest of the data controller)</p>

      <h3>2.2 Candidate Pool (With Explicit Consent)</h3>
      <p>If the candidate gives explicit consent, personal data may be retained for an additional 2 years to be evaluated for suitable positions that may arise in the future.</p>
      <p><strong>Legal Basis:</strong> KVKK Art.5/1 (Explicit consent)</p>
      <p>In the absence of explicit consent, candidate data is not retained in the pool.</p>

      <h3>2.3 Statutory Retention</h3>
      <p>Data that needs to be retained for a longer period pursuant to applicable legislation is preserved for the relevant statutory period.</p>

      <h2>3. Risk-Based Retention Approach</h2>
      <ul>
        <li>Data categories are classified</li>
        <li>Data sensitivity levels are determined</li>
        <li>Access authorizations are defined on a role basis</li>
        <li>Risk assessments are periodically reviewed</li>
      </ul>

      <h2>4. Data Security and ISO/IEC 27001 Principles</h2>
      <h3>4.1 Technical Controls</h3>
      <ul>
        <li>Secure server infrastructure</li>
        <li>Access control and authorization systems</li>
        <li>Log recording and monitoring</li>
        <li>Data encryption methods</li>
        <li>Secure data backup procedures</li>
        <li>Network and system security measures</li>
      </ul>
      <h3>4.2 Administrative Controls</h3>
      <ul>
        <li>Confidentiality commitments</li>
        <li>Authorization matrix applications</li>
        <li>Personnel access restrictions</li>
        <li>Information security awareness activities</li>
        <li>Periodic internal audit and review mechanisms</li>
      </ul>

      <h2>5. Destruction Process</h2>
      <p>Personal data whose retention period has expired is destroyed irreversibly through:</p>
      <ul>
        <li>Secure deletion methods in digital media</li>
        <li>Destruction machines in physical media</li>
        <li>Anonymization techniques</li>
      </ul>
      <p>Periodic destruction is carried out at least once every six months.</p>

      <h2>6. Incident Management and Business Continuity</h2>
      <p>In case of suspicion of an information security breach, the incident management procedure is activated, and necessary technical and legal assessments are made.</p>

      <h2>7. Data Subject Rights</h2>
      <p>Candidates may submit their requests regarding their rights under Article 11 of KVKK Law No. 6698 via <strong>info@milenyumik.com</strong>.</p>
    </article>
  )
}

export default function CandidateDataPage() {
  return (
    <LegalPageWrapper>
      <CandidateDataContent />
    </LegalPageWrapper>
  )
}
