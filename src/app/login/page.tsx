'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../contexts/CartContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useCart();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Dummy validation
    if (username.trim() && password.trim()) {
      login(username);
      router.push("/");
    } else {
      setError("Please enter both username and password");
    }

    setIsLoading(false);
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center max-w-md w-full">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            ← Back
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-cyan-400 w-full">
          <h1 className="neon-title text-4xl md:text-6xl font-bold mb-8 tracking-wider">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-900 bg-opacity-50 border border-red-400 text-red-300 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="username" className="block text-left text-cyan-400 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-left text-cyan-400 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{" "}
              <Link href="/register" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Register here
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-400 mb-2">Demo Login:</p>
            <p className="text-xs text-gray-500">Username: demo</p>
            <p className="text-xs text-gray-500">Password: demo123</p>
          </div>
        </div>
      </main>
    </div>
  );
} 