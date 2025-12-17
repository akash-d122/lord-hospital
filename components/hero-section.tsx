import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Lord+Hospital+Tadipatri+Andhra+Pradesh"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white px-4 py-12 md:py-20">
      <div className="container mx-auto text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
          <Clock className="w-4 h-4" />
          Open 24 Hours
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Lord Hospital</h1>

        <p className="text-xl md:text-2xl text-primary font-semibold mb-3">24/7 Emergency & Medical Care</p>

        <p className="text-muted-foreground text-base md:text-lg mb-8 text-pretty">
          Trusted community healthcare serving Tadipatri and surrounding areas with compassionate, quality medical
          services.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
            <a href="tel:+916309630960">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
