"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Shield, Truck, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { productsWithSlugs } from "@/components/ProductData"
import { useCart } from "@/contexts/CartContext"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsWithSlugs.find((p) => p.slug === params.slug)
  const { addToCart } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-blue-600">
            Shop
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link href="/shop" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-blue-600 mb-6">${product.price}</div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                <span className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Add to Cart Button */}
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Form:</span>
                    <span className="font-medium">{product.form}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purity:</span>
                    <span className="font-medium">{product.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Molecular Formula:</span>
                    <span className="font-medium font-mono">{product.molecularFormula}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CAS Number:</span>
                    <span className="font-medium">{product.casNumber}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Secure Payment</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Fast Shipping</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <RefreshCw className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Description</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">{product.detailedDescription}</p>

                <h3 className="text-lg font-semibold mt-6 mb-3">Storage Instructions</h3>
                <p className="text-gray-700 mb-4">{product.storage}</p>

                <h3 className="text-lg font-semibold mt-6 mb-3">Important Notice</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800 text-sm">
                    <strong>For Research Use Only:</strong> This product is intended for research and analytical
                    purposes only. Not for human consumption. Must be handled by qualified professionals in appropriate
                    laboratory settings with proper safety equipment and procedures.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Need Help?</strong> If you don't know the use of a particular product or need assistance,
                    please contact us. We are available 24/7 through our live chat or email at{" "}
                    <a href="mailto:americhemdepot@gmail.com" className="underline hover:text-blue-600">
                      americhemdepot@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
