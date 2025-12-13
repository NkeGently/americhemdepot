"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/CartContext"

export default function CartContent() {
  const { state, dispatch } = useCart()
  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const shippingCost = state.total >= 100 ? 0 : 15.99
  const tax = state.total * 0.08 // 8% tax
  const finalTotal = state.total + shippingCost + tax

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-600 mb-8">
            Looks like you haven't added any laboratory chemicals to your cart yet.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/shop">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
        <p className="text-lg text-gray-600">Review your selected items before proceeding to checkout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Cart Items ({state.itemCount})</h2>
            </div>

            <div className="divide-y divide-gray-200">
              {state.items.map((item) => (
                <div key={item.id} className="p-6 flex items-center space-x-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-right min-w-[5rem]">
                      <p className="text-lg font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="mt-6">
            <Button variant="outline" asChild>
              <Link href="/shop">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

            {/* Coupon Code */}
            <div className="mb-6">
              <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                Coupon Code
              </label>
              <div className="flex space-x-2">
                <Input
                  id="coupon"
                  type="text"
                  placeholder="Enter code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" size="sm">
                  Apply
                </Button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal ({state.itemCount} items)</span>
                <span className="font-medium">${state.total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shippingCost === 0 ? <span className="text-green-600">FREE</span> : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (estimated)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-semibold text-gray-900">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Free Shipping Notice */}
            {state.total < 100 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  Add <span className="font-semibold">${(100 - state.total).toFixed(2)}</span> more to qualify for FREE
                  shipping!
                </p>
              </div>
            )}

            {/* Minimum Order Notice */}
            {state.total < 100 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Minimum order: $100</span>
                  <br />
                  Please add more items to meet our minimum order requirement.
                </p>
              </div>
            )}

            {/* Checkout Button */}
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={state.total < 100}>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>

            {/* Security Notice */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                🔒 Secure checkout process
                <br />
                No payment processed on site
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
