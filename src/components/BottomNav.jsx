"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();

  const getLinkClasses = (path) => {
    const isActive = path === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(path);
    const baseClasses = "flex flex-col items-center justify-center w-full h-full transition-colors gap-1 cursor-pointer active:opacity-80";
    const activeClasses = "text-[#006398] dark:text-[#38bdf8] font-bold";
    const inactiveClasses = "text-[#45464c] dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] hover:bg-[#ffffff] dark:hover:bg-gray-900";
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getIconContainerClasses = (path) => {
    const isActive = path === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(path);
    const baseClasses = "px-3 py-1 rounded-full border-b-2";
    const activeClasses = "bg-[#f3f4f5] dark:bg-gray-800 border-[#006398] dark:border-[#38bdf8]";
    const inactiveClasses = "border-transparent";
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#ffffff] dark:bg-gray-900 border-t border-[#c6c6cd] dark:border-gray-700 flex justify-around items-center h-16 pb-safe z-50 md:hidden transition-colors">
      {/* Dashboard */}
      <Link href="/dashboard" className={getLinkClasses('/dashboard')}>
        <div className={getIconContainerClasses('/dashboard')}>
          <span className="material-symbols-outlined">dashboard</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Dashboard</span>
      </Link>

      {/* Employees */}
      <Link href="/employees" className={getLinkClasses('/employees')}>
        <div className={getIconContainerClasses('/employees')}>
          <span className="material-symbols-outlined">group</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Employees</span>
      </Link>

      {/* Countries */}
      <Link href="/countries" className={getLinkClasses('/countries')}>
        <div className={getIconContainerClasses('/countries')}>
          <span className="material-symbols-outlined">public</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Countries</span>
      </Link>

      {/* Compliance */}
      <Link href="/compliance" className={getLinkClasses('/compliance')}>
        <div className={getIconContainerClasses('/compliance')}>
          <span className="material-symbols-outlined">gavel</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Compliance</span>
      </Link>

      {/* Reports */}
      <Link href="/reports" className={getLinkClasses('/reports')}>
        <div className={getIconContainerClasses('/reports')}>
          <span className="material-symbols-outlined">analytics</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Reports</span>
      </Link>

      {/* Tasks */}
      <Link href="/tasks" className={getLinkClasses('/tasks')}>
        <div className={getIconContainerClasses('/tasks')}>
          <span className="material-symbols-outlined">assignment</span>
        </div>
        <span className="font-['Inter'] text-[10px] font-medium">Tasks</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
