"use client"

import { LegalPageWrapper } from "@/components/legal-page-wrapper"
import { useLanguage } from "@/context/language-context"

function PrivacyPolicyContent() {
  const { language } = useLanguage()

  if (language === "tr") {
    return (
      <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        <h1 className="text-3xl font-bold tracking-tight">GİZLİLİK POLİTİKASI</h1>

        <p>{"Milenyum İnsan Kaynakları Limited Şirketi (\"Şirket\") olarak internet sitemizi ziyaret eden kullanıcıların, iş başvurusu yapan adayların ve iş ortaklarımızın gizliliğini korumayı temel ilke olarak benimseriz."}</p>
        <p>Bu Gizlilik Politikası, veri güvenliği, gizlilik uygulamaları, çerez kullanımı ve veri koruma tedbirlerimiz hakkında genel bilgilendirme amacıyla hazırlanmıştır. Kişisel verilerin işlenmesine ilişkin detaylı açıklamalar KVKK Aydınlatma Metni'nde yer almaktadır.</p>

        <h2>1. Kapsam</h2>
        <p>Bu politika;</p>
        <ul>
          <li>Web sitesi ziyaretçileri</li>
          <li>İş başvurusu yapan adaylar</li>
        </ul>
        <p>{"için geçerlidir. \"Kişisel veri\", \"özel nitelikli kişisel veri\" ve \"işleme\" kavramları 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") kapsamında tanımlandıkları anlamlarıyla kullanılmaktadır."}</p>

        <h2>2. Toplanan Veri Kategorileri</h2>
        <h3>2.1 Web Sitesi Ziyaretçileri</h3>
        <ul>
          <li>IP adresi</li>
          <li>Tarayıcı ve cihaz bilgileri</li>
          <li>Site kullanım hareketleri</li>
          <li>Çerez verileri</li>
        </ul>
        <h3>2.2 İş Başvurusu Yapan Adaylar</h3>
        <ul>
          <li>Kimlik bilgileri (ad, soyad)</li>
          <li>İletişim bilgileri (telefon, e-posta, adres)</li>
          <li>Özgeçmiş (CV) içeriği</li>
          <li>Eğitim ve mesleki deneyim bilgileri</li>
          <li>Referans bilgileri</li>
          <li>Yabancı dil, sertifika ve yetkinlik bilgileri</li>
          <li>Fotoğraf (yüklenmesi halinde)</li>
        </ul>
        <p>Aday tarafından paylaşılması halinde sağlık veya engellilik gibi özel nitelikli kişisel veriler yalnızca açık rıza kapsamında işlenir.</p>

        <h2>3. Hukuki Dayanakların Özeti</h2>
        <ul>
          <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
          <li>Veri sorumlusunun meşru menfaati</li>
          <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
          <li>Açık rıza (gerektiği hallerde)</li>
        </ul>

        <h2>4. Veri Paylaşımı</h2>
        <ul>
          <li>Uygun pozisyon bulunması halinde işveren firmalar</li>
          <li>Yetkili kamu kurum ve kuruluşları (kanuni zorunluluk halinde)</li>
          <li>Bilişim altyapısı, barındırma ve teknik hizmet sağlayıcılar</li>
        </ul>

        <h2>5. Yurt Dışı Veri Aktarımı</h2>
        <p>Yurt dışı iş fırsatları kapsamında kişisel verilerinizin yurt dışındaki işveren firmalara aktarılması, yalnızca açık rızanız bulunması halinde gerçekleştirilir.</p>

        <h2>6. Veri Güvenliği</h2>
        <h3>Teknik Tedbirler</h3>
        <ul>
          <li>SSL/TLS ile şifreli veri iletimi</li>
          <li>Güvenli sunucu altyapısı</li>
          <li>Erişim kontrol ve yetkilendirme sistemleri</li>
          <li>Güvenlik duvarı ve zararlı yazılım koruma sistemleri</li>
          <li>Log kayıtlarının tutulması</li>
          <li>Veri yedekleme prosedürleri</li>
          <li>Güvenli veri silme ve imha yöntemleri</li>
        </ul>
        <h3>İdari Tedbirler</h3>
        <ul>
          <li>Gizlilik ve veri koruma farkındalık çalışmaları</li>
          <li>Erişim yetkilerinin sınırlandırılması</li>
          <li>Hizmet sağlayıcılarla gizlilik sözleşmeleri</li>
          <li>Veri minimizasyonu ilkesi</li>
        </ul>

        <h2>7. Çerezler</h2>
        <p>Web sitemizde kullanıcı deneyimini geliştirmek ve site güvenliğini sağlamak amacıyla çerezler kullanılabilir. Detaylı bilgi Çerez Politikası'nda yer almaktadır.</p>

        <h2>8. Veri Saklama ve İmha</h2>
        <p>Kişisel veriler, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuata uygun olarak saklanır. Saklama süresi sona erdiğinde veriler silinir, yok edilir veya anonim hale getirilir.</p>

        <h2>9. İletişim</h2>
        <p><strong>Şirket unvanı:</strong> Milenyum İnsan Kaynakları Limited Şirketi</p>
        <p><strong>E-posta:</strong> info@milenyumik.com</p>
        <p><strong>Web:</strong> www.milenyumik.com</p>
      </article>
    )
  }

  return (
    <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">PRIVACY POLICY</h1>

      <p>{"As Milenyum İnsan Kaynakları Limited Şirketi (\"Company\"), we adopt protecting the privacy of users visiting our website, candidates applying for jobs, and our business partners as a core principle."}</p>
      <p>{"This Privacy Policy has been prepared for general information about our data security, privacy practices, cookie usage, and data protection measures. Detailed explanations regarding the processing of personal data are provided in the KVKK Disclosure Notice."}</p>

      <h2>1. Scope</h2>
      <p>This policy applies to:</p>
      <ul>
        <li>Website visitors</li>
        <li>Candidates applying for jobs</li>
      </ul>

      <h2>2. Categories of Data Collected</h2>
      <h3>2.1 Website Visitors</h3>
      <ul>
        <li>IP address</li>
        <li>Browser and device information</li>
        <li>Site usage activities</li>
        <li>Cookie data</li>
      </ul>
      <h3>2.2 Job Applicant Candidates</h3>
      <ul>
        <li>Identity information (name, surname)</li>
        <li>Contact information (phone, email, address)</li>
        <li>Resume (CV) content</li>
        <li>Education and professional experience information</li>
        <li>Reference information</li>
        <li>Foreign language, certificate, and competency information</li>
        <li>Photograph (if uploaded)</li>
      </ul>
      <p>Special categories of personal data such as health or disability shared by the candidate are processed only with explicit consent.</p>

      <h2>3. Summary of Legal Bases</h2>
      <ul>
        <li>Directly related to the establishment or performance of a contract</li>
        <li>Legitimate interest of the data controller</li>
        <li>Fulfillment of legal obligations</li>
        <li>Explicit consent (when required)</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <ul>
        <li>Employer companies when a suitable position is available</li>
        <li>Authorized public institutions and organizations (in case of legal obligation)</li>
        <li>IT infrastructure, hosting, and technical service providers</li>
      </ul>

      <h2>5. International Data Transfer</h2>
      <p>Transfer of your personal data to employer companies abroad within the scope of international job opportunities is only carried out with your explicit consent.</p>

      <h2>6. Data Security</h2>
      <h3>Technical Measures</h3>
      <ul>
        <li>Encrypted data transmission with SSL/TLS</li>
        <li>Secure server infrastructure</li>
        <li>Access control and authorization systems</li>
        <li>Firewall and malware protection systems</li>
        <li>Log record keeping</li>
        <li>Data backup procedures</li>
        <li>Secure data deletion and destruction methods</li>
      </ul>
      <h3>Administrative Measures</h3>
      <ul>
        <li>Privacy and data protection awareness activities</li>
        <li>Restriction of access authorizations</li>
        <li>Confidentiality agreements with service providers</li>
        <li>Data minimization principle</li>
      </ul>

      <h2>7. Cookies</h2>
      <p>Cookies may be used on our website to improve user experience and ensure site security. Detailed information is provided in our Cookie Policy.</p>

      <h2>8. Data Retention and Destruction</h2>
      <p>Personal data is stored for the period required by the processing purpose and in accordance with applicable legislation. When the retention period expires, data is deleted, destroyed, or anonymized.</p>

      <h2>9. Contact</h2>
      <p><strong>Company name:</strong> Milenyum İnsan Kaynakları Limited Şirketi</p>
      <p><strong>Email:</strong> info@milenyumik.com</p>
      <p><strong>Web:</strong> www.milenyumik.com</p>
    </article>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageWrapper>
      <PrivacyPolicyContent />
    </LegalPageWrapper>
  )
}
