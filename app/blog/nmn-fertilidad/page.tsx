import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function NmnFertilidadPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 mx-auto">
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-[#1A7A8B]">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver al blog
        </Link>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="flex items-center gap-2 mb-4">
          <Link
            href="/blog?category=vitalidad"
            className="inline-block rounded-full bg-[#86C6BA]/20 px-3 py-1 text-xs text-[#1A5F7A] no-underline"
          >
            Vitalidad y Fertilidad
          </Link>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A7A8B] mb-6">
          NMN y fertilidad: ¿Una opción real para mujeres que quieren ser madres después de los 40?
        </h1>

        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%202-100.jpg-Acb474kZ9NGlIV6Dz2soz4RaSeCJZ9.jpeg"
            alt="Pareja sosteniendo juntos pequeños calcetines de bebé con detalles amarillos"
            width={800}
            height={500}
            className="w-full h-auto rounded-xl"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">
          ¿Qué relación tiene el NMN con la energía celular y la fertilidad?
        </h2>
        <p>
          A partir de los 35 años, muchas mujeres comienzan a notar cambios en su fertilidad. La reserva ovárica
          disminuye, los óvulos envejecen y el cuerpo responde de manera diferente a las hormonas. Sin embargo, en los
          últimos años ha surgido una nueva línea de investigación que está generando esperanzas reales: la
          suplementación con NMN (nicotinamida mononucleótido).
        </p>
        <p>
          El NMN es un precursor directo del NAD+, una coenzima esencial que disminuye con la edad y que está
          relacionada con la energía celular, la reparación del ADN y el buen funcionamiento mitocondrial. Estudios en
          animales y primeras observaciones en humanos sugieren que el NMN podría ayudar a rejuvenecer ciertos tejidos,
          incluyendo los ovarios.
        </p>
        <p>
          David Sinclair, profesor de Harvard y uno de los referentes más influyentes en el campo de la longevidad,
          relata en su libro <em>Lifespan</em> cómo la suplementación con NMN restauró la fertilidad en ratonas mayores.
          Más sorprendente aún, comparte el caso de la madre de uno de sus alumnos, que tras entrar en menopausia,
          volvió a ovular al comenzar a tomar NMN de forma regular.
        </p>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">
          Casos reales, estudios clínicos y lo que aún falta investigar
        </h2>
        <p>
          Estudios recientes en modelos animales han demostrado que el NMN mejora la calidad de los óvulos en ratonas
          envejecidas, revitaliza la función mitocondrial en las células ováricas y mejora las tasas de fertilidad. En
          uno de los estudios más citados, ratonas de edad avanzada suplementadas con NMN mostraron una función ovárica
          similar a la de animales jóvenes.
        </p>
        <p>
          En humanos, la evidencia es limitada pero prometedora. Algunos ensayos clínicos en curso están evaluando los
          efectos del NMN en marcadores de fertilidad en mujeres, incluyendo la calidad de los folículos y la regulación
          hormonal. Clínicas en Japón, Australia y EE.UU. ya exploran su uso complementario en fertilidad asistida.
        </p>
        <p>
          Aunque no es una cura milagrosa, representa una herramienta potencialmente poderosa para mujeres que buscan
          alternativas más naturales para prolongar su ventana fértil.
        </p>

        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src="https://placehold.co/800x400"
            alt="Infografía sobre NMN y calidad de óvulos"
            width={800}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </div>

        <h3 className="text-xl font-bold text-[#1A7A8B] mt-8 mb-2">Referencias científicas</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-8">
          <li>
            Zhang, H. et al. (2016).{" "}
            <em>NAD+ repletion improves mitochondrial and stem cell function and enhances life span in mice</em>. Cell
            Metabolism, 24(6), 795–806.{" "}
            <a href="https://doi.org/10.1016/j.cmet.2016.09.013" className="text-blue-600 underline">
              Ver estudio
            </a>
          </li>
          <li>
            Bertoldo, M. J. et al. (2020).{" "}
            <em>
              Nicotinamide mononucleotide supplementation increases ovulation and oocyte quality in aged female mice
            </em>
            . Cell Reports, 30(4), 1078–1089.{" "}
            <a href="https://doi.org/10.1016/j.celrep.2019.12.081" className="text-blue-600 underline">
              Ver estudio
            </a>
          </li>
          <li>
            Sinclair, D. (2019). <em>Lifespan: Why We Age—And Why We Don't Have To</em>. Atria Books.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">
          Consideraciones importantes para mujeres interesadas en el NMN
        </h2>
        <p>
          Si estás considerando el NMN como parte de tu estrategia para mejorar tu fertilidad después de los 40, hay
          algunos puntos importantes a tener en cuenta:
        </p>
        <ul>
          <li>
            <strong>Consulta médica:</strong> Siempre es fundamental discutir cualquier suplementación con tu médico,
            especialmente si estás bajo tratamientos de fertilidad.
          </li>
          <li>
            <strong>Calidad del suplemento:</strong> La pureza y procedencia del NMN es crucial. Busca productos de
            laboratorios certificados con análisis de terceros.
          </li>
          <li>
            <strong>Enfoque integral:</strong> El NMN debería ser parte de una estrategia más amplia que incluya
            nutrición adecuada, manejo del estrés, ejercicio moderado y descanso de calidad.
          </li>
          <li>
            <strong>Expectativas realistas:</strong> Aunque prometedor, el NMN no garantiza resultados y la
            investigación en humanos aún está en desarrollo.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">Conclusión</h2>
        <p>
          El NMN representa una frontera prometedora en el campo de la fertilidad femenina tardía. Si bien necesitamos
          más estudios clínicos en humanos para confirmar su eficacia, los resultados preliminares son alentadores.
        </p>
        <p>
          Para mujeres que desean ser madres después de los 40, el NMN podría convertirse en un aliado valioso como
          parte de un enfoque integral para optimizar la salud reproductiva. La ciencia de la longevidad está abriendo
          nuevas posibilidades que podrían transformar nuestra comprensión de los límites biológicos de la fertilidad
          femenina.
        </p>

        <Separator className="my-8" />

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">¿Quieres saber más sobre vitalidad y fertilidad?</h3>
          <p className="mb-4">
            Explora nuestros artículos sobre NMN y descubre cómo este suplemento puede ayudarte a mejorar tu salud
            celular, vitalidad y fertilidad.
          </p>
          <Button className="bg-[#1A7A8B] hover:bg-[#1A7A8B]/90">
            <Link href="/blog?category=vitalidad">Ver más artículos de esta categoría</Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
