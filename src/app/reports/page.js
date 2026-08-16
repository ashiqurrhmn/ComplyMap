"use client";

import React from 'react';

export default function ReportsPage() {
  return (
    <div className="flex-1 overflow-y-auto w-full pb-20">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Page Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-gray-900 dark:text-white mb-2">Compliance Reports</h2>
            <p className="text-[16px] text-gray-500 dark:text-gray-400">Q3 2023 Global Regulatory Adherence</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter View
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0284C7] dark:bg-[#0ea5e9] text-white rounded-lg font-bold text-[14px] hover:bg-[#0369A1] dark:hover:bg-[#0284c7] transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Report
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* KPI 1: Overall Compliance */}
          <div className="md:col-span-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex flex-col justify-between shadow-sm transition-colors">
            <div className="flex items-start justify-between">
              <h3 className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Overall Compliance</h3>
              <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-[#006398] dark:text-[#38bdf8] text-[18px]">verified</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[36px] font-bold text-gray-900 dark:text-white tracking-tight">94.2%</div>
              <div className="flex items-center gap-1 mt-2 text-[#006398] dark:text-[#38bdf8] text-[12px] font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>+1.2% from last quarter</span>
              </div>
            </div>
          </div>

          {/* KPI 2: Total Overdue */}
          <div className="md:col-span-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex flex-col justify-between shadow-sm transition-colors">
            <div className="flex items-start justify-between">
              <h3 className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Overdue</h3>
              <div className="w-8 h-8 rounded-full bg-[#fef2f2] dark:bg-red-900/40 flex items-center justify-center border border-[#fee2e2] dark:border-red-700/50">
                <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-[18px]">warning</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[36px] font-bold text-red-600 dark:text-red-400 tracking-tight">12</div>
              <div className="flex items-center gap-1 mt-2 text-red-600 dark:text-red-400 text-[12px] font-bold">
                <span className="material-symbols-outlined text-[16px]">priority_high</span>
                <span>Critical action required</span>
              </div>
            </div>
          </div>

          {/* KPI 3: Pending Tasks */}
          <div className="md:col-span-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex flex-col justify-between shadow-sm transition-colors">
            <div className="flex items-start justify-between">
              <h3 className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending Tasks</h3>
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center border border-blue-100 dark:border-blue-700/50">
                <span className="material-symbols-outlined text-[#0284C7] dark:text-[#0ea5e9] text-[18px]">pending_actions</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[36px] font-bold text-gray-900 dark:text-white tracking-tight">156</div>
              <div className="flex items-center gap-1 mt-2 text-gray-500 dark:text-gray-400 text-[12px] font-bold">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>Due within 30 days</span>
              </div>
            </div>
          </div>

          {/* Bar Chart: Compliance by Country */}
          <div className="md:col-span-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex flex-col shadow-sm transition-colors">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-bold text-gray-900 dark:text-white">Compliance by Country</h3>
              <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            
            <div className="flex-1 relative min-h-[280px] flex items-end gap-4 pb-8 border-b border-gray-200 dark:border-gray-700">
              {/* Y Axis Labels */}
              <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[12px] font-bold text-gray-400 dark:text-gray-500 pr-4 border-r border-gray-200 dark:border-gray-700 h-full py-2">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              {/* Chart Area */}
              <div className="flex-1 ml-14 flex items-end justify-around h-full gap-2 px-2">
                {/* Bar 1 */}
                <div className="w-full max-w-[48px] h-[95%] bg-[#0284C7] dark:bg-[#0ea5e9] rounded-t-md relative group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="absolute -bottom-7 w-full text-center text-[12px] font-bold text-gray-500 dark:text-gray-400">UK</div>
                </div>
                {/* Bar 2 */}
                <div className="w-full max-w-[48px] h-[82%] bg-[#0284C7] dark:bg-[#0ea5e9] rounded-t-md relative group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="absolute -bottom-7 w-full text-center text-[12px] font-bold text-gray-500 dark:text-gray-400">DE</div>
                </div>
                {/* Bar 3 */}
                <div className="w-full max-w-[48px] h-[45%] bg-red-500 dark:bg-red-500/80 rounded-t-md relative group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="absolute -bottom-7 w-full text-center text-[12px] font-bold text-red-600 dark:text-red-400">FR</div>
                </div>
                {/* Bar 4 */}
                <div className="w-full max-w-[48px] h-[100%] bg-emerald-500 dark:bg-emerald-500/80 rounded-t-md relative group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="absolute -bottom-7 w-full text-center text-[12px] font-bold text-gray-500 dark:text-gray-400">JP</div>
                </div>
                {/* Bar 5 */}
                <div className="w-full max-w-[48px] h-[78%] bg-[#0284C7] dark:bg-[#0ea5e9] rounded-t-md relative group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="absolute -bottom-7 w-full text-center text-[12px] font-bold text-gray-500 dark:text-gray-400">US</div>
                </div>
                {/* Bar 6 */}
                <div className="w-full max-w-[48px] h-[90%] bg-[#0284C7] dark:bg-[#0ea5e9] rounded-t-md relative group cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="absolute -bottom-7 w-full text-center text-[12px] font-bold text-gray-500 dark:text-gray-400">CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pie Chart: Compliance by Category */}
          <div className="md:col-span-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex flex-col shadow-sm transition-colors">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-bold text-gray-900 dark:text-white">By Category</h3>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {/* Abstract CSS Pie representation */}
              <div className="w-48 h-48 rounded-full relative overflow-hidden shadow-inner" style={{ background: 'conic-gradient(#0284C7 0% 60%, #10B981 60% 85%, #EF4444 85% 100%)' }}>
                <div className="absolute inset-3 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center flex-col transition-colors">
                  <span className="text-[36px] font-bold text-gray-900 dark:text-white tracking-tight">3</span>
                  <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase">Categories</span>
                </div>
              </div>
              
              {/* Legend */}
              <div className="w-full flex flex-col gap-3 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#0284C7]"></div>
                    <span className="text-[14px] font-bold text-gray-600 dark:text-gray-300">Tax</span>
                  </div>
                  <span className="text-[14px] font-bold text-gray-900 dark:text-white">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
                    <span className="text-[14px] font-bold text-gray-600 dark:text-gray-300">Labor</span>
                  </div>
                  <span className="text-[14px] font-bold text-gray-900 dark:text-white">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#EF4444]"></div>
                    <span className="text-[14px] font-bold text-gray-600 dark:text-gray-300">Benefits</span>
                  </div>
                  <span className="text-[14px] font-bold text-red-600 dark:text-red-400">15%</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
