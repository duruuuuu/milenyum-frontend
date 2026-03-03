"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { MapPin, Plane, ArrowRight } from "lucide-react"

export function JobSeekerSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-section-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t("jobseeker.label")}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("jobseeker.title")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t("jobseeker.description")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Domestic */}
          <div
            id="jobseeker-domestic"
            className="group rounded-2xl border border-border bg-card p-10 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-card-foreground">
              {t("jobseeker.domestic.title")}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("jobseeker.domestic.description")}
            </p>
            <Link
              href="/is-ilanlari-yurt-ici"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              {t("jobs.viewDomestic")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* International */}
          <div
            id="jobseeker-international"
            className="group rounded-2xl border border-border bg-card p-10 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Plane className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-card-foreground">
              {t("jobseeker.international.title")}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("jobseeker.international.description")}
            </p>
            <Link
              href="/is-ilanlari-yurt-disi"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              {t("jobs.viewInternational")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
