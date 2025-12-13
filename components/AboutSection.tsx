import { Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advancing Scientific Discovery</h2>
          <p className="text-xl text-gray-600 mb-12">
            Providing high-quality research chemicals backed by compliance and safety.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">623+</div>
              <div className="text-gray-600">Satisfied Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Years of Industry Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">250</div>
              <div className="text-gray-600">High-Purity Compounds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">800</div>
              <div className="text-gray-600">Legal Variants for Global Supply</div>
            </div>
          </div>
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* America Section */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">America: The Pioneer Home of Research Chemicals</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                America has long been recognized as a global leader in the research chemical industry, renowned for its
                innovation, stringent quality standards, and commitment to scientific excellence. At Americhem Depot, we
                proudly continue this legacy by offering products of uncompromising purity and precision. Our chemicals
                are sourced from trusted suppliers, rigorously tested, and accurately labeled to meet the highest
                industry standards. With a deep understanding of regulatory compliance and a focus on safety, we ensure
                that every product we deliver is reliable, well-documented, and fit for research purposes. When you
                choose Americhem Depot, you're choosing a tradition of trust and quality that only America can provide.
              </p>
            </CardContent>
          </Card>

          {/* Shipping Section */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Worldwide Shipping: Fast, Discreet, and Reliable</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Americhem Depot, we understand the importance of timely and discreet delivery, no matter where you
                are in the world. Our streamlined logistics network ensures that your orders are shipped securely and
                arrive promptly, even to the farthest destinations like the USA, in just 3 business days. We use
                compliant, tamper-proof packaging to protect your products during transit and maintain their integrity.
                Our team works tirelessly to ensure that every shipment meets international shipping regulations, so you
                can rest assured that your order will arrive safely and on time. Whether you're in Europe, Asia, or the
                Americas, you can count on us to deliver your research chemicals quickly and discreetly, so you can
                focus on what matters most—your work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
