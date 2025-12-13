"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    category: "Ordering & Products",
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "You can browse our products and add items to your cart. However, we do not process payments directly on the website. After selecting your products, please contact us at Americhemdepot@gmail.com to discuss payment options and complete your order.",
      },
      {
        question: "What types of chemicals do you offer?",
        answer:
          "We offer a wide range of laboratory chemicals including solvents, acids, bases, salts, analytical standards, and specialty research compounds. All our products are of laboratory grade or higher quality.",
      },
      {
        question: "Do you provide certificates of analysis (COA)?",
        answer:
          "Yes, we provide detailed certificates of analysis for all our products. COAs include purity data, impurity profiles, and other relevant analytical information.",
      },
      {
        question: "Can I request custom quantities or special packaging?",
        answer:
          "We can accommodate custom quantity requests and special packaging requirements. Please contact us with your specific needs, and we'll provide a customized quote.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various secure payment methods including cryptocurrency (BTC, ETH), PayPal, Zelle, and Apple Pay. Payment details will be discussed via email after you place your order.",
      },
      {
        question: "Why don't you process payments on the website?",
        answer:
          "For security and compliance reasons, we handle all payments through secure, direct communication channels. This ensures the highest level of transaction security and allows us to provide personalized service.",
      },
      {
        question: "Do you offer volume discounts?",
        answer:
          "Yes, we offer competitive pricing for bulk orders. Contact us with your requirements, and we'll provide a customized quote with volume discounts where applicable.",
      },
      {
        question: "What is your minimum order value?",
        answer:
          "Our minimum order value is $100. This helps us maintain competitive pricing and ensures efficient processing and shipping.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "Which countries do you ship to?",
        answer:
          "We ship to most countries worldwide. However, shipping restrictions may apply to certain chemicals based on local regulations. Contact us to confirm shipping availability to your location.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Domestic shipping typically takes 2-5 business days, while international shipping can take 7-14 business days depending on the destination and customs processing.",
      },
      {
        question: "How do you ensure safe packaging?",
        answer:
          "We use professional-grade packaging materials and follow all regulatory requirements for chemical shipping. All packages are properly labeled and include necessary safety documentation.",
      },
      {
        question: "Do you provide tracking information?",
        answer:
          "Yes, you will receive tracking information once your order ships. We use reputable carriers that provide detailed tracking throughout the delivery process.",
      },
    ],
  },
  {
    category: "Quality & Compliance",
    questions: [
      {
        question: "What quality standards do you follow?",
        answer:
          "We maintain strict quality standards including ISO 9001 certification, GMP compliance, and adherence to FDA and REACH regulations. All products undergo rigorous quality testing.",
      },
      {
        question: "Are your chemicals suitable for research use?",
        answer:
          "Yes, all our chemicals are of research grade or higher. We provide detailed specifications and purity information for each product to ensure they meet your research requirements.",
      },
      {
        question: "Do you handle hazardous materials?",
        answer:
          "Yes, we are licensed and equipped to handle various classes of hazardous materials. We follow all safety protocols and regulatory requirements for storage, handling, and shipping.",
      },
      {
        question: "What if I receive a damaged or incorrect product?",
        answer:
          "If you receive a damaged or incorrect product, please contact us immediately. We will arrange for a replacement or refund according to our quality guarantee policy.",
      },
    ],
  },
]

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our products, ordering process, and services. Can't find what you're
          looking for? Contact us directly.
        </p>
      </section>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b">
              <h2 className="text-2xl font-semibold text-gray-900">{category.category}</h2>
            </div>

            <div className="divide-y divide-gray-200">
              {category.questions.map((faq, questionIndex) => {
                const itemId = `${categoryIndex}-${questionIndex}`
                const isOpen = openItems.includes(itemId)

                return (
                  <div key={questionIndex}>
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <section className="text-center mt-12 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          Our team of experts is here to help with any questions about our products or services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:americhemdepot@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Email Us
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Form
          </a>
        </div>
      </section>
    </div>
  )
}
