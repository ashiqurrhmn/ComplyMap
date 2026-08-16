"use client";

import React, { useState } from 'react';

const countries = [
  { id: 'de', name: 'Germany', flag: '🇩🇪', score: 76, employees: 17, trend: '+2%' },
  { id: 'us', name: 'United States', flag: '🇺🇸', score: 92, employees: 42, trend: '+5%' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', score: 85, employees: 28, trend: '+1%' },
  { id: 'bd', name: 'Bangladesh', flag: '🇧🇩', score: 68, employees: 12, trend: '-3%' },
  { id: 'fr', name: 'France', flag: '🇫🇷', score: 88, employees: 24, trend: '+4%' }
];

export default function CountriesPage() {
  const [selectedCountryId, setSelectedCountryId] = useState('de');
  const [taxOpen, setTaxOpen] = useState(true);
  const [laborOpen, setLaborOpen] = useState(true);

  const activeCountry = countries.find(c => c.id === selectedCountryId) || countries[0];

  return (
    <div className="flex-1 overflow-y-auto w-full pb-20">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[28px] md:text-[36px]">{activeCountry.flag}</span>
              <div className="relative inline-block">
                <select 
                  value={selectedCountryId}
                  onChange={(e) => setSelectedCountryId(e.target.value)}
                  className="appearance-none bg-transparent text-[28px] md:text-[36px] font-bold text-gray-900 dark:text-white tracking-tight pr-10 focus:outline-none cursor-pointer hover:opacity-80 transition-opacity"
                >
                  {countries.map(country => (
                    <option key={country.id} value={country.id} className="text-[16px] text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      {country.name}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white pointer-events-none text-[28px]">
                  expand_more
                </span>
              </div>
            </div>
            <p className="text-[16px] text-gray-500 dark:text-gray-400">Managing compliance for {activeCountry.employees} active employees.</p>
          </div>
          <div className="flex gap-4">
            {/* Metric Card: Score */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center gap-4 shadow-sm transition-colors">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                activeCountry.score >= 90 ? 'bg-[#ecfdf5] dark:bg-teal-900/40 border-[#a7f3d0] dark:border-teal-700 text-[#065f46] dark:text-teal-300' : 
                activeCountry.score >= 80 ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300' :
                activeCountry.score >= 70 ? 'bg-[#fffbeb] dark:bg-orange-900/40 border-[#fde68a] dark:border-orange-700/50 text-[#b45309] dark:text-orange-400' :
                'bg-[#fef2f2] dark:bg-red-900/40 border-[#fee2e2] dark:border-red-700/50 text-[#991b1b] dark:text-red-400'
              }`}>
                <span className="text-[22px] font-bold">{activeCountry.score}</span>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Compliance Score</p>
                <p className={`text-[14px] font-medium flex items-center gap-1 mt-0.5 ${
                  activeCountry.trend.startsWith('+') ? 'text-[#059669] dark:text-teal-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  <span className="material-symbols-outlined text-[16px]">
                    {activeCountry.trend.startsWith('+') ? 'trending_up' : 'trending_down'}
                  </span>
                  {activeCountry.trend} this month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-8">
          
          {/* Section: TAX REQUIREMENTS */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden transition-colors">
            <div 
              className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setTaxOpen(!taxOpen)}
            >
              <h3 className="text-[12px] font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">account_balance</span>
                Tax Requirements
              </h3>
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 transition-transform duration-200" style={{ transform: taxOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
            </div>
            
            {taxOpen && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-white dark:bg-gray-900 text-[12px] font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                    <tr>
                      <th className="py-3 px-6 font-semibold">Requirement</th>
                      <th className="py-3 px-6 font-semibold">Status</th>
                      <th className="py-3 px-6 font-semibold">Deadline</th>
                      <th className="py-3 px-6 font-semibold">Assignee</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-[#F0F9FF] dark:hover:bg-blue-900/20 transition-colors">
                      <td className="py-4 px-6">
                        <p className="text-gray-900 dark:text-white font-medium">Payroll tax registration</p>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400">Lohnsteueranmeldung</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#ecfdf5] dark:bg-teal-900/40 text-[#065f46] dark:text-teal-300 border border-[#d1fae5] dark:border-teal-700">Completed</span>
                      </td>
                      <td className="py-4 px-6 text-gray-500 dark:text-gray-400">Oct 10, 2023</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px] font-bold">JS</div>
                          <span className="text-gray-900 dark:text-gray-200 font-medium">J. Smith</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F0F9FF] dark:hover:bg-blue-900/20 transition-colors">
                      <td className="py-4 px-6">
                        <p className="text-gray-900 dark:text-white font-medium">Employee tax docs</p>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400">Lohnsteuerabzugsmerkmale</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#fffbeb] dark:bg-orange-900/40 text-[#b45309] dark:text-orange-400 border border-[#fde68a] dark:border-orange-700/50">Action Needed</span>
                      </td>
                      <td className="py-4 px-6 text-red-600 dark:text-red-400 font-medium">Nov 15, 2023</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">AK</div>
                          <span className="text-gray-900 dark:text-gray-200 font-medium">A. Klein</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Section: LABOR REQUIREMENTS */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden transition-colors">
            <div 
              className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setLaborOpen(!laborOpen)}
            >
              <h3 className="text-[12px] font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">work</span>
                Labor Requirements
              </h3>
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 transition-transform duration-200" style={{ transform: laborOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
            </div>
            
            {laborOpen && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-white dark:bg-gray-900 text-[12px] font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                    <tr>
                      <th className="py-3 px-6 font-semibold">Requirement</th>
                      <th className="py-3 px-6 font-semibold">Status</th>
                      <th className="py-3 px-6 font-semibold">Deadline</th>
                      <th className="py-3 px-6 font-semibold">Assignee</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-[#F0F9FF] dark:hover:bg-blue-900/20 transition-colors">
                      <td className="py-4 px-6 w-1/3">
                        <p className="text-gray-900 dark:text-white font-medium">Employment contract</p>
                      </td>
                      <td className="py-4 px-6 w-1/6">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#ecfdf5] dark:bg-teal-900/40 text-[#065f46] dark:text-teal-300 border border-[#d1fae5] dark:border-teal-700">Compliant</span>
                      </td>
                      <td className="py-4 px-6 text-gray-500 dark:text-gray-400 w-1/4">Ongoing</td>
                      <td className="py-4 px-6 w-1/4">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">HR Dept</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F0F9FF] dark:hover:bg-blue-900/20 transition-colors">
                      <td className="py-4 px-6">
                        <p className="text-gray-900 dark:text-white font-medium">Working hours tracking</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#ecfdf5] dark:bg-teal-900/40 text-[#065f46] dark:text-teal-300 border border-[#d1fae5] dark:border-teal-700">Compliant</span>
                      </td>
                      <td className="py-4 px-6 text-gray-500 dark:text-gray-400">Monthly</td>
                      <td className="py-4 px-6">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Managers</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F0F9FF] dark:hover:bg-blue-900/20 transition-colors">
                      <td className="py-4 px-6">
                        <p className="text-gray-900 dark:text-white font-medium">Paid leave minimums</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#fef2f2] dark:bg-red-900/40 text-[#991b1b] dark:text-red-400 border border-[#fee2e2] dark:border-red-700/50">Review</span>
                      </td>
                      <td className="py-4 px-6 text-red-600 dark:text-red-400 font-medium">Dec 31, 2023</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[10px] font-bold">JS</div>
                          <span className="text-gray-900 dark:text-gray-200 font-medium">J. Smith</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section: SOCIAL BENEFITS */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col transition-colors">
              <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h3 className="text-[12px] font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">health_and_safety</span>
                  Social Benefits
                </h3>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-[#006398] dark:hover:border-[#38bdf8] transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[14px] font-bold text-gray-900 dark:text-white">Health insurance</p>
                    <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#ecfdf5] dark:bg-teal-900/40 text-[#065f46] dark:text-teal-300 border border-[#d1fae5] dark:border-teal-700">Active</span>
                  </div>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-4">Krankenversicherung enrollment</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">Due: Onboarding</p>
                    <p className="text-[12px] font-bold text-gray-900 dark:text-white">HR Dept</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-[#006398] dark:hover:border-[#38bdf8] transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[14px] font-bold text-gray-900 dark:text-white">Pension requirements</p>
                    <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#fffbeb] dark:bg-orange-900/40 text-[#b45309] dark:text-orange-400 border border-[#fde68a] dark:border-orange-700/50">Pending</span>
                  </div>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-4">Rentenversicherung matching</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-[12px] font-bold text-red-600 dark:text-red-400">Due: Nov 30, 2023</p>
                    <p className="text-[12px] font-bold text-gray-900 dark:text-white">Finance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: DOCUMENTATION */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col transition-colors">
              <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h3 className="text-[12px] font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">folder</span>
                  Documentation
                </h3>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      <span className="material-symbols-outlined">badge</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-gray-900 dark:text-white">Employee IDs</p>
                      <p className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">17/17 Uploaded</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#ecfdf5] dark:bg-teal-900/40 text-[#065f46] dark:text-teal-300 border border-[#d1fae5] dark:border-teal-700">Complete</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-gray-900 dark:text-white">Data Processing Agreements</p>
                      <p className="text-[12px] font-bold text-red-600 dark:text-red-400">15/17 Signed</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded text-[12px] font-semibold bg-[#fffbeb] dark:bg-orange-900/40 text-[#b45309] dark:text-orange-400 border border-[#fde68a] dark:border-orange-700/50">Action</span>
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <button className="w-full bg-[#0284C7] dark:bg-[#0ea5e9] text-white font-bold text-[14px] py-2.5 rounded-lg hover:bg-[#0369A1] dark:hover:bg-[#0284c7] transition-colors shadow-sm">
                  Request Missing Docs
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
