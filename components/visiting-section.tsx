import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Lord+Hospital+Tadipatri+Andhra+Pradesh"

export function VisitingSection() {
  return (
    <section className="px-4 py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Visit Us</h2>

        <Card className="border-border shadow-sm">
          <CardContent className="p-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  23-95 Gannevaripalli Colony,
                  <br />
                  Near Rural Police Station,
                  <br />
                  Kadapa–Gooty Road,
                  <br />
                  Tadipatri Rural, Andhra Pradesh 515411
                </p>
                <p className="text-xs text-primary mt-2 font-medium">
                  Landmark: Near Rural Police Station, Kadapa–Gooty Road intersection
                </p>
                <Button asChild variant="link" size="sm" className="px-0 mt-2 h-auto">
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-3 h-3 mr-1" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+916309630960"
                  className="text-primary font-semibold text-lg hover:underline inline-flex items-center gap-2"
                >
                  063096 30960
                </a>
                <p className="text-xs text-muted-foreground mt-1">Tap to call directly</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                <p className="text-emerald-700 font-semibold">Open 24 Hours, 7 Days a Week</p>
                <p className="text-sm text-muted-foreground">Emergency services available at all times</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
