import { Phone, MapPin, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=14.905031,78.0196608&destination_place_id=0x3bb41b809c6222ff:0x30144ba82ed0ca16"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white">
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src="/images/hospital-building.png"
          alt="Lord Hospital building - Modern healthcare facility in Tadipatri"
          fill
          className="object-cover object-center scale-125"
          priority
          sizes="100vw"
        />
        {/* Bottom gradient overlay for visual clarity */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="container mx-auto text-center max-w-2xl px-4 py-6 md:py-8">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <Clock className="w-4 h-4" />
          Open 24 Hours
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Lord Hospital</h1>

        <p className="text-xl md:text-2xl text-primary font-semibold mb-3">24/7 Emergency & Medical Care</p>

        <p className="text-muted-foreground text-base md:text-lg mb-8 text-pretty max-w-lg mx-auto">
          Trusted community healthcare serving Tadipatri and surrounding areas with compassionate, quality medical
          services.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 h-14 rounded-xl shadow-lg shadow-primary/25"
          >
            <a href="tel:+916309630960">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 h-14 rounded-xl bg-white hover:bg-secondary"
          >
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </Button>
        </div>

        <div className="mt-8 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
