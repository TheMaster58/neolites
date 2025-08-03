'use client';

import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

export default function Navigation() {
  const { state, logout, getTotalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-cyan-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-cyan-400 neon-title">NeoLites</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Shop
            </Link>
            <Link href="/custom-orders" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Custom Orders
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side - Cart and Auth */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <div className="text-gray-300 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </div>
            </Link>

            {/* Auth */}
            {state.isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Welcome, {state.user}!</span>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="neon-button bg-transparent border border-pink-400 text-pink-400 px-4 py-2 rounded-lg text-sm hover:bg-pink-400 hover:text-black transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="neon-button bg-transparent border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 