"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="resources" className="bg-white dark:bg-[#07090e] transition-colors duration-300">
      
      {/* CTA Section */}
      <div className="border-b border-gray-200 dark:border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#006398]/5 via-[#0d9488]/5 to-[#006398]/5 dark:from-[#006398]/10 dark:via-[#0d9488]/10 dark:to-[#006398]/10" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-[40px] md:text-[56px] font-extrabold text-gray-900 dark:text-white leading-tight max-w-3xl" style={{ fontFamily: "'Thunder', sans-serif", letterSpacing: "0.02em" }}>
            Ready to Simplify Your Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006398] to-[#0d9488] dark:from-[#38bdf8] dark:to-[#0d9488]">Compliance Strategy?</span>
          </h2>
          <p className="mt-6 text-[16px] text-gray-600 dark:text-white/50 max-w-[500px]" style={{ fontFamily: "Inter, sans-serif" }}>
            Join hundreds of legal and HR teams using ComplyMap to navigate the complex world of global regulations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link
              href="/dashboard"
              className="px-8 py-3.5 bg-[#006398] hover:bg-[#007bbd] text-white text-[15px] font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,99,152,0.2)] dark:shadow-[0_0_30px_rgba(0,99,152,0.3)] hover:scale-[1.02]"
            >
              Start Your Free Trial
            </Link>
            <a
              href="#features"
              className="px-8 py-3.5 text-gray-700 hover:text-gray-900 dark:text-white/60 dark:hover:text-white text-[15px] font-medium border border-gray-300 hover:border-gray-400 dark:border-white/[0.08] dark:hover:border-white/[0.15] rounded-xl transition-all duration-300 bg-white/50 hover:bg-gray-50 dark:bg-transparent dark:hover:bg-white/[0.02]"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-16" style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-[26px] text-gray-900 dark:text-white" style={{ fontFamily: "'Rush Driver', sans-serif" }}>
                ComplyMap
              </span>
            </Link>
            <p className="text-[14px] text-gray-500 dark:text-white/40 max-w-[280px] leading-relaxed">
              The intelligent platform for global regulatory compliance mapping and management.
            </p>
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-gray-900 dark:text-white mb-4">Platform</h4>
            <ul className="flex flex-col gap-3">
              {['Features', 'How It Works', 'Pricing', 'Security'].map(link => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-gray-500 hover:text-[#006398] dark:text-white/40 dark:hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Careers', 'Partners', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-gray-500 hover:text-[#006398] dark:text-white/40 dark:hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-gray-500 hover:text-[#006398] dark:text-white/40 dark:hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-400 dark:text-white/30">
            © {new Date().getFullYear()} ComplyMap Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['code', 'language', 'dataset'].map((icon, i) => (
              <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-gray-500 hover:text-[#006398] dark:text-white/40 dark:hover:text-white transition-all">
                <span className="material-symbols-outlined text-[16px]">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
