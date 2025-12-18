import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { DoctorSection } from "@/components/doctor-section"
import { VideoSection } from "@/components/video-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { VisitingSection } from "@/components/visiting-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <ServicesSection />
      <DoctorSection />
      <VideoSection />
      <WhyChooseSection />
      <VisitingSection />
      <MapSection />
      <Footer />
    </main>
  )
}
