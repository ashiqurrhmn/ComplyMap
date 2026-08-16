import React from 'react';
import Link from 'next/link';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#ffffff] dark:bg-gray-900 border-t border-[#c6c6cd] dark:border-gray-700 flex justify-around items-center h-16 pb-safe z-50 md:hidden transition-colors">
      {/* Dashboard (Active) */}
      <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-[#006398] dark:text-[#38bdf8] font-bold gap-1 cursor-pointer active:opacity-80">
        <div className="px-3 py-1 rounded-full bg-[#f3f4f5] dark:bg-gray-800 border-b-2 border-[#006398] dark:border-[#38bdf8]">
          <span className="material-symbols-outlined">dashboard</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Dashboard</span>
      </Link>

      {/* Employees */}
      <Link href="#" className="flex flex-col items-center justify-center w-full h-full text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] hover:bg-[#ffffff] dark:hover:bg-gray-900 transition-colors gap-1 cursor-pointer active:opacity-80">
        <div className="px-3 py-1 rounded-full border-b-2 border-transparent">
          <span className="material-symbols-outlined">group</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Employees</span>
      </Link>
      
      {/* Countries */}
      <Link href="#" className="flex flex-col items-center justify-center w-full h-full text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] hover:bg-[#ffffff] dark:hover:bg-gray-900 transition-colors gap-1 cursor-pointer active:opacity-80">
        <div className="px-3 py-1 rounded-full border-b-2 border-transparent">
          <span className="material-symbols-outlined">public</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Countries</span>
      </Link>

      {/* Compliance */}
      <Link href="#" className="flex flex-col items-center justify-center w-full h-full text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] hover:bg-[#ffffff] dark:hover:bg-gray-900 transition-colors gap-1 cursor-pointer active:opacity-80">
        <div className="px-3 py-1 rounded-full border-b-2 border-transparent">
          <span className="material-symbols-outlined">gavel</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Compliance</span>
      </Link>
      
      {/* Tasks */}
      <Link href="#" className="flex flex-col items-center justify-center w-full h-full text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] hover:bg-[#ffffff] dark:hover:bg-gray-900 transition-colors gap-1 cursor-pointer active:opacity-80">
        <div className="px-3 py-1 rounded-full border-b-2 border-transparent">
          <span className="material-symbols-outlined">assignment</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Tasks</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
