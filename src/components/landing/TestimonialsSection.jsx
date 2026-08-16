"use client";

import React from "react";

const testimonials = [
  {
    quote: "ComplyMap has completely transformed how we enter new markets. What used to take months of legal research now takes minutes.",
    author: "Sarah Jenkins",
    title: "Chief Compliance Officer, TechGlobal",
    initials: "SJ",
  },
  {
    quote: "The automated alerts saved us from a major penalty when labor laws shifted in Germany last quarter. Absolutely indispensable.",
    author: "David Chen",
    title: "VP of Legal, InnovateHQ",
    initials: "DC",
  },
  {
    quote: "Finally, a compliance tool that feels modern. The jurisdictional mapping is incredibly intuitive and perfectly integrated.",
    author: "Elena Rodriguez",
    title: "Director of HR, Vertex Solutions",
    initials: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#07090e] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(0,99,152,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse,rgba(0,99,152,0.1)_0%,transparent_70%)] rounded-full -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-gray-900 dark:text-white tracking-[-0.02em] leading-tight" style={{ fontFamily: "'Thunder', sans-serif", letterSpacing: "0.02em" }}>
            Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006398] to-[#0d9488] dark:from-[#38bdf8] dark:to-[#0d9488]">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-[16px] text-gray-600 dark:text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
            See why top legal and HR teams rely on ComplyMap to navigate global regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ fontFamily: "Inter, sans-serif" }}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl border border-gray-200 dark:border-white/[0.06] bg-gray-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,99,152,0.05)] transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-gray-200 dark:text-white/[0.04] group-hover:text-[#006398]/10 dark:group-hover:text-[#38bdf8]/10 transition-colors duration-500">
                <span className="material-symbols-outlined text-[60px] leading-none">format_quote</span>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-[18px] text-[#0d9488] dark:text-[#38bdf8] filled">
                      star
                    </span>
                  ))}
                </div>
                
                <p className="text-[16px] text-gray-700 dark:text-white/70 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#006398] to-[#0d9488] flex items-center justify-center text-white font-bold text-[14px]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-[13px] text-gray-500 dark:text-white/40 mt-0.5">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
