import type { Metadata } from "next"
import OrderConfirmationContent from "@/components/OrderConfirmationContent"

export const metadata: Metadata = {
  title: "Order Confirmation - Americhem Depot",
  description: "Your order has been received. Contact us to complete payment and processing.",
  keywords: "order confirmation, laboratory chemicals, americhem depot",
}

export default function OrderConfirmationPage() {
  return <OrderConfirmationContent />
}
