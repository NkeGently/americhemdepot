import HeroSection from "@/components/HeroSection"
import FeaturedProducts from "@/components/FeaturedProducts"
import TrustBadges from "@/components/TrustBadges"
import NewsletterSignup from "@/components/NewsletterSignup"
import AboutSection from "@/components/AboutSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <FeaturedProducts />
      <AboutSection />
      <NewsletterSignup />
    </>
  )
}
