"use client"

import { useLanguage } from "@/context/language-context"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t("contact.label")}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {t("footer.contact")}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t("footer.address")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {t("contact.phone")}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("footer.phone")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {t("contact.email")}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("footer.email")}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 lg:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-card-foreground"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-card-foreground"
              >
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-card-foreground"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
