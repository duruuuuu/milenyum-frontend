"use client"

import { LanguageProvider } from "@/context/language-context"
import {
  JobListingsPage,
  sampleDomesticJobs,
} from "@/components/job-listings-page"

/* ════════════════════════════════════════════════════════════════
   DOMESTIC JOB LISTINGS PAGE — /is-ilanlari-yurt-ici

   To add your real positions, edit the `sampleDomesticJobs` array
   in components/job-listings-page.tsx — or replace the import
   below with your own data source.
   ════════════════════════════════════════════════════════════════ */

export default function DomesticJobsPage() {
  return (
    <LanguageProvider>
      <JobListingsPage variant="domestic" jobs={sampleDomesticJobs} />
    </LanguageProvider>
  )
}
