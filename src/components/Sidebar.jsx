"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const getLinkClasses = (path) => {
    const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
    return `flex items-center gap-3 px-6 py-3 font-['Inter'] text-[14px] font-medium transition-colors ${
      isActive
        ? 'bg-[#f0f0f1] dark:bg-gray-800 text-[#000000] dark:text-white border-r-2 border-[#000000] dark:border-white'
        : 'text-[#45464c] dark:text-gray-400 hover:bg-[#f8f8f9] dark:hover:bg-gray-800/50'
    }`;
  };

  return (
    <nav className="fixed left-0 top-0 w-[260px] bg-[#ffffff] dark:bg-gray-900 border-r border-[#c6c6cd] dark:border-gray-700 flex flex-col h-full py-6 z-20 hidden md:flex transition-colors">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#000000] dark:bg-white rounded-lg flex items-center justify-center text-[#ffffff] dark:text-black font-bold">C</div>
        <div>
          <h1 className="font-['Inter'] text-[24px] leading-[32px] font-bold text-[#000000] dark:text-white tracking-[-0.01em]">ComplyMap</h1>
          <p className="font-['Inter'] text-[11px] leading-[14px] text-[#45464c] dark:text-gray-400 font-medium">Enterprise Compliance</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {/* Dashboard */}
          <li>
            <Link className={getLinkClasses('/')} href="/">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
          </li>
          {/* Employees */}
          <li>
            <Link className={getLinkClasses('/employees')} href="/employees">
              <span className="material-symbols-outlined">group</span>
              Employees
            </Link>
          </li>
          {/* Countries */}
          <li>
            <Link className={getLinkClasses('/countries')} href="/countries">
              <span className="material-symbols-outlined">public</span>
              Countries
            </Link>
          </li>
          {/* Compliance */}
          <li>
            <Link className={getLinkClasses('/compliance')} href="#">
              <span className="material-symbols-outlined">gavel</span>
              Compliance
            </Link>
          </li>
          {/* Tasks */}
          <li>
            <Link className={getLinkClasses('/tasks')} href="#">
              <span className="material-symbols-outlined">assignment</span>
              Tasks
            </Link>
          </li>
          {/* Reports */}
          <li>
            <Link className={getLinkClasses('/reports')} href="#">
              <span className="material-symbols-outlined">analytics</span>
              Reports
            </Link>
          </li>
          {/* Settings */}
          <li>
            <Link className={getLinkClasses('/settings')} href="#">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-6 mt-auto pt-6 border-t border-[#c6c6cd] dark:border-gray-700">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover border border-[#c6c6cd] dark:border-gray-600" alt="Admin profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_luzGoj6_meqFBZKSALPNX-RhB3nlPSBLfGM8b3IojT3YwujuF-a0OZPSaCJEgKh8s5YyUzT77nAcy3V37mx-9JbV08hQEfUsNc6W6ClJde1Iz1ZYNpmn9ZuQx9mpHY2mORAs3rOGzD20_NUfkTTgYdiLPImJ34ymJTPKMZxxsxiE96hlEBmB7Get23uA0lUp_QVPH-8iPOTaNkKUQ4MMYXz_3UO2WbCmC9HQOnx2xi3_-X7CofaLKw" />
          <div>
            <p className="font-['Inter'] text-[12px] font-semibold text-[#191c1d] dark:text-white tracking-[0.05em]">Admin User</p>
            <p className="font-['Inter'] text-[11px] font-medium text-[#45464c] dark:text-gray-400">admin@complymap.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
