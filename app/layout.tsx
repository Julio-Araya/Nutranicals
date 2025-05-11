import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nutranicals - Nutrición para la longevidad basada en ciencia",
  description:
    "Descubre cómo el NMN y otros suplementos pueden potenciar tu salud celular y promover una vida más larga y saludable.",
  // This meta tag will refresh the page to /longevity if the redirect in page.tsx doesn't work
  // It's set to 0 seconds for immediate redirect
  ...(process.env.NODE_ENV === "production" && {
    other: {
      "http-equiv": "refresh",
      content: "0;url=/longevity",
    },
  }),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
