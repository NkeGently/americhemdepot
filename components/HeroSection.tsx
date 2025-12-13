"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Truck, Award } from "lucide-react"

const heroImages = [
  {
    src: "/modern-scientist-chemicals.png",
    title: "Premium Laboratory Chemicals",
    subtitle: "Trusted by researchers worldwide",
  },
  {
    src: "/advanced-chemical-research-facility.png",
    title: "Advanced Research Solutions",
    subtitle: "Innovation meets excellence",
  },
  {
    src: "/professional-lab-equipment.png",
    title: "Professional Grade Equipment",
    subtitle: "Quality you can depend on",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Images with Animation */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30">
              🧪 Premium Laboratory Supplies
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            {heroImages[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up animation-delay-200">
            {heroImages[currentSlide].subtitle}
          </p>

          <p className="text-lg mb-10 text-blue-50 max-w-2xl animate-slide-up animation-delay-400">
            Your trusted source for high-quality laboratory chemicals, research compounds, and scientific materials.
            Fast shipping, secure packaging, and compliance guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-600">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link href="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up animation-delay-800">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 text-blue-300" />
              <div>
                <h3 className="font-semibold">Secure & Compliant</h3>
                <p className="text-sm text-blue-100">Full regulatory compliance</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Truck className="h-8 w-8 text-blue-300" />
              <div>
                <h3 className="font-semibold">Fast Shipping</h3>
                <p className="text-sm text-blue-100">Express delivery available</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="h-8 w-8 text-blue-300" />
              <div>
                <h3 className="font-semibold">Premium Quality</h3>
                <p className="text-sm text-blue-100">Laboratory grade materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
