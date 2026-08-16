import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ComplyMap SaaS Compliance Platform",
  description: "Regulatory precision for compliance teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-[#f8f9fa] dark:bg-gray-950 flex text-[#191c1d] dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <Sidebar />
          <div className="flex flex-col flex-1 pl-[260px]">
            <Header />
            <main className="flex-1 p-6 max-w-[1440px] w-full mx-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
