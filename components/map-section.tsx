import { ExternalLink, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Lord+Hospital+Tadipatri+Andhra+Pradesh"
// Embed URL for Lord Hospital Tadipatri area
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15424.5!2d77.59!3d14.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14a6f8c5e3e3d%3A0x8b5f3a9d8c5e3e3d!2sTadipatri%2C%20Andhra%20Pradesh%20515411!5e0!3m2!1sen!2sin!4v1702800000000"

export function MapSection() {
  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Find Us on Map</h2>

        <div className="rounded-lg overflow-hidden border border-border mb-6 shadow-sm">
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
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
