"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Grid, List, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { productsWithSlugs } from "@/components/ProductData"

const PRODUCTS_PER_PAGE = 20

const ShopContent = () => {
  const [view, setView] = useState("grid")
  const [sortBy, setSortBy] = useState("relevance")
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const { state, dispatch } = useCart()

  const handleAddToCart = (product: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
      },
    })
  }

  const filteredProducts = productsWithSlugs.filter((product) => {
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase())
    return searchMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "relevance") {
      return 0
    } else if (sortBy === "price-low-to-high") {
      return a.price - b.price
    } else if (sortBy === "price-high-to-low") {
      return b.price - a.price
    } else if (sortBy === "rating") {
      return b.rating - a.rating
    }
    return 0
  })

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Filters */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Input
            type="search"
            placeholder="Search products..."
            className="max-w-full md:max-w-[300px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-500" />
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>

          <div className="hidden md:flex gap-2">
            <Button variant="ghost" className={view === "grid" ? "bg-gray-100" : ""} onClick={() => setView("grid")}>
              <Grid className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className={view === "list" ? "bg-gray-100" : ""} onClick={() => setView("list")}>
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div
        className={`w-full ${view === "grid" ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8" : "flex flex-col gap-2"}`}
      >
        {currentProducts.map((product) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

export default ShopContent
