"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm py-2 border-b border-primary/10" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary">
            FRANK BLATION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("resume-section")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("resume-section")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-light hover:text-primary transition-colors uppercase font-medium"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
