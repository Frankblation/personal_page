"use client"

import Script from "next/script"

export default function EmailJsScript() {
  return (
    <>
      <Script
        src="https://cdn.emailjs.com/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.emailjs?.init("YOUR_USER_ID") // Replace with your EmailJS user ID
        }}
      />
    </>
  )
}
