'use client';

import Link from "next/link";
import { useCart } from "../contexts/CartContext";

export default function ShopPage() {
  const { addItem } = useCart();

  const products = [
    {
      id: "vibes-only",
      name: "Vibes Only",
      price: 19.99,
      color: "#06b6d4", // cyan-400
      description: "Glow up your space with pure Vibes Only energy"
    },
    {
      id: "glow-up",
      name: "Glow Up",
      price: 19.99,
      color: "#ec4899", // pink-400
      description: "Level up your room with a radiant Glow Up"
    },
    {
      id: "stay-wild",
      name: "Stay Wild",
      price: 19.99,
      color: "#06b6d4", // cyan-400
      description: "Unleash your vibe with the bold Stay Wild glow"
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.color
    });
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center max-w-6xl">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            ← Back
          </Link>
        </div>

        {/* Shop Title */}
        <h1 className="neon-title text-5xl md:text-7xl font-bold mb-8 tracking-wider">
          Neon Shop
        </h1>

        {/* Shop Description */}
        <div className="mb-12 max-w-2xl p-6 rounded-xl font-mono glassmorphism-cyan">
          <p className="text-xl text-cyan-300">
            Illuminate your world with electrifying neon! <br />
            From retro classics to cutting-edge LED art, our signs are designed to make your space shine bright. <br />
            Transform your room, studio, or business—let your personality glow in vibrant color.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {products.map((product) => (
            <div key={product.id} className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400 hover:border-cyan-300 transition-all duration-300 group">
              <div 
                className="w-full h-32 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300"
                style={{ backgroundColor: product.color }}
              >
                <span className="text-2xl font-bold text-black">{product.name.replace(' ', '')}</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-300 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-cyan-400">${product.price.toFixed(2)}</span>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Orders CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-cyan-300 mb-12 max-w-2xl font-mono">
            Don't see what you're looking for? We create custom designs!
          </p>
          <Link href="/custom-orders" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            Custom Orders
          </Link>
        </div>
      </main>
    </div>
  );
} 