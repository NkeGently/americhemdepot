import type { Metadata } from "next"
import ShopContent from "@/components/ShopContent"

export const metadata: Metadata = {
  title: "Shop - Laboratory Chemicals & Equipment | Americhem Depot",
  description:
    "Browse our extensive catalog of laboratory chemicals, research compounds, and scientific equipment. High-quality materials for research and analysis.",
  keywords: "laboratory chemicals, research compounds, scientific equipment, chemical catalog, lab supplies",
}

export default function ShopPage() {
  return <ShopContent />
}
