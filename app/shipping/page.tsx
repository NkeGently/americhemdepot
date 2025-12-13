import type { Metadata } from "next"
import { Truck, Globe, Package, Clock, Shield, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Shipping & Delivery Information | Americhem Depot",
  description:
    "Learn about our shipping policies, delivery timelines, and packaging standards for laboratory chemicals. Domestic and international shipping available.",
  keywords: "shipping information, delivery, packaging, international shipping, laboratory chemicals shipping",
}

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Shipping & Delivery</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional packaging and reliable delivery for laboratory chemicals worldwide. Learn about our shipping
          policies and delivery options.
        </p>
      </section>

      {/* Shipping Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
          <p className="text-gray-600">Express delivery options available</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Worldwide</h3>
          <p className="text-gray-600">Shipping to 50+ countries</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Packaging</h3>
          <p className="text-gray-600">Professional-grade materials</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
          <p className="text-gray-600">Full regulatory compliance</p>
        </div>
      </section>

      {/* Delivery Timelines */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Delivery Timelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-900">Domestic Shipping (USA)</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-800">Standard Shipping:</span>
                <span className="font-medium text-blue-900">3-5 business days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-800">Express Shipping:</span>
                <span className="font-medium text-blue-900">1-2 business days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-800">Overnight Shipping:</span>
                <span className="font-medium text-blue-900">Next business day</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-green-900">International Shipping</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-green-800">Canada & Mexico:</span>
                <span className="font-medium text-green-900">5-10 business days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Europe & Asia:</span>
                <span className="font-medium text-green-900">7-14 business days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Other Countries:</span>
                <span className="font-medium text-green-900">10-21 business days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Processing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Order Processing Timeline</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Order Received</h4>
              <p className="text-sm text-gray-600">Order confirmation within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Payment Verified</h4>
              <p className="text-sm text-gray-600">Payment processing 1-24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Order Prepared</h4>
              <p className="text-sm text-gray-600">Packaging and quality check 1-2 days</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-blue-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Shipped</h4>
              <p className="text-sm text-gray-600">Tracking information provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Standards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Packaging Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>UN-certified packaging for hazardous materials</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Secondary containment for liquid chemicals</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Cushioning materials to prevent breakage</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Temperature-controlled packaging when required</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Safety Data Sheets (SDS) included</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Certificates of Analysis (COA)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Proper hazard labels and markings</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Customs documentation for international orders</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Shipping Restrictions */}
      <section className="mb-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-yellow-900 mb-3">Shipping Restrictions & Compliance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Restricted Items</h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• Controlled substances and precursors</li>
                    <li>• Explosive or highly reactive materials</li>
                    <li>• Items restricted by destination country</li>
                    <li>• Materials requiring special permits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Compliance Requirements</h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• End-user verification may be required</li>
                    <li>• Some chemicals require export licenses</li>
                    <li>• Customs duties and taxes apply internationally</li>
                    <li>• Age verification required for certain items</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Shipping */}
      <section className="text-center bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Shipping?</h2>
        <p className="text-gray-600 mb-6">
          Need specific shipping information or have special requirements? Our team is here to help.
        </p>
        <a
          href="mailto:americhemdepot@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Shipping Department
        </a>
      </section>
    </div>
  )
}
