import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import EmailJsScript from "@/components/email-js-script"
import InteractiveParticles from "@/components/interactive-particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frank Blation | Software Engineer",
  description: "Personal portfolio website of Frank Blation, a software engineer specializing in web development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <InteractiveParticles />
        {children}
        <EmailJsScript />
      </body>
    </html>
  )
}
