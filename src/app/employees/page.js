"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DEFAULT_EMPLOYEES = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 's.johnson@example.com',
    country: 'us',
    countryName: 'United States',
    type: 'Full-time',
    startDate: 'Oct 12, 2021',
    compliance: 94,
    status: 'Compliant',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUMqPHT141h9OFUMccAUBeUqnQR757vLONF45TiXf0n5UdLKvWT6wRLOw-rtj_lyo4hZiwp_7GY7N2E3-HfCm9wgj4MKbzKzb7-jx86qqJcw2fgLeD6-3XLZCeQ0q2BgJ-CE6yo2pDadfMbggmifKJEhzMgBUPy2eHFXbGy0iy_GMvhBiLTtLraHoFIaUTbhN8HmGQ6KhqEmzzaVaZhTNjGmeqnuicaJIGL1crOm9PblOPW9Ogl_4Iyw'
  },
  {
    id: '2',
    name: 'Daniel Smith',
    email: 'd.smith@example.de',
    country: 'de',
    countryName: 'Germany',
    type: 'Full-time',
    startDate: 'Mar 05, 2023',
    compliance: 76,
    status: 'At Risk',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1AA7gRdMLbE4K52DHW879SKw6_PVHUyVw0IvFq8PPDvkDvQu2T2TqjN7JHo3fJUHF_IPO45wjmfvIqJo4iRcq9xlKmrM6p85C1hHBV66V6vyUrz1DCxUapXkLbu_Lyo2qnNs-HEKZiJyvWXk80fBWUj1tZUAFS802NB6sThd1zupsogITZ3bLRNWVxCRzvHEkpBb4uG5kBdi0Zf9H_QPoeQIu9GGdsrAEmq_S6zMEIfafBT4-uWHt3Q'
  },
  {
    id: '3',
    name: 'Aisha Rahman',
    email: 'a.rahman@example.bd',
    country: 'bd',
    countryName: 'Bangladesh',
    type: 'Contractor',
    startDate: 'Jan 10, 2024',
    compliance: 85,
    status: 'Needs Attention',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6XOs-QZws0WpWhaCeptv19yXqTL9YGgdYA5MzhzhLiOBfjq78XGqQnY9GsJMaYvpwbB39rpq6a_PWOGlFEMX1lkuVeciiW8rw8_u_xR7ZbmvX_pprNQ-zZgCSsogDOuZcfNeNjtJCfqXGa8Lq7sDHL6uWBXqcMUCk-96ojODhFn15NrCMoV7oir7xwpDGq2FFoaBsP9s1i6bvG77VaxSMbCHwRASnak7TmCq23dVYrX-2wPQDRsxdOg'
  }
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'Compliant':
      return {
        bg: 'bg-[#ecfdf5] dark:bg-teal-900/40',
        text: 'text-[#065f46] dark:text-teal-300',
        border: 'border-[#d1fae5] dark:border-teal-700',
        icon: 'check_circle'
      };
    case 'At Risk':
      return {
        bg: 'bg-[#fef2f2] dark:bg-red-900/40',
        text: 'text-[#991b1b] dark:text-red-300',
        border: 'border-[#fee2e2] dark:border-red-700',
        icon: 'error'
      };
    case 'Needs Attention':
    default:
      return {
        bg: 'bg-blue-50 dark:bg-blue-900/40',
        text: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-700',
        icon: 'info'
      };
  }
};

const getProgressBarColor = (status) => {
  if (status === 'Compliant') return 'bg-teal-600 dark:bg-teal-400';
  if (status === 'At Risk') return 'bg-red-600 dark:bg-red-500';
  return 'bg-blue-600 dark:bg-blue-400';
};

const countryNames = {
  us: 'United States',
  uk: 'United Kingdom',
  de: 'Germany',
  bd: 'Bangladesh',
  fr: 'France'
};

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from local storage on mount
    const stored = localStorage.getItem('complymap_employees');
    if (stored) {
      setEmployees(JSON.parse(stored));
    } else {
      // Seed with default data if empty
      localStorage.setItem('complymap_employees', JSON.stringify(DEFAULT_EMPLOYEES));
      setEmployees(DEFAULT_EMPLOYEES);
    }
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-gray-900 dark:text-white">Employees</h2>
          <p className="text-[16px] text-gray-500 dark:text-gray-400 mt-2">Manage your global workforce compliance</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/employees/new">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-[14px] px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Employee
            </button>
          </Link>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center transition-colors">
        <div className="relative w-full sm:w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-sm">search</span>
          <input className="w-full pl-9 pr-3 py-2 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-[14px] text-gray-900 dark:text-white focus:border-[#006398] dark:focus:border-[#38bdf8] focus:ring-1 focus:ring-[#006398]/30 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400" placeholder="Search by name or email..." type="text" />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <select className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 font-medium text-[14px] focus:border-[#006398] dark:focus:border-[#38bdf8] focus:ring-1 focus:ring-[#006398]/30 flex-1 sm:flex-none cursor-pointer text-gray-900 dark:text-white">
            <option value="">All Countries</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="de">Germany</option>
            <option value="bd">Bangladesh</option>
          </select>
          <select className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 font-medium text-[14px] focus:border-[#006398] dark:focus:border-[#38bdf8] focus:ring-1 focus:ring-[#006398]/30 flex-1 sm:flex-none cursor-pointer text-gray-900 dark:text-white">
            <option value="">Employment Type</option>
            <option value="ft">Full-time</option>
            <option value="pt">Part-time</option>
            <option value="ct">Contractor</option>
          </select>
        </div>
        <button className="text-gray-500 dark:text-gray-400 hover:text-[#006398] dark:hover:text-[#38bdf8] text-[14px] font-semibold ml-auto flex items-center gap-1 transition-colors">
          <span className="material-symbols-outlined text-[16px]">filter_list</span>
          More Filters
        </button>
      </div>

      {/* Employees Table Card */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <th className="py-3 px-6 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Employee</th>
                <th className="py-3 px-6 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Country</th>
                <th className="py-3 px-6 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th className="py-3 px-6 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Start Date</th>
                <th className="py-3 px-6 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Compliance</th>
                <th className="py-3 px-6 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-[14px] text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900">
              {isLoaded ? employees.map((employee) => {
                const styles = getStatusStyles(employee.status);
                const progressColor = getProgressBarColor(employee.status);
                
                return (
                  <tr key={employee.id} className="hover:bg-[#F0F9FF] dark:hover:bg-blue-900/20 transition-colors group h-16">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700 flex-shrink-0">
                          <img alt={employee.name} className="w-full h-full object-cover" src={employee.avatar} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{employee.name}</div>
                          <div className="text-gray-500 dark:text-gray-400 text-[12px]">{employee.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined text-[16px]">public</span> {countryNames[employee.country] || employee.countryName || employee.country}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-gray-600 dark:text-gray-300">{employee.type}</td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{employee.startDate}</td>
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{employee.compliance}%</span>
                        <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className={`h-full ${progressColor}`} style={{ width: `${employee.compliance}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[12px] font-medium border ${styles.bg} ${styles.text} ${styles.border}`}>
                        <span className="material-symbols-outlined text-[14px]">{styles.icon}</span> {employee.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 transition-opacity">
                        <Link href={`/employees/${employee.id}`}>
                          <button className="text-[#006398] dark:text-[#38bdf8] hover:underline font-semibold text-[12px] px-2 py-1">View Profile</button>
                        </Link>
                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              }) : (
                <tr className="h-16">
                  <td colSpan="7" className="text-center text-gray-500">Loading employees...</td>
                </tr>
              )}
            </tbody>
          </table>
          
          {isLoaded && employees.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No employees found. Add one to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
