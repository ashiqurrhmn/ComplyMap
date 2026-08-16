import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";
import LenisProvider from "@/components/LenisProvider";

export const metadata = {
  title: "ComplyMap — Cross-Border Regulatory Compliance Made Effortless",
  description: "Navigate global compliance confidently with AI-powered jurisdiction mapping.",
};

export default function LandingPage() {
  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#07090e] text-gray-900 dark:text-white transition-colors duration-300">
        <LandingNavbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <Footer />
      </div>
    </LenisProvider>
  );
}
