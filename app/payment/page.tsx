import type { Metadata } from "next"
import { Shield, Lock, CheckCircle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Payment Information - Secure Payment Process | Americhem Depot",
  description:
    "Learn about our secure payment process for laboratory chemicals. We accept cryptocurrency, PayPal, Zelle, and Apple Pay with full security compliance.",
  keywords: "payment methods, secure payment, cryptocurrency, PayPal, Zelle, Apple Pay, laboratory chemicals payment",
}

export default function PaymentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Payment Information</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We prioritize security and compliance in all our payment processes. Learn about our secure payment methods and
          process.
        </p>
      </section>

      {/* Security Notice */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
        <div className="flex items-start space-x-4">
          <Shield className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Secure Payment Process</h2>
            <p className="text-blue-800 mb-4">
              For your security and compliance with financial regulations, we do not process payments directly on our
              website. All payment transactions are handled through secure, encrypted communication channels.
            </p>
            <div className="bg-blue-100 rounded-lg p-4">
              <p className="text-blue-900 font-medium">
                📧 After placing your order, please contact us at{" "}
                <a href="mailto:Americhemdepot@gmail.com" className="underline font-semibold">
                  americhemdepot@gmail.com
                </a>{" "}
                to discuss secure payment options and complete your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Process Steps */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse & Select</h3>
            <p className="text-gray-600">
              Browse our catalog and add desired products to your cart. Review your order details.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600">
              Email us with your order details. We'll provide secure payment instructions and options.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              Complete payment through your preferred secure method. Receive confirmation and tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Accepted Payment Methods */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accepted Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">₿</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cryptocurrency</h3>
            <p className="text-gray-600 text-sm">Bitcoin (BTC), Ethereum (ETH), and other major cryptocurrencies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 text-blue-600">P</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">PayPal</h3>
            <p className="text-gray-600 text-sm">Secure PayPal transactions (Friends & Family)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 text-purple-600">Z</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Zelle</h3>
            <p className="text-gray-600 text-sm">Fast and secure bank-to-bank transfers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🍎</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Apple Pay</h3>
            <p className="text-gray-600 text-sm">Convenient and secure mobile payments</p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security & Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Lock className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Encryption</h3>
            <p className="text-gray-600">
              All payment communications are protected with military-grade encryption. Your financial information is
              never stored on our servers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Guaranteed</h3>
            <p className="text-gray-600">
              We maintain full compliance with financial regulations, anti-money laundering (AML) laws, and
              know-your-customer (KYC) requirements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fraud Protection</h3>
            <p className="text-gray-600">
              Advanced fraud detection systems monitor all transactions. We verify all orders to ensure legitimate
              research purposes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Mail className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Communication</h3>
            <p className="text-gray-600">
              All payment discussions occur through encrypted email channels. We never request payment information
              through unsecured methods.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-yellow-900 mb-4">Important Payment Notes</h2>
        <ul className="space-y-3 text-yellow-800">
          <li className="flex items-start space-x-2">
            <span className="text-yellow-600 mt-1">•</span>
            <span>Minimum order value: $100 USD</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-600 mt-1">•</span>
            <span>Payment must be completed within 48 hours of order confirmation</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-600 mt-1">•</span>
            <span>All prices are in USD and subject to change based on market conditions</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-600 mt-1">•</span>
            <span>Shipping costs will be calculated and added to your final invoice</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-600 mt-1">•</span>
            <span>We reserve the right to verify the legitimacy of all orders</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
