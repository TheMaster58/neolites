import Link from "next/link";

export default function CustomOrdersPage() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
            ← Back to Home
          </Link>
        </div>

        {/* Custom Orders Title */}
        <h1 className="neon-title text-5xl md:text-7xl font-bold mb-8 tracking-wider">
          Custom Orders
        </h1>

        {/* Custom Orders Description */}
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Bring your vision to life with our custom neon creations. 
          From personalized signs to unique art pieces, we'll work 
          with you to create something truly special.
        </p>

        {/* Services Offered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service 1 */}
          <div className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 p-8 rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]">
            <h3 className="text-2xl font-bold mb-4">Personalized Signs</h3>
            <p className="text-sm mb-4">Custom text and logos in your choice of colors</p>
            <ul className="text-xs text-left">
              <li>• Business signage</li>
              <li>• Name signs</li>
              <li>• Quote displays</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 p-8 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
            <h3 className="text-2xl font-bold mb-4">Art Installations</h3>
            <p className="text-sm mb-4">Unique artistic pieces for home or business</p>
            <ul className="text-xs text-left">
              <li>• Abstract designs</li>
              <li>• Themed installations</li>
              <li>• Interactive pieces</li>
            </ul>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-pink-400 mb-8">
          <h2 className="text-3xl font-bold text-pink-400 mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">1</div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-sm text-gray-300">Discuss your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">2</div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-sm text-gray-300">Create detailed mockups and plans</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">3</div>
              <h3 className="text-lg font-semibold mb-2">Creation</h3>
              <p className="text-sm text-gray-300">Craft your custom neon piece</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-cyan-400">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Get Started</h2>
          <p className="text-lg text-gray-300 mb-6">
            Ready to create something amazing? Contact us to begin your custom neon journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
              Contact Us
            </button>
            <button className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              Request Quote
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 