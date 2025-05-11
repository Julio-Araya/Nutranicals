import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LongevityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A7A8B]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Nutrición para la longevidad basada en ciencia
                </h1>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre cómo el NMN y otros suplementos pueden potenciar tu salud celular y promover una vida más
                  larga y saludable.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-[#1A7A8B] hover:bg-gray-100">Suscríbete al Newsletter</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  Conoce más sobre NMN
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400"
                  alt="Video introductorio"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" className="w-16 h-16 rounded-full bg-white/90 text-[#1A7A8B] hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span className="sr-only">Play</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A7A8B]">
                La ciencia detrás del NMN
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                El Nicotinamida Mononucleótido (NMN) es un precursor del NAD+, una molécula crucial para el
                funcionamiento celular. A medida que envejecemos, los niveles de NAD+ disminuyen, lo que se asocia con
                diversos aspectos del envejecimiento.
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
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#FF7F50]">300%</div>
                <div className="text-sm text-gray-500">Aumento en estudios sobre NMN en los últimos 5 años</div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#FF7F50]">24%</div>
                <div className="text-sm text-gray-500">Incremento en la vida útil en estudios con ratones</div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#FF7F50]">10%</div>
                <div className="text-sm text-gray-500">Disminución anual de NAD+ a partir de los 40 años</div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#FF7F50]">50+</div>
                <div className="text-sm text-gray-500">Ensayos clínicos en curso sobre NMN y longevidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
