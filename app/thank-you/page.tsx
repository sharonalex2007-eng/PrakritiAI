"use client";

import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-[#04040c] text-white overflow-hidden px-6">

      {/* Premium Multi-Layer Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(236,72,153,0.45),_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,_rgba(168,85,247,0.45),_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_85%,_rgba(59,130,246,0.40),_transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(20,184,166,0.40),_transparent_40%)]"></div>

      <div className="relative text-center max-w-3xl">

        {/* Elegant Top Line */}
        <p className="text-white/60 tracking-[0.3em] uppercase text-sm mb-6">
          Ayurveda • Intelligence • Wellness
        </p>

        {/* Grand Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Thank You
        </h1>

        {/* Sub Heading */}
        <p className="text-2xl md:text-3xl text-white/80 mb-10 font-light">
          For trusting your wellness journey with us 💚
        </p>

        {/* Premium Divider Glow */}
        <div className="w-32 h-[2px] mx-auto bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-12"></div>

        {/* Main Content Text */}
        <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
          Your presence here means more than just a visit.  
          It represents a step toward balance, healing, and conscious living.  
          We are honored to guide you with timeless Ayurvedic wisdom,
          powered by intelligent design and modern simplicity.
        </p>

        {/* Premium Action Button */}
        <button
          onClick={() => router.push("/")}
          className="px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        >
          Begin Again ✨
        </button>

        {/* Luxury Closing Caption */}
        <p className="mt-16 text-xl md:text-2xl font-semibold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-pulse">
          Elevate your wellness. Return stronger. Experience the premium difference.
        </p>

      </div>
    </div>
  );
}