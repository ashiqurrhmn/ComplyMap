"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { usePathname } from "next/navigation";

// Routes that use the landing (no-shell) layout
const LANDING_ROUTES = ["/"];

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isLanding = LANDING_ROUTES.includes(pathname);

  if (isLanding) {
    return (
      <div className="flex-1 w-full min-h-screen bg-[#f8f9fa] dark:bg-[#07090e] transition-colors duration-300">
        {children}
      </div>
    );
  }

  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 md:pl-[260px] w-full pb-16 md:pb-0">
        <Header />
        <main className="flex-1 p-4 md:p-6 max-w-[1440px] w-full mx-auto">
          {children}
        </main>
      </div>
      <BottomNav />
    </>
  );
}
