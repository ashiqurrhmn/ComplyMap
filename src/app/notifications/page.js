"use client";

import React from 'react';

export default function NotificationsPage() {
  return (
    <div className="flex-1 overflow-y-auto w-full pb-20">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-gray-900 dark:text-white">Alert Center</h2>
            <p className="text-[16px] text-gray-500 dark:text-gray-400 mt-2">Monitor and resolve compliance alerts globally.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white font-bold text-[14px] py-2 pl-4 pr-10 focus:outline-none focus:border-[#006398] dark:focus:border-[#38bdf8] cursor-pointer shadow-sm">
                <option value="all">Priority: All</option>
                <option value="critical">Critical Only</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">arrow_drop_down</span>
            </div>
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 font-bold text-[14px] text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
              Mark all as read
            </button>
          </div>
        </div>

        {/* Notifications Feed */}
        <div className="space-y-4">
          
          {/* Critical Alert */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 flex gap-4 items-start relative overflow-hidden group border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 dark:bg-red-500"></div>
            <div className="shrink-0 pt-1">
              <span className="material-symbols-outlined text-red-600 dark:text-red-500">error</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#fef2f2] dark:bg-red-900/40 text-[#991b1b] dark:text-red-400 border border-[#fee2e2] dark:border-red-700/50">Critical</span>
                <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">2 mins ago • Germany</span>
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 dark:text-white mb-1">Germany has 3 overdue compliance requirements.</h3>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-4">Immediate action required to avoid potential penalties regarding local tax filings and data residency updates.</p>
              <div className="flex gap-3">
                <button className="bg-[#0284C7] dark:bg-[#0ea5e9] text-white font-bold text-[14px] px-4 py-2 rounded-lg hover:bg-[#0369A1] dark:hover:bg-[#0284c7] transition-colors shadow-sm">
                  Go to Task
                </button>
                <button className="text-[#006398] dark:text-[#38bdf8] font-bold text-[14px] px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 rounded-lg transition-colors">
                  Dismiss
                </button>
              </div>
            </div>
          </div>

          {/* Attention Alert */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 flex gap-4 items-start relative overflow-hidden group border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
            <div className="shrink-0 pt-1">
              <span className="material-symbols-outlined text-orange-500">warning</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#fffbeb] dark:bg-orange-900/40 text-[#b45309] dark:text-orange-400 border border-[#fde68a] dark:border-orange-700/50">Attention</span>
                <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">1 hour ago • United States</span>
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 dark:text-white mb-1">2 US tax requirements are approaching their deadline.</h3>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-4">Federal filing deadlines are within 14 days. Ensure all documentation is prepared and reviewed.</p>
              <div className="flex gap-3">
                <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold text-[14px] px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                  View Requirements
                </button>
              </div>
            </div>
          </div>

          {/* Information Alert */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 flex gap-4 items-start relative overflow-hidden group border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
            <div className="shrink-0 pt-1">
              <span className="material-symbols-outlined text-blue-500">info</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-700/50">Information</span>
                <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">Yesterday • United Kingdom</span>
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 dark:text-white mb-1">A new regulatory requirement has been added for the UK.</h3>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-4">The FCA has updated guidelines regarding digital asset compliance reporting for Q3.</p>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-[#006398] dark:text-[#38bdf8] font-bold text-[14px] px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 rounded-lg transition-colors">
                  Read Update
                </button>
              </div>
            </div>
          </div>

          {/* Information Alert 2 */}
          <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 flex gap-4 items-start relative overflow-hidden group border border-gray-200 dark:border-gray-800 shadow-sm transition-colors opacity-75">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-300 dark:bg-gray-700"></div>
            <div className="shrink-0 pt-1">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">task_alt</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">2 days ago • System</span>
              </div>
              <h3 className="text-[18px] font-bold text-gray-500 dark:text-gray-400 mb-1 line-through">Quarterly compliance audit completed.</h3>
              <p className="text-[14px] text-gray-400 dark:text-gray-500">All reports have been successfully generated and stored in the secure vault.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
