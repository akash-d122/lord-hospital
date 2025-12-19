import { Phone, MapPin, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=14.905031,78.0196608&destination_place_id=0x3bb41b809c6222ff:0x30144ba82ed0ca16"

export function HeroSection() {
  return (
    <section data-reveal className="relative bg-gradient-to-b from-sky-50 to-white h-[93vh] overflow-hidden reveal-scale">
      <div className="flex flex-col h-full">
        {/* Hero image: exactly 45vh on mobile, slightly larger on bigger breakpoints */}
        <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[52vh] lg:h-[42vh] overflow-hidden">
          <Image
            src="/images/hospital-building.png"
            alt="Lord Hospital building - Modern healthcare facility in Tadipatri"
            fill
            // Mobile: show more of the top by shifting the crop window downward slightly.
            // Desktop+: contain to avoid horizontal distortion and keep the whole image visible.
            className="object-cover object-[50%_20%] scale-100 md:object-contain md:object-center md:scale-100"
            priority
            sizes="100vw"
          />
          {/* Bottom gradient overlay for visual clarity */}
          <div className="absolute inset-x-0 bottom-0 h-[8vh] bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        {/* Content: keep within remaining space; prevent overflow on small devices */}
        <div className="container mx-auto text-center max-w-2xl lg:max-w-4xl xl:max-w-5xl px-4 pt-0 pb-3 -mt-5 md:mt-0 md:py-6 flex-1 min-h-0 flex flex-col justify-center">
          <div className="inline-flex w-fit mx-auto items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <Clock className="w-4 h-4" />
            Open 24 Hours
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Lord Hospital
          </h1>

          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">24/7 Emergency & Medical Care</p>

          <p className="text-muted-foreground text-base md:text-lg mb-12 text-pretty max-w-lg mx-auto">
            Trusted community healthcare serving Tadipatri and surrounding areas with compassionate, quality medical
            services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-xl shadow-lg shadow-primary/25"
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
              className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 rounded-xl bg-white hover:bg-secondary"
            >
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>

          <div className="mt-6 md:mt-4 animate-bounce hidden sm:block">
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
