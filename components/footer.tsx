"use client"

import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const classLinks = [
  { name: "KICKBOX TRAINING", id: "kickbox" },
  { name: "TANZGRUPPE", id: "tanzgruppe" },
  { name: "FUßBALLGRUPPE", id: "fussballgruppe" },
  { name: "KREATIVWERKSTATT - ALLES SELBST MACHEN", id: "kreativwerkstatt" },
  { name: "UKRAINISCHE SCHULE", id: "ukrainische-schule" },
  { name: "GYMNASTIK", id: "gymnastik" },
]

export function Footer() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleClassClick = (classId: string) => {
    setActiveCategory(classId)
    // Отменяем предыдущие таймауты
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current)
    
    scrollTimeoutRef.current = setTimeout(() => {
      const element = document.getElementById(classId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        openTimeoutRef.current = setTimeout(() => {
          const event = new CustomEvent('openClassDetails', { detail: classId })
          window.dispatchEvent(event)
        }, 600)
      }
    }, 100)
  }

  useEffect(() => {
    const handleOpenDetails = (event: CustomEvent) => {
      setActiveCategory(event.detail as string)
    }
    const handleCloseDetails = () => {
      setActiveCategory(null)
    }
    window.addEventListener('openClassDetails', handleOpenDetails as EventListener)
    window.addEventListener('closeClassDetails', handleCloseDetails as EventListener)
    return () => {
      window.removeEventListener('openClassDetails', handleOpenDetails as EventListener)
      window.removeEventListener('closeClassDetails', handleCloseDetails as EventListener)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current)
    }
  }, [])

  return (
    <footer className="bg-card py-12 text-foreground floral-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Classes - выровнен под левыми карточками (Kreativwerkstatt) */}
          <div>
            <h4 className="font-bold text-base mb-4 text-foreground">CLASSES</h4>
            <ul className="space-y-2">
              {classLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleClassClick(item.id)}
                    className={`text-sm transition-colors text-left ${activeCategory === item.id ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Пустая колонка для центрирования */}
          <div></div>

           {/* Follow Us - выровнен под правыми карточками (Gymnastik) */}
           <div id="follow-us" className="text-right">
            <h4 className="font-bold text-base mb-4 text-foreground">FOLLOW US</h4>
            <div className="flex gap-4 justify-end">
              <Link href="https://t.me/h_d_k_e_V" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="currentColor"/>
                </svg>
              </Link>
              <Link href="tel:+491626564441" className="text-muted-foreground hover:text-primary transition-colors">
                <svg height="20" width="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M337.168 289.578C332.039 284.445 323.711 284.445 318.57 289.578L302.539 305.616C297.859 310.256 290.417 309.787 285.187 305.74C285.187 305.74 269.855 295.631 244.785 270.571C219.715 245.501 209.609 230.156 209.609 230.156C205.554 224.93 206.031 217.5 210.707 212.814L226.738 196.776C231.879 191.642 231.879 183.314 226.738 178.18L191.398 142.837C186.267 137.704 177.947 137.704 172.806 142.837C172.684 142.962 170.9 144.742 149.497 166.16C126.895 188.754 156.19 258.076 206.471 308.374C256.76 358.658 325.998 388.541 348.592 365.955C367.986 346.551 369.776 344.754 370.897 344.633C376.038 339.499 376.038 331.171 370.897 326.045L337.168 289.578Z" fill="currentColor"/>
                  <path d="M256 0C114.614 0 0 114.617 0 256C0 397.383 114.614 512 256 512C397.386 512 512 397.383 512 256C512 114.617 397.386 0 256 0ZM256 472C136.898 472 40 375.102 40 256C40 136.898 136.898 40 256 40C375.102 40 472 136.898 472 256C472 375.102 375.102 472 256 472Z" fill="currentColor"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/harmonie_der_kuenste_e.v._?igsh=cmU3cHFiNThxdWVy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=harmonie.der.kuenste@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Website Design by <span className="text-primary font-medium">Svitlana Nesmiian</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
