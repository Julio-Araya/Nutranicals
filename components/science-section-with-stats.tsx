import Link from "next/link"
import { ArrowRight, Clock, Brain, Zap, Activity } from "lucide-react"

export default function ScienceSectionWithStats() {
  const stats = [
    {
      number: "50%",
      title: "menos de NAD+ a partir de los 40 años",
      icon: <Clock className="h-6 w-6 text-[#FF7F50]" />,
    },
    {
      number: "20 años",
      title: "de rejuvenecimiento funcional en ratones",
      icon: <Brain className="h-6 w-6 text-[#FF7F50]" />,
    },
    {
      number: "6 semanas",
      title: "para elevar los niveles de NAD+",
      icon: <Zap className="h-6 w-6 text-[#FF7F50]" />,
    },
    {
      number: "38%",
      title: "más resistencia física en adultos mayores",
      icon: <Activity className="h-6 w-6 text-[#FF7F50]" />,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A7A8B]">
              La ciencia detrás del NMN
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              El Nicotinamida Mononucleótido (NMN) es un precursor del NAD+, una molécula crucial para el funcionamiento
              celular. A medida que envejecemos, los niveles de NAD+ disminuyen, lo que se asocia con diversos aspectos
              del envejecimiento.
            </p>
            <div className="flex gap-4">
              <Link
                href="/blog/fundamentos-nmn"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#1A7A8B] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#1A7A8B]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A7A8B]"
              >
                Leer más
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-lg border bg-background p-6 shadow-sm flex items-center">
                <div className="bg-[#1A7A8B]/10 rounded-full p-3 mr-4 flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-[#FF7F50] leading-tight">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
