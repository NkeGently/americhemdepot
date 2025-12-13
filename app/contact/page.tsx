import type { Metadata } from "next"
import { Mail, Clock, Shield, MessageCircle } from "lucide-react"
import ContactFormEmailJS from "@/components/ContactFormEmailJS"

export const metadata: Metadata = {
  title: "Contact Us - Americhem Depot | Get in Touch",
  description:
    "Contact Americhem Depot for inquiries about laboratory chemicals, research compounds, and scientific materials. Professional support available 24/7.",
  keywords:
    "contact americhem depot, laboratory chemical inquiries, research compound support, scientific materials help",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about our products or need assistance with your order? We're here to help with expert support
          and guidance.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
          <MessageCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp</h3>
          <p className="text-gray-700 mb-4 text-lg">Instant messaging and quick responses</p>
          <a
            href="https://wa.me/447415179416"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-lg"
          >
            +44 7415 179416
          </a>
          <p className="text-sm text-gray-600 mt-3">Click to start chatting</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
          <Mail className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
          <p className="text-gray-700 mb-4 text-lg">Detailed inquiries and documentation</p>
          <a
            href="mailto:americhemdepot@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors break-all"
          >
            americhemdepot@gmail.com
          </a>
          <p className="text-sm text-gray-600 mt-3">We respond within 2 hours</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <ContactFormEmailJS />
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Additional Contact Information</h2>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                <MessageCircle className="h-6 w-6" />
                Preferred: WhatsApp
              </h3>
              <p className="text-green-800 mb-3">
                For the fastest response, message us on WhatsApp at{" "}
                <a
                  href="https://wa.me/447415179416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-green-600"
                >
                  +44 7415 179416
                </a>
              </p>
              <p className="text-green-700 text-sm">
                WhatsApp allows us to respond instantly and share product information, images, and documentation
                quickly.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Mail className="h-6 w-6" />
                Email Support
              </h3>
              <p className="text-blue-800 mb-3">
                For detailed inquiries or formal documentation, email us at{" "}
                <a href="mailto:americhemdepot@gmail.com" className="font-bold underline hover:text-blue-600">
                  americhemdepot@gmail.com
                </a>
              </p>
              <p className="text-blue-700 text-sm">We respond to all emails within 2 hours during business hours.</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">💳 Payment Process</h3>
              <p className="text-yellow-800">
                We do not process payments directly on our website. After placing your order, please contact us via
                WhatsApp or email to discuss secure payment options and complete your purchase.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                <Clock className="inline h-6 w-6 mr-2" />
                Response Times
              </h3>
              <ul className="text-purple-800 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    <strong>WhatsApp:</strong> Instant to 30 minutes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Email:</strong> Within 2 hours
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    <strong>Contact Form:</strong> Within 2 hours
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Include in Your Message</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span>Product names and quantities needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span>Your institution or company name</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span>Shipping address and preferred delivery method</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span>Any specific purity or grade requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <span>Timeline for delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Security & Privacy
              </h3>
              <p className="text-green-800">
                All communications are handled with the highest level of security and confidentiality. We never share
                customer information and maintain strict privacy standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
