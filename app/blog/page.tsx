import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewsletterForm from "@/components/newsletter-form"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A5F7A]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Centro Educativo
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explora nuestros artículos sobre NMN, longevidad y salud celular basados en la ciencia más reciente.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="relative">
                <Input
                  className="pl-8 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Buscar artículos..."
                />
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
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="fundamentos">Fundamentos</TabsTrigger>
                <TabsTrigger value="investigacion">Investigación</TabsTrigger>
                <TabsTrigger value="guias">Guías Prácticas</TabsTrigger>
                <TabsTrigger value="estilo">Estilo de Vida</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://placehold.co/500x300"
                        alt="Cabello canoso en proceso de repigmentación"
                        width={500}
                        height={300}
                        className="aspect-video object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
                        Investigación Científica
                      </div>
                      <CardTitle className="text-xl font-bold">
                        ¿Puede el NMN ayudar a prevenir o revertir las canas?
                      </CardTitle>
                      <CardDescription>Publicado el 10 de mayo, 2023 • 7 min de lectura</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Analizamos la ciencia detrás del NMN y su potencial para combatir uno de los signos más visibles
                      del envejecimiento: las canas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/blog/canas" className="inline-flex items-center text-sm font-medium text-[#1A5F7A]">
                      Leer artículo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://res.cloudinary.com/do3qhjox0/image/upload/v1745080321/Que%CC%81_es_el_NMN_y_por_que%CC%81_es_importante_para_la_longevidad_qul7yf.png"
                        alt="¿Qué es el NMN?"
                        width={500}
                        height={300}
                        className="aspect-video object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
                        Fundamentos del NMN
                      </div>
                      <CardTitle className="text-xl font-bold">
                        ¿Qué es el NMN y por qué es importante para la longevidad?
                      </CardTitle>
                      <CardDescription>Publicado el 15 de abril, 2023 • 8 min de lectura</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Descubre cómo esta molécula puede ser clave para combatir el envejecimiento a nivel celular y por
                      qué los científicos están tan entusiasmados con su potencial.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/blog/que-es-nmn"
                      className="inline-flex items-center text-sm font-medium text-[#1A5F7A]"
                    >
                      Leer artículo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://placehold.co/500x300"
                        alt="La ciencia detrás del NAD+"
                        width={500}
                        height={300}
                        className="aspect-video object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
                        Investigación Científica
                      </div>
                      <CardTitle className="text-xl font-bold">
                        La ciencia detrás del NAD+ y su relación con el envejecimiento
                      </CardTitle>
                      <CardDescription>Publicado el 22 de abril, 2023 • 12 min de lectura</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Exploramos los estudios más recientes sobre cómo el NAD+ influye en los procesos de envejecimiento
                      y cómo el NMN puede ayudar a restaurar sus niveles.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/blog/ciencia-nad"
                      className="inline-flex items-center text-sm font-medium text-[#1A5F7A]"
                    >
                      Leer artículo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://placehold.co/500x300"
                        alt="NMN vs NR"
                        width={500}
                        height={300}
                        className="aspect-video object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
                        Guías Prácticas
                      </div>
                      <CardTitle className="text-xl font-bold">
                        NMN vs. NR: ¿Cuál es la diferencia y cuál elegir?
                      </CardTitle>
                      <CardDescription>Publicado el 29 de abril, 2023 • 10 min de lectura</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Analizamos las diferencias entre estos dos precursores de NAD+ y te ayudamos a determinar cuál
                      podría ser más adecuado para tus objetivos de salud.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/blog/nmn-vs-nr"
                      className="inline-flex items-center text-sm font-medium text-[#1A5F7A]"
                    >
                      Leer artículo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://placehold.co/500x300"
                        alt="Guía de dosificación"
                        width={500}
                        height={300}
                        className="aspect-video object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
                        Guías Prácticas
                      </div>
                      <CardTitle className="text-xl font-bold">
                        Guía definitiva de dosificación de NMN según edad y objetivos
                      </CardTitle>
                      <CardDescription>Publicado el 5 de mayo, 2023 • 15 min de lectura</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Todo lo que necesitas saber sobre cómo ajustar tu dosis de NMN según tu edad, peso, condición de
                      salud y objetivos específicos.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/blog/guia-dosificacion"
                      className="inline-flex items-center text-sm font-medium text-[#1A5F7A]"
                    >
                      Leer artículo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://placehold.co/500x300"
                        alt="Hábitos que potencian NMN"
                        width={500}
                        height={300}
                        className="aspect-video object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
                        Estilo de Vida
                      </div>
                      <CardTitle className="text-xl font-bold">
                        Los 7 hábitos que potencian los efectos del NMN
                      </CardTitle>
                      <CardDescription>Publicado el 12 de mayo, 2023 • 9 min de lectura</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Descubre cómo maximizar los beneficios del NMN a través de hábitos diarios que complementan su
                      acción en el organismo.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/blog/habitos-potencian-nmn"
                      className="inline-flex items-center text-sm font-medium text-[#1A5F7A]"
                    >
                      Leer artículo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="https://placehold.co/500x300"
                        alt="Combinaciones sinérgicas"
                        width={500}
                        height={300}
                        className="aspect-video object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="space-y-1 mt-4">
                      <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
                        Guías Prácticas
                      </div>
                      <CardTitle className="text-xl font-bold">
                        Combinaciones sinérgicas: NMN con otros suplementos para la longevidad
                      </CardTitle>
                      <CardDescription>Publicado el 19 de mayo, 2023 • 11 min de lectura</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Aprende qué otros suplementos pueden potenciar los efectos del NMN y crear sinergias para mejorar
                      tu salud celular y longevidad.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/blog/combinaciones-sinergicas"
                      className="inline-flex items-center text-sm font-medium text-[#1A5F7A]"
                    >
                      Leer artículo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" disabled>
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
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span className="sr-only">Página anterior</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-[#1A5F7A] text-white hover:bg-[#1A5F7A]/90">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <span className="sr-only">Página siguiente</span>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="fundamentos" className="space-y-8">
              {/* Contenido similar para la categoría Fundamentos */}
              <div className="text-center py-12">
                <p className="text-gray-500">Mostrando artículos de la categoría Fundamentos del NMN</p>
              </div>
            </TabsContent>
            <TabsContent value="investigacion" className="space-y-8">
              {/* Contenido similar para la categoría Investigación */}
              <div className="text-center py-12">
                <p className="text-gray-500">Mostrando artículos de la categoría Investigación Científica</p>
              </div>
            </TabsContent>
            <TabsContent value="guias" className="space-y-8">
              {/* Contenido similar para la categoría Guías Prácticas */}
              <div className="text-center py-12">
                <p className="text-gray-500">Mostrando artículos de la categoría Guías Prácticas</p>
              </div>
            </TabsContent>
            <TabsContent value="estilo" className="space-y-8">
              {/* Contenido similar para la categoría Estilo de Vida */}
              <div className="text-center py-12">
                <p className="text-gray-500">Mostrando artículos de la categoría Estilo de Vida</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A5F7A]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Mantente Informado
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Suscríbete a nuestro newsletter y recibe las últimas novedades sobre NMN, longevidad y salud celular.
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
