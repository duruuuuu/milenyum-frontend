"use client"

import { LanguageProvider } from "@/context/language-context"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyMilenyumSection } from "@/components/team-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ServicesSection } from "@/components/services-section"
import { JobSeekerSection } from "@/components/jobseeker-section"
import { EmployerSection } from "@/components/employer-section"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyMilenyumSection />
        <PhilosophySection />
        <ServicesSection />
        <JobSeekerSection />
        <EmployerSection />
        <ContactSection />
        <BlogSection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
