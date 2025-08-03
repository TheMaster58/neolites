'use client';

import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { state, logout } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!state.isLoggedIn) {
      router.push('/login');
    }
  }, [state.isLoggedIn, router]);

  if (!state.isLoggedIn) {
    return null;
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            ← Back
          </Link>
        </div>

        {/* Profile Title */}
        <h1 className="neon-title text-5xl md:text-7xl font-bold mb-8 tracking-wider">
          Profile
        </h1>

        {/* Profile Information */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-cyan-400 mb-8 w-full max-w-2xl">
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-black">
                  {state.user?.charAt(0).toUpperCase()}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400">{state.user}</h2>
              <p className="text-gray-300">NeoLites Member</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Account Info</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-semibold">Username:</span> {state.user}</p>
                  <p><span className="font-semibold">Member Since:</span> {new Date().toLocaleDateString()}</p>
                  <p><span className="font-semibold">Status:</span> <span className="text-green-400">Active</span></p>
                </div>
              </div>

              <div className="text-left">
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Shopping Stats</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-semibold">Items in Cart:</span> {state.items.length}</p>
                  <p><span className="font-semibold">Total Items:</span> {state.items.reduce((total, item) => total + item.quantity, 0)}</p>
                  <p><span className="font-semibold">Cart Value:</span> ${state.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/cart" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            View Cart
          </Link>
          <Link href="/shop" className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
            Continue Shopping
          </Link>
          <button
            onClick={logout}
            className="neon-button bg-transparent border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
} 