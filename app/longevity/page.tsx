import { Button } from "@/components/ui/button"
import ScienceSectionWithStats from "@/components/science-section-with-stats"
import FeaturedBlogPosts from "@/components/featured-blog-posts"
import Link from "next/link"

export default function LongevityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full width with video background */}
      <section className="relative w-full min-h-[90vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover w-auto h-auto"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video-xGyqYVeBDD54QnZ7f4wK08Bz3LLZZM.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta videos HTML5.
          </video>
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A7A8B]/80 to-[#1A7A8B]/40 z-10"></div>
        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Nutrición para la longevidad basada en ciencia
            </h1>
            <p className="mt-4 max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre cómo el NMN y otros suplementos pueden potenciar tu salud celular y promover una vida más larga y
              saludable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/form">
                <Button className="bg-white text-[#1A7A8B] hover:bg-white/90 font-medium">
                  Suscríbete al Newsletter
                </Button>
              </Link>
              <Link href="/blog">
                <Button className="bg-white text-[#1A7A8B] hover:bg-white/90 font-medium">
                  Conoce más sobre el NMN
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScienceSectionWithStats />

      {/* Featured Blog Posts */}
      <FeaturedBlogPosts />
    </div>
  )
}
