import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Bookmark, Heart, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // En una implementación real, aquí se obtendría el artículo basado en el slug
  const article = {
    title: "¿Qué es el NMN y por qué es importante para la longevidad?",
    date: "15 de abril, 2023",
    readTime: "8 min de lectura",
    author: "Dr. Carlos Mendoza",
    authorRole: "Investigador en Bioquímica",
    category: "Fundamentos del NMN",
    content: `
      <p>El Nicotinamida Mononucleótido (NMN) es una molécula que ha captado la atención de científicos y entusiastas de la longevidad en los últimos años. Pero, ¿qué es exactamente y por qué genera tanto interés?</p>
      
      <h2>¿Qué es el NMN?</h2>
      
      <p>El NMN es un nucleótido derivado de la ribosa y la nicotinamida. En términos más sencillos, es un compuesto que actúa como precursor del NAD+ (Nicotinamida Adenina Dinucleótido), una coenzima crucial presente en todas las células vivas.</p>
      
      <p>El NAD+ juega un papel fundamental en:</p>
      
      <ul>
        <li>El metabolismo energético</li>
        <li>La reparación del ADN</li>
        <li>La expresión genética</li>
        <li>La comunicación celular</li>
        <li>El funcionamiento de las mitocondrias (las "centrales energéticas" de nuestras células)</li>
      </ul>
      
      <h2>¿Por qué es importante para la longevidad?</h2>
      
      <p>A medida que envejecemos, los niveles de NAD+ en nuestro cuerpo disminuyen significativamente. Esta disminución se ha asociado con diversos aspectos del envejecimiento y condiciones relacionadas con la edad, como:</p>
      
      <ul>
        <li>Deterioro cognitivo</li>
        <li>Disminución de la función metabólica</li>
        <li>Reducción de la capacidad de reparación del ADN</li>
        <li>Inflamación crónica</li>
        <li>Disfunción mitocondrial</li>
      </ul>
      
      <p>Aquí es donde entra el NMN. Al ser un precursor directo del NAD+, la suplementación con NMN podría potencialmente aumentar los niveles de NAD+ en el cuerpo, contrarrestando así algunos de los efectos negativos asociados con el envejecimiento.</p>
      
      <h2>Evidencia científica</h2>
      
      <p>Numerosos estudios en modelos animales han mostrado resultados prometedores. Por ejemplo, investigaciones en ratones han demostrado que la administración de NMN puede:</p>
      
      <ul>
        <li>Mejorar el metabolismo energético</li>
        <li>Aumentar la resistencia física</li>
        <li>Proteger contra la diabetes y la obesidad relacionadas con la edad</li>
        <li>Mejorar la función vascular</li>
        <li>Proteger contra el deterioro cognitivo</li>
      </ul>
      
      <p>Es importante destacar que, aunque estos resultados son prometedores, la investigación en humanos está todavía en sus primeras etapas. Los ensayos clínicos en curso nos proporcionarán una comprensión más clara de los efectos del NMN en humanos y su potencial para promover la longevidad y la salud.</p>
      
      <h2>Conclusión</h2>
      
      <p>El NMN representa una frontera emocionante en la investigación sobre el envejecimiento. Si bien aún queda mucho por aprender, el creciente cuerpo de evidencia sugiere que podría tener un papel significativo en nuestros esfuerzos por vivir vidas más largas y saludables.</p>
      
      <p>En Nutranicals, nos mantenemos al día con las últimas investigaciones sobre NMN y otros compuestos relacionados con la longevidad. Nuestro compromiso es proporcionar información educativa basada en evidencia científica para ayudarte a tomar decisiones informadas sobre tu salud.</p>
    `,
    relatedArticles: [
      {
        title: "La ciencia detrás del NAD+ y su relación con el envejecimiento",
        slug: "ciencia-nad",
        image: "https://placehold.co/500x300",
      },
      {
        title: "NMN vs. NR: ¿Cuál es la diferencia y cuál elegir?",
        slug: "nmn-vs-nr",
        image: "https://placehold.co/500x300",
      },
      {
        title: "Guía definitiva de dosificación de NMN según edad y objetivos",
        slug: "guia-dosificacion",
        image: "https://placehold.co/500x300",
      },
    ],
  }

  return (
    <div className="container max-w-4xl px-4 py-12 mx-auto">
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-[#1A5F7A]">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver al blog
        </Link>
      </div>

      <article>
        <div className="space-y-2 mb-8">
          <div className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A]">
            {article.category}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A5F7A]">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              {article.date}
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {article.readTime}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Image
            src="https://placehold.co/50x50"
            alt={article.author}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{article.author}</div>
            <div className="text-sm text-gray-500">{article.authorRole}</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg mb-8">
          {params.slug === "que-es-nmn" ? (
            <Image
              src="https://res.cloudinary.com/do3qhjox0/image/upload/v1745080321/Que%CC%81_es_el_NMN_y_por_que%CC%81_es_importante_para_la_longevidad_qul7yf.png"
              alt="Molécula de NMN (Nicotinamida Mononucleótido)"
              width={1000}
              height={500}
              className="w-full object-cover"
            />
          ) : (
            <Image
              src="https://placehold.co/1000x500"
              alt={article.title}
              width={1000}
              height={500}
              className="w-full object-cover"
            />
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <div
            className="prose-headings:text-[#1A5F7A] prose-headings:font-sans prose-headings:font-bold prose-p:text-gray-700 prose-p:font-serif prose-li:text-gray-700 prose-li:font-serif prose-a:text-[#1A5F7A] prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span>125</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>24</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Bookmark className="h-4 w-4" />
              <span>Guardar</span>
            </Button>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Share2 className="h-4 w-4" />
            <span>Compartir</span>
          </Button>
        </div>
      </article>

      <Separator className="my-12" />

      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#1A5F7A]">Artículos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {article.relatedArticles.map((relatedArticle, index) => (
            <Card key={index}>
              <CardHeader className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={relatedArticle.image || "https://placehold.co/500x300"}
                    alt={relatedArticle.title}
                    width={500}
                    height={300}
                    className="aspect-video object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-base font-bold">{relatedArticle.title}</CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link
                  href={`/blog/${relatedArticle.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#1A5F7A]"
                >
                  Leer artículo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#1A5F7A]">Deja un comentario</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tu email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="comment" className="text-sm font-medium">
              Comentario
            </label>
            <textarea
              id="comment"
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Escribe tu comentario aquí..."
            />
          </div>
          <Button className="bg-[#1A5F7A] hover:bg-[#1A5F7A]/90">Enviar comentario</Button>
        </form>
      </div>
    </div>
  )
}
