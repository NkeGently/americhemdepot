"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, CreditCard, Truck, Shield, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/contexts/CartContext"
import Link from "next/link"

interface CheckoutForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  shippingMethod: string
  orderNotes: string
  agreeToTerms: boolean
  subscribeNewsletter: boolean
}

export default function CheckoutContent() {
  const { state, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    shippingMethod: "standard",
    orderNotes: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const shippingCost = state.total >= 100 ? 0 : 15.99
  const tax = state.total * 0.08
  const finalTotal = state.total + shippingCost + tax

  const handleInputChange = (field: keyof CheckoutForm, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions to continue.")
      return
    }

    setIsSubmitting(true)

    try {
      // Load EmailJS
      const emailjs = (await import("@emailjs/browser")).default

      // Initialize EmailJS
      emailjs.init("ijyyBWz5WtqtuVl6j")

      // Generate order number
      const orderNumber = `AC${Date.now().toString().slice(-6)}`

      // Prepare cart items for email
      const cartItemsText = state.items
        .map((item) => `${item.name} - Qty: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
        .join("\n")

      const orderSummary = `
ORDER SUMMARY
=============
Order Number: ${orderNumber}
Order Date: ${new Date().toLocaleDateString()}

ITEMS ORDERED:
${state.items
  .map(
    (item) =>
      `• ${item.name}
    Quantity: ${item.quantity}
    Unit Price: $${item.price.toFixed(2)}
    Subtotal: $${(item.price * item.quantity).toFixed(2)}`,
  )
  .join("\n\n")}

PRICING BREAKDOWN:
------------------
Subtotal (${state.itemCount} items): $${state.total.toFixed(2)}
Shipping (${getShippingMethodText(formData.shippingMethod)}): $${shippingCost.toFixed(2)}
Tax (estimated): $${tax.toFixed(2)}
------------------
TOTAL: $${finalTotal.toFixed(2)}

SHIPPING METHOD: ${getShippingMethodText(formData.shippingMethod)}

SPECIAL INSTRUCTIONS: ${formData.orderNotes || "None"}
      `.trim()

      // Prepare email data
      const emailData = {
        order_number: orderNumber,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "N/A",
        street_address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zipCode,
        country: formData.country,
        shipping_method: getShippingMethodText(formData.shippingMethod),
        order_notes: formData.orderNotes || "No special instructions",
        cart_items: cartItemsText,
        subtotal: state.total.toFixed(2),
        shipping_cost: shippingCost.toFixed(2),
        tax: tax.toFixed(2),
        total: finalTotal.toFixed(2),
        item_count: state.itemCount,
        order_date: new Date().toLocaleDateString(),
        subscribe_newsletter: formData.subscribeNewsletter ? "Yes" : "No",
        order_summary: orderSummary, // Added comprehensive order summary field
      }

      // Send email via EmailJS
      await emailjs.send("service_j735u8h", "template_zbrrsra", emailData)

      // Success - clear cart and show confirmation
      clearCart()
      alert("✅ Order submitted successfully! We'll contact you shortly to arrange payment and confirm your order.")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "United States",
        shippingMethod: "standard",
        orderNotes: "",
        agreeToTerms: false,
        subscribeNewsletter: false,
      })
    } catch (error) {
      console.error("Error sending order:", error)
      alert("❌ Error submitting order. Please try again or contact us directly at americhemdepot@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getShippingMethodText = (method: string) => {
    switch (method) {
      case "standard":
        return "Standard Shipping (5-7 business days, " + (state.total >= 100 ? "FREE" : "$15.99") + ")"
      case "express":
        return "Express Shipping (2-3 business days, $29.99)"
      case "overnight":
        return "Overnight Shipping (Next business day, $49.99)"
      default:
        return "Standard Shipping"
    }
  }

  // Redirect to cart if empty
  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-600 mb-8">Please add items to your cart before proceeding to checkout.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Checkout</h1>
        <p className="text-lg text-gray-600">Complete your order information below.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="company">Company/Institution</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Shipping Address
              </h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State/Province *</Label>
                    <Input
                      id="state"
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                    <Input
                      id="zipCode"
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Method</h2>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    value="standard"
                    checked={formData.shippingMethod === "standard"}
                    onChange={(e) => handleInputChange("shippingMethod", e.target.value)}
                    className="text-blue-600"
                  />
                  <label htmlFor="standard" className="flex-1 cursor-pointer">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-gray-500">5-7 business days</p>
                      </div>
                      <p className="font-medium">{state.total >= 100 ? "FREE" : "$15.99"}</p>
                    </div>
                  </label>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="express"
                    name="shipping"
                    value="express"
                    checked={formData.shippingMethod === "express"}
                    onChange={(e) => handleInputChange("shippingMethod", e.target.value)}
                    className="text-blue-600"
                  />
                  <label htmlFor="express" className="flex-1 cursor-pointer">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-gray-500">2-3 business days</p>
                      </div>
                      <p className="font-medium">$29.99</p>
                    </div>
                  </label>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="overnight"
                    name="shipping"
                    value="overnight"
                    checked={formData.shippingMethod === "overnight"}
                    onChange={(e) => handleInputChange("shippingMethod", e.target.value)}
                    className="text-blue-600"
                  />
                  <label htmlFor="overnight" className="flex-1 cursor-pointer">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Overnight Shipping</p>
                        <p className="text-sm text-gray-500">Next business day</p>
                      </div>
                      <p className="font-medium">$49.99</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Notes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Notes</h2>
              <div>
                <Label htmlFor="orderNotes">Special Instructions (Optional)</Label>
                <Textarea
                  id="orderNotes"
                  value={formData.orderNotes}
                  onChange={(e) => handleInputChange("orderNotes", e.target.value)}
                  rows={4}
                  className="mt-1"
                  placeholder="Any special handling instructions, delivery preferences, or additional information..."
                />
              </div>
            </div>

            {/* Terms and Preferences */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Terms & Preferences</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-700 cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                    . I understand that payment will be processed separately via email communication. *
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="subscribeNewsletter" className="text-sm text-gray-700 cursor-pointer">
                    Subscribe to our newsletter for product updates and special offers
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({state.itemCount} items)</span>
                  <span className="font-medium">${state.total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? <span className="text-green-600">FREE</span> : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (estimated)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-blue-900 mb-1">Payment Process</h3>
                    <p className="text-xs text-blue-800">
                      After submitting your order, you'll receive instructions to contact us at{" "}
                      <span className="font-semibold">americhemdepot@gmail.com</span> to complete payment securely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 mb-4"
                disabled={isSubmitting || !formData.agreeToTerms}
              >
                {isSubmitting ? "Processing..." : "Complete Order"}
              </Button>

              {/* Back to Cart */}
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/cart">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Cart
                </Link>
              </Button>

              {/* Security Notice */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <Shield className="h-4 w-4" />
                  <span>Secure & encrypted checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
