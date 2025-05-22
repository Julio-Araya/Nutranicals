"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    // Verificar si estamos en la página de inicio
    const path = window.location.pathname
    setIsHomePage(path === "/" || path === "/longevity")

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : isHomePage
            ? "bg-transparent"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className={`font-bold text-2xl ${isHomePage && !isScrolled ? "text-white" : "text-[#1A7A8B]"}`}>
          Nutranicals
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${isHomePage && !isScrolled ? "text-white hover:text-white/80" : "hover:text-[#1A7A8B]"}`}
          >
            Inicio
          </Link>
          <Link
            href="/sobre-nosotros"
            className={`text-sm font-medium ${isHomePage && !isScrolled ? "text-white hover:text-white/80" : "hover:text-[#1A7A8B]"}`}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium ${isHomePage && !isScrolled ? "text-white hover:text-white/80" : "hover:text-[#1A7A8B]"}`}
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className={`text-sm font-medium ${isHomePage && !isScrolled ? "text-white hover:text-white/80" : "hover:text-[#1A7A8B]"}`}
          >
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://instagram.com"
            className={
              isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-gray-500 hover:text-[#1A7A8B]"
            }
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://facebook.com"
            className={
              isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-gray-500 hover:text-[#1A7A8B]"
            }
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://twitter.com"
            className={
              isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-gray-500 hover:text-[#1A7A8B]"
            }
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Button
            size="sm"
            className={
              isHomePage && !isScrolled
                ? "bg-white text-[#1A7A8B] hover:bg-white/90"
                : "bg-[#1A7A8B] hover:bg-[#1A7A8B]/90 text-white"
            }
          >
            Suscribirse
          </Button>
        </div>
      </div>
    </header>
  )
}
