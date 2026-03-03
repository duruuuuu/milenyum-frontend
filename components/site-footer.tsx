"use client"

import { useLanguage } from "@/context/language-context"
import { MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  const { language, t } = useLanguage()

  const quickLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.team"), href: "#team" },
  ]

  return (
    <footer id="contact" className="border-t border-border bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">Milenyum</h3>
            <p className="mt-1 text-sm font-medium text-card/60">
              {language === "tr" ? "İnsan Kaynakları" : "Human Resources"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-card/70">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-card/50">
              {t("footer.quicklinks")}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-card"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-card/50">
              {t("footer.contact")}
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              {/* ============================================================
                  >>> FOOTER ADDRESS — Edit "footer.address" in
                      context/language-context.tsx <<<
                  ============================================================ */}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-card/50" />
                <span className="text-sm text-card/70">
                  {t("footer.address")}
                </span>
              </li>
              {/* ============================================================
                  >>> FOOTER PHONE — Edit "footer.phone" in
                      context/language-context.tsx <<<
                  ============================================================ */}
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-card/50" />
                <span className="text-sm text-card/70">
                  {t("footer.phone")}
                </span>
              </li>
              {/* ============================================================
                  >>> FOOTER EMAIL — Edit "footer.email" in
                      context/language-context.tsx <<<
                  ============================================================ */}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-card/50" />
                <span className="text-sm text-card/70">
                  {t("footer.email")}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-card/50">
              {t("footer.legal")}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-card/70 transition-colors hover:text-card"
                >
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-card/70 transition-colors hover:text-card"
                >
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-card/70 transition-colors hover:text-card"
                >
                  {t("footer.kvkk")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-card/10 pt-8">
          <p className="text-center text-xs text-card/50">
            &copy; {new Date().getFullYear()} Milenyum{" "}
            {language === "tr" ? "İnsan Kaynakları" : "Human Resources"}.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
