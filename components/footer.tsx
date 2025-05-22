import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#1A5F7A] text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marca y mensaje */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Nutranicals</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Nutrición para la longevidad basada en ciencia. Descubre cómo el NMN y otros suplementos pueden potenciar
              tu salud celular.
            </p>
            {/* Newsletter signup */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Suscríbete al Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                />
                <Button className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white whitespace-nowrap">Suscribirse</Button>
              </div>
            </div>
          </div>

          {/* Navegación principal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/longevity" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terminos" className="text-white/80 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-white/80 hover:text-white transition-colors">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/80 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y redes sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-white/80" />
                <a href="mailto:hello@nutranicals.com" className="text-white/80 hover:text-white transition-colors">
                  hello@nutranicals.com
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-white/80">Síguenos para más contenido sobre longevidad</p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://instagram.com"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Franja final */}
      <div className="border-t border-white/20">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} Nutranicals. Todos los derechos reservados.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs">
                Los productos de este sitio no están destinados a diagnosticar, tratar ni prevenir enfermedades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
