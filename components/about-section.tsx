"use client"

import { useLanguage } from "@/context/language-context"
import { Building2, Zap, HeartPulse, Factory, Palmtree } from "lucide-react"

const expertiseIcons = [Building2, Zap, HeartPulse, Factory, Palmtree]
const expertiseKeys = [
  "expertise.construction",
  "expertise.energy",
  "expertise.health",
  "expertise.factory",
  "expertise.tourism",
]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="corporate" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ─── Biz Kimiz ─── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/about.jpg"
              alt="Team collaboration at Milenyum"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t("about.label")}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {t("about.paragraph1")}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t("about.paragraph2")}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t("about.paragraph3")}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t("about.paragraph4")}
            </p>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {(["stat1", "stat2", "stat3", "stat4"] as const).map((key) => (
                <div key={key} className="text-center">
                  <p className="text-3xl font-bold text-primary">
                    {t(`${key}.number`)}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t(`${key}.label`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Uzmanlık Alanlarımız ─── */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("expertise.label")}
          </h3>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {expertiseKeys.map((key, i) => {
              const Icon = expertiseIcons[i]
              return (
                <div
                  key={key}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-medium text-card-foreground">{t(key)}</p>
                </div>
              )
            })}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center leading-relaxed text-muted-foreground">
            {t("expertise.outro")}
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-muted-foreground">
            {t("expertise.closing")}
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-muted-foreground">
            {t("expertise.partners")}
          </p>
        </div>
      </div>
    </section>
  )
}
