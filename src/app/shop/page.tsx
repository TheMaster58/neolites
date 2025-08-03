import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            ← Back to Home
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

        {/* Coming Soon Message */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-cyan-400">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Coming Soon!</h2>
          <p className="text-lg text-gray-300 mb-6">
            Our full product catalog is currently under development. 
            We're working hard to bring you the best neon experience.
          </p>
          <p className="text-sm text-gray-400">
            For immediate inquiries, please contact us or check out our custom orders.
          </p>
        </div>
      </main>
    </div>
  );
} 