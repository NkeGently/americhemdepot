"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "12709668162"
  const message = "Hello, I would like to inquire about your products."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-3 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden group-hover:inline-block text-sm font-medium whitespace-nowrap pr-2">Chat with us</span>
    </a>
  )
}
