"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in a real app, this would send to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-800 mb-4">
          Thank you for contacting us. We've received your message and will respond within 2 hours.
        </p>
        <p className="text-green-700">
          For urgent matters, please email us directly at{" "}
          <a href="mailto:americhemdepot@gmail.com" className="font-semibold underline">
            americhemdepot@gmail.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="company">Company/Institution</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="inquiryType">Inquiry Type</Label>
          <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product">Product Information</SelectItem>
              <SelectItem value="order">Order Inquiry</SelectItem>
              <SelectItem value="shipping">Shipping Question</SelectItem>
              <SelectItem value="technical">Technical Support</SelectItem>
              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
            rows={6}
            className="mt-1"
            placeholder="Please provide details about your inquiry, including specific products, quantities, and any special requirements..."
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Send Message
        </Button>
      </form>
    </div>
  )
}
