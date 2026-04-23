import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dancers.jpg"
          alt="Young ballet dancers performing on stage"
          fill
          className="object-cover"
          priority
        />
        {/* Brown/sepia overlay */}
        <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Carousel Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors hidden lg:block">
        <ChevronLeft className="w-12 h-12" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors hidden lg:block">
        <ChevronRight className="w-12 h-12" />
      </button>

      {/* Logo and Title */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] lg:min-h-[700px] text-center px-4 pt-16">
        <h1 className="text-4xl lg:text-7xl font-extrabold text-white tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)] drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] uppercase">
          Harmonie der Künste e.V.
        </h1>
      </div>
    </section>
  )
}
