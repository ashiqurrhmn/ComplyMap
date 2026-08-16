export default function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-gray-900 dark:text-white">Global Compliance Overview</h2>
        <p className="text-[16px] text-gray-500 dark:text-gray-400 mt-2">Real-time status of your international workforce compliance.</p>
      </div>

      {/* Summary Cards (Bento-style Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Employees */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col justify-between shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Total Employees</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-[18px]">group</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-bold text-gray-900 dark:text-white">128</span>
            <span className="text-[11px] font-medium text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/40 rounded px-1.5 py-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">arrow_upward</span> 4%
            </span>
          </div>
        </div>

        {/* Countries */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col justify-between shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Countries</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-bold text-gray-900 dark:text-white">12</span>
          </div>
        </div>

        {/* Compliance Rate */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden transition-colors">
          <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Compliance Rate</span>
          </div>
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[36px] font-bold text-gray-900 dark:text-white">87%</span>
            {/* Progress Ring SVG */}
            <div className="relative w-16 h-16">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-200 dark:text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                <path className="text-[#0d9488] dark:text-[#2dd4bf]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="87, 100" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col justify-between shadow-sm transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Pending Tasks</span>
            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined text-[18px]">assignment_late</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-bold text-red-600 dark:text-red-400">14</span>
            <span className="text-[14px] text-gray-500 dark:text-gray-400">Requires attention</span>
          </div>
        </div>
      </div>

      {/* Main Data Section (Asymmetric Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Table & Chart (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Compliance Trend Chart */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white">Compliance Trend (6 Months)</h3>
              <button className="text-[#006398] dark:text-[#38bdf8] text-[12px] font-semibold flex items-center gap-1 hover:underline">
                View Full Report <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            
            {/* Simple SVG Chart Placeholder */}
            <div className="w-full h-64 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 200">
                <line className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="1" strokeDasharray="4" x1="0" x2="500" y1="160" y2="160"></line>
                <line className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="1" strokeDasharray="4" x1="0" x2="500" y1="120" y2="120"></line>
                <line className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="1" strokeDasharray="4" x1="0" x2="500" y1="80" y2="80"></line>
                <line className="stroke-gray-200 dark:stroke-gray-700" strokeWidth="1" strokeDasharray="4" x1="0" x2="500" y1="40" y2="40"></line>
                <path className="stroke-[#006398] dark:stroke-[#38bdf8] fill-none" strokeWidth="3" d="M 10,140 L 100,120 L 200,130 L 300,90 L 400,60 L 490,40"></path>
                <circle className="fill-white dark:fill-gray-900 stroke-[#006398] dark:stroke-[#38bdf8]" strokeWidth="2" cx="10" cy="140" r="4"></circle>
                <circle className="fill-white dark:fill-gray-900 stroke-[#006398] dark:stroke-[#38bdf8]" strokeWidth="2" cx="100" cy="120" r="4"></circle>
                <circle className="fill-white dark:fill-gray-900 stroke-[#006398] dark:stroke-[#38bdf8]" strokeWidth="2" cx="200" cy="130" r="4"></circle>
                <circle className="fill-white dark:fill-gray-900 stroke-[#006398] dark:stroke-[#38bdf8]" strokeWidth="2" cx="300" cy="90" r="4"></circle>
                <circle className="fill-white dark:fill-gray-900 stroke-[#006398] dark:stroke-[#38bdf8]" strokeWidth="2" cx="400" cy="60" r="4"></circle>
                <circle className="fill-white dark:fill-gray-900 stroke-[#006398] dark:stroke-[#38bdf8]" strokeWidth="2" cx="490" cy="40" r="4"></circle>
              </svg>
              <div className="absolute bottom-0 w-full flex justify-between px-2 text-gray-500 dark:text-gray-400 text-[11px] font-medium transform translate-y-6">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </div>

          {/* Compliance by Country Table */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50">
              <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white">Compliance by Country</h3>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 text-[18px]">filter_list</span>
                <select className="pl-9 pr-4 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] text-gray-900 dark:text-white focus:ring-[#006398] focus:border-[#006398] appearance-none cursor-pointer">
                  <option>All Statuses</option>
                  <option>Needs Attention</option>
                  <option>At Risk</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white dark:bg-gray-900 text-[12px] font-semibold tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                    <th className="p-4">Country</th>
                    <th className="p-4 text-right">Employees</th>
                    <th className="p-4 text-right">Compliance %</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] text-gray-900 dark:text-gray-100">
                  {/* Row 1 */}
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-6 h-4 bg-teal-100 dark:bg-teal-900/40 rounded flex items-center justify-center text-[10px] font-bold text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700">BD</div>
                      <span className="font-medium">Bangladesh</span>
                    </td>
                    <td className="p-4 text-right">24</td>
                    <td className="p-4 text-right font-medium">94%</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-[11px] font-medium border border-teal-200 dark:border-teal-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></span> Compliant
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-[#006398] dark:text-[#38bdf8] hover:text-[#00476e] dark:hover:text-[#7dd3fc] transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                      </button>
                    </td>
                  </tr>
                  
                  {/* Row 2 */}
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-blue-50/50 dark:bg-blue-900/10">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-6 h-4 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">US</div>
                      <span className="font-medium">United States</span>
                    </td>
                    <td className="p-4 text-right">38</td>
                    <td className="p-4 text-right font-medium">82%</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-[11px] font-medium border border-blue-200 dark:border-blue-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006398] dark:bg-[#38bdf8]"></span> Needs Attention
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-[#006398] dark:text-[#38bdf8] hover:text-[#00476e] dark:hover:text-[#7dd3fc] transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-red-50/50 dark:bg-red-900/10">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-6 h-4 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">DE</div>
                      <span className="font-medium">Germany</span>
                    </td>
                    <td className="p-4 text-right">17</td>
                    <td className="p-4 text-right font-medium text-red-600 dark:text-red-400">76%</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 text-[11px] font-medium border border-red-200 dark:border-red-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400"></span> At Risk
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-[#006398] dark:text-[#38bdf8] hover:text-[#00476e] dark:hover:text-[#7dd3fc] transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Action Required Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm h-full transition-colors">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-red-600 dark:text-red-400">warning</span>
                Action Required
              </h3>
              <span className="bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 text-[11px] font-medium px-2 py-0.5 rounded-full">6</span>
            </div>

            <div className="space-y-4">
              {/* Alert 1 */}
              <div className="p-4 rounded-lg border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/10 flex items-start gap-3">
                <div className="mt-0.5 w-6 h-4 bg-gray-100 dark:bg-gray-800 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">DE</div>
                <div>
                  <h4 className="text-[12px] font-semibold text-gray-900 dark:text-white mb-1">Germany</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-400">3 employment documents are missing.</p>
                  <button className="mt-2 text-[#006398] dark:text-[#38bdf8] text-[12px] font-semibold hover:underline">Resolve Now</button>
                </div>
              </div>

              {/* Alert 2 */}
              <div className="p-4 rounded-lg border border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/10 flex items-start gap-3">
                <div className="mt-0.5 w-6 h-4 bg-gray-100 dark:bg-gray-800 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">US</div>
                <div>
                  <h4 className="text-[12px] font-semibold text-gray-900 dark:text-white mb-1">United States</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-400">2 tax requirements need review.</p>
                  <button className="mt-2 text-[#006398] dark:text-[#38bdf8] text-[12px] font-semibold hover:underline">Review Taxes</button>
                </div>
              </div>

              {/* Alert 3 */}
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 flex items-start gap-3">
                <div className="mt-0.5 w-6 h-4 bg-gray-100 dark:bg-gray-800 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">BD</div>
                <div>
                  <h4 className="text-[12px] font-semibold text-gray-900 dark:text-white mb-1">Bangladesh</h4>
                  <p className="text-[14px] text-gray-600 dark:text-gray-400">1 compliance deadline is approaching.</p>
                  <button className="mt-2 text-[#006398] dark:text-[#38bdf8] text-[12px] font-semibold hover:underline">View Deadline</button>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-[12px] font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              View All Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
