"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Mail, Phone, ArrowRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OrderData {
  orderNumber: string
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
    image: string
  }>
  customerInfo: {
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
  }
  totals: {
    subtotal: number
    shipping: number
    tax: number
    total: number
  }
  timestamp: string
}

export default function OrderConfirmationContent() {
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (savedOrder) {
      try {
        setOrderData(JSON.parse(savedOrder))
      } catch (error) {
        console.error("Error loading order data:", error)
      }
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("americhemdepot@gmail.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy email:", error)
    }
  }

  const generateEmailSubject = () => {
    if (!orderData) return ""
    return `Order Payment - ${orderData.orderNumber} - ${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`
  }

  const generateEmailBody = () => {
    if (!orderData) return ""

    const itemsList = orderData.items
      .map((item) => `- ${item.name} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")

    return `Hello Americhem Depot,

I would like to complete payment for my order:

Order Number: ${orderData.orderNumber}
Customer: ${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}
Email: ${orderData.customerInfo.email}
Phone: ${orderData.customerInfo.phone}
${orderData.customerInfo.company ? `Company: ${orderData.customerInfo.company}` : ""}

Shipping Address:
${orderData.customerInfo.address}
${orderData.customerInfo.city}, ${orderData.customerInfo.state} ${orderData.customerInfo.zipCode}
${orderData.customerInfo.country}

Order Items:
${itemsList}

Order Total: $${orderData.totals.total.toFixed(2)}

Please provide payment instructions for completing this order.

Thank you,
${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`
  }

  if (!orderData) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            We couldn't find your order information. Please try placing your order again.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Received!</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Thank you for your order. We've received your request and will contact you shortly to complete the payment
          process.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Order Number</h3>
                <p className="text-lg font-semibold text-gray-900">{orderData.orderNumber}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Order Date</h3>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(orderData.timestamp).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            {/* Customer Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">
                    {orderData.customerInfo.firstName} {orderData.customerInfo.lastName}
                  </p>
                  <p className="text-gray-600">{orderData.customerInfo.email}</p>
                  <p className="text-gray-600">{orderData.customerInfo.phone}</p>
                  {orderData.customerInfo.company && <p className="text-gray-600">{orderData.customerInfo.company}</p>}
                </div>
                <div>
                  <p className="font-medium">Shipping Address:</p>
                  <p className="text-gray-600">{orderData.customerInfo.address}</p>
                  <p className="text-gray-600">
                    {orderData.customerInfo.city}, {orderData.customerInfo.state} {orderData.customerInfo.zipCode}
                  </p>
                  <p className="text-gray-600">{orderData.customerInfo.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Items</h2>

            <div className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="border-t mt-6 pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>${orderData.totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping:</span>
                  <span>{orderData.totals.shipping === 0 ? "FREE" : `$${orderData.totals.shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span>${orderData.totals.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-2">
                  <span>Total:</span>
                  <span>${orderData.totals.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="lg:col-span-1">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sticky top-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">Next Steps</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Contact Us for Payment</h3>
                  <p className="text-sm text-blue-800 mb-3">
                    Send us an email with your order details to complete the payment process securely.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">americhemdepot@gmail.com</span>
                      <Button variant="ghost" size="sm" onClick={copyEmail} className="h-6 w-6 p-0">
                        {emailCopied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>

                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                      <a
                        href={`mailto:americhemdepot@gmail.com?subject=${encodeURIComponent(generateEmailSubject())}&body=${encodeURIComponent(generateEmailBody())}`}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Receive Payment Instructions</h3>
                  <p className="text-sm text-blue-800">
                    We'll respond within 2 hours with secure payment options including cryptocurrency, PayPal, Zelle, or
                    Apple Pay.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Order Processing</h3>
                  <p className="text-sm text-blue-800">
                    Once payment is confirmed, we'll process and ship your order with tracking information provided.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-blue-200 mt-6 pt-6">
              <h3 className="font-semibold text-blue-900 mb-3">Need Help?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-800">americhemdepot@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-800">24/7 Live Chat Available</span>
                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/shop">
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
