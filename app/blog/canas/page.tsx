import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CanasPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 mx-auto">
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-[#1A7A8B]">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver al blog
        </Link>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1A7A8B] mb-6">
          ¿Puede el NMN ayudar a prevenir o revertir las canas?
        </h1>

        <p className="font-bold text-lg mb-6">
          Las canas son una de las señales visibles más comunes del envejecimiento, y para muchas personas, también una
          de las más frustrantes...
        </p>

        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src="https://placehold.co/800x400"
            alt="Cabello canoso en proceso de repigmentación, vista de perfil."
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">¿Por qué salen canas?</h2>
        <p>
          Las canas aparecen cuando los folículos pilosos dejan de producir melanina, el pigmento responsable del color
          de nuestro cabello. Este proceso está relacionado con varios factores:
        </p>
        <ul>
          <li>
            <strong>Envejecimiento natural:</strong> Con el paso del tiempo, las células productoras de melanina
            (melanocitos) reducen gradualmente su actividad hasta detenerse por completo.
          </li>
          <li>
            <strong>Estrés oxidativo:</strong> Los radicales libres dañan las células de los folículos pilosos,
            acelerando su envejecimiento y afectando la producción de melanina.
          </li>
          <li>
            <strong>Factores genéticos:</strong> La predisposición a encanecer temprano suele tener un componente
            hereditario importante.
          </li>
          <li>
            <strong>Deficiencias nutricionales:</strong> La falta de ciertos nutrientes como vitamina B12, ácido fólico,
            cobre y hierro puede contribuir a la aparición prematura de canas.
          </li>
          <li>
            <strong>Tabaquismo:</strong> Fumar acelera el envejecimiento celular y puede provocar la aparición temprana
            de canas.
          </li>
          <li>
            <strong>Estrés crónico:</strong> Aunque controvertido, algunos estudios sugieren que el estrés prolongado
            podría agotar las células madre de los melanocitos.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">El rol del NMN en el envejecimiento celular</h2>
        <p>
          El Nicotinamida Mononucleótido (NMN) es un precursor del NAD+ (Nicotinamida Adenina Dinucleótido), una
          molécula esencial para el funcionamiento celular que disminuye naturalmente con la edad. El NAD+ juega un
          papel crucial en:
        </p>
        <ul>
          <li>La producción de energía en las mitocondrias</li>
          <li>La reparación del ADN</li>
          <li>La activación de las sirtuinas, proteínas relacionadas con la longevidad</li>
          <li>La regulación del estrés oxidativo</li>
        </ul>
        <p>En el contexto de los folículos pilosos, el NMN podría beneficiar la salud capilar de varias maneras:</p>
        <ul>
          <li>Mejorando el metabolismo energético de los melanocitos, las células responsables de producir melanina</li>
          <li>Reduciendo el daño oxidativo que afecta a los folículos pilosos</li>
          <li>
            Activando las sirtuinas, que pueden ayudar a mantener la función celular y potencialmente la producción de
            melanina
          </li>
          <li>Promoviendo la reparación del ADN en las células del folículo piloso</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">¿Puede el NMN revertir las canas?</h2>
        <p>
          La pregunta sobre si el NMN puede revertir las canas es compleja y la evidencia científica actual no ofrece
          una respuesta definitiva. Sin embargo, hay algunos puntos importantes a considerar:
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Estudios en animales</h3>
        <p>
          Investigaciones en modelos animales han mostrado que la suplementación con NMN puede mejorar varios marcadores
          de envejecimiento celular. Algunos estudios han observado mejoras en la función mitocondrial y reducción del
          estrés oxidativo, factores que podrían teóricamente beneficiar a los melanocitos.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Evidencia anecdótica</h3>
        <p>
          Existen reportes anecdóticos de personas que han notado cambios en la pigmentación de su cabello tras periodos
          prolongados de suplementación con NMN. Sin embargo, estos reportes no constituyen evidencia científica sólida
          y podrían estar influenciados por otros factores.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-2">Reducción del estrés oxidativo</h3>
        <p>
          El NMN, al aumentar los niveles de NAD+, puede mejorar los mecanismos antioxidantes del cuerpo. Dado que el
          estrés oxidativo es uno de los factores que contribuyen a la pérdida de melanina, esta podría ser una vía por
          la cual el NMN podría teóricamente ayudar a prevenir o retrasar la aparición de canas.
        </p>

        <h2 className="text-2xl font-bold text-[#1A7A8B] mt-10 mb-4">Conclusión</h2>
        <p>
          Aunque actualmente no existe evidencia científica definitiva que demuestre que el NMN puede revertir las canas
          ya existentes, su papel en la mejora de la salud celular general y la reducción del estrés oxidativo sugiere
          que podría tener un efecto beneficioso en la salud del cabello y potencialmente en la prevención o retraso de
          la aparición de canas.
        </p>
        <p>
          El NMN forma parte de un enfoque integral para el envejecimiento saludable, y sus beneficios van mucho más
          allá del color del cabello, abarcando aspectos fundamentales de la salud celular y metabólica.
        </p>
        <p className="font-bold">
          Inicia tu suplementación con NMN y acompaña el proceso con hábitos saludables. Recuerda que la consistencia es
          clave para obtener resultados en cualquier régimen de suplementación.
        </p>

        <Separator className="my-8" />

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">¿Quieres saber más sobre los beneficios del NMN?</h3>
          <p className="mb-4">
            Explora nuestros artículos sobre NMN y descubre cómo este suplemento puede ayudarte a mejorar tu salud
            celular y promover un envejecimiento saludable.
          </p>
          <Button className="bg-[#1A7A8B] hover:bg-[#1A7A8B]/90">
            <Link href="/blog">Ver más artículos</Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
