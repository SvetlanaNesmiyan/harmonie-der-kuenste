"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { name: "HOME", href: "#" },
  { name: "ABOUT", href: "#about" },
  { name: "CLASSES", href: "#classes", hasDropdown: true },
  { name: "CONTACT", href: "#contact" },
]

const classesList = [
  { name: "Kickbox Training", id: "kickbox" },
  { name: "Tanzgruppe", id: "tanzgruppe" },
  { name: "Fußballgruppe", id: "fussballgruppe" },
  { name: "Kreativwerkstatt - Alles selbst machen", id: "kreativwerkstatt" },
  { name: "Ukrainische Schule", id: "ukrainische-schule" },
  { name: "Gymnastik", id: "gymnastik" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [classesDropdownOpen, setClassesDropdownOpen] = useState(false)

  const handleClassClick = (classId: string) => {
    setClassesDropdownOpen(false)
    setMobileMenuOpen(false)
    
    setTimeout(() => {
      const element = document.getElementById(classId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          const event = new CustomEvent('openClassDetails', { detail: classId })
          window.dispatchEvent(event)
        }, 600)
      }
    }, 100)
  }

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    setTimeout(() => {
      const element = document.getElementById('about')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.name === "CLASSES" ? (
                  <>
                    <button
                      className="text-white text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                      onClick={() => setClassesDropdownOpen(!classesDropdownOpen)}
                      onBlur={() => setTimeout(() => setClassesDropdownOpen(false), 200)}
                    >
                      {item.name}
                      <ChevronDown className={`w-3 h-3 transition-transform ${classesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <ul className={`absolute top-full left-0 mt-2 bg-background shadow-lg rounded-md min-w-[220px] py-2 transition-all duration-300 ease-out origin-top ${
                      classesDropdownOpen 
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                    }`}>
                      {classesList.map((cls) => (
                        <li key={cls.id}>
                          <button
                            onClick={() => handleClassClick(cls.id)}
                            className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-all duration-200 hover:pl-6"
                          >
                            {cls.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={item.name === "ABOUT" ? handleAboutClick : undefined}
                    className="text-white text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-background/95 backdrop-blur-sm rounded-lg p-4">
            <ul className="flex flex-col gap-4">
               {navItems.map((item) => (
                <li key={item.name}>
                  {item.name === "CLASSES" ? (
                    <div>
                      <button
                        className="text-foreground text-sm font-medium flex items-center gap-1 w-full"
                        onClick={() => setClassesDropdownOpen(!classesDropdownOpen)}
                      >
                        {item.name}
                        <ChevronDown className={`w-3 h-3 transition-transform ${classesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {classesDropdownOpen && (
                        <ul className="ml-4 mt-2 pl-2 border-l border-border">
                          {classesList.map((cls) => (
                            <li key={cls.id} className="py-1">
                              <button
                                onClick={() => handleClassClick(cls.id)}
                                className="text-sm text-muted-foreground hover:text-foreground"
                              >
                                {cls.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={item.name === "ABOUT" ? handleAboutClick : () => setMobileMenuOpen(false)}
                      className="text-foreground text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
