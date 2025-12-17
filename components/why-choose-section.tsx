import { Clock, Siren, HeartPulse, MapPin, Users } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock medical care, every day of the year",
  },
  {
    icon: Siren,
    title: "Emergency Services",
    description: "Immediate response for all medical emergencies",
  },
  {
    icon: HeartPulse,
    title: "ICU Facilities",
    description: "Fully equipped intensive care unit for critical patients",
  },
  {
    icon: MapPin,
    title: "Easy to Reach",
    description: "Located near Rural Police Station on Kadapa–Gooty Road",
  },
  {
    icon: Users,
    title: "Community Care",
    description: "Regular free medical camps for community health",
  },
]

export function WhyChooseSection() {
  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Why Choose Lord Hospital</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
