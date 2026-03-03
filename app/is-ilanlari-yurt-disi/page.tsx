"use client"

import { LanguageProvider } from "@/context/language-context"
import {
  JobListingsPage,
  sampleInternationalJobs,
} from "@/components/job-listings-page"

/* ════════════════════════════════════════════════════════════════
   INTERNATIONAL JOB LISTINGS PAGE — /is-ilanlari-yurt-disi

   To add your real positions, edit the `sampleInternationalJobs`
   array in components/job-listings-page.tsx — or replace the
   import below with your own data source.
   ════════════════════════════════════════════════════════════════ */

export default function InternationalJobsPage() {
  return (
    <LanguageProvider>
      <JobListingsPage variant="international" jobs={sampleInternationalJobs} />
    </LanguageProvider>
  )
}
