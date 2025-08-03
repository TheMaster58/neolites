'use client';

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pt-24">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl w-full">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="neon-button bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            ← Back
          </Link>
        </div>

        {/* Contact Title */}
        <h1 className="neon-title text-5xl md:text-7xl font-bold mb-8 tracking-wider">
          Contact Us
        </h1>

        {/* Contact Description */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-cyan-400 mb-8">
          <p className="text-xl text-gray-300 mb-6">
            Have a question or want to discuss a custom project? 
            We'd love to hear from you! Get in touch and let's create 
            something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-pink-400 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-pink-400 mb-6">Send us a Message</h2>
          
          {submitStatus === 'success' && (
            <div className="bg-green-900 bg-opacity-50 border border-green-400 text-green-300 px-4 py-3 rounded-lg mb-6">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-left text-cyan-400 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-left text-cyan-400 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-left text-cyan-400 font-semibold">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                required
              >
                <option value="">Select a subject</option>
                <option value="custom-order">Custom Order Inquiry</option>
                <option value="general">General Question</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-left text-cyan-400 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                placeholder="Tell us about your project or question..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full neon-button bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Email</h3>
            <p className="text-gray-300">hello@neolites.com</p>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-pink-400">
            <h3 className="text-xl font-bold text-pink-400 mb-3">Phone</h3>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-cyan-400">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Hours</h3>
            <p className="text-gray-300">Mon-Fri: 9AM-6PM</p>
          </div>
        </div>
      </main>
    </div>
  );
} 