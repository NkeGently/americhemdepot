import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/contexts/CartContext"
import ZohoSalesIQ from "@/components/ZohoSalesIQ"
import AgeVerificationModal from "@/components/AgeVerificationModal"
import WhatsAppButton from "@/components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Americhem Depot - Premium Laboratory Chemicals & Research Compounds",
  description:
    "Your trusted source for high-quality laboratory chemicals, research compounds, and scientific materials. Fast shipping, secure packaging, and compliance guaranteed.",
  keywords: "laboratory chemicals, research compounds, scientific materials, chemical supplier, lab equipment",
  authors: [{ name: "Americhem Depot" }],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Americhem Depot - Premium Laboratory Chemicals",
    description: "Your trusted source for high-quality laboratory chemicals and research compounds.",
    url: "https://americhemdepot.com",
    siteName: "Americhem Depot",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Americhem Depot - Laboratory Chemicals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics code will go here
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ZohoSalesIQ />
          <AgeVerificationModal />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}
