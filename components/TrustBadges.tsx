import { Shield, Award, Truck, Clock, CheckCircle, Globe } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Secure Packaging",
    description: "Professional-grade packaging for safe delivery",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Laboratory-tested and certified materials",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Express delivery options available worldwide",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
  },
  {
    icon: CheckCircle,
    title: "Compliance Guaranteed",
    description: "Full regulatory and safety compliance",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving researchers in 50+ countries",
  },
]

export default function TrustBadges() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Americhem Depot?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by researchers, laboratories, and institutions worldwide for our commitment to quality and service
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <badge.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
