import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function Welcome() {
  return (
    <section id="about" className="py-16 bg-card floral-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-2 tracking-wide">
          WILLKOMMEN BEI HARMONIE DER KÜNSTE E.V.
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-muted-foreground leading-relaxed">
            <p className="italic text-2xl lg:text-3xl font-medium">
              einem internationalen Kunst- und Tanzverein für Kinder und Erwachsene.
              Wir fördern Tanz, Kultur und kreative Entwicklung.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/welcome-dance.jpg"
                alt="Dance students with instructor"
                fill
                className="object-cover"
              />
              {/* Brown/sepia overlay */}
              <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply" />
            </div>
            {/* Carousel Controls */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-gray-300 hover:text-gray-500 transition-colors hidden lg:block">
              <ChevronRight className="w-16 h-16" strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
