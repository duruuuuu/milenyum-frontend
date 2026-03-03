"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import {
  MapPin,
  Briefcase,
  Clock,
  ArrowLeft,
  X,
  Upload,
  Filter,
  ChevronDown,
  Search,
} from "lucide-react"

/* ──────────────────────────────────────────────────────────────────
   Job Data Type
   ────────────────────────────────────────────────────────────────── */
export interface JobPosition {
  id: string
  title: { tr: string; en: string }
  location: { tr: string; en: string }
  sector: { tr: string; en: string }
  type: "fulltime" | "parttime" | "contract"
  description: { tr: string; en: string }
  requirements: { tr: string[]; en: string[] }
  postedDate: string
}

/* ──────────────────────────────────────────────────────────────────
   SAMPLE DATA — Replace these arrays with your real positions.
   Each page (domestic / international) passes its own array.
   ────────────────────────────────────────────────────────────────── */

export const sampleDomesticJobs: JobPosition[] = [
  /* ────── SAMPLE POSITION 1 ─────────────────────────────────────
     Replace or remove these sample positions.
     Add your real domestic job listings here.
     ────────────────────────────────────────────────────────────── */
  {
    id: "dom-1",
    title: {
      tr: "Kıdemli İnşaat Mühendisi",
      en: "Senior Construction Engineer",
    },
    location: { tr: "İstanbul, Türkiye", en: "Istanbul, Turkey" },
    sector: { tr: "İnşaat", en: "Construction" },
    type: "fulltime",
    description: {
      tr: "Büyük ölçekli altyapı projesinde görev alacak deneyimli inşaat mühendisi aranmaktadır.",
      en: "Experienced construction engineer sought for a large-scale infrastructure project.",
    },
    requirements: {
      tr: [
        "İnşaat Mühendisliği lisans diploması",
        "Minimum 8 yıl sektör deneyimi",
        "Proje yönetimi sertifikası tercih sebebi",
        "İleri düzey AutoCAD ve MS Project bilgisi",
      ],
      en: [
        "Bachelor's degree in Civil Engineering",
        "Minimum 8 years of industry experience",
        "Project management certification preferred",
        "Advanced AutoCAD and MS Project proficiency",
      ],
    },
    postedDate: "2026-02-20",
  },
  {
    id: "dom-2",
    title: {
      tr: "Elektrik Teknisyeni",
      en: "Electrical Technician",
    },
    location: { tr: "Ankara, Türkiye", en: "Ankara, Turkey" },
    sector: { tr: "Enerji", en: "Energy" },
    type: "fulltime",
    description: {
      tr: "Enerji santral projesinde görev alacak nitelikli elektrik teknisyeni aranmaktadır.",
      en: "Qualified electrical technician sought for an energy plant project.",
    },
    requirements: {
      tr: [
        "Elektrik-Elektronik Teknikerliği diploması",
        "Minimum 3 yıl deneyim",
        "Yüksek gerilim sertifikası",
      ],
      en: [
        "Electrical-Electronics Technician diploma",
        "Minimum 3 years of experience",
        "High voltage certification",
      ],
    },
    postedDate: "2026-02-25",
  },
  {
    id: "dom-3",
    title: {
      tr: "İnsan Kaynakları Uzmanı",
      en: "Human Resources Specialist",
    },
    location: { tr: "İzmir, Türkiye", en: "Izmir, Turkey" },
    sector: { tr: "Sanayi", en: "Industry" },
    type: "fulltime",
    description: {
      tr: "Endüstriyel üretim tesisinde görev alacak İK uzmanı aranmaktadır.",
      en: "HR specialist sought for an industrial production facility.",
    },
    requirements: {
      tr: [
        "İşletme veya İK alanında lisans diploması",
        "Minimum 5 yıl İK deneyimi",
        "Bordro ve SGK süreçlerinde tecrübe",
        "İleri düzey MS Office bilgisi",
      ],
      en: [
        "Bachelor's degree in Business or HR",
        "Minimum 5 years of HR experience",
        "Experience with payroll and social security processes",
        "Advanced MS Office proficiency",
      ],
    },
    postedDate: "2026-03-01",
  },
]

export const sampleInternationalJobs: JobPosition[] = [
  /* ────── SAMPLE POSITION 1 ─────────────────────────────────────
     Replace or remove these sample positions.
     Add your real international job listings here.
     ────────────────────────────────────────────────────────────── */
  {
    id: "int-1",
    title: {
      tr: "Proje Müdürü — Altyapı",
      en: "Project Manager — Infrastructure",
    },
    location: { tr: "Riyad, Suudi Arabistan", en: "Riyadh, Saudi Arabia" },
    sector: { tr: "İnşaat", en: "Construction" },
    type: "contract",
    description: {
      tr: "Orta Doğu'daki büyük ölçekli altyapı projesinde görev alacak deneyimli proje müdürü aranmaktadır. Çalışma izni ve konaklama sağlanacaktır.",
      en: "Experienced project manager sought for a large-scale infrastructure project in the Middle East. Work permit and accommodation will be provided.",
    },
    requirements: {
      tr: [
        "İnşaat veya Makine Mühendisliği lisans diploması",
        "Minimum 10 yıl uluslararası proje deneyimi",
        "İleri düzey İngilizce",
        "PMP sertifikası tercih sebebi",
      ],
      en: [
        "Bachelor's degree in Civil or Mechanical Engineering",
        "Minimum 10 years of international project experience",
        "Advanced English proficiency",
        "PMP certification preferred",
      ],
    },
    postedDate: "2026-02-15",
  },
  {
    id: "int-2",
    title: {
      tr: "Hemşire — Hastane Projesi",
      en: "Nurse — Hospital Project",
    },
    location: { tr: "Frankfurt, Almanya", en: "Frankfurt, Germany" },
    sector: { tr: "Sağlık", en: "Healthcare" },
    type: "fulltime",
    description: {
      tr: "Avrupa'daki sağlık kuruluşunda görev alacak nitelikli hemşireler aranmaktadır. Dil eğitimi ve çalışma izni desteği sağlanacaktır.",
      en: "Qualified nurses sought for healthcare facilities in Europe. Language training and work permit support will be provided.",
    },
    requirements: {
      tr: [
        "Hemşirelik lisans diploması",
        "Minimum 3 yıl hastane deneyimi",
        "B1 düzeyinde Almanca veya eğitim desteği",
        "Geçerli mesleki yeterlilik belgesi",
      ],
      en: [
        "Bachelor's degree in Nursing",
        "Minimum 3 years of hospital experience",
        "B1 level German or training support",
        "Valid professional qualification certificate",
      ],
    },
    postedDate: "2026-02-28",
  },
  {
    id: "int-3",
    title: {
      tr: "Mekanik Kaynakçı",
      en: "Mechanical Welder",
    },
    location: { tr: "Doha, Katar", en: "Doha, Qatar" },
    sector: { tr: "Enerji", en: "Energy" },
    type: "contract",
    description: {
      tr: "Enerji santral projesinde görev alacak sertifikalı kaynakçılar aranmaktadır. Mobilizasyon ve konaklama sağlanacaktır.",
      en: "Certified welders sought for an energy plant project. Mobilization and accommodation will be provided.",
    },
    requirements: {
      tr: [
        "Kaynak teknisyenliği sertifikası",
        "Minimum 5 yıl endüstriyel kaynak deneyimi",
        "Uluslararası kaynak sertifikası (EN/AWS)",
        "Yurt dışı çalışma deneyimi tercih sebebi",
      ],
      en: [
        "Welding technician certification",
        "Minimum 5 years of industrial welding experience",
        "International welding certification (EN/AWS)",
        "International work experience preferred",
      ],
    },
    postedDate: "2026-03-01",
  },
]

/* ──────────────────────────────────────────────────────────────────
   Application Modal
   ────────────────────────────────────────────────────────────────── */
function ApplicationModal({
  job,
  onClose,
}: {
  job: JobPosition
  onClose: () => void
}) {
  const { language, t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label={t("jobs.application.close")}
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground">
              {language === "tr" ? "Başvuru Alındı" : "Application Received"}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("jobs.application.success")}
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("jobs.application.close")}
            </button>
          </div>
        ) : (
          <>
            <h3 className="pr-8 text-xl font-bold text-card-foreground">
              {t("jobs.application.title")}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {job.title[language]}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                  {t("jobs.application.name")} *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                  {t("jobs.application.email")} *
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                  {t("jobs.application.phone")} *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                  {t("jobs.application.cv")} *
                </label>
                <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-background px-4 py-4">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="text-sm text-muted-foreground file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-card-foreground">
                  {t("jobs.application.coverLetter")}
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t("jobs.application.submit")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────
   Job Card
   ────────────────────────────────────────────────────────────────── */
function JobCard({
  job,
  onApply,
}: {
  job: JobPosition
  onApply: (job: JobPosition) => void
}) {
  const { language, t } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  const typeLabel =
    job.type === "fulltime"
      ? t("jobs.fulltime")
      : job.type === "parttime"
        ? t("jobs.parttime")
        : t("jobs.contract")

  const typeBg =
    job.type === "fulltime"
      ? "bg-primary/10 text-primary"
      : job.type === "contract"
        ? "bg-chart-1/10 text-chart-1"
        : "bg-chart-2/10 text-chart-2"

  return (
    <div className="rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="p-6 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-card-foreground">
              {job.title[language]}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {job.location[language]}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                {job.sector[language]}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {job.postedDate}
              </span>
            </div>
          </div>
          <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${typeBg}`}>
            {typeLabel}
          </span>
        </div>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          {job.description[language]}
        </p>

        {expanded && (
          <div className="mt-4 rounded-xl bg-section-alt p-5">
            <h4 className="text-sm font-semibold text-card-foreground">
              {language === "tr" ? "Aranan Nitelikler" : "Requirements"}
            </h4>
            <ul className="mt-3 flex flex-col gap-2">
              {job.requirements[language].map((req, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => onApply(job)}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("jobs.applyNow")}
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {expanded
              ? language === "tr"
                ? "Daha Az"
                : "Show Less"
              : language === "tr"
                ? "Detaylar"
                : "Details"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────
   Main Page Component
   ────────────────────────────────────────────────────────────────── */
export function JobListingsPage({
  variant,
  jobs,
}: {
  variant: "domestic" | "international"
  jobs: JobPosition[]
}) {
  const { language, t } = useLanguage()
  const [applyingTo, setApplyingTo] = useState<JobPosition | null>(null)
  const [sectorFilter, setSectorFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const heroTitle =
    variant === "domestic"
      ? t("jobs.domestic.hero.title")
      : t("jobs.international.hero.title")
  const heroSubtitle =
    variant === "domestic"
      ? t("jobs.domestic.hero.subtitle")
      : t("jobs.international.hero.subtitle")

  // Extract unique sectors for filtering
  const sectors = Array.from(new Set(jobs.map((j) => j.sector[language])))

  // Apply filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSector =
      sectorFilter === "all" || job.sector[language] === sectorFilter
    const matchesSearch =
      searchQuery === "" ||
      job.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location[language].toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSector && matchesSearch
  })

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("jobs.backToHome")}
            </a>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
              {heroSubtitle}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                {filteredJobs.length}{" "}
                {language === "tr" ? "açık pozisyon" : "open positions"}
              </span>
            </div>
          </div>
        </section>

        {/* Filters + Listings */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Filter Bar */}
            <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === "tr"
                      ? "Pozisyon, konum veya sektör ara..."
                      : "Search position, location or sector..."
                  }
                  className="w-full rounded-lg border border-border bg-background py-2.5 pr-4 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>

              {/* Sector Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                  className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                >
                  <option value="all">{t("jobs.filter.all")}</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job Cards */}
            {filteredJobs.length > 0 ? (
              <div className="flex flex-col gap-6">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onApply={setApplyingTo}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card py-20 text-center">
                <Briefcase className="mx-auto h-12 w-12 text-muted-foreground/40" />
                <p className="mt-4 text-lg font-medium text-muted-foreground">
                  {t("jobs.noPositions")}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* Application Modal */}
      {applyingTo && (
        <ApplicationModal
          job={applyingTo}
          onClose={() => setApplyingTo(null)}
        />
      )}
    </>
  )
}
