import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "¿Puede el NMN ayudar a prevenir o revertir las canas?",
  description:
    "¿El NMN puede revertir las canas o prevenirlas? Analizamos la ciencia detrás de este suplemento y su rol en el envejecimiento celular.",
  openGraph: {
    title: "¿Puede el NMN ayudar a prevenir o revertir las canas?",
    description:
      "¿El NMN puede revertir las canas o prevenirlas? Analizamos la ciencia detrás de este suplemento y su rol en el envejecimiento celular.",
    type: "article",
    url: "https://nutranicals.com/blog/canas",
  },
}

export default function CanasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
