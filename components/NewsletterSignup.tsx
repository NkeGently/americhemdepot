"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <Mail className="h-12 w-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Products</h2>
          <p className="text-lg text-blue-100 mb-8">
            Get notified about new arrivals, special offers, and industry insights. Join our community of researchers
            and professionals.
          </p>

          {isSubmitted ? (
            <div className="bg-green-500/20 border border-green-400 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
              <p className="text-green-100">We'll keep you updated with our latest products and offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button type="submit" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
