"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import SocialLinks from "./social-links"

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-background"
    >
      <div
        className={`container-custom transition-all duration-1000 transform ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-2">Software Engineer</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              FRANK <span className="text-primary">BLATION</span>
            </h1>
            <div className="gradient-line my-6"></div>
            <p className="text-light/80 mb-8 max-w-lg mx-auto md:mx-0 text-lg">
              I build exceptional digital experiences with a focus on performance and user experience. Specializing in
              modern web technologies and creative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button onClick={scrollToAbout} className="btn-primary">
                View My Work
              </button>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <SocialLinks className="justify-center md:justify-start mt-8" />
          </div>

          {/* Photo - Prominently displayed with smaller border and rounded corners */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden bg-dark-card rounded-xl border border-primary p-2">
              {/* Using a regular img tag for maximum compatibility */}
              <img
                src="/images/frank-portrait.jpeg"
                alt="Frank Blation"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 animate-bounce p-2 rounded-full border border-primary hover:border-secondary transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-primary" />
      </button>
    </section>
  )
}
