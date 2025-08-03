'use client';

import Link from "next/link";
import { useCart } from "../contexts/CartContext";

export default function CartPage() {
  const { state, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    // Dummy checkout - just clear the cart
    alert('Thank you for your order! This is a demo checkout.');
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
        <main className="flex flex-col items-center justify-center text-center max-w-4xl">
          {/* Back to Home Button */}
          <div className="mb-8">
            <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              ← Back
            </Link>
          </div>

          {/* Empty Cart */}
          <div className="bg-black bg-opacity-50 p-12 rounded-lg border border-cyan-400">
            <h1 className="neon-title text-4xl md:text-6xl font-bold mb-6 tracking-wider">
              Your Cart
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your cart is empty. Time to add some neon magic!
            </p>
            <Link href="/shop" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              Start Shopping
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center max-w-6xl w-full">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            ← Back
          </Link>
        </div>

        {/* Cart Title */}
        <h1 className="neon-title text-5xl md:text-7xl font-bold mb-8 tracking-wider">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="w-full max-w-4xl">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-cyan-400 mb-8">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-black font-bold text-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-cyan-400">{item.name}</h3>
                    <p className="text-gray-300">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-white font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-bold text-cyan-400">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-pink-400 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-pink-400">Total</h2>
              <span className="text-3xl font-bold text-pink-400">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={clearCart}
                className="neon-button bg-transparent border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]"
              >
                Checkout
              </button>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="text-center">
            <Link href="/shop" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 