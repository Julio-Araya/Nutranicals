import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nutranicals Longevity | NMN y salud celular en Chile",
  description:
    "Descubre Nutranicals Longevity: suplementos NMN importados y respaldados por ciencia para longevidad, energía celular y bienestar en Chile.",
  alternates: {
    canonical: "https://nutranicals.com/longevity",
  },
  openGraph: {
    title: "Nutranicals Longevity | NMN en Chile",
    description:
      "Longevidad respaldada por ciencia. Nutranicals Longevity te ofrece NMN y suplementos celulares de alta calidad.",
    url: "https://nutranicals.com/longevity",
    type: "website",
  },
}

export default function LongevityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
