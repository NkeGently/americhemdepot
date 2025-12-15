"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { productsWithSlugs } from "@/components/ProductData"

const featuredProducts = productsWithSlugs.slice(0, 8)

export default function FeaturedProducts() {
  const { dispatch } = useCart()

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular laboratory chemicals and equipment, trusted by researchers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="relative h-48 overflow-hidden cursor-pointer">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/product/${product.slug}`}>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-2 line-clamp-1">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-600">${product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-xs text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/shop">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
