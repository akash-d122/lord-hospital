import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Lord+Hospital+Tadipatri+Andhra+Pradesh"

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="font-semibold text-foreground text-lg">Lord Hospital</span>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="bg-transparent">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline">Directions</span>
            </a>
          </Button>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="tel:+916309630960">
              <Phone className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
