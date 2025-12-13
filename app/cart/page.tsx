import type { Metadata } from "next"
import CartContent from "@/components/CartContent"

export const metadata: Metadata = {
  title: "Shopping Cart - Americhem Depot",
  description: "Review your selected laboratory chemicals and research compounds before checkout.",
  keywords: "shopping cart, laboratory chemicals, checkout, americhem depot",
}

export default function CartPage() {
  return <CartContent />
}
