import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NMN y fertilidad: ¿Una opción real para mujeres después de los 40?",
  description:
    "Descubre cómo el NMN podría ayudar a mejorar la fertilidad en mujeres mayores de 40 años a través de la regeneración celular y la energía mitocondrial.",
  openGraph: {
    title: "NMN y fertilidad: ¿Una opción real para mujeres después de los 40?",
    description:
      "Descubre cómo el NMN podría ayudar a mejorar la fertilidad en mujeres mayores de 40 años a través de la regeneración celular y la energía mitocondrial.",
    type: "article",
    url: "https://nutranicals.com/blog/nmn-fertilidad",
  },
  keywords: ["NMN", "fertilidad", "vitalidad", "longevidad", "salud reproductiva", "menopausia", "óvulos", "NAD+"],
}

export default function NmnFertilidadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
