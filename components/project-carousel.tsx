"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

type Project = {
  id: string
  title: string
  description: string
  type: "image" | "podcast" | "video" | "app" | "website" | "slideshow"
  content: string | string[] // Can be a single string or array of strings for slideshows
  fallbackImage?: string // Add fallback image for videos
  tags: string[]
  bulletPoints?: string[]
  github?: string
  demo?: string
  isCapstone?: boolean
}

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideshowIndices, setSlideshowIndices] = useState<Record<string, number>>({})
  const [videoError, setVideoError] = useState<Record<string, boolean>>({})
  const carouselRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const slideshowIntervals = useRef<Record<string, NodeJS.Timeout>>({})

  const projects: Project[] = [
    {
      id: "rippl",
      title: "Rippl",
      description:
        "A mobile application that reconnects people through shared interests using digital spaces as a bridge",
      type: "video",
      content: "/rippl_demo.MOV",
      fallbackImage: "/images/rippl-screenshot.png",
      tags: ["React Native", "Supabase", "Mobile App", "Social Media", "Capstone Project"],
      bulletPoints: [
        "Led project management for a team of developers, completing the entire application in just 3 weeks",
        "Implemented Jira for task tracking and sprint management, ensuring on-time delivery of all features",
        "Coordinated the integration of Supabase for backend services, authentication, and real-time data",
        "Managed daily stand-ups and sprint reviews to maintain project momentum and address blockers",
        "Facilitated communication between design and development teams to ensure consistent implementation",
      ],
      github: "https://github.com/Frankblation/Rippl_Capstone",
      isCapstone: true,
    },
    {
      id: "garden-of-dreams",
      title: "Garden of Dreams",
      description: "Online Farmers Market for Bulk Purchases",
      type: "website",
      content: "/images/garden-of-dreams.png",
      tags: ["Website", "Farmers Market", "E-commerce", "Rue's Run"],
      github: "https://github.com/Frankblation/Atlas-garden_of_dreams",
      demo: "https://frankblation.github.io/Atlas-garden_of_dreams/",
    },
    {
      id: "feverest",
      title: "Feverest",
      description: "Feverest Band web page with meta data built in for SEO",
      type: "slideshow",
      content: ["/images/feverest-website-1.jpeg", "/images/feverest-website-2.jpeg"],
      tags: ["Website", "Band Page", "SEO", "React"],
      github: "https://github.com/Frankblation/Feverest_Band",
      demo: "https://v0-feverest-website.vercel.app/",
    },
    {
      id: "podcast-1",
      title: "Notable & Black in Tech Podcast",
      description: "Breaking into Tech & Building an App from Scratch with Frank Blation",
      type: "podcast",
      content: `<iframe src="https://player.rss.com/notable-bit-black-in-tech/1893905?theme=dark" title="Breaking into Tech & Building an App from Scratch with Frank Blation| Notable & Black in Tech Podcast" width="100%" height="154px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen scrolling="no"></iframe>`,
      tags: ["Podcast", "Tech Talk", "App Development"],
    },
  ]

  // Initialize slideshow indices
  useEffect(() => {
    const initialIndices: Record<string, number> = {}
    projects.forEach((project) => {
      if (project.type === "slideshow") {
        initialIndices[project.id] = 0
      }
    })
    setSlideshowIndices(initialIndices)
  }, [])

  // Handle slideshows
  useEffect(() => {
    // Clear any existing intervals
    Object.values(slideshowIntervals.current).forEach(clearInterval)
    slideshowIntervals.current = {}

    // Only start slideshow for the current project if it's a slideshow
    const currentProject = projects[currentIndex]
    if (currentProject.type === "slideshow" && Array.isArray(currentProject.content)) {
      slideshowIntervals.current[currentProject.id] = setInterval(() => {
        setSlideshowIndices((prev) => ({
          ...prev,
          [currentProject.id]:
            (prev[currentProject.id] + 1) % (Array.isArray(currentProject.content) ? currentProject.content.length : 1),
        }))
      }, 4000) // Change slide every 4 seconds
    }

    return () => {
      // Clean up intervals on unmount or when current index changes
      Object.values(slideshowIntervals.current).forEach(clearInterval)
    }
  }, [currentIndex, projects])

  // Handle video playback when slides change
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause()
      }
    })

    // Play current video if it's a video slide
    const currentProject = projects[currentIndex]
    if (currentProject.type === "video" && videoRefs.current[currentIndex] && !videoError[currentProject.id]) {
      // Small timeout to ensure transition is complete
      setTimeout(() => {
        if (videoRefs.current[currentIndex]) {
          videoRefs.current[currentIndex]?.play().catch((e) => {
            console.log("Video play prevented:", e)
            setVideoError((prev) => ({ ...prev, [currentProject.id]: true }))
          })
        }
      }, 500)
    }
  }, [currentIndex, projects, videoError])

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
    }
  }

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true)
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  // Auto-advance carousel (but not for video slides while they're playing)
  useEffect(() => {
    // Don't auto-advance if current slide is a video
    const currentProject = projects[currentIndex]
    if (currentProject.type === "video") {
      return
    }

    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  // Initialize videoRefs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, projects.length)
  }, [projects])

  const handleVideoError = (projectId: string) => {
    setVideoError((prev) => ({ ...prev, [projectId]: true }))
  }

  const renderProjectContent = (project: Project, index: number) => {
    switch (project.type) {
      case "podcast":
        return (
          <div
            className="w-full h-[154px] bg-black rounded-lg overflow-hidden"
            dangerouslySetInnerHTML={{ __html: project.content as string }}
          />
        )
      case "video":
        return videoError[project.id] ? (
          // Fallback image if video fails
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            <Image
              src={project.fallbackImage || "/placeholder.svg?height=400&width=800&query=app+interface"}
              alt={`${project.title} - Preview`}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
              <p className="text-white text-center px-4">
                Video preview unavailable. Please check out the GitHub repository for more details.
              </p>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black rounded-lg flex items-center justify-center">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="max-w-full max-h-full rounded-lg"
              controls
              playsInline
              preload="metadata"
              muted
              loop
              onError={() => handleVideoError(project.id)}
            >
              <source src={project.content as string} type="video/quicktime" />
              <source src={project.content as string} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )
      case "slideshow":
        if (Array.isArray(project.content)) {
          const slideIndex = slideshowIndices[project.id] || 0
          return (
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              {project.content.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    i === slideIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${project.title} - View ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}

              {/* Slideshow indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                {project.content.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === slideIndex ? "bg-primary" : "bg-white/50"}`} />
                ))}
              </div>
            </div>
          )
        }
        return null
      case "website":
      case "image":
      default:
        return (
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
            <Image
              src={(project.content as string) || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )
    }
  }

  return (
    <div className="relative w-full">
      <div ref={carouselRef} className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-full flex-shrink-0 px-4">
              <div className="card hover-lift overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white accent-line inline-block">{project.title}</h3>
                    {project.isCapstone && (
                      <span className="bg-primary text-white text-xs font-bold px-2 py-1 uppercase rounded-md">
                        Capstone Project
                      </span>
                    )}
                  </div>
                  <p className="text-light/80 mb-6">{project.description}</p>
                </div>

                {renderProjectContent(project, index)}

                <div className="p-6">
                  {project.bulletPoints && project.bulletPoints.length > 0 && (
                    <div className="mt-6 mb-4">
                      <h4 className="text-lg font-bold mb-2 text-primary uppercase">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-light/80 space-y-1">
                        {project.bulletPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-6 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-dark text-primary border border-primary px-2 py-1 font-medium uppercase rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light/80 hover:text-primary flex items-center space-x-1 font-medium transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary flex items-center space-x-1 font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark text-primary border border-primary hover:bg-primary/10 p-2 z-10 transition-colors rounded-full"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark text-primary border border-primary hover:bg-primary/10 p-2 z-10 transition-colors rounded-full"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-dark border border-primary"
            } transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
