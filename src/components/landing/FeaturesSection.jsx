"use client";

import React from "react";

const features = [
  {
    title: "Global Jurisdiction Mapping",
    description: "Instantly map your company's footprint against a live database of global labor, tax, and corporate laws.",
    icon: "public",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    bgClass: "bg-gradient-to-br from-[#006398]/[0.05] to-transparent dark:from-[#006398]/[0.15] dark:to-transparent",
  },
  {
    title: "Real-time Alerts",
    description: "Get notified immediately when regulations change in any of your active regions.",
    icon: "notifications_active",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    bgClass: "bg-gradient-to-br from-[#0d9488]/[0.05] to-transparent dark:from-[#0d9488]/[0.15] dark:to-transparent",
  },
  {
    title: "Automated Tracking",
    description: "Our AI continuously monitors regulatory bodies and translates legal jargon into actionable tasks for your team.",
    icon: "smart_toy",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    bgClass: "bg-gradient-to-br from-[#38bdf8]/[0.05] to-transparent dark:from-[#38bdf8]/[0.15] dark:to-transparent",
  },
  {
    title: "Enterprise-grade Security",
    description: "Bank-level encryption, SSO integration, and strict access controls to keep your compliance data secure.",
    icon: "lock",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    bgClass: "bg-gradient-to-br from-[#006398]/[0.05] to-transparent dark:from-[#006398]/[0.15] dark:to-transparent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-[#07090e] transition-colors duration-300 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(0,99,152,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(0,99,152,0.15)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-gray-900 dark:text-white tracking-[-0.02em] leading-tight" style={{ fontFamily: "'Thunder', sans-serif", letterSpacing: "0.02em" }}>
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006398] to-[#0d9488] dark:from-[#38bdf8] dark:to-[#0d9488]">Capabilities</span>
          </h2>
          <p className="mt-4 text-[16px] text-gray-600 dark:text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
            Everything you need to scale globally without the compliance headaches. Designed for modern legal and HR teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ fontFamily: "Inter, sans-serif" }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-3xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#0c0f17] hover:border-[#006398]/30 dark:hover:border-white/[0.15] transition-all duration-500 overflow-hidden ${feature.span}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.bgClass}`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.06] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[28px] text-[#006398] dark:text-[#38bdf8]">{feature.icon}</span>
                </div>
                
                <h3 className="text-[20px] font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#006398] dark:group-hover:text-[#38bdf8] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-[15px] text-gray-600 dark:text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
