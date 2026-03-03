"use client"

import { useLanguage } from "@/context/language-context"
import { ArrowRight } from "lucide-react"

export function EmployerSection() {
  const { t } = useLanguage()

  return (
    <section id="employer" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/team.jpg"
              alt="Professional team at work"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t("employer.label")}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("employer.title")}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {t("employer.description")}
            </p>

            {/* Mini service list for employers */}
            <div className="mt-8 flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-shadow hover:shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {n}
                  </span>
                  <span className="text-sm font-medium text-card-foreground">
                    {t(`service${n}.title`)}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
