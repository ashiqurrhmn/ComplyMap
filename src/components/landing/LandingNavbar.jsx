"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 dark:bg-[#0c0f17]/60 backdrop-blur-xl border-b border-gray-200 dark:border-white/[0.08] shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-white/40 dark:bg-[#0c0f17]/40 backdrop-blur-md border-b border-gray-200/30 dark:border-white/[0.04]"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[70px]">

            <Link href="/" className="flex items-center group">
              <span className="text-[26px] text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-[#006398] dark:group-hover:from-white dark:group-hover:to-[#38bdf8] transition-all duration-300" style={{ fontFamily: "'Rush Driver', sans-serif" }}>
                ComplyMap
              </span>
            </Link>

            {/* Center Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium text-gray-600 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-5">
              <ThemeToggle />
              <Link
                href="/dashboard"
                className="text-[14px] font-medium text-gray-600 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors duration-300"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard"
                className="text-[14px] font-medium text-gray-600 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard"
                className="px-5 py-2 text-[13px] font-semibold text-white bg-[#006398] hover:bg-[#007bbd] rounded-lg transition-all duration-300 shadow-[0_4px_14px_rgba(0,99,152,0.2)] dark:shadow-[0_0_20px_rgba(0,99,152,0.3)] hover:shadow-[0_6px_20px_rgba(0,99,152,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,99,152,0.5)]"
              >
                Try for Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] transition-all"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[4px]">
                <span className={`block w-4 h-[1.5px] bg-current rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
                <span className={`block w-4 h-[1.5px] bg-current rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-4 h-[1.5px] bg-current rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 dark:bg-black/70 backdrop-blur-sm transition-opacity duration-400 lg:hidden ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white/95 dark:bg-[#0a0d14]/95 backdrop-blur-2xl border-l border-gray-200 dark:border-white/[0.05] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.05] text-gray-500 hover:text-gray-900 dark:text-white/50 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div className="flex flex-col px-5 gap-1 mt-2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 dark:text-white/50 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all">
              {link.label}
            </a>
          ))}
          <div className="h-px bg-gray-200 dark:bg-white/[0.06] my-3" />
          <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 dark:text-white/50 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all">Dashboard</Link>
          <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 dark:text-white/50 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all">Sign In</Link>
          <div className="px-4 py-3">
            <ThemeToggle />
          </div>
        </div>
        <div className="px-5 mt-auto absolute bottom-8 left-0 right-0">
          <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="block w-full text-center py-3 bg-[#006398] text-white text-[14px] font-semibold rounded-lg shadow-lg">
            Try for Free
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingNavbar;
