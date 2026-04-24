"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft } from "lucide-react"

interface ClassCardProps {
  title: string
  ageRange: string
  image: string
  id: string
  description?: string
}

export function ClassCard({ title, ageRange, image, id, description }: ClassCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const handleOpenDetails = (event: CustomEvent) => {
      setShowDetails(event.detail === id)
    }

    window.addEventListener('openClassDetails', handleOpenDetails as EventListener)
    return () => window.removeEventListener('openClassDetails', handleOpenDetails as EventListener)
  }, [id])

  return (
    <div className="relative group overflow-hidden" id={id}>
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Brown/sepia overlay for images */}
        <div className="absolute inset-0 bg-amber-900/50 group-hover:bg-amber-900/60 transition-colors mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      {/* Default content */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-all duration-500 ${showDetails ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}`}
      >
        <h3 className="text-xl lg:text-2xl font-light text-white tracking-wider mb-2">
          {title}
        </h3>
        <div className="min-h-[88px] flex flex-col items-center justify-center">
          {ageRange && <p className="text-amber-200 text-xs whitespace-pre-line text-center leading-snug">{ageRange}</p>}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setShowDetails(true)
            const event = new CustomEvent('openClassDetails', { detail: id })
            window.dispatchEvent(event)
          }}
          className="border border-white text-white text-xs px-3 py-1.5 hover:bg-white hover:text-gray-900 transition-colors"
        >
          View Full Details
        </button>
      </div>

      {/* Details overlay when active */}
      <div 
        className={`absolute inset-0 bg-black/70 transition-all duration-500 flex flex-col items-center justify-center p-4 sm:p-6 ${showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="min-h-[170px] flex flex-col items-center justify-center w-full px-2">
          <div className="text-white text-center leading-relaxed flex flex-col gap-3 max-w-full">
            {description ? (
              description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed">{paragraph}</p>
              ))
            ) : (
              <>
                <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed">Unser Kickbox-Training verbindet Sport, Fitness und Selbstverteidigung.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed">Die Kinder und Jugendlichen lernen wichtige Techniken zur Selbstverteidigung, verbessern ihre körperliche Fitness und stärken Disziplin sowie Selbstvertrauen.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed">Das Training fördert Ausdauer, Kraft, Koordination und Konzentration in einer sicheren und motivierenden Umgebung.</p>
              </>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setShowDetails(false)
            const event = new CustomEvent('closeClassDetails')
            window.dispatchEvent(event)
          }}
          className="flex items-center gap-2 text-white text-sm border border-white px-4 py-2 hover:bg-white hover:text-gray-900 transition-colors mt-4"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      </div>
    </div>
  )
}
