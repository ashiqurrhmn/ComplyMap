"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function AddEmployee() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    country: 'de'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.fullName || !formData.email) {
      toast.error('Please fill out the required fields (Name and Email).');
      return;
    }

    // Get existing employees
    const existing = JSON.parse(localStorage.getItem('complymap_employees') || '[]');
    
    // Add new employee
    const newEmployee = {
      id: Date.now().toString(),
      name: formData.fullName,
      email: formData.email,
      jobTitle: formData.jobTitle,
      country: formData.country,
      type: 'Full-time', // Defaulting for now
      startDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      compliance: Math.floor(Math.random() * (100 - 60 + 1) + 60), // Random 60-100%
      status: 'Needs Attention', // Default status for new employees until reviewed
      avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(formData.fullName) + '&background=random'
    };

    localStorage.setItem('complymap_employees', JSON.stringify([...existing, newEmployee]));
    
    toast.success('Employee added successfully!');
    router.push('/employees');
  };

  return (
    <div className="flex-1 overflow-y-auto w-full pb-20">
      <div className="max-w-4xl md:py-8">
        {/* Page Header */}
        <div className="mb-10">
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-gray-900 dark:text-white">Add New Employee</h2>
          <p className="text-[16px] text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">Enter the employee's details to begin generating their country-specific compliance and onboarding profile.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-12 shadow-sm transition-colors">
          
          {/* Stepper Header (Visual Only) */}
          <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-8 py-6">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0 hidden sm:block"></div>
              <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-[#0284C7] dark:bg-[#38bdf8] -translate-y-1/2 z-0 hidden sm:block"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-2 bg-gray-50 dark:bg-gray-900 px-2 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#0284C7] dark:bg-[#38bdf8] text-white flex items-center justify-center text-[12px] font-bold shadow-sm ring-4 ring-gray-50 dark:ring-gray-900">
                  1
                </div>
                <span className="text-[12px] font-semibold text-gray-900 dark:text-white">Basic Info</span>
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-2 bg-gray-50 dark:bg-gray-900 px-2 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-500 flex items-center justify-center text-[12px] font-bold ring-4 ring-gray-50 dark:ring-gray-900">
                  2
                </div>
                <span className="text-[12px] font-semibold text-gray-500">Employment Info</span>
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-2 bg-gray-50 dark:bg-gray-900 px-2 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-500 flex items-center justify-center text-[12px] font-bold ring-4 ring-gray-50 dark:ring-gray-900">
                  3
                </div>
                <span className="text-[12px] font-semibold text-gray-500">Review</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-10">
            <div className="space-y-8 max-w-2xl">
              <div>
                <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider" htmlFor="fullName">Full Name</label>
                    <input 
                      className="w-full h-11 px-4 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] dark:focus:border-[#38bdf8] transition-all" 
                      id="fullName" name="fullName" placeholder="e.g. Jane Doe" type="text"
                      value={formData.fullName} onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider" htmlFor="email">Work Email</label>
                    <input 
                      className="w-full h-11 px-4 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] dark:focus:border-[#38bdf8] transition-all" 
                      id="email" name="email" placeholder="jane.doe@company.com" type="email"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider" htmlFor="jobTitle">Job Title</label>
                    <input 
                      className="w-full h-11 px-4 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] dark:focus:border-[#38bdf8] transition-all" 
                      id="jobTitle" name="jobTitle" placeholder="e.g. Senior Software Engineer" type="text"
                      value={formData.jobTitle} onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-8">
                <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white pb-2 mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-400">location_on</span>
                  Location Preview (Step 2 Demo)
                </h3>
                <div className="col-span-1 md:col-span-2 mb-6">
                  <label className="block text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider" htmlFor="country">Employment Country</label>
                  <div className="relative">
                    <select 
                      className="w-full h-11 pl-4 pr-10 appearance-none bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] dark:focus:border-[#38bdf8] transition-all cursor-pointer" 
                      id="country" name="country"
                      value={formData.country} onChange={handleChange}
                    >
                      <option disabled value="">Select a country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="de">Germany</option>
                      <option value="bd">Bangladesh</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                {formData.country === 'de' && (
                  <div className="bg-[#F0F9FF] dark:bg-blue-900/20 border border-[#BAE6FD] dark:border-blue-800 rounded-lg p-5 flex gap-4 items-start shadow-sm mt-4">
                    <span className="material-symbols-outlined text-[#0284C7] dark:text-[#38bdf8] mt-0.5">info</span>
                    <div>
                      <h4 className="text-[12px] font-bold text-[#0284C7] dark:text-[#38bdf8] mb-1">COMPLIANCE ENGINE ACTIVE</h4>
                      <p className="text-[14px] text-[#0369A1] dark:text-blue-300 leading-relaxed">
                        Based on <strong>Germany</strong>, ComplyMap will generate country-specific tax, labor, employment, and benefits compliance requirements in the next steps.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 px-8 py-5 flex items-center justify-between">
            <Link href="/employees">
              <button className="px-6 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[14px] font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200">
                Cancel
              </button>
            </Link>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[14px] font-semibold text-gray-900 dark:text-white opacity-50 cursor-not-allowed shadow-sm">
                Back
              </button>
              <button 
                onClick={handleSave}
                className="px-8 py-2.5 rounded-lg bg-[#0284C7] dark:bg-[#0ea5e9] text-[14px] font-semibold text-white hover:bg-[#0369A1] dark:hover:bg-[#0284c7] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 flex items-center gap-2"
              >
                Save Employee
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
