"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import ProjectCarousel from "./project-carousel"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setVisible(true)
    }
  }, [inView])

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 px-4 bg-background">
      <div className="container-custom">
        <div
          className={`transition-all duration-1000 transform ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-2">Portfolio</span>
            <h2 className="heading-lg text-white">My Projects</h2>
            <div className="gradient-line mx-auto" style={{ maxWidth: "200px" }}></div>
          </div>

          <ProjectCarousel />
        </div>
      </div>
    </section>
  )
}
