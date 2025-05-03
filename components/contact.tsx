"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Send, Mail, MapPin, Phone, Linkedin, Github, FileText } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  useEffect(() => {
    if (inView) {
      setVisible(true)
    }
  }, [inView])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitStatus(null)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitStatus("success")
    setSubmitMessage("Thanks for your message! I'll get back to you soon.")
    setFormState({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage("")
      setSubmitStatus(null)
    }, 5000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 px-4 bg-background">
      <div className="container-custom">
        <div
          className={`transition-all duration-1000 transform ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-2">Contact</span>
            <h2 className="heading-lg text-white">Get In Touch</h2>
            <div className="gradient-line mx-auto" style={{ maxWidth: "200px" }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="card hover-lift">
              <h3 className="text-xl font-bold mb-4 uppercase text-white accent-line inline-block">Let's Connect</h3>
              <p className="text-light/80 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-primary font-bold mb-1 uppercase">Email</h4>
                    <a
                      href="mailto:Frankblation@gmail.com"
                      className="text-light/80 hover:text-primary transition-colors"
                    >
                      Frankblation@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-primary font-bold mb-1 uppercase">Location</h4>
                    <p className="text-light/80">Tulsa, Oklahoma</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-primary font-bold mb-1 uppercase">Phone</h4>
                    <a href="tel:9182819321" className="text-light/80 hover:text-primary transition-colors">
                      (918) 281-9321
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Linkedin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-primary font-bold mb-1 uppercase">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/frankblation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/80 hover:text-primary transition-colors"
                    >
                      linkedin.com/in/frankblation
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Github className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-primary font-bold mb-1 uppercase">GitHub</h4>
                    <a
                      href="https://github.com/Frankblation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/80 hover:text-primary transition-colors"
                    >
                      github.com/Frankblation
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FileText className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-primary font-bold mb-1 uppercase">Resume</h4>
                    <a
                      href="#"
                      className="text-light/80 hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("resume-section")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      View my resume
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card hover-lift">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-1 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/30 focus:outline-none focus:border-primary text-light rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-1 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-primary/30 focus:outline-none focus:border-primary text-light rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white mb-1 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-primary/30 focus:outline-none focus:border-primary text-light resize-none rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex items-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <p className={`mt-2 ${submitStatus === "success" ? "text-primary" : "text-red-600"}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
