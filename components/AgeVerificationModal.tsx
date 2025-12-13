"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already verified their age
    const hasVerified = localStorage.getItem("ageVerified")
    if (!hasVerified) {
      setIsOpen(true)
    }
  }, [])

  const handleVerification = (isOver18: boolean) => {
    if (isOver18) {
      localStorage.setItem("ageVerified", "true")
      setIsOpen(false)
    } else {
      // Redirect to a different page or show a message
      window.location.href = "https://www.google.com"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-yellow-500" />
          </div>
          <CardTitle className="text-2xl font-bold">Age Verification Required</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-gray-600">
            <p className="mb-4">This website contains content and products intended for adults only.</p>
            <p className="font-medium">Are you 18 years of age or older?</p>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => handleVerification(true)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Yes, I'm 18+
            </Button>
            <Button
              onClick={() => handleVerification(false)}
              variant="outline"
              className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
            >
              No, I'm not
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            By clicking "Yes, I'm 18+", you confirm that you are of legal age to view this content in your jurisdiction
            and agree to our terms of service.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
