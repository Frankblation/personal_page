"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Code, Cpu, Globe, Layers } from "lucide-react"

export default function About() {
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

  const skills = [
    { name: "Software Engineer", icon: <Code className="h-6 w-6 text-primary" /> },
    { name: "Backend Systems", icon: <Cpu className="h-6 w-6 text-primary" /> },
    { name: "Web Applications", icon: <Globe className="h-6 w-6 text-primary" /> },
    { name: "Full Stack Development", icon: <Layers className="h-6 w-6 text-primary" /> },
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 px-4 bg-dark">
      <div className="container-custom">
        <div
          className={`transition-all duration-1000 transform ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-2">About Me</span>
            <h2 className="heading-lg text-white">Who I Am</h2>
            <div className="gradient-line mx-auto" style={{ maxWidth: "200px" }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="card hover-lift">
              <p className="text-light/80 mb-6 text-lg">
                I'm a passionate software engineer with expertise in building modern web applications. With a strong
                foundation in both frontend and backend technologies, I create seamless digital experiences that solve
                real-world problems.
              </p>
              <p className="text-light/80 mb-6 text-lg">
                My journey in software development began over 5 years ago, and since then, I've worked on a variety of
                projects ranging from social media platforms to complex data visualization tools.
              </p>
              <p className="text-light/80 text-lg">
                I'm constantly learning and exploring new technologies to stay at the forefront of the rapidly evolving
                tech landscape.
              </p>
            </div>

            <div className="card hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-primary accent-line inline-block">My Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-background p-4 rounded-lg border-l border-primary hover:border-l-2 transition-all duration-300 flex items-center space-x-3"
                  >
                    {skill.icon}
                    <span className="font-medium text-light">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
