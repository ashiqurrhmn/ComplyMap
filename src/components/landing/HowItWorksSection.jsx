"use client";

import React from "react";

const steps = [
  {
    num: "01",
    title: "Connect Your Data",
    desc: "Integrate seamlessly with your existing HR, Payroll, and ERP systems using our secure APIs.",
    icon: "api",
  },
  {
    num: "02",
    title: "AI Maps Requirements",
    desc: "Our engine analyzes your global footprint and instantly maps out local tax and labor laws.",
    icon: "schema",
  },
  {
    num: "03",
    title: "Actionable Insights",
    desc: "Receive step-by-step tasks and automated workflows to ensure 100% compliance.",
    icon: "task_alt",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#f8f9fa] dark:bg-[#07090e] border-y border-gray-200 dark:border-white/[0.04] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(13,148,136,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(13,148,136,0.1)_0%,transparent_70%)] rounded-full -translate-x-1/2" />
      
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-gray-900 dark:text-white tracking-[-0.02em] leading-tight" style={{ fontFamily: "'Thunder', sans-serif", letterSpacing: "0.02em" }}>
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006398] to-[#0d9488] dark:from-[#38bdf8] dark:to-[#0d9488]">Works</span>
          </h2>
          <p className="mt-4 text-[16px] text-gray-600 dark:text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
            Three simple steps to transform your global compliance from a manual headache into an automated breeze.
          </p>
        </div>

        <div className="relative mt-20" style={{ fontFamily: "Inter, sans-serif" }}>
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-white/[0.1] to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                
                {/* Number Badge */}
                <div className="w-[90px] h-[90px] rounded-full bg-white dark:bg-[#0c0f17] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center mb-8 relative z-10 group-hover:border-[#006398]/50 dark:group-hover:border-[#38bdf8]/50 transition-colors duration-500 shadow-sm dark:shadow-none">
                  <div className="absolute inset-2 rounded-full border border-gray-100 dark:border-white/[0.04] bg-gray-50 dark:bg-white/[0.02] flex items-center justify-center">
                    <span className="text-[28px] font-bold text-gray-300 dark:text-white/20 group-hover:text-[#006398] dark:group-hover:text-[#38bdf8] transition-colors duration-500" style={{ fontFamily: "'Thunder', sans-serif" }}>
                      {step.num}
                    </span>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/[0.04] flex items-center justify-center mb-5 text-[#0d9488] dark:text-[#38bdf8]">
                  <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                </div>
                
                <h3 className="text-[20px] font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[15px] text-gray-600 dark:text-white/50 leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
