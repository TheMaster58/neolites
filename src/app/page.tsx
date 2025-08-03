import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center">
        <br />
        <br />
        <br />

        {/* Neon Title */}
        <h1 className="neon-title text-6xl md:text-8xl font-bold mb-8 tracking-wider">
          NeoLites
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        {/* Call to Action Buttons */}
        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <Link href="/shop" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            Shop Now
          </Link>
          <Link href="/custom-orders" className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
            Custom Orders
          </Link>
        </div>
            </main>
    </div>
  );
}
