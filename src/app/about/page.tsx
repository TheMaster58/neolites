import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            ← Back
          </Link>
        </div>

        {/* About Title */}
        <h1 className="neon-title text-5xl md:text-7xl font-bold mb-8 tracking-wider">
          About NeoLites
        </h1>

        {/* About Description */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-cyan-400 mb-8">
          <p className="text-xl text-gray-300 mb-6">
            Welcome to NeoLites, where we bring the future of neon lighting to life. 
            Our passion is creating stunning, high-quality neon signs and LED installations 
            that transform spaces and captivate audiences.
          </p>
          <p className="text-lg text-gray-300">
            Founded with a vision to blend traditional neon craftsmanship with cutting-edge 
            LED technology, we've been illuminating homes, businesses, and art installations 
            with our signature blend of style and innovation.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-pink-400 mb-8">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300">
            To create extraordinary lighting experiences that inspire, energize, and 
            transform any environment into a vibrant, dynamic space that reflects 
            the unique personality of our clients.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Quality</h3>
            <p className="text-gray-300">Premium materials and expert craftsmanship in every piece</p>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-pink-400">
            <h3 className="text-xl font-bold text-pink-400 mb-3">Innovation</h3>
            <p className="text-gray-300">Pushing boundaries with cutting-edge LED technology</p>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Creativity</h3>
            <p className="text-gray-300">Unique designs that tell your story</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-xl text-cyan-300 mb-6">
            Ready to illuminate your world? Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              Shop Now
            </Link>
            <Link href="/custom-orders" className="neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]">
              Custom Orders
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 