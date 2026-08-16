"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pricingTiers = [
  {
    name: "Starter",
    price: "$299",
    period: "/mo",
    description: "Perfect for growing startups operating in 1-2 jurisdictions.",
    features: [
      "Up to 2 jurisdictions mapped",
      "Monthly regulatory updates",
      "Basic compliance dashboard",
      "Email support",
    ],
    buttonText: "Start Free Trial",
    isPopular: false,
  },
  {
    name: "Professional",
    price: "$899",
    period: "/mo",
    description: "For scaling teams needing real-time alerts and broader coverage.",
    features: [
      "Up to 10 jurisdictions mapped",
      "Real-time regulatory alerts",
      "Advanced workflow automation",
      "API access",
      "Priority 24/7 support",
    ],
    buttonText: "Get Started",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for massive global footprints and custom needs.",
    features: [
      "Unlimited jurisdictions",
      "Custom regulatory rule engine",
      "Dedicated compliance expert",
      "SSO & SAML integration",
      "On-premise deployment options",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

const PricingSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".pricing-header", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    })
    .from(".pricing-card", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="pricing" className="py-24 bg-[#f8f9fa] dark:bg-[#07090e] border-y border-gray-200 dark:border-white/[0.04] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(13,148,136,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(13,148,136,0.08)_0%,transparent_70%)] rounded-full -translate-y-1/2" />
      
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="pricing-header text-[36px] sm:text-[48px] font-extrabold text-gray-900 dark:text-white tracking-[-0.02em] leading-tight" style={{ fontFamily: "'Thunder', sans-serif", letterSpacing: "0.02em" }}>
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006398] to-[#0d9488] dark:from-[#38bdf8] dark:to-[#0d9488]">Pricing</span>
          </h2>
          <p className="pricing-header mt-4 text-[16px] text-gray-600 dark:text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
            Choose the plan that fits your global footprint. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`pricing-card relative flex flex-col p-8 rounded-3xl transition-colors duration-500 ${
                tier.isPopular
                  ? "bg-white dark:bg-[#0c0f17] border-2 border-[#006398] dark:border-[#38bdf8]/50 shadow-[0_20px_40px_rgba(0,99,152,0.1)] dark:shadow-[0_0_40px_rgba(56,189,248,0.1)] md:-translate-y-4"
                  : "bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.08] hover:bg-white dark:hover:bg-white/[0.04]"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#006398] to-[#0d9488] rounded-full text-white text-[12px] font-bold tracking-wide uppercase shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-[20px] font-bold text-gray-900 dark:text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-[14px] text-gray-500 dark:text-white/40 mb-6 h-10">
                {tier.description}
              </p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-[40px] font-extrabold text-gray-900 dark:text-white leading-none">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-[16px] font-medium text-gray-500 dark:text-white/40">
                    {tier.period}
                  </span>
                )}
              </div>

              <Link
                href="/dashboard"
                className={`w-full py-3.5 rounded-xl text-center text-[15px] font-semibold transition-all duration-300 mb-8 ${
                  tier.isPopular
                    ? "bg-[#006398] hover:bg-[#007bbd] text-white shadow-[0_4px_20px_rgba(0,99,152,0.2)] dark:shadow-[0_0_20px_rgba(0,99,152,0.3)] hover:shadow-[0_6px_25px_rgba(0,99,152,0.3)]"
                    : "bg-white dark:bg-white/[0.04] text-gray-700 dark:text-white border border-gray-200 dark:border-white/[0.1] hover:border-gray-300 dark:hover:border-white/[0.2] hover:bg-gray-50 dark:hover:bg-white/[0.08]"
                }`}
              >
                {tier.buttonText}
              </Link>

              <div className="flex-grow">
                <p className="text-[13px] font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  What's included
                </p>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[18px] text-[#0d9488] dark:text-[#38bdf8] shrink-0">
                        check_circle
                      </span>
                      <span className="text-[14px] text-gray-600 dark:text-white/70 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
