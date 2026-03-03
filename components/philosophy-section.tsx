"use client"

import { useLanguage } from "@/context/language-context"
import {
  Scale,
  FileCheck,
  Stamp,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

export function PhilosophySection() {
  const { t } = useLanguage()

  const legalItems = [
    "legal.item1",
    "legal.item2",
    "legal.item3",
    "legal.item4",
    "legal.item5",
  ]

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ─── Hizmet Felsefesi ─── */}
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t("philosophy.label")}
            </span>
            <div className="mt-6 flex flex-col gap-4">
              {[
                { icon: Scale, text: t("philosophy.p1") },
                { icon: FileCheck, text: t("philosophy.p2") },
                { icon: Stamp, text: t("philosophy.p3") },
                { icon: Globe, text: t("philosophy.p4") },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ─── Yasal Uyum ─── */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t("legal.label")}
            </span>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {t("legal.intro")}
            </p>
            <p className="mt-4 font-medium text-foreground">
              {t("legal.regions")}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {legalItems.map((key) => (
                <li key={key} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm">{t(key)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("legal.closing")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
