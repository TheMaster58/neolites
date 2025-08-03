import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        {/* 404 Title */}
        <h1 className="neon-title text-6xl md:text-8xl font-bold mb-8 tracking-wider">
          404
        </h1>

        {/* Error Message */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-red-400 mb-8">
          <h2 className="text-3xl font-bold text-red-400 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-6">
            Oops! The page you're looking for seems to have wandered off into the neon void.
          </p>
          <p className="text-lg text-gray-300">
            Don't worry, you can always find your way back to the light!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            Go Home
          </Link>
          <Link href="/shop" className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
            Shop Now
          </Link>
        </div>
      </main>
    </div>
  );
} 