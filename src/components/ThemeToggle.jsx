"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="text-[#45464c] hover:text-[#006398] dark:text-gray-300 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-[#f3f4f5] dark:hover:bg-gray-700 hidden sm:block">
        <span className="material-symbols-outlined">light_mode</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-[#45464c] hover:text-[#006398] dark:text-gray-300 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-[#f3f4f5] dark:hover:bg-gray-700 hidden sm:block"
    >
      <span className="material-symbols-outlined">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
