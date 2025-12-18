import { Bone, Stethoscope, Siren, HeartPulse, Baby, ShieldPlus, Users } from "lucide-react"

const services = [
  { name: "Emergency", icon: Siren, highlight: true, desc: "24/7 Care" },
  { name: "ICU", icon: HeartPulse, highlight: true, desc: "24/7 Care" },
  { name: "Orthopaedics", icon: Bone, highlight: true, desc: "24/7 Care" },
  { name: "General Medicine", icon: Stethoscope, highlight: false, desc: "Expert Care" },
  { name: "Pediatrics", icon: Baby, highlight: false, desc: "Child Care" },
  { name: "Maternity", icon: Users, highlight: false, desc: "Mother & Baby" },
  { name: "Preventive", icon: ShieldPlus, highlight: false, desc: "Wellness" },
]

export function ServicesSection() {
  return (
    <section className="px-4 pt-4 pb-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Our Services</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-md mx-auto">
          Comprehensive healthcare services for you and your family
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`
                relative p-4 md:p-5 rounded-2xl text-center transition-all duration-300
                hover:scale-[1.02] hover:shadow-lg
                ${
                  service.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20"
                    : "bg-secondary/50 border border-border hover:border-primary/30"
                }
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {service.highlight && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                  24/7
                </span>
              )}
              <div
                className={`
                w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-xl flex items-center justify-center
                ${service.highlight ? "bg-primary/15" : "bg-muted"}
              `}
              >
                <service.icon
                  className={`w-6 h-6 md:w-7 md:h-7 ${service.highlight ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <p
                className={`font-semibold text-sm md:text-base mb-1 ${service.highlight ? "text-primary" : "text-foreground"}`}
              >
                {service.name}
              </p>
              <p className="text-xs text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
