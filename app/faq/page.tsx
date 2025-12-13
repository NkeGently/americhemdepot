import type { Metadata } from "next"
import FAQContent from "@/components/FAQContent"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Americhem Depot",
  description:
    "Find answers to common questions about laboratory chemicals, ordering, shipping, and payment processes at Americhem Depot.",
  keywords: "FAQ, frequently asked questions, laboratory chemicals, ordering help, shipping information",
}

export default function FAQPage() {
  return <FAQContent />
}
