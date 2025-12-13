import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerBeakerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path d="M16 8h16v6l8 16c1 2 0 4-2 4H10c-2 0-3-2-2-4l8-16V8z" fill="url(#footerBeakerGradient)" />
                  <path d="M18 10h12v4l6 12H12l6-12v-4z" fill="#E0F2FE" opacity="0.8" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Americhem Depot</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted source for premium laboratory chemicals and research compounds. Serving the scientific
              community with quality and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Policies</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/payment" className="text-gray-300 hover:text-white transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a
                    href="mailto:americhemdepot@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    americhemdepot@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Support</p>
                  <p className="text-white">24/7 Live Chat Available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Service</p>
                  <p className="text-white">Worldwide Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Americhem Depot. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Professional laboratory supplies since 2024</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
