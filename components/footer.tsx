import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1A5F7A]">Nutranicals</h3>
            <p className="text-sm text-gray-500">
              Nutrición para la longevidad basada en ciencia. Descubre cómo el NMN y otros suplementos pueden potenciar
              tu salud celular.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/longevity" className="hover:text-[#1A5F7A]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-[#1A5F7A]">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1A5F7A]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#1A5F7A]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terminos" className="hover:text-[#1A5F7A]">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-[#1A5F7A]">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Contacto</h3>
            <p className="text-sm text-gray-500">hello@nutranicals.com</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nutranicals. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
