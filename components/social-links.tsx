import { Github, Linkedin, Mail, Twitter } from "lucide-react"

interface SocialLinksProps {
  className?: string
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex space-x-6 mb-8 ${className}`}>
      <a
        href="https://github.com/Frankblation"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/frankblation"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-primary transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={24} />
      </a>
      <a
        href="mailto:Frankblation@gmail.com"
        className="text-white/80 hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  )
}
