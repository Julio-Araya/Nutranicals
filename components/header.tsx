"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-[#1A7A8B]">
          Nutranicals
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#1A7A8B]">
            Inicio
          </Link>
          <Link href="/sobre-nosotros" className="text-sm font-medium hover:text-[#1A7A8B]">
            Sobre Nosotros
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-[#1A7A8B]">
            Blog
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-[#1A7A8B]">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="https://instagram.com" className="text-gray-500 hover:text-[#1A7A8B]">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://facebook.com" className="text-gray-500 hover:text-[#1A7A8B]">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://twitter.com" className="text-gray-500 hover:text-[#1A7A8B]">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Iniciar Sesión
          </Button>
          <Button size="sm" className="bg-[#1A7A8B] hover:bg-[#1A7A8B]/90">
            Suscribirse
          </Button>
        </div>
      </div>
    </header>
  )
}
