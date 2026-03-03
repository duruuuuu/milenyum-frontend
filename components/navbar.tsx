"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Globe, Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [jobDropdownOpen, setJobDropdownOpen] = useState(false)
  const [mobileJobOpen, setMobileJobOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Milenyum
          </span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
            {language === "tr" ? "İnsan Kaynakları" : "Human Resources"}
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <a href="#home" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a href="#corporate" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.corporate")}
            </a>
          </li>
          <li>
            <a href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.services")}
            </a>
          </li>
          {/* Job Seekers Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setJobDropdownOpen(true)}
            onMouseLeave={() => setJobDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.jobseeker")}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {jobDropdownOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-48 rounded-lg border border-border bg-card p-1.5 shadow-lg">
                  <a
                    href="/is-ilanlari-yurt-ici"
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {t("nav.jobseeker.domestic")}
                  </a>
                  <a
                    href="/is-ilanlari-yurt-disi"
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {t("nav.jobseeker.international")}
                  </a>
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#employer" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.employer")}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.contact")}
            </a>
          </li>
          <li>
            <a href="#blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.blog")}
            </a>
          </li>
        </ul>

        {/* Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            aria-label={language === "tr" ? "Switch to English" : "Türkçeye geç"}
          >
            <Globe className="h-4 w-4" />
            <span>{language === "tr" ? "EN" : "TR"}</span>
          </button>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {[
              { label: t("nav.home"), href: "#home" },
              { label: t("nav.corporate"), href: "#corporate" },
              { label: t("nav.services"), href: "#services" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile Job Seekers Accordion */}
            <li>
              <button
                onClick={() => setMobileJobOpen(!mobileJobOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t("nav.jobseeker")}
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileJobOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileJobOpen && (
                <div className="ml-4 flex flex-col gap-1">
                  <a
                    href="/is-ilanlari-yurt-ici"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {t("nav.jobseeker.domestic")}
                  </a>
                  <a
                    href="/is-ilanlari-yurt-disi"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {t("nav.jobseeker.international")}
                  </a>
                </div>
              )}
            </li>

            {[
              { label: t("nav.employer"), href: "#employer" },
              { label: t("nav.contact"), href: "#contact" },
              { label: t("nav.blog"), href: "#blog" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
