"use client"

import { LegalPageWrapper } from "@/components/legal-page-wrapper"
import { useLanguage } from "@/context/language-context"

function KVKKContent() {
  const { language } = useLanguage()

  if (language === "tr") {
    return (
      <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        <h1 className="text-3xl font-bold tracking-tight">KİŞİSEL VERİLERİN KORUNMASI HAKKINDA AYDINLATMA METNİ</h1>

        <p><strong>Veri Sorumlusu:</strong> Milenyum İnsan Kaynakları Limited Şirketi</p>
        <p><strong>Web:</strong> www.milenyumik.com</p>

        <p>{"Milenyum İnsan Kaynakları Limited Şirketi (\"Şirket\"), 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") uyarınca veri sorumlusu sıfatıyla, iş başvurusu süreçleri kapsamında elde ettiği kişisel verileri aşağıda açıklanan kapsamda işlemektedir."}</p>

        <h2>1. İşlenen Kişisel Veri Kategorileri</h2>
        <ul>
          <li>Kimlik bilgileri (ad, soyad)</li>
          <li>İletişim bilgileri (telefon numarası, e-posta adresi; paylaşılması halinde adres)</li>
          <li>Özgeçmiş (CV) bilgileri</li>
          <li>Eğitim ve mesleki deneyim bilgileri</li>
          <li>Referans bilgileri</li>
          <li>Yabancı dil, sertifika ve mesleki yeterlilik bilgileri</li>
          <li>Fotoğraf (yüklenmesi halinde)</li>
          <li>Aday tarafından paylaşılması halinde özel nitelikli kişisel veriler</li>
        </ul>

        <h2>2. Kişisel Verilerin İşlenme Amaçları</h2>
        <ul>
          <li>İş başvuru ve aday değerlendirme süreçlerinin yürütülmesi</li>
          <li>Pozisyon uygunluğunun analiz edilmesi ve eşleştirme yapılması</li>
          <li>Mülakat ve referans kontrol süreçlerinin gerçekleştirilmesi</li>
          <li>İnsan kaynakları planlama faaliyetlerinin yürütülmesi</li>
          <li>İlgili mevzuattan doğan yükümlülüklerin yerine getirilmesi</li>
        </ul>

        <h2>3. Hukuki Sebepler</h2>
        <ul>
          <li>KVKK m.5/2-c: Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
          <li>KVKK m.5/2-ç: Hukuki yükümlülüklerin yerine getirilmesi</li>
          <li>KVKK m.5/2-f: Veri sorumlusunun meşru menfaati</li>
          <li>Özel nitelikli kişisel veriler ve yurt dışı veri aktarımı bakımından açık rıza</li>
        </ul>

        <h2>4. Kişisel Verilerin Aktarılması</h2>
        <ul>
          <li>Yurt içindeki iş ortaklarına ve potansiyel işveren firmalara</li>
          <li>Yurt dışındaki işveren firmalara ve iş ortaklarına (açık rızanız bulunması halinde)</li>
          <li>Kanunen yetkili kamu kurum ve kuruluşlarına</li>
        </ul>

        <h2>5. Toplama Yöntemi ve İşleme Şekli</h2>
        <p>Kişisel verileriniz; internet sitesi başvuru formları, e-posta yoluyla iletilen özgeçmişler, fiziki başvuru formları, mülakat ve değerlendirme süreçleri aracılığıyla otomatik veya kısmen otomatik yöntemlerle toplanmakta ve işlenmektedir.</p>

        <h2>6. Saklama Süresi</h2>
        <p>Kişisel verileriniz, iş başvuru sürecinin sonuçlanmasından itibaren en fazla 2 yıl süreyle saklanmaktadır.</p>

        <h2>7. İlgili Kişi Hakları</h2>
        <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
          <li>Şartları oluştuğu takdirde verilerin silinmesini veya yok edilmesini talep etme</li>
          <li>İşlemenin hukuka aykırı olması halinde zararın giderilmesini talep etme</li>
        </ul>
        <p>Başvurularınızı <strong>info@milenyumik.com</strong> adresi üzerinden iletebilirsiniz.</p>
      </article>
    )
  }

  return (
    <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">PERSONAL DATA PROTECTION DISCLOSURE NOTICE (KVKK)</h1>

      <p><strong>Data Controller:</strong> Milenyum İnsan Kaynakları Limited Şirketi</p>
      <p><strong>Web:</strong> www.milenyumik.com</p>

      <p>{"Milenyum İnsan Kaynakları Limited Şirketi (\"Company\"), in its capacity as data controller under the Personal Data Protection Law No. 6698 (\"KVKK\"), processes personal data obtained within the scope of job application processes as described below."}</p>

      <h2>1. Categories of Personal Data Processed</h2>
      <ul>
        <li>Identity information (name, surname)</li>
        <li>Contact information (phone number, email address; address if shared)</li>
        <li>Resume (CV) information</li>
        <li>Education and professional experience information</li>
        <li>Reference information</li>
        <li>Foreign language, certificate, and professional qualification information</li>
        <li>Photograph (if uploaded)</li>
        <li>Special categories of personal data if shared by the candidate</li>
      </ul>

      <h2>2. Purposes of Processing Personal Data</h2>
      <ul>
        <li>Conducting job application and candidate evaluation processes</li>
        <li>Analyzing position suitability and matching</li>
        <li>Conducting interview and reference check processes</li>
        <li>Carrying out human resources planning activities</li>
        <li>Fulfilling obligations arising from applicable legislation</li>
      </ul>

      <h2>3. Legal Bases</h2>
      <ul>
        <li>KVKK Art.5/2-c: Directly related to establishment or performance of a contract</li>
        <li>KVKK Art.5/2-d: Fulfillment of legal obligations</li>
        <li>KVKK Art.5/2-f: Legitimate interest of the data controller</li>
        <li>Explicit consent for special categories of personal data and international data transfer</li>
      </ul>

      <h2>4. Transfer of Personal Data</h2>
      <ul>
        <li>Domestic business partners and potential employer companies</li>
        <li>International employer companies and business partners (with your explicit consent)</li>
        <li>Legally authorized public institutions and organizations</li>
      </ul>

      <h2>5. Collection Method and Processing</h2>
      <p>Your personal data is collected and processed through website application forms, resumes submitted via email, physical application forms, and interview and assessment processes using automatic or semi-automatic methods.</p>

      <h2>6. Retention Period</h2>
      <p>Your personal data is retained for a maximum of 2 years from the conclusion of the job application process.</p>

      <h2>7. Data Subject Rights</h2>
      <p>Under Article 11 of KVKK, you have the following rights:</p>
      <ul>
        <li>Learning whether your personal data is being processed</li>
        <li>Requesting information if it has been processed</li>
        <li>Learning the purpose of processing and whether it is used in accordance with its purpose</li>
        <li>Knowing the third parties to whom it has been transferred domestically or abroad</li>
        <li>Requesting correction of incomplete or incorrectly processed data</li>
        <li>Requesting deletion or destruction of data when conditions are met</li>
        <li>Requesting compensation for damages arising from unlawful processing</li>
      </ul>
      <p>You may submit your requests via <strong>info@milenyumik.com</strong>.</p>
    </article>
  )
}

export default function KVKKPage() {
  return (
    <LegalPageWrapper>
      <KVKKContent />
    </LegalPageWrapper>
  )
}
