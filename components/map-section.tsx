import { ExternalLink, Navigation, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const HOSPITAL_COORDS = "14.905031,78.0196608"
const PLACE_ID = "0x3bb41b809c6222ff:0x30144ba82ed0ca16"
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${HOSPITAL_COORDS}&destination_place_id=${PLACE_ID}`
const MAPS_URL = `https://www.google.com/maps/place/Lord+hospital+,+Tadipatri/@14.905031,78.0170859,17z/data=!3m1!4b1!4m6!3m5!1s${PLACE_ID}!8m2!3d14.905031!4d78.0196608`

// Embed URL with exact coordinates for Lord Hospital Tadipatri
const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928.5!2d78.0170859!3d14.905031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(PLACE_ID)}!2sLord%20Hospital%2C%20Tadipatri!5e0!3m2!1sen!2sin!4v1702800000000!5m2!1sen!2sin`

export function MapSection() {
  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Location</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Find Us on Map</h2>

        <div className="rounded-2xl overflow-hidden border border-border mb-6 shadow-lg ring-1 ring-border">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lord Hospital Location - Tadipatri, Andhra Pradesh"
            className="w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 h-12 text-base">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 text-base bg-transparent">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              Open in Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
