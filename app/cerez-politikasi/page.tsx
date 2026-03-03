"use client"

import { LegalPageWrapper } from "@/components/legal-page-wrapper"
import { useLanguage } from "@/context/language-context"

function CookiePolicyContent() {
  const { language } = useLanguage()

  if (language === "tr") {
    return (
      <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        <h1 className="text-3xl font-bold tracking-tight">{"ÇEREZ (\"COOKIE\") POLİTİKASI"}</h1>

        <h2>1. Amaç ve Kapsam</h2>
        <p>Bu Çerez Politikası, Milenyum İnsan Kaynakları Limited Şirketi tarafından işletilen www.milenyumik.com internet sitesi {"(\"Site\")"} üzerinden kullanılan çerezlere ilişkin olarak ziyaretçileri bilgilendirmek amacıyla hazırlanmıştır.</p>
        <p>Şirketimiz 6698 sayılı KVKK hükümlerine uygun olarak veri işlemektedir. Avrupa Birliği merkezli iş ortakları ve adaylar bakımından GDPR hükümleri de gözetilmektedir.</p>

        <h2>2. Çerez (Cookie) Nedir?</h2>
        <p>Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.</p>
        <p>Çerezler sayesinde:</p>
        <ul>
          <li>Site düzgün çalışır</li>
          <li>Tercihleriniz hatırlanır</li>
          <li>Performans analizleri yapılır</li>
          <li>Güvenlik sağlanır</li>
        </ul>

        <h2>3. Hangi Tür Çerezleri Kullanıyoruz?</h2>

        <h3>3.1 Zorunlu (Teknik) Çerezler</h3>
        <p>Bu çerezler sitenin çalışması için gereklidir ve devre dışı bırakılamaz.</p>
        <p>Amaçları:</p>
        <ul>
          <li>Oturum yönetimi</li>
          <li>Güvenlik doğrulaması</li>
          <li>Form işlemleri</li>
          <li>Site altyapısının çalışması</li>
        </ul>
        <p><strong>Hukuki Dayanak:</strong> KVKK m.5/2 (veri sorumlusunun meşru menfaati) / GDPR Art. 6 (1) (f)</p>

        <h3>3.2 Analitik Çerezler (Açık Rızaya Tabi)</h3>
        <p>Bu çerezler ziyaretçi davranışlarını analiz etmek amacıyla kullanılır. Örneğin:</p>
        <ul>
          <li>Sayfa görüntüleme sayıları</li>
          <li>Ziyaret süresi</li>
          <li>Trafik kaynakları</li>
        </ul>
        <p>Bu çerezler yalnızca açık rızanız halinde aktif olur.</p>
        <p><strong>Hukuki Dayanak:</strong> KVKK m.5/1 (açık rıza) / GDPR Art. 6(1)(a)</p>

        <h3>3.3 Performans ve Kişiselleştirme Çerezleri (Açık Rızaya Tabi)</h3>
        <ul>
          <li>Dil tercihi</li>
          <li>Kullanıcı tercihleri</li>
          <li>Site deneyiminin iyileştirilmesi</li>
        </ul>

        <h3>3.4 Üçüncü Taraf Çerezleri</h3>
        <p>Site üzerinde üçüncü taraf hizmet sağlayıcıların çerezleri bulunabilir (örneğin analiz araçları). Bu çerezler yalnızca açık rızanızla kullanılacaktır.</p>

        <h2>4. Çerezlerin Saklama Süresi</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2 border-b border-border">Çerez Türü</th>
                <th className="text-left p-2 border-b border-border">Saklama Süresi</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border-b border-border">Oturum Çerezleri</td><td className="p-2 border-b border-border">Tarayıcı kapatılana kadar</td></tr>
              <tr><td className="p-2 border-b border-border">Kalıcı Çerezler</td><td className="p-2 border-b border-border">{"6 – 12 Ay"}</td></tr>
              <tr><td className="p-2 border-b border-border">Analitik Çerezler</td><td className="p-2 border-b border-border">En fazla 12 Ay</td></tr>
            </tbody>
          </table>
        </div>

        <h2>5. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
        <p>{"Çerez tercihlerinizi site üzerindeki \"Çerez Ayarları\" panelinden veya tarayıcı ayarlarınızdan istediğiniz zaman değiştirebilirsiniz."}</p>
        <p>Tarayıcı ayarlarından çerezleri tamamen devre dışı bırakmanız durumunda sitenin bazı işlevleri düzgün çalışmayabilir.</p>

        <h2>6. Kişisel Verilerinizin İşlenmesi</h2>
        <p>Çerezler aracılığıyla toplanan kişisel veriler KVKK, GDPR ve Şirketimizin Gizlilik Politikası çerçevesinde işlenmektedir.</p>

        <h2>7. Veri Sorumlusu</h2>
        <p><strong>Şirket unvanı:</strong> Milenyum İnsan Kaynakları Limited Şirketi</p>
        <p><strong>Web:</strong> www.milenyumik.com</p>
      </article>
    )
  }

  return (
    <article className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <h1 className="text-3xl font-bold tracking-tight">{"COOKIE POLICY"}</h1>

      <h2>1. Purpose and Scope</h2>
      <p>{"This Cookie Policy has been prepared to inform visitors about the cookies used on the www.milenyumik.com website (\"Site\") operated by Milenyum İnsan Kaynakları Limited Şirketi."}</p>
      <p>Our company processes data in compliance with KVKK Law No. 6698. GDPR provisions are also observed for EU-based business partners and candidates.</p>

      <h2>2. What is a Cookie?</h2>
      <p>Cookies are small text files saved to your device through your browser by the websites you visit.</p>
      <p>Thanks to cookies:</p>
      <ul>
        <li>The site functions properly</li>
        <li>Your preferences are remembered</li>
        <li>Performance analyses are conducted</li>
        <li>Security is maintained</li>
      </ul>

      <h2>3. What Types of Cookies Do We Use?</h2>

      <h3>3.1 Essential (Technical) Cookies</h3>
      <p>These cookies are necessary for the site to function and cannot be disabled.</p>
      <ul>
        <li>Session management</li>
        <li>Security verification</li>
        <li>Form operations</li>
        <li>Site infrastructure operation</li>
      </ul>
      <p><strong>Legal Basis:</strong> KVKK Art.5/2 (legitimate interest) / GDPR Art. 6(1)(f)</p>

      <h3>3.2 Analytical Cookies (Subject to Explicit Consent)</h3>
      <p>These cookies are used to analyze visitor behavior:</p>
      <ul>
        <li>Page view counts</li>
        <li>Visit duration</li>
        <li>Traffic sources</li>
      </ul>
      <p>These cookies are only active with your explicit consent.</p>
      <p><strong>Legal Basis:</strong> KVKK Art.5/1 (explicit consent) / GDPR Art. 6(1)(a)</p>

      <h3>3.3 Performance and Personalization Cookies (Subject to Explicit Consent)</h3>
      <ul>
        <li>Language preference</li>
        <li>User preferences</li>
        <li>Improvement of site experience</li>
      </ul>

      <h3>3.4 Third-Party Cookies</h3>
      <p>Third-party service provider cookies may be present on the site (e.g., analytics tools). These cookies will only be used with your explicit consent.</p>

      <h2>4. Cookie Retention Period</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-2 border-b border-border">Cookie Type</th>
              <th className="text-left p-2 border-b border-border">Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border-b border-border">Session Cookies</td><td className="p-2 border-b border-border">Until browser is closed</td></tr>
            <tr><td className="p-2 border-b border-border">Persistent Cookies</td><td className="p-2 border-b border-border">{"6 – 12 Months"}</td></tr>
            <tr><td className="p-2 border-b border-border">Analytical Cookies</td><td className="p-2 border-b border-border">Maximum 12 Months</td></tr>
          </tbody>
        </table>
      </div>

      <h2>5. How Can You Control Cookies?</h2>
      <p>{"You can change your cookie preferences at any time from the \"Cookie Settings\" panel on the site or from your browser settings."}</p>
      <p>If you completely disable cookies from your browser settings, some functions of the site may not work properly.</p>

      <h2>6. Processing of Your Personal Data</h2>
      <p>{"Personal data collected through cookies is processed within the framework of KVKK, GDPR, and our Company's Privacy Policy."}</p>

      <h2>7. Data Controller</h2>
      <p><strong>Company name:</strong> Milenyum İnsan Kaynakları Limited Şirketi</p>
      <p><strong>Web:</strong> www.milenyumik.com</p>
    </article>
  )
}

export default function CookiePolicyPage() {
  return (
    <LegalPageWrapper>
      <CookiePolicyContent />
    </LegalPageWrapper>
  )
}
