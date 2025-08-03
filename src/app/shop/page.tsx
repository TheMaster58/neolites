import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8">
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
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Discover our collection of premium neon lights and custom designs. 
          From classic signs to modern LED installations, we have everything 
          to illuminate your space with style.
        </p>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Category 1 */}
          <div className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 p-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
            <h3 className="text-2xl font-bold mb-4">Classic Signs</h3>
            <p className="text-sm">Traditional neon tube signs with authentic glow</p>
          </div>

          {/* Category 2 */}
          <div className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 p-6 rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]">
            <h3 className="text-2xl font-bold mb-4">LED Installations</h3>
            <p className="text-sm">Modern LED neon with energy efficiency</p>
          </div>

          {/* Category 3 */}
          <div className="neon-button bg-transparent border-2 border-purple-400 text-purple-400 p-6 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            <h3 className="text-2xl font-bold mb-4">Art Pieces</h3>
            <p className="text-sm">Unique artistic neon creations</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {/* Product 1 - Classic "OPEN" Sign */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400 hover:border-cyan-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300">
              <span className="text-2xl font-bold text-black">OPEN</span>
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Classic "OPEN" Sign</h3>
            <p className="text-sm text-gray-300 mb-3">Traditional neon tube sign perfect for businesses</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-cyan-400">$299</span>
              <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 2 - Pink Heart */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-pink-400 hover:border-pink-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-pink-400 mb-2">Neon Heart</h3>
            <p className="text-sm text-gray-300 mb-3">Romantic pink neon heart for bedrooms</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-pink-400">$189</span>
              <button className="bg-pink-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 3 - Purple Star */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-purple-400 hover:border-purple-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-violet-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300">
              <span className="text-4xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Neon Star</h3>
            <p className="text-sm text-gray-300 mb-3">Magical purple star for dreamy spaces</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-purple-400">$159</span>
              <button className="bg-purple-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 4 - Green "COFFEE" */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-green-400 hover:border-green-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300">
              <span className="text-xl font-bold text-black">COFFEE</span>
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Coffee Shop Sign</h3>
            <p className="text-sm text-gray-300 mb-3">Perfect for cafes and coffee lovers</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-400">$349</span>
              <button className="bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 5 - Orange "PIZZA" */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-orange-400 hover:border-orange-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] transition-all duration-300">
              <span className="text-xl font-bold text-black">PIZZA</span>
            </div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Pizza Restaurant Sign</h3>
            <p className="text-sm text-gray-300 mb-3">Warm orange glow for food establishments</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-orange-400">$399</span>
              <button className="bg-orange-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 6 - Red "BAR" */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-red-400 hover:border-red-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(248,113,113,0.6)] transition-all duration-300">
              <span className="text-2xl font-bold text-black">BAR</span>
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Bar Neon Sign</h3>
            <p className="text-sm text-gray-300 mb-3">Vibrant red for nightlife venues</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-red-400">$279</span>
              <button className="bg-red-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 7 - Yellow "SALE" */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-yellow-400 hover:border-yellow-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all duration-300">
              <span className="text-2xl font-bold text-black">SALE</span>
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Sale Sign</h3>
            <p className="text-sm text-gray-300 mb-3">Eye-catching yellow for retail stores</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-yellow-400">$199</span>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 8 - Teal "MUSIC" */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-teal-400 hover:border-teal-300 transition-all duration-300 group">
            <div className="w-full h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transition-all duration-300">
              <span className="text-xl font-bold text-black">MUSIC</span>
            </div>
            <h3 className="text-xl font-bold text-teal-400 mb-2">Music Studio Sign</h3>
            <p className="text-sm text-gray-300 mb-3">Cool teal for creative spaces</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-teal-400">$329</span>
              <button className="bg-teal-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-300 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Custom Orders CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-4">
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