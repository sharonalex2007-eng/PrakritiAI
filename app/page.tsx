"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-start px-4 bg-gradient-to-br from-[#1f3c46] via-[#234f59] to-[#0f2027] text-white">

      {/* Navbar */}
      <nav className="flex justify-end items-center w-full px-10 py-6 space-x-6 fixed top-0 left-0 z-50">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#learn" className="hover:text-gray-300">About</a>
        <Link href="/login" className="hover:text-gray-300">Login</Link>
        <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
          Sign Up
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-32 text-white">

        {/* Gradient + White Heading */}
        <h1 className="text-6xl font-extrabold tracking-wide mb-6 font-serif relative">
          <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            🌿 Prakriti AI
          </span>
          <span className="relative text-white">🌿 Prakriti AI</span>
        </h1>

        <h2 className="text-2xl font-medium mb-6 text-white/90 font-serif">
          Intelligent Ayurvedic & Natural Remedy Assistant
        </h2>

        <p className="max-w-2xl text-lg text-white/80 mb-10 font-sans">
          Experience AI-powered holistic healing. Discover safe, natural remedies 
          tailored to your symptoms — blending ancient Ayurvedic wisdom with modern intelligence.
        </p>

        <div className="space-x-6">
          <Link href="/dashboard">
            <button className="bg-green-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition">
              Get Started
            </button>
          </Link>

          <a href="#learn">
            <button className="border border-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </a>
        </div>
      </div>

      {/* Learn More Section */}
      <section id="learn" className="mt-32 max-w-3xl mx-auto text-center text-white/90 font-sans">
        <h2 className="text-3xl font-semibold mb-4 font-serif">About Prakriti AI</h2>
        <p className="mb-4">
          Prakriti AI is your Ayurvedic intelligence assistant. It provides natural remedies, dietary suggestions, and lifestyle tips based on your symptoms. Everything is stored locally — no external API needed.
        </p>
        <p>
          Click <strong>Get Started</strong> to access your personal dashboard and begin your wellness journey.
        </p>
      </section>

      {/* Disclaimer Section */}
      <div className="mt-32 px-10 py-10 text-center">
        <h3 className="text-2xl font-semibold mb-4 font-serif">Disclaimer</h3>
        <p className="max-w-3xl mx-auto text-white/70 font-sans">
          This AI assistant provides information for educational purposes only. 
          It is not a substitute for professional medical advice, diagnosis, or treatment. 
          Always consult a qualified healthcare provider before starting any new health practice.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-white/70 font-sans">
        © 2026 Prakriti AI | Built with ❤️ for Natural Healing
      </footer>

    </div>
  );
}
