import { User, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DoctorSection() {
  return (
    <section className="px-4 py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Our Specialist</h2>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-primary" />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground">Dr. Anil Reddy</h3>
                <p className="text-primary font-semibold mb-2">Diabetes / Sugar Specialist</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Endocrinology</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
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
