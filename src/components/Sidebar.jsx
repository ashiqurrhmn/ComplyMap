import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 w-[260px] bg-[#ffffff] border-r border-[#c6c6cd] flex flex-col h-full py-6 z-20 hidden md:flex">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#000000] rounded-lg flex items-center justify-center text-[#ffffff] font-bold">C</div>
        <div>
          <h1 className="font-['Inter'] text-[24px] leading-[32px] font-bold text-[#000000] tracking-[-0.01em]">ComplyMap</h1>
          <p className="font-['Inter'] text-[11px] leading-[14px] text-[#45464c] font-medium">Enterprise Compliance</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {/* Dashboard (Active) */}
          <li>
            <Link className="flex items-center gap-4 px-6 py-3 border-l-4 border-[#006398] bg-[#f3f4f5] text-[#006398] font-bold text-[14px] cursor-pointer" href="/">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
          </li>
          {/* Employees */}
          <li>
            <Link className="flex items-center gap-4 px-6 py-3 border-l-4 border-transparent text-[#45464c] hover:bg-[#ffffff] text-[14px] cursor-pointer transition-colors" href="#">
              <span className="material-symbols-outlined">group</span>
              Employees
            </Link>
          </li>
          {/* Countries */}
          <li>
            <Link className="flex items-center gap-4 px-6 py-3 border-l-4 border-transparent text-[#45464c] hover:bg-[#ffffff] text-[14px] cursor-pointer transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
              Countries
            </Link>
          </li>
          {/* Compliance */}
          <li>
            <Link className="flex items-center gap-4 px-6 py-3 border-l-4 border-transparent text-[#45464c] hover:bg-[#ffffff] text-[14px] cursor-pointer transition-colors" href="#">
              <span className="material-symbols-outlined">gavel</span>
              Compliance
            </Link>
          </li>
          {/* Tasks */}
          <li>
            <Link className="flex items-center gap-4 px-6 py-3 border-l-4 border-transparent text-[#45464c] hover:bg-[#ffffff] text-[14px] cursor-pointer transition-colors" href="#">
              <span className="material-symbols-outlined">assignment</span>
              Tasks
            </Link>
          </li>
          {/* Reports */}
          <li>
            <Link className="flex items-center gap-4 px-6 py-3 border-l-4 border-transparent text-[#45464c] hover:bg-[#ffffff] text-[14px] cursor-pointer transition-colors" href="#">
              <span className="material-symbols-outlined">analytics</span>
              Reports
            </Link>
          </li>
          {/* Settings */}
          <li>
            <Link className="flex items-center gap-4 px-6 py-3 border-l-4 border-transparent text-[#45464c] hover:bg-[#ffffff] text-[14px] cursor-pointer transition-colors" href="#">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-6 mt-auto pt-6 border-t border-[#c6c6cd]">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover border border-[#c6c6cd]" alt="Admin profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_luzGoj6_meqFBZKSALPNX-RhB3nlPSBLfGM8b3IojT3YwujuF-a0OZPSaCJEgKh8s5YyUzT77nAcy3V37mx-9JbV08hQEfUsNc6W6ClJde1Iz1ZYNpmn9ZuQx9mpHY2mORAs3rOGzD20_NUfkTTgYdiLPImJ34ymJTPKMZxxsxiE96hlEBmB7Get23uA0lUp_QVPH-8iPOTaNkKUQ4MMYXz_3UO2WbCmC9HQOnx2xi3_-X7CofaLKw" />
          <div>
            <p className="font-['Inter'] text-[12px] font-semibold text-[#191c1d] tracking-[0.05em]">Admin User</p>
            <p className="font-['Inter'] text-[11px] font-medium text-[#45464c]">admin@complymap.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
