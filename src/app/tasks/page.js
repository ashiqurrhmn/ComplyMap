"use client";

import React from 'react';
import Link from 'next/link';

export default function TasksPage() {
  return (
    <div className="flex-1 overflow-y-auto w-full pb-20">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex text-[14px] text-gray-500 dark:text-gray-400 mb-6 font-medium">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/tasks" className="hover:text-gray-900 dark:hover:text-white transition-colors">Tasks</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
                <Link href="/countries" className="hover:text-gray-900 dark:hover:text-white transition-colors">Germany</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
                <span className="text-gray-900 dark:text-white font-bold">Health Insurance Registration</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-gray-900 dark:text-white mb-2">Health Insurance Registration</h2>
            <p className="text-[16px] text-gray-500 dark:text-gray-400 max-w-3xl">Employees working in Germany may need to be registered for applicable statutory health insurance requirements.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-bold text-[14px] text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
              Assign Task
            </button>
            <button className="px-4 py-2 bg-[#0d9488] dark:bg-[#14b8a6] text-white rounded-lg font-bold text-[14px] hover:bg-[#0f766e] dark:hover:bg-[#0d9488] transition-colors shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">upload</span>
              Upload Document
            </button>
            <button className="px-4 py-2 bg-[#0284C7] dark:bg-[#0ea5e9] text-white rounded-lg font-bold text-[14px] hover:bg-[#0369A1] dark:hover:bg-[#0284c7] transition-colors shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check</span>
              Mark as Complete
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Details Card (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 shadow-sm transition-colors">
            <h3 className="text-[18px] font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Task Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-[#006398] dark:text-[#38bdf8] shrink-0 border border-gray-100 dark:border-gray-700">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Country</span>
                  <span className="text-[14px] text-gray-900 dark:text-white font-bold">Germany</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-[#006398] dark:text-[#38bdf8] shrink-0 border border-gray-100 dark:border-gray-700">
                  <span className="material-symbols-outlined">category</span>
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Category</span>
                  <span className="text-[14px] text-gray-900 dark:text-white font-bold">Employee Benefits</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#fef2f2] dark:bg-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0 border border-[#fee2e2] dark:border-red-700/50">
                  <span className="material-symbols-outlined">event_busy</span>
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Deadline</span>
                  <span className="text-[14px] text-red-600 dark:text-red-400 font-bold">Sept 10, 2026</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-[#006398] dark:text-[#38bdf8] shrink-0 border border-gray-100 dark:border-gray-700">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <span className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Assigned To</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#0284C7] dark:bg-[#0ea5e9] text-[10px] text-white font-bold flex items-center justify-center">HR</div>
                    <span className="text-[14px] text-gray-900 dark:text-white font-bold">HR Manager</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[14px] font-bold text-gray-900 dark:text-white">Status</h4>
                <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[11px] font-bold bg-[#fffbeb] dark:bg-orange-900/40 text-[#b45309] dark:text-orange-400 border border-[#fde68a] dark:border-orange-700/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] dark:bg-orange-400"></span>
                  Needs Attention
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1 overflow-hidden">
                <div className="bg-[#d97706] dark:bg-orange-400 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <p className="text-[12px] font-bold text-gray-500 dark:text-gray-400 text-right mt-1.5">25% Complete</p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[18px] font-bold text-gray-900 dark:text-white">Notes</h4>
                <button className="text-[#006398] dark:text-[#38bdf8] font-bold text-[14px] hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  Add Note
                </button>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-center text-[14px] italic transition-colors">
                No notes added yet.
              </div>
            </div>
          </div>
          
          {/* Sidebar column (Activity Log) */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 shadow-sm h-fit transition-colors">
            <h3 className="text-[18px] font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">history</span>
              Activity Log
            </h3>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-8 pb-4">
              
              {/* Timeline Item 1 */}
              <div className="relative pl-6">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0284C7] dark:bg-[#0ea5e9] ring-4 ring-white dark:ring-gray-900 transition-colors"></span>
                <div className="flex flex-col">
                  <span className="text-[14px] text-gray-900 dark:text-white font-bold">Updated by Admin</span>
                  <span className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">Today, 09:42 AM</span>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 mt-3 bg-gray-50 dark:bg-gray-800/80 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                    Changed status to 'Needs Attention'
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative pl-6">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-900 transition-colors"></span>
                <div className="flex flex-col">
                  <span className="text-[14px] text-gray-900 dark:text-white font-bold">Created by System</span>
                  <span className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">Yesterday, 14:30 PM</span>
                  <p className="text-[14px] text-gray-600 dark:text-gray-300 mt-3 bg-gray-50 dark:bg-gray-800/80 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                    Task auto-generated based on German compliance rules.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
