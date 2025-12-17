import { Bone, Stethoscope, Siren, HeartPulse, Baby, ShieldPlus, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { name: "Emergency", icon: Siren, highlight: true },
  { name: "ICU", icon: HeartPulse, highlight: true },
  { name: "Orthopaedics", icon: Bone, highlight: true },
  { name: "General Medicine", icon: Stethoscope, highlight: false },
  { name: "Pediatrics", icon: Baby, highlight: false },
  { name: "Maternity", icon: Users, highlight: false },
  { name: "Preventive Medicine", icon: ShieldPlus, highlight: false },
]

export function ServicesSection() {
  return (
    <section className="px-4 py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Our Services</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service) => (
            <Card
              key={service.name}
              className={`border ${service.highlight ? "border-primary bg-sky-50" : "border-border"}`}
            >
              <CardContent className="p-4 text-center">
                <service.icon
                  className={`w-8 h-8 mx-auto mb-2 ${service.highlight ? "text-primary" : "text-muted-foreground"}`}
                />
                <p
                  className={`font-medium text-sm md:text-base ${service.highlight ? "text-primary" : "text-foreground"}`}
                >
                  {service.name}
                </p>
                {service.highlight && <span className="text-xs text-primary/80">24 Hours</span>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
