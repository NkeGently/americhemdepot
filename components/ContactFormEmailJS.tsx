"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, CheckCircle } from "lucide-react"

export default function ContactFormEmailJS() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiry_type: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Load EmailJS
      const emailjs = (await import("@emailjs/browser")).default

      // Initialize EmailJS with public key
      emailjs.init("ijyyBWz5WtqtuVl6j")

      // Prepare email data matching the template structure
      const emailData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || "Not provided",
        inquiry_type: formData.inquiry_type || "General Inquiry",
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      }

      // Send email via EmailJS
      await emailjs.send(
        "service_j735u8h", // Service ID
        "template_tfgz4fe", // Template ID
        emailData,
      )

      // Success
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        inquiry_type: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("❌ Error sending message. Please try contacting us directly via WhatsApp or email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
          <p className="text-lg text-gray-600 mb-4">
            Thank you for contacting us. We've received your message and will respond within 2 hours.
          </p>
          <p className="text-gray-700 mb-6">
            For urgent matters, please contact us via WhatsApp at{" "}
            <a
              href="https://wa.me/447415179416"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline"
            >
              +44 7415 179416
            </a>
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="mt-1.5"
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="mt-1.5"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="company" className="text-gray-700">
            Company/Institution
          </Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="mt-1.5"
            placeholder="Your company name (optional)"
          />
        </div>

        <div>
          <Label htmlFor="inquiry_type" className="text-gray-700">
            Inquiry Type
          </Label>
          <Select value={formData.inquiry_type} onValueChange={(value) => handleChange("inquiry_type", value)}>
            <SelectTrigger className="mt-1.5 w-full">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Product Information">Product Information</SelectItem>
              <SelectItem value="Order Inquiry">Order Inquiry</SelectItem>
              <SelectItem value="Shipping Question">Shipping Question</SelectItem>
              <SelectItem value="Technical Support">Technical Support</SelectItem>
              <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
              <SelectItem value="Bulk Order">Bulk Order</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="subject" className="text-gray-700">
            Subject <span className="text-red-500">*</span>
          </Label>
          <Input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            required
            className="mt-1.5"
            placeholder="Brief description of your inquiry"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-700">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
            rows={6}
            className="mt-1.5"
            placeholder="Please provide details about your inquiry, including specific products, quantities, and any special requirements..."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  )
}
