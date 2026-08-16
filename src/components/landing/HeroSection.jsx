"use client";

import React, { useRef } from "react";
import Link from "next/link";
import HeroCanvas from "./HeroCanvas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    tl.from(".hero-elem", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative mt-12 min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f9fa] dark:bg-[#07090e] transition-colors duration-300"
      style={{ fontFamily: "'Thunder', sans-serif", letterSpacing: "0.02em" }}
    >
      {/* ── Background Layers ── */}

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
        backgroundSize: "100px 100px",
      }} />

      {/* Geometric lines — emanating from center bottom */}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] opacity-[0.08] dark:opacity-[0.04] stroke-gray-900 dark:stroke-white transition-colors duration-300" viewBox="0 0 1400 800" fill="none">
        <line x1="700" y1="800" x2="0" y2="0" strokeWidth="0.5" />
        <line x1="700" y1="800" x2="200" y2="0" strokeWidth="0.5" />
        <line x1="700" y1="800" x2="400" y2="0" strokeWidth="0.5" />
        <line x1="700" y1="800" x2="600" y2="0" strokeWidth="0.5" />
        <line x1="700" y1="800" x2="800" y2="0" strokeWidth="0.5" />
        <line x1="700" y1="800" x2="1000" y2="0" strokeWidth="0.5" />
        <line x1="700" y1="800" x2="1200" y2="0" strokeWidth="0.5" />
        <line x1="700" y1="800" x2="1400" y2="0" strokeWidth="0.5" />
        {/* Arcs */}
        <ellipse cx="700" cy="800" rx="300" ry="200" strokeWidth="0.3" />
        <ellipse cx="700" cy="800" rx="500" ry="350" strokeWidth="0.3" />
        <ellipse cx="700" cy="800" rx="700" ry="500" strokeWidth="0.3" />
      </svg>

      {/* Central light beam / glow — in project blue */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(0,99,152,0.15)_0%,rgba(0,99,152,0.05)_30%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(0,99,152,0.25)_0%,rgba(0,99,152,0.08)_30%,transparent_70%)]" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[600px] bg-[radial-gradient(ellipse,rgba(13,148,136,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse,rgba(13,148,136,0.15)_0%,transparent_60%)]" />

      {/* Top ambient glow */}
      <div className="absolute top-[-15%] left-[30%] w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,99,152,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(0,99,152,0.06)_0%,transparent_70%)]" />

      {/* Light rays from bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] overflow-hidden opacity-[0.15] dark:opacity-[0.08]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[70%] bg-gradient-to-t from-[#006398] to-transparent" />
        <div className="absolute bottom-0 left-[calc(50%-80px)] w-[1px] h-[60%] bg-gradient-to-t from-[#006398]/60 to-transparent rotate-[-8deg] origin-bottom" />
        <div className="absolute bottom-0 left-[calc(50%+80px)] w-[1px] h-[60%] bg-gradient-to-t from-[#006398]/60 to-transparent rotate-[8deg] origin-bottom" />
        <div className="absolute bottom-0 left-[calc(50%-180px)] w-[1px] h-[50%] bg-gradient-to-t from-[#0d9488]/50 to-transparent rotate-[-18deg] origin-bottom" />
        <div className="absolute bottom-0 left-[calc(50%+180px)] w-[1px] h-[50%] bg-gradient-to-t from-[#0d9488]/50 to-transparent rotate-[18deg] origin-bottom" />
        <div className="absolute bottom-0 left-[calc(50%-300px)] w-[1px] h-[40%] bg-gradient-to-t from-[#006398]/30 to-transparent rotate-[-30deg] origin-bottom" />
        <div className="absolute bottom-0 left-[calc(50%+300px)] w-[1px] h-[40%] bg-gradient-to-t from-[#006398]/30 to-transparent rotate-[30deg] origin-bottom" />
      </div>

      {/* ── 3D Canvas Background ── */}
      <HeroCanvas />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 pt-28 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="hero-elem inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#006398]/25 bg-[#006398]/[0.06] mb-10">
          <span className="text-[11px] font-bold text-[#006398] tracking-[0.05em] uppercase">New</span>
          <span className="w-px h-3 bg-gray-300 dark:bg-white/10" />
          <span className="text-[12px] font-medium text-gray-600 dark:text-white/40">
            Amplify Your Platform Security →
          </span>
        </div>

        {/* Heading */}
        <h1 className="hero-elem text-[44px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.0] tracking-[-0.04em] text-gray-900 dark:text-white max-w-[850px] transition-colors duration-300">
          Navigate Global{" "}
          <span className="bg-gradient-to-r from-[#006398] via-[#0d9488] to-[#006398] dark:from-[#38bdf8] dark:via-[#006398] dark:to-[#0d9488] bg-clip-text text-transparent">
            Compliance
          </span>
          {" "}with Confidence
        </h1>

        {/* Subheading */}
        <p className="hero-elem mt-6 text-[16px] md:text-[18px] leading-[1.7] text-gray-600 dark:text-white/30 max-w-[560px]" style={{ fontFamily: "Inter, sans-serif" }}>
          Map, monitor, and manage regulatory requirements across every
          jurisdiction — powered by intelligent compliance automation.
        </p>

        {/* Search / Input Bar */}
        <div className="hero-elem mt-10 w-full max-w-[520px]" style={{ fontFamily: "Inter, sans-serif" }}>
          <div className="relative group">
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#006398]/20 via-[#0d9488]/15 to-[#006398]/20 dark:from-[#006398]/40 dark:via-[#0d9488]/30 dark:to-[#006398]/40 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 blur-[1px]" />
            <div className="relative flex items-center bg-white dark:bg-white/[0.04] border border-gray-300 dark:border-white/[0.08] rounded-xl px-5 py-3.5 group-hover:border-[#006398]/50 dark:group-hover:border-white/[0.12] group-focus-within:border-[#006398] dark:group-focus-within:border-[#006398]/30 transition-all duration-300 shadow-sm dark:shadow-none">
              <span className="material-symbols-outlined text-[20px] text-gray-400 dark:text-white/20 mr-3">search</span>
              <input
                type="text"
                placeholder="Search rules, countries, regulations..."
                className="flex-1 bg-transparent text-[14px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 outline-none"
              />
              <button className="ml-3 px-4 py-1.5 bg-[#006398] hover:bg-[#007bbd] text-white text-[12px] font-semibold rounded-lg transition-colors duration-200 shadow-[0_0_15px_rgba(0,99,152,0.15)] dark:shadow-[0_0_15px_rgba(0,99,152,0.25)]">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-elem mt-8 flex flex-col sm:flex-row items-center gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#006398] hover:bg-[#007bbd] text-white text-[15px] font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,99,152,0.2)] dark:shadow-[0_0_30px_rgba(0,99,152,0.3)] hover:shadow-[0_6px_25px_rgba(0,99,152,0.3)] dark:hover:shadow-[0_0_50px_rgba(0,99,152,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started Free
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-600 hover:text-gray-900 dark:text-white/40 dark:hover:text-white/70 text-[15px] font-medium border border-gray-300 hover:border-gray-400 dark:border-white/[0.06] dark:hover:border-white/[0.12] rounded-xl transition-all duration-300 bg-white/50 hover:bg-gray-50 dark:bg-transparent dark:hover:bg-white/[0.02]"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            Watch Demo
          </a>
        </div>

        {/* Partners */}
        <div className="hero-elem mt-24 flex flex-col items-center gap-5">
          <span className="text-[11px] font-medium text-gray-400 dark:text-white/15 uppercase tracking-[0.2em]" style={{ fontFamily: "Inter, sans-serif" }}>
            Our Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { name: "Deloitte", icon: "apartment" },
              { name: "KPMG", icon: "account_balance" },
              { name: "PwC", icon: "corporate_fare" },
              { name: "EY", icon: "domain" },
              { name: "Accenture", icon: "hub" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 text-gray-300 hover:text-gray-900 dark:text-white/[0.12] dark:hover:text-white/[0.3] transition-colors duration-500 cursor-default"
              >
                <span className="material-symbols-outlined text-[18px]">{partner.icon}</span>
                <span className="text-[15px] font-bold tracking-wide">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa] dark:from-[#07090e] to-transparent transition-colors duration-300" />
    </section>
  );
};

export default HeroSection;
