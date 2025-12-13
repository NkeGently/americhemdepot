import type { Metadata } from "next"
import CheckoutContent from "@/components/CheckoutContent"

export const metadata: Metadata = {
  title: "Checkout - Americhem Depot",
  description: "Complete your order for laboratory chemicals and research compounds. Secure checkout process.",
  keywords: "checkout, laboratory chemicals, order, americhem depot",
}

export default function CheckoutPage() {
  return <CheckoutContent />
}
