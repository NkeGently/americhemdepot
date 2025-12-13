"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCart } from "@/contexts/CartContext"

const navImages = ["/placeholder-ebva6.png", "/scientific-equipment-compounds.png", "/research-laboratory.png"]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const { state } = useCart()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % navImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto">
          Min order: $100 | Fast Shipping, Secure Packaging, and Compliance Guaranteed!
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="beakerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 8h16v6l8 16c1 2 0 4-2 4H10c-2 0-3-2-2-4l8-16V8z"
                    fill="url(#beakerGradient)"
                    className="drop-shadow-md"
                  />
                  <path d="M18 10h12v4l6 12H12l6-12v-4z" fill="#E0F2FE" opacity="0.8" />
                  <circle cx="20" cy="20" r="2" fill="#3B82F6" opacity="0.6" />
                  <circle cx="28" cy="18" r="1.5" fill="#1E40AF" opacity="0.7" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Americhem
                  <span className="text-blue-600 ml-1">Depot</span>
                </h1>
              </div>
            </Link>

            {/* Animated Background Images */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
              {navImages.map((src, index) => (
                <Image
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt=""
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 relative z-10">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Shop <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/shop">All Products</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/shop?category=chemicals">Chemicals</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/shop?category=equipment">Equipment</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/shipping" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Shipping
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 relative z-10">
              <Button variant="ghost" size="sm" className="relative" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  {state.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {state.itemCount}
                    </span>
                  )}
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t bg-white/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <Link href="/shop" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Shop
                </Link>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Contact
                </Link>
                <Link href="/faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  FAQ
                </Link>
                <Link href="/shipping" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Shipping
                </Link>
                <Link href="/cart" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Cart ({state.itemCount})
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
