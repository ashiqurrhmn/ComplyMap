"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const countryNames = {
  us: 'United States',
  uk: 'United Kingdom',
  de: 'Germany',
  bd: 'Bangladesh',
  fr: 'France'
};

export default function EmployeeProfile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('complymap_employees');
    if (stored) {
      const employees = JSON.parse(stored);
      const found = employees.find(e => e.id === id);
      setEmployee(found || null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="p-8 text-gray-500">Loading profile...</div>;
  }

  if (!employee) {
    return (
      <div className="p-8 text-gray-500">
        Employee not found. <Link href="/employees" className="text-[#006398] hover:underline">Go back</Link>
      </div>
    );
  }

  // Calculate generic dashboard breakdown based on overall compliance
  const baseScore = employee.compliance;
  const taxScore = Math.min(100, baseScore + 14);
  const laborScore = Math.max(0, baseScore - 6);
  const benefitsScore = Math.min(100, baseScore + 4);
  const docScore = Math.max(0, baseScore - 11);

  // Status colors logic
  const isCompliant = baseScore >= 90;
  const isAtRisk = baseScore < 80;

  return (
    <div className="flex-1 overflow-y-auto w-full pb-20">
      <div className="w-full">
        {/* Breadcrumb & Back */}
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-semibold text-[14px] mb-6">
          <Link href="/employees" className="hover:text-[#006398] dark:hover:text-[#38bdf8] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Employees
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-200">{employee.name}</span>
        </div>

        {/* Profile Header */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center shadow-sm transition-colors mb-6">
          <img alt={`${employee.name} Profile`} className="w-24 h-24 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm" src={employee.avatar} />
          
          <div className="flex-1 space-y-2">
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 dark:text-white">{employee.name}</h2>
            <div className="flex flex-wrap gap-4 items-center text-[14px] text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                {countryNames[employee.country] || employee.country}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">work</span>
                {employee.type}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">badge</span>
                {employee.jobTitle || 'Employee'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-semibold text-[14px] text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Edit Profile
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 rounded-lg font-semibold text-[14px] text-white bg-[#0284C7] dark:bg-[#0ea5e9] hover:bg-[#0369A1] dark:hover:bg-[#0284c7] transition-colors shadow-sm">
              Generate Report
            </button>
          </div>
        </section>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Overall Score Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 shadow-sm flex flex-col justify-center items-center text-center lg:col-span-1 transition-colors">
            <h3 className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Overall Compliance</h3>
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-200 dark:text-gray-700 stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                <path className={`${isCompliant ? 'text-teal-500' : isAtRisk ? 'text-red-500' : 'text-blue-500'} stroke-current`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray={`${baseScore}, 100`} strokeWidth="3"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[28px] font-bold text-gray-900 dark:text-white">{baseScore}%</span>
              </div>
            </div>
            
            {isCompliant ? (
              <span className="px-2 py-1 bg-[#ecfdf5] dark:bg-teal-900/40 text-[#065f46] dark:text-teal-300 font-semibold text-[12px] rounded inline-flex items-center gap-1 border border-[#d1fae5] dark:border-teal-700">
                <span className="material-symbols-outlined text-[14px]">check_circle</span> Compliant
              </span>
            ) : isAtRisk ? (
              <span className="px-2 py-1 bg-[#fef2f2] dark:bg-red-900/40 text-[#991b1b] dark:text-red-300 font-semibold text-[12px] rounded inline-flex items-center gap-1 border border-[#fee2e2] dark:border-red-700">
                <span className="material-symbols-outlined text-[14px]">warning</span> Requires Attention
              </span>
            ) : (
              <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-[12px] rounded inline-flex items-center gap-1 border border-blue-200 dark:border-blue-700">
                <span className="material-symbols-outlined text-[14px]">info</span> Needs Attention
              </span>
            )}
          </div>
          
          {/* Breakdown Bars */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 shadow-sm lg:col-span-2 flex flex-col transition-colors">
            <h3 className="text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">Category Breakdown</h3>
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              
              {/* Tax */}
              <div className="space-y-2">
                <div className="flex justify-between text-[14px] font-semibold">
                  <span className="text-gray-900 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-gray-500 dark:text-gray-400">account_balance</span> Tax
                  </span>
                  <span className={`${taxScore >= 90 ? 'text-teal-600 dark:text-teal-400' : taxScore < 80 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'} font-bold`}>{taxScore}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full ${taxScore >= 90 ? 'bg-teal-500' : taxScore < 80 ? 'bg-red-500' : 'bg-blue-500'} rounded-full`} style={{ width: `${taxScore}%` }}></div>
                </div>
              </div>
              
              {/* Labor */}
              <div className="space-y-2">
                <div className="flex justify-between text-[14px] font-semibold">
                  <span className="text-gray-900 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-gray-500 dark:text-gray-400">gavel</span> Labor
                  </span>
                  <span className={`${laborScore >= 90 ? 'text-teal-600 dark:text-teal-400' : laborScore < 80 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'} font-bold`}>{laborScore}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full ${laborScore >= 90 ? 'bg-teal-500' : laborScore < 80 ? 'bg-red-500' : 'bg-blue-500'} rounded-full`} style={{ width: `${laborScore}%` }}></div>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="space-y-2">
                <div className="flex justify-between text-[14px] font-semibold">
                  <span className="text-gray-900 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-gray-500 dark:text-gray-400">favorite</span> Benefits
                  </span>
                  <span className={`${benefitsScore >= 90 ? 'text-teal-600 dark:text-teal-400' : benefitsScore < 80 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'} font-bold`}>{benefitsScore}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full ${benefitsScore >= 90 ? 'bg-teal-500' : benefitsScore < 80 ? 'bg-red-500' : 'bg-blue-500'} rounded-full`} style={{ width: `${benefitsScore}%` }}></div>
                </div>
              </div>
              
              {/* Documentation */}
              <div className="space-y-2">
                <div className="flex justify-between text-[14px] font-semibold">
                  <span className="text-gray-900 dark:text-gray-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-gray-500 dark:text-gray-400">description</span> Documentation
                  </span>
                  <span className={`${docScore >= 90 ? 'text-teal-600 dark:text-teal-400' : docScore < 80 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'} font-bold`}>{docScore}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full ${docScore >= 90 ? 'bg-teal-500' : docScore < 80 ? 'bg-red-500' : 'bg-blue-500'} rounded-full`} style={{ width: `${docScore}%` }}></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Compliance Checklist */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden transition-colors">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
            <h3 className="text-[18px] font-bold text-gray-900 dark:text-white">Compliance Checklist</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full font-bold text-[11px] border border-gray-200 dark:border-gray-700">5 Items</span>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* Item 1: Verified */}
            <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-start gap-4 cursor-pointer group">
              <div className="mt-0.5">
                <span className="material-symbols-outlined text-teal-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[16px] text-gray-900 dark:text-white font-medium group-hover:text-[#006398] dark:group-hover:text-[#38bdf8] transition-colors">Employment contract verified</h4>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">Uploaded and validated by HR on Oct 12, 2023.</p>
              </div>
              <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded font-semibold text-[12px] text-gray-500 dark:text-gray-400 hover:border-[#006398] hover:text-[#006398] dark:hover:border-[#38bdf8] dark:hover:text-[#38bdf8] md:opacity-0 md:group-hover:opacity-100 transition-all">
                View
              </button>
            </div>
            
            {/* Item 2: Verified */}
            <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-start gap-4 cursor-pointer group">
              <div className="mt-0.5">
                <span className="material-symbols-outlined text-teal-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[16px] text-gray-900 dark:text-white font-medium group-hover:text-[#006398] dark:group-hover:text-[#38bdf8] transition-colors">Tax registration completed</h4>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">National tax ID on file.</p>
              </div>
              <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded font-semibold text-[12px] text-gray-500 dark:text-gray-400 hover:border-[#006398] hover:text-[#006398] dark:hover:border-[#38bdf8] dark:hover:text-[#38bdf8] md:opacity-0 md:group-hover:opacity-100 transition-all">
                View
              </button>
            </div>
            
            {/* Item 3: Missing (Warning) */}
            <div className="p-4 hover:bg-red-50/80 dark:hover:bg-red-900/20 transition-colors flex items-start gap-4 cursor-pointer group bg-red-50/50 dark:bg-red-900/10 border-l-4 border-red-500">
              <div className="mt-0.5">
                <span className="material-symbols-outlined text-red-500" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[16px] text-red-600 dark:text-red-400 font-bold">Health insurance documentation missing</h4>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">Proof of statutory or private health insurance required for payroll.</p>
              </div>
              <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all">
                <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded font-semibold text-[12px] text-gray-500 dark:text-gray-400 hover:border-gray-900 hover:text-gray-900 dark:hover:text-white dark:hover:border-gray-500 bg-white dark:bg-gray-800">
                  Upload
                </button>
                <button className="px-3 py-1.5 rounded font-semibold text-[12px] text-white bg-[#006398] hover:bg-[#00507a] dark:bg-[#0ea5e9] dark:hover:bg-[#0284c7] shadow-sm">
                  Notify Employee
                </button>
              </div>
            </div>
            
            {/* Item 4: Warning */}
            <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-start gap-4 cursor-pointer group border-l-4 border-transparent hover:border-[#006398] dark:hover:border-[#38bdf8]">
              <div className="mt-0.5">
                <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[16px] text-gray-900 dark:text-white font-medium group-hover:text-[#006398] dark:group-hover:text-[#38bdf8] transition-colors">Pension information needs review</h4>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">Social security number provided, awaiting validation against federal database.</p>
              </div>
              <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded font-semibold text-[12px] text-gray-500 dark:text-gray-400 hover:border-[#006398] hover:text-[#006398] dark:hover:border-[#38bdf8] dark:hover:text-[#38bdf8] md:opacity-0 md:group-hover:opacity-100 transition-all">
                Review
              </button>
            </div>
            
            {/* Item 5: Pending */}
            <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-start gap-4 cursor-pointer group border-l-4 border-transparent">
              <div className="mt-0.5">
                <span className="material-symbols-outlined text-gray-400">radio_button_unchecked</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[16px] text-gray-900 dark:text-white font-medium group-hover:text-[#006398] dark:group-hover:text-[#38bdf8] transition-colors">Annual compliance review pending</h4>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">Scheduled for end of Q4.</p>
              </div>
              <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded font-semibold text-[12px] text-gray-500 dark:text-gray-400 hover:border-[#006398] hover:text-[#006398] dark:hover:border-[#38bdf8] dark:hover:text-[#38bdf8] md:opacity-0 md:group-hover:opacity-100 transition-all">
                Start Review
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
