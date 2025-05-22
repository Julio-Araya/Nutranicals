import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  category: string
  readTime: string
  image: string
}

export default function FeaturedBlogPosts() {
  // Estos serían los artículos destacados del blog
  const featuredPosts: BlogPost[] = [
    {
      slug: "que-es-nmn",
      title: "¿Qué es el NMN y por qué es importante para la longevidad?",
      category: "Fundamentos del NMN",
      readTime: "8 min de lectura",
      image:
        "https://res.cloudinary.com/do3qhjox0/image/upload/v1745080321/Que%CC%81_es_el_NMN_y_por_que%CC%81_es_importante_para_la_longevidad_qul7yf.png",
    },
    {
      slug: "nmn-fertilidad",
      title: "NMN y fertilidad: ¿Una opción real para mujeres después de los 40?",
      category: "Vitalidad y Fertilidad",
      readTime: "10 min de lectura",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%202-100.jpg-Acb474kZ9NGlIV6Dz2soz4RaSeCJZ9.jpeg",
    },
    {
      slug: "canas",
      title: "¿Puede el NMN ayudar a prevenir o revertir las canas?",
      category: "Investigación Científica",
      readTime: "7 min de lectura",
      image: "https://placehold.co/500x300",
    },
    {
      slug: "ciencia-nad",
      title: "La ciencia detrás del NAD+ y su relación con el envejecimiento",
      category: "Investigación Científica",
      readTime: "12 min de lectura",
      image: "https://placehold.co/500x300",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1A7A8B]">Artículos destacados del blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-[#1A7A8B] font-medium mb-1">{post.category}</div>
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
                <div className="text-xs text-gray-500">{post.readTime}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md bg-[#1A7A8B] px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1A7A8B]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A7A8B]"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}
