import type { Metadata } from "next"
import Image from "next/image"
import { Award, Users, Globe, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Americhem Depot | Laboratory Chemical Supplier",
  description:
    "Learn about Americhem Depot, your trusted partner for laboratory chemicals and research compounds. Serving the scientific community with quality and reliability.",
  keywords: "about americhem depot, laboratory chemical supplier, research compounds, scientific materials",
}

const stats = [
  { icon: Users, label: "Satisfied Customers", value: "10,000+" },
  { icon: Globe, label: "Countries Served", value: "50+" },
  { icon: Award, label: "Years of Excellence", value: "15+" },
  { icon: Shield, label: "Quality Certifications", value: "25+" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Americhem Depot</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in laboratory excellence, providing high-quality chemicals and research compounds to
          scientists, researchers, and institutions worldwide.
        </p>
      </section>

      {/* Company Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded with a mission to advance scientific research through reliable access to premium laboratory
            chemicals, Americhem Depot has been serving the global scientific community for over a decade.
          </p>
          <p className="text-gray-600 mb-4">
            We understand the critical importance of quality and purity in research applications. That's why we've built
            our reputation on providing consistently high-grade materials that meet the most stringent laboratory
            standards.
          </p>
          <p className="text-gray-600">
            From small research labs to major pharmaceutical companies, our commitment to excellence has made us a
            trusted partner in advancing scientific discovery and innovation.
          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Modern laboratory facility"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-50 rounded-lg p-8 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To empower scientific advancement by providing researchers worldwide with reliable access to the highest
            quality laboratory chemicals and research compounds, backed by exceptional service and expertise.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-600">Uncompromising commitment to quality and purity</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-600">Fast, secure, and compliant global shipping</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-600">Expert technical support and customer service</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure it meets the highest standards for research
                applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scientific Integrity</h3>
              <p className="text-gray-600">
                We maintain complete transparency in our processes and provide detailed documentation for all materials.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Partnership</h3>
              <p className="text-gray-600">
                We work closely with our customers to understand their needs and provide tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Certifications</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Our commitment to quality is backed by industry-leading certifications and compliance standards.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-blue-600 mb-2">ISO 9001</div>
            <p className="text-gray-600">Quality Management</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-blue-600 mb-2">GMP</div>
            <p className="text-gray-600">Good Manufacturing Practice</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-blue-600 mb-2">FDA</div>
            <p className="text-gray-600">Regulatory Compliance</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-blue-600 mb-2">REACH</div>
            <p className="text-gray-600">Chemical Safety</p>
          </div>
        </div>
      </section>
    </div>
  )
}
