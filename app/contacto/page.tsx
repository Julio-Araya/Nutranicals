import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A5F7A]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Contacto
              </h1>
              <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estamos aquí para responder tus preguntas y escuchar tus comentarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#1A5F7A]">Ponte en contacto</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Información de contacto</CardTitle>
                    <CardDescription>Nuestros canales de comunicación directa.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4">
                        <Mail className="h-5 w-5 text-[#1A5F7A] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-gray-500">hello@nutranicals.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-[#1A5F7A] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Teléfono</h3>
                          <p className="text-sm text-gray-500">+56 9 1234 5678</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-[#1A5F7A] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Dirección</h3>
                          <p className="text-sm text-gray-500">Santiago, Chile</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Horario de atención</CardTitle>
                    <CardDescription>Estamos disponibles para ayudarte.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Lunes - Viernes</span>
                        <span className="text-gray-500">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sábado</span>
                        <span className="text-gray-500">10:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Domingo</span>
                        <span className="text-gray-500">Cerrado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Formulario de contacto</CardTitle>
                  <CardDescription>Completa el formulario con tus datos y consulta.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Teléfono (opcional)</Label>
                      <Input id="phone" placeholder="+56 9 1234 5678" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Tipo de consulta</Label>
                      <RadioGroup defaultValue="general" className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general" className="cursor-pointer">
                            General
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="technical" id="technical" />
                          <Label htmlFor="technical" className="cursor-pointer">
                            Técnica
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business" />
                          <Label htmlFor="business" className="cursor-pointer">
                            Negocios
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other" className="cursor-pointer">
                            Otra
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" />
                    </div>
                    <Button className="w-full bg-[#1A5F7A] hover:bg-[#1A5F7A]/90">Enviar mensaje</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1A5F7A]">Preguntas Frecuentes</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Respuestas a las preguntas más comunes sobre Nutranicals y nuestros servicios.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 pt-12">
            <Card>
              <CardHeader>
                <CardTitle>¿Qué es Nutranicals?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Nutranicals es una plataforma educativa dedicada a proporcionar información basada en evidencia
                  científica sobre NMN y otros suplementos para la longevidad y el bienestar.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>¿Venden productos de NMN?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Actualmente nos enfocamos en proporcionar contenido educativo. En el futuro, planeamos ofrecer
                  productos de alta calidad que complementen nuestra misión educativa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>¿Cómo puedo saber si el NMN es adecuado para mí?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Recomendamos consultar con un profesional de la salud antes de comenzar cualquier suplementación.
                  Nuestro contenido educativo puede ayudarte a tener conversaciones informadas con tu médico.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>¿Ofrecen asesoramiento personalizado?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  No ofrecemos asesoramiento médico personalizado. Nuestro objetivo es proporcionar información
                  educativa general. Para recomendaciones específicas, consulta con un profesional de la salud.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>¿Cómo puedo colaborar con Nutranicals?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Si eres un investigador, profesional de la salud o experto en el campo de la longevidad y te gustaría
                  colaborar, contáctanos a través del formulario en esta página o escríbenos a hello@nutranicals.com.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>¿Tienen un programa de afiliados?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Actualmente no contamos con un programa de afiliados, pero estamos considerando implementarlo en el
                  futuro. Mantente atento a nuestras actualizaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
