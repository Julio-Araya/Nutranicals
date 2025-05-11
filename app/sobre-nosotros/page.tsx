import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import NewsletterForm from "@/components/newsletter-form"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A5F7A]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Sobre Nosotros
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conoce nuestra misión, visión y el equipo detrás de Nutranicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#86C6BA]/20 px-3 py-1 text-sm text-[#1A5F7A]">
                Nuestra Misión
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A5F7A]">
                Educación y ciencia para una vida más larga y saludable
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                En Nutranicals, nuestra misión es proporcionar información educativa basada en evidencia científica
                sobre NMN y otros suplementos para la longevidad, ayudando a las personas a tomar decisiones informadas
                sobre su salud.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1A5F7A]" />
                  <span>Información basada en ciencia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1A5F7A]" />
                  <span>Transparencia en todo lo que hacemos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1A5F7A]" />
                  <span>Compromiso con la educación</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1A5F7A]" />
                  <span>Calidad y rigor en nuestro contenido</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/600x400"
                alt="Nuestra misión"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#86C6BA]/20 px-3 py-1 text-sm text-[#1A5F7A]">
                Nuestra Historia
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A5F7A]">
                El camino de Nutranicals
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre cómo comenzó nuestra pasión por la longevidad y el bienestar.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#86C6BA]/20 p-3">
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
                      className="h-6 w-6 text-[#1A5F7A]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Los Inicios</h3>
                  <p className="text-gray-500">
                    Nutranicals nació de la pasión de nuestro fundador por la ciencia de la longevidad y su deseo de
                    compartir información confiable sobre NMN con el público.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#86C6BA]/20 p-3">
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
                      className="h-6 w-6 text-[#1A5F7A]"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Nuestra Evolución</h3>
                  <p className="text-gray-500">
                    Lo que comenzó como un blog personal se ha convertido en una plataforma educativa integral, con
                    recursos y contenido respaldado por investigación científica.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-[#86C6BA]/20 p-3">
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
                      className="h-6 w-6 text-[#1A5F7A]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m16 12-4 4-4-4" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Hacia el Futuro</h3>
                  <p className="text-gray-500">
                    Nuestro objetivo es expandirnos para ofrecer productos de alta calidad que complementen nuestra
                    misión educativa, siempre manteniendo nuestros valores fundamentales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#86C6BA]/20 px-3 py-1 text-sm text-[#1A5F7A]">
                Nuestro Equipo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A5F7A]">
                Las mentes detrás de Nutranicals
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conoce a los expertos que hacen posible nuestra misión.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 pt-12 justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="https://placehold.co/200x200"
                  alt="Julio Araya"
                  width={200}
                  height={200}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Julio Araya</h3>
                <p className="text-sm text-gray-500">Fundador</p>
              </div>
              <p className="text-sm text-center text-gray-500">
                Ingeniero Civil Industrial fanático de la investigación antienvejecimiento y wellbeing.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="https://placehold.co/200x200"
                  alt="Dra. Ana Martínez"
                  width={200}
                  height={200}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Dra. Ana Martínez</h3>
                <p className="text-sm text-gray-500">Directora de Contenido</p>
              </div>
              <p className="text-sm text-center text-gray-500">
                Médico especialista en medicina preventiva y antienvejecimiento, con formación en comunicación
                científica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#86C6BA]/20 px-3 py-1 text-sm text-[#1A5F7A]">
                Nuestros Valores
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A5F7A]">
                Los principios que nos guían
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estos son los valores fundamentales que definen todo lo que hacemos en Nutranicals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-[#86C6BA]/20 p-3 mt-1">
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
                      className="h-6 w-6 text-[#1A5F7A]"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Rigor Científico</h3>
                    <p className="text-gray-500 mt-2">
                      Nos comprometemos a basar todo nuestro contenido en evidencia científica sólida, citando fuentes
                      confiables y manteniéndonos actualizados con las últimas investigaciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-[#86C6BA]/20 p-3 mt-1">
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
                      className="h-6 w-6 text-[#1A5F7A]"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Transparencia</h3>
                    <p className="text-gray-500 mt-2">
                      Creemos en ser completamente transparentes sobre lo que sabemos y lo que no sabemos, reconociendo
                      las limitaciones de la ciencia actual y evitando afirmaciones exageradas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-[#86C6BA]/20 p-3 mt-1">
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
                      className="h-6 w-6 text-[#1A5F7A]"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Educación Accesible</h3>
                    <p className="text-gray-500 mt-2">
                      Nos esforzamos por hacer que la información científica compleja sea accesible para todos,
                      explicando conceptos difíciles de manera clara y comprensible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-[#86C6BA]/20 p-3 mt-1">
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
                      className="h-6 w-6 text-[#1A5F7A]"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C.81 7.5.81 12.5 7.23 19l4.77 4.75L16.77 19c6.42-6.5 6.42-11.5 3.65-14.42z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Calidad y Excelencia</h3>
                    <p className="text-gray-500 mt-2">
                      Nos comprometemos a ofrecer contenido y, eventualmente, productos de la más alta calidad, sin
                      comprometer nunca nuestros estándares por conveniencia o beneficio económico.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A5F7A]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Únete a nuestra comunidad
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sé parte de nuestra misión de promover la longevidad y el bienestar a través de la ciencia y la
                educación.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <NewsletterForm />
              <p className="text-xs text-white/60">
                Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
