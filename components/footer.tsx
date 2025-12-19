import { Phone, MapPin, Navigation } from "lucide-react"

const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Lord+Hospital+Tadipatri+Andhra+Pradesh"

export function Footer() {
  return (
    <footer data-reveal className="bg-slate-900 text-slate-300 px-4 py-8 reveal">
      <div className="container mx-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Lord Hospital</h3>
            <div className="flex items-start gap-2 text-sm mb-3">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <span>
                  23-95 Gannevaripalli Colony, Near Rural Police Station,
                  <br />
                  Kadapa–Gooty Road, Tadipatri Rural, AP 515411
                </span>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 mt-1 text-xs"
                >
                  <Navigation className="w-3 h-3" />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              <a href="tel:+916309630960" className="hover:text-white font-medium">
                063096 30960
              </a>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Lord Hospital. All rights reserved.</p>
            <p className="text-xs text-slate-500 mt-1 max-w-xs md:ml-auto">
              This website is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
