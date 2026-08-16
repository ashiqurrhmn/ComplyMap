"use client";

import React from 'react';

const complianceTasks = [
  {
    id: 1,
    requirement: 'Annual AML Training Certification',
    country: 'United States',
    employee: 'Sarah Jenkins',
    category: 'Training',
    deadline: 'Oct 12, 2023',
    status: 'Overdue',
    assignee: 'Michael Chang'
  },
  {
    id: 2,
    requirement: 'H-1B Visa Renewal Packet',
    country: 'United States',
    employee: 'Raj Patel',
    category: 'Work Visa',
    deadline: 'Nov 01, 2023',
    status: 'Pending',
    assignee: 'Legal Dept'
  },
  {
    id: 3,
    requirement: 'DBS Enhanced Background Check',
    country: 'United Kingdom',
    employee: 'Emma Thompson',
    category: 'Background Check',
    deadline: 'Nov 15, 2023',
    status: 'In Progress',
    assignee: 'HR UK Team'
  },
  {
    id: 4,
    requirement: 'Q3 Tax Equalization Filing',
    country: 'Germany',
    employee: 'Lukas Weber',
    category: 'Tax Filing',
    deadline: 'Oct 05, 2023',
    status: 'Completed',
    assignee: 'External Firm'
  },
  {
    id: 5,
    requirement: 'Local Labor Law Acknowledgment',
    country: 'Singapore',
    employee: 'Wei Chen',
    category: 'Onboarding',
    deadline: 'Nov 20, 2023',
    status: 'Pending',
    assignee: 'System Auto'
  }
];

export default function CompliancePage() {
  const renderStatusBadge = (status) => {
    switch (status) {
      case 'Overdue':
        return (
          <span className="inline-flex items-center gap-1 bg-[#fef2f2] dark:bg-red-900/40 text-[#991b1b] dark:text-red-400 text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#fee2e2] dark:border-red-700/50">
            <span className="material-symbols-outlined text-[14px]">warning</span> Overdue
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 bg-[#fffbeb] dark:bg-orange-900/40 text-[#b45309] dark:text-orange-400 text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#fde68a] dark:border-orange-700/50">
            <span className="material-symbols-outlined text-[14px]">schedule</span> Pending
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-[11px] font-bold px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-700/50">
            <span className="material-symbols-outlined text-[14px]">sync</span> In Progress
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 bg-[#ecfdf5] dark:bg-teal-900/40 text-[#065f46] dark:text-teal-400 text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#d1fae5] dark:border-teal-700/50">
            <span className="material-symbols-outlined text-[14px]">check_circle</span> Completed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto w-full pb-20">
      <div className="w-full">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-gray-900 dark:text-white">Global Compliance Checklist</h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">Track and manage cross-border compliance tasks.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg font-semibold text-[14px] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm w-fit">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export to CSV
          </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-wrap gap-4 items-end shadow-sm mb-6 transition-colors">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Country</label>
            <div className="relative">
              <select className="w-full appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-[14px] font-medium text-gray-900 dark:text-white focus:outline-none focus:border-[#006398] dark:focus:border-[#38bdf8] cursor-pointer transition-colors">
                <option>All Jurisdictions</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Singapore</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Category</label>
            <div className="relative">
              <select className="w-full appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-[14px] font-medium text-gray-900 dark:text-white focus:outline-none focus:border-[#006398] dark:focus:border-[#38bdf8] cursor-pointer transition-colors">
                <option>All Categories</option>
                <option>Work Visa</option>
                <option>Tax Filing</option>
                <option>Background Check</option>
                <option>Training</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Status</label>
            <div className="relative">
              <select className="w-full appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-[14px] font-medium text-gray-900 dark:text-white focus:outline-none focus:border-[#006398] dark:focus:border-[#38bdf8] cursor-pointer transition-colors">
                <option>Any Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Overdue</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">Deadline</label>
            <div className="relative">
              <input type="date" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-[14px] font-medium text-gray-900 dark:text-white focus:outline-none focus:border-[#006398] dark:focus:border-[#38bdf8] cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="px-1 w-full md:w-auto">
            <button className="w-full bg-[#0284C7] dark:bg-[#0ea5e9] text-white font-bold text-[14px] px-6 py-2.5 rounded-lg hover:bg-[#0369A1] dark:hover:bg-[#0284c7] transition-colors shadow-sm h-[42px] flex items-center justify-center">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Global High-Density Data Table */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm flex-1 transition-colors flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Requirement</th>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Country</th>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Employee</th>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Category</th>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Deadline</th>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Status</th>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Assigned To</th>
                  <th className="px-4 py-3 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {complianceTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group h-14">
                    <td className="px-4 py-2 text-[14px] text-gray-900 dark:text-white font-medium max-w-[200px] truncate" title={task.requirement}>
                      {task.requirement}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300">{task.country}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-[14px] font-medium text-gray-900 dark:text-white">{task.employee}</td>
                    <td className="px-4 py-2 text-[14px] text-gray-500 dark:text-gray-400">{task.category}</td>
                    <td className={`px-4 py-2 text-[14px] ${task.status === 'Overdue' ? 'text-red-600 dark:text-red-400 font-bold' : 'text-gray-900 dark:text-gray-200 font-medium'}`}>
                      {task.deadline}
                    </td>
                    <td className="px-4 py-2">
                      {renderStatusBadge(task.status)}
                    </td>
                    <td className="px-4 py-2 text-[14px] text-gray-600 dark:text-gray-300 font-medium">{task.assignee}</td>
                    <td className="px-4 py-2 text-right">
                      <button className="text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Table Pagination */}
          <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between mt-auto">
            <span className="text-[14px] text-gray-500 dark:text-gray-400 font-medium">Showing 1 to 5 of 142 requirements</span>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-[#0284C7] dark:bg-[#0ea5e9] text-white font-bold text-[14px] flex items-center justify-center shadow-sm">1</button>
              <button className="w-8 h-8 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-[14px] flex items-center justify-center transition-colors">2</button>
              <button className="w-8 h-8 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-[14px] flex items-center justify-center transition-colors">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="p-1 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
