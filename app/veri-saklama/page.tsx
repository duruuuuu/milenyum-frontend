"use client"

import { LegalPageWrapper } from "@/components/legal-page-wrapper"
import { useLanguage } from "@/context/language-context"

function DataRetentionContent() {
  const { language } = useLanguage()

  if (language === "tr") {
    return (
      <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        <h1 className="text-3xl font-bold tracking-tight">KVKK VERİ SAKLAMA VE İMHA POLİTİKASI</h1>

        <h2>1. Amaç</h2>
        <p>{"Bu Veri Saklama ve İmha Politikası (\"Politika\"), Milenyum İnsan Kaynakları Limited Şirketi (\"Şirket\") tarafından işlenen kişisel verilerin 6698 sayılı KVKK, Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik ve ilgili ikincil mevzuat uyarınca saklama sürelerinin belirlenmesi ve süresi dolan verilerin imha edilmesine ilişkin usul ve esasları düzenlemektedir."}</p>

        <h2>2. Kapsam</h2>
        <ul>
          <li>İş başvurusu yapan adaylara ait verileri</li>
          <li>Yerleştirilen adaylara ait verileri</li>
          <li>İşveren yetkililerine ait kişisel verileri</li>
          <li>Sözleşmesel kayıtları</li>
          <li>Muhasebe ve finans verilerini</li>
          <li>Web sitesi ziyaretçi verilerini</li>
        </ul>

        <h2>3. Tanımlar</h2>
        <ul>
          <li><strong>Kişisel Veri:</strong> Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi.</li>
          <li><strong>İmha:</strong> Kişisel verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi.</li>
          <li><strong>Periyodik İmha:</strong> Kanunda belirtilen işleme şartlarının ortadan kalkması halinde, Şirket tarafından re'sen gerçekleştirilen imha işlemi.</li>
        </ul>

        <h2>4. Saklama ve İmha İlkeleri</h2>
        <ul>
          <li>Hukuka ve dürüstlük kurallarına uygunluk</li>
          <li>Doğru ve gerektiğinde güncel olma</li>
          <li>Belirli, açık ve meşru amaçlarla işlenme</li>
          <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma</li>
          <li>İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme</li>
        </ul>

        <h2>5. Saklamayı Gerektiren Hukuki Sebepler</h2>
        <ul>
          <li>Bir sözleşmenin kurulması veya ifası</li>
          <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
          <li>Veri sorumlusunun meşru menfaati</li>
          <li>Açık rıza (gerektiği durumlarda)</li>
          <li>İŞKUR mevzuatı ve ilgili çalışma mevzuatı</li>
          <li>Türk Ticaret Kanunu</li>
          <li>Vergi Usul Kanunu</li>
        </ul>

        <h2>6. Saklama Süreleri</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2 border-b border-border">Veri Türü</th>
                <th className="text-left p-2 border-b border-border">Saklama Süresi</th>
                <th className="text-left p-2 border-b border-border">Hukuki Dayanak</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border-b border-border">İş Başvuru Verileri</td><td className="p-2 border-b border-border">2 yıl</td><td className="p-2 border-b border-border">Meşru menfaat</td></tr>
              <tr><td className="p-2 border-b border-border">Yerleştirilen Adaylara Ait Kayıtlar</td><td className="p-2 border-b border-border">10 yıl</td><td className="p-2 border-b border-border">İŞKUR ve ilgili mevzuat</td></tr>
              <tr><td className="p-2 border-b border-border">Sözleşme ve Ticari Belgeler</td><td className="p-2 border-b border-border">10 yıl</td><td className="p-2 border-b border-border">Türk Ticaret Kanunu</td></tr>
              <tr><td className="p-2 border-b border-border">Muhasebe ve Finans Kayıtları</td><td className="p-2 border-b border-border">10 yıl</td><td className="p-2 border-b border-border">Vergi Usul Kanunu</td></tr>
              <tr><td className="p-2 border-b border-border">Web Log ve Güvenlik Kayıtları</td><td className="p-2 border-b border-border">1 yıl</td><td className="p-2 border-b border-border">Meşru menfaat</td></tr>
              <tr><td className="p-2 border-b border-border">Çerez Verileri</td><td className="p-2 border-b border-border">{"6 – 12 ay"}</td><td className="p-2 border-b border-border">Açık rıza / Meşru menfaat</td></tr>
            </tbody>
          </table>
        </div>

        <h2>7. İmha Yöntemleri</h2>
        <h3>7.1 Silme</h3>
        <p>Kişisel verilerin ilgili kullanıcılar için erişilemez ve tekrar kullanılamaz hale getirilmesidir.</p>
        <h3>7.2 Yok Etme</h3>
        <p>Kişisel verilerin fiziksel ortamda geri getirilemeyecek şekilde ortadan kaldırılmasıdır.</p>
        <h3>7.3 Anonim Hale Getirme</h3>
        <p>Kişisel verilerin başka verilerle eşleştirilse dahi kimliği belirli veya belirlenebilir gerçek kişiyle ilişkilendirilemeyecek hale getirilmesidir.</p>

        <h2>8. Periyodik İmha Süreci</h2>
        <p>Şirket, saklama süresi dolan veya işleme amacı ortadan kalkan kişisel verileri en geç 6 ayda bir periyodik olarak gözden geçirir ve imha eder.</p>
        <p>İlgili kişi tarafından silme talebinin iletilmesi halinde, KVKK m.13 uyarınca en geç 30 gün içinde değerlendirme yapılır.</p>

        <h2>9. Teknik ve İdari Tedbirler</h2>
        <ul>
          <li>Yetki bazlı erişim kontrolü</li>
          <li>Güvenli sunucu altyapısı</li>
          <li>SSL/TLS şifreleme</li>
          <li>Log kayıt sistemi</li>
          <li>Veri minimizasyonu ilkesi</li>
          <li>Gizlilik sözleşmeleri</li>
          <li>Personel farkındalık süreçleri</li>
        </ul>

        <h2>10. Sorumluluk</h2>
        <p>Bu Politikanın uygulanmasından Şirket yönetimi sorumludur.</p>

        <h2>11. Yürürlük</h2>
        <p>Bu Politika yayımlandığı tarihte yürürlüğe girer.</p>
      </article>
    )
  }

  return (
    <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">DATA RETENTION AND DESTRUCTION POLICY</h1>

      <h2>1. Purpose</h2>
      <p>{"This Data Retention and Destruction Policy (\"Policy\") regulates the procedures and principles for determining storage periods and destroying expired personal data processed by Milenyum İnsan Kaynakları Limited Şirketi (\"Company\") in accordance with KVKK Law No. 6698 and related secondary legislation."}</p>

      <h2>2. Scope</h2>
      <ul>
        <li>Data belonging to job applicant candidates</li>
        <li>Data belonging to placed candidates</li>
        <li>Personal data belonging to employer representatives</li>
        <li>Contractual records</li>
        <li>Accounting and financial data</li>
        <li>Website visitor data</li>
      </ul>

      <h2>3. Definitions</h2>
      <ul>
        <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
        <li><strong>Destruction:</strong> Deletion, destruction, or anonymization of personal data.</li>
        <li><strong>Periodic Destruction:</strong> Destruction carried out ex officio by the Company when processing conditions specified by law cease to exist.</li>
      </ul>

      <h2>4. Retention and Destruction Principles</h2>
      <ul>
        <li>Compliance with law and rules of good faith</li>
        <li>Being accurate and up-to-date when necessary</li>
        <li>Processing for specific, explicit, and legitimate purposes</li>
        <li>Being relevant, limited, and proportionate to the purpose of processing</li>
        <li>Retention for the period stipulated in relevant legislation or necessary for the processing purpose</li>
      </ul>

      <h2>5. Legal Bases Requiring Retention</h2>
      <ul>
        <li>Establishment or performance of a contract</li>
        <li>Fulfillment of legal obligations</li>
        <li>Legitimate interest of the data controller</li>
        <li>Explicit consent (when required)</li>
        <li>Labor agency legislation and related employment legislation</li>
        <li>Turkish Commercial Code</li>
        <li>Tax Procedure Law</li>
      </ul>

      <h2>6. Retention Periods</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-2 border-b border-border">Data Type</th>
              <th className="text-left p-2 border-b border-border">Retention Period</th>
              <th className="text-left p-2 border-b border-border">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border-b border-border">Job Application Data</td><td className="p-2 border-b border-border">2 years</td><td className="p-2 border-b border-border">Legitimate interest</td></tr>
            <tr><td className="p-2 border-b border-border">Placed Candidate Records</td><td className="p-2 border-b border-border">10 years</td><td className="p-2 border-b border-border">Labor agency legislation</td></tr>
            <tr><td className="p-2 border-b border-border">Contracts and Commercial Documents</td><td className="p-2 border-b border-border">10 years</td><td className="p-2 border-b border-border">Turkish Commercial Code</td></tr>
            <tr><td className="p-2 border-b border-border">Accounting and Financial Records</td><td className="p-2 border-b border-border">10 years</td><td className="p-2 border-b border-border">Tax Procedure Law</td></tr>
            <tr><td className="p-2 border-b border-border">Web Log and Security Records</td><td className="p-2 border-b border-border">1 year</td><td className="p-2 border-b border-border">Legitimate interest</td></tr>
            <tr><td className="p-2 border-b border-border">Cookie Data</td><td className="p-2 border-b border-border">{"6 – 12 months"}</td><td className="p-2 border-b border-border">Consent / Legitimate interest</td></tr>
          </tbody>
        </table>
      </div>

      <h2>7. Destruction Methods</h2>
      <h3>7.1 Deletion</h3>
      <p>Making personal data inaccessible and unusable for relevant users.</p>
      <h3>7.2 Physical Destruction</h3>
      <p>Irreversibly eliminating personal data from physical media.</p>
      <h3>7.3 Anonymization</h3>
      <p>Making personal data unrelatable to an identified or identifiable natural person, even if matched with other data.</p>

      <h2>8. Periodic Destruction Process</h2>
      <p>The Company periodically reviews and destroys personal data whose retention period has expired or processing purpose has ceased, at least every 6 months.</p>
      <p>In case a deletion request is submitted by the data subject, evaluation is made within 30 days at the latest in accordance with KVKK Art. 13.</p>

      <h2>9. Technical and Administrative Measures</h2>
      <ul>
        <li>Role-based access control</li>
        <li>Secure server infrastructure</li>
        <li>SSL/TLS encryption</li>
        <li>Log recording system</li>
        <li>Data minimization principle</li>
        <li>Confidentiality agreements</li>
        <li>Personnel awareness processes</li>
      </ul>

      <h2>10. Responsibility</h2>
      <p>Company management is responsible for the implementation of this Policy.</p>

      <h2>11. Effective Date</h2>
      <p>This Policy enters into force on the date of publication.</p>
    </article>
  )
}

export default function DataRetentionPage() {
  return (
    <LegalPageWrapper>
      <DataRetentionContent />
    </LegalPageWrapper>
  )
}
