"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        ready?: () => void
        widgetcode?: string
      }
    }
  }
}

export default function ZohoSalesIQ() {
  useEffect(() => {
    // Initialize Zoho SalesIQ object
    if (typeof window !== "undefined") {
      window.$zoho = window.$zoho || {}
      window.$zoho.salesiq = window.$zoho.salesiq || {
        ready: () => {},
      }

      window.$zoho.salesiq.widgetcode = "siq082574976257597f59625a8e4cb84e85df8b01e563757feb2436b7b1cff14902"

      // Load the Zoho SalesIQ script
      const script = document.createElement("script")
      script.id = "zsiqscript"
      script.src =
        "https://salesiq.zohopublic.com/widget?wc=siq082574976257597f59625a8e4cb84e85df8b01e563757feb2436b7b1cff14902"
      script.defer = true

      // Append script to document head
      document.head.appendChild(script)

      // Cleanup function to remove script when component unmounts
      return () => {
        const existingScript = document.getElementById("zsiqscript")
        if (existingScript) {
          existingScript.remove()
        }
      }
    }
  }, [])

  return null // This component doesn't render anything visible
}
