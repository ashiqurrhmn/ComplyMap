import React from 'react';
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-8 bg-[#f8f9fa] dark:bg-gray-900 border-b border-[#c6c6cd] dark:border-gray-700 sticky top-0 z-10 transition-all duration-200 w-full">
      {/* Mobile Brand (Hidden on Desktop) */}
      <div className="md:hidden flex items-center gap-3">
        <div className="w-8 h-8 bg-[#000000] dark:bg-white rounded-lg flex items-center justify-center text-[#ffffff] dark:text-black font-bold">C</div>
        <h1 className="font-['Inter'] text-[24px] font-bold text-[#000000] dark:text-white tracking-[-0.01em]">ComplyMap</h1>
      </div>
      
      {/* Search (Left on Desktop) */}
      <div className="hidden md:flex items-center bg-[#f3f4f5] dark:bg-gray-800 rounded-lg px-3 py-2 w-96 border border-[#c6c6cd] dark:border-gray-600 focus-within:border-[#006398] dark:focus-within:border-[#38bdf8] focus-within:ring-2 focus-within:ring-[#006398]/20 transition-all">
        <span className="material-symbols-outlined text-[#45464c] dark:text-gray-400 mr-2">search</span>
        <input className="bg-transparent border-none outline-none text-[14px] text-[#191c1d] dark:text-white w-full placeholder:text-[#45464c] dark:placeholder-gray-400 focus:ring-0 p-0" placeholder="Search employees, countries, or compliance rules..." type="text" />
      </div>
      
      {/* Mobile Search Icon */}
      <button className="md:hidden text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] p-2">
        <span className="material-symbols-outlined">search</span>
      </button>
      
      {/* Trailing Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] transition-colors relative p-2 rounded-full hover:bg-[#f3f4f5] dark:hover:bg-gray-700">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
        </button>
        <ThemeToggle />
        <button className="text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] transition-colors p-2 rounded-full hover:bg-[#f3f4f5] dark:hover:bg-gray-700 hidden sm:block">
          <span className="material-symbols-outlined">help</span>
        </button>
        <img className="w-8 h-8 rounded-full object-cover border border-[#c6c6cd] dark:border-gray-600 md:hidden ml-2" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh8a4ybwsndqNpsoxkvFJFkalMfzY_2GbtbuP6ujFZ1uAeuTmszJF1Zr9yTChoW1JPugirceM9JyMbPvbdoXfaPpOTn9Mw3aUkf6pxF51zq4RBVxUvCJOi4ygKj7_YknYsKLLc8GsugCt4INtm8UCxCTe5tJIB6YDvotGbi1HtU_0aGFGn4f1nmb6yym0dUY6c6I3D6Iy9I44jolqruE7f_I82ZJGXmc-P1aDBYr0PiPfiE9SGTSbSpQ" />
      </div>
    </header>
  );
};

export default Header;
