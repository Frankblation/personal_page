"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function sendEmail(formData: FormData) {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    const validatedFields = formSchema.safeParse({ name, email, message })

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
      }
    }

    // Prepare email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `

    // Send email using the Web API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_id", // Replace with your EmailJS service ID
        template_id: "template_id", // Replace with your EmailJS template ID
        user_id: "user_id", // Replace with your EmailJS user ID
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          to_email: "Frankblation@gmail.com",
        },
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message: "Your message has been sent! I'll get back to you soon.",
      }
    } else {
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      }
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
