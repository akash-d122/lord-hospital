import { Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function DoctorSection() {
  return (
    <section data-reveal className="px-4 py-12 md:py-16 bg-slate-50 reveal">
      <div className="container mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Our Specialist</h2>

        <Card className="border-border overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/20">
                <Image
                  src="/images/dr-anil-reddy.jpg"
                  alt="Dr. Anil Reddy - Diabetes Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-bold text-foreground">Dr. Anil Reddy</h3>
                <p className="text-primary font-semibold mb-2">Diabetes / Sugar Specialist</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Endocrinology</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Specialized care for diabetes management and endocrine disorders with a patient-centered approach.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
