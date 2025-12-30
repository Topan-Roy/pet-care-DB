import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CalendarDays, ShieldCheck, ChevronDown, AlertCircle } from "lucide-react";
import { Link } from "react-router";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const EarningSummary = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [startMonth, setStartMonth] = useState(0);
    const [startYear, setStartYear] = useState(currentYear);
    const [endMonth, setEndMonth] = useState(currentMonth);
    const [endYear, setEndYear] = useState(currentYear);
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const years = Array.from({ length: 10 }, (_, i) => 2020 + i);
    const formatDateRange = () => {
        return `${months[startMonth]} ${startYear} - ${months[endMonth]} ${endYear}`;
    };
    const handleApply = () => {
        setIsCalendarOpen(false);
    };
    const data = [
        { month: "May", value: 300000 },
        { month: "Jun", value: 140000 },
        { month: "Jul", value: 170000 },
        { month: "Aug", value: 220000 },
        { month: "Sep", value: 210000 },
        { month: "Oct", value: 240000 },
        { month: "Nov", value: 260000 },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            <div className="md:col-span-2 bg-[#FFFFFF] p-5 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">Earning Summary</h2>

                    <div className="relative">
                        <button
                            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <CalendarDays className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-medium text-gray-700">
                                {formatDateRange()}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isCalendarOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isCalendarOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setIsCalendarOpen(false)}
                                />
                                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Start Date
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                <select
                                                    value={startMonth}
                                                    onChange={(e) => setStartMonth(Number(e.target.value))}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                                                >
                                                    {months.map((month, idx) => (
                                                        <option key={idx} value={idx}>{month}</option>
                                                    ))}
                                                </select>
                                                <select
                                                    value={startYear}
                                                    onChange={(e) => setStartYear(Number(e.target.value))}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                                                >
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>{year}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                End Date
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                <select
                                                    value={endMonth}
                                                    onChange={(e) => setEndMonth(Number(e.target.value))}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                                                >
                                                    {months.map((month, idx) => (
                                                        <option key={idx} value={idx}>{month}</option>
                                                    ))}
                                                </select>
                                                <select
                                                    value={endYear}
                                                    onChange={(e) => setEndYear(Number(e.target.value))}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                                                >
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>{year}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <button
                                                onClick={() => setIsCalendarOpen(false)}
                                                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleApply}
                                                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#0f766e" stopOpacity={0.3} />
                                    <stop offset="100%" stopColor="#0f766e" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#9ca3af", fontSize: 12 }}
                                tickFormatter={(v) => `$${v / 1000}k`}
                            />
                            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                            <Area type="monotone" dataKey="value" stroke="#0f766e" strokeWidth={2} fill="url(#colorValue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Pending Actions */}
            <div className="space-y-4 bg-[#FFFFFF] rounded-xl shadow-sm p-8">
                <p className='font-semibold text-xl text-[#1F2937]'>Pending Actions</p>
                <div className="flex justify-between bg-[#1BB6DB42] p-8 rounded-xl">
                    <div className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                            <ShieldCheck size={18} className="text-teal-600" />
                        </div>
                        <div>
                            <p className="font-medium text-[#1F2937] mb-2 text-md">Verification</p>
                            <p className="text-sm text-gray-500">
                                12 Pet Sitter awaiting verification
                            </p>
                        </div>
                    </div>
                    <button className="mt-2 bg-[#035F75] text-white px-4 rounded-full text-nd cursor-pointer">
                        Review
                    </button>
                </div>
                <div className="flex justify-between bg-[#FCD9D9] p-8 rounded-xl">
                    <div className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                            <MdOutlineReportGmailerrorred size={24} className="text-red-500" />
                        </div>
                        <div>
                            <p className="font-medium text-[#1F2937] mb-2 text-md">
                                Reports
                            </p>
                            <p className="text-sm text-gray-500">
                                5 new report
                            </p>
                        </div>
                    </div>
                    <Link to="/dashboard/report">
                        <button className="mt-2 bg-[#F34F4F] text-white px-4 p-3 rounded-full text-md cursor-pointer">
                            Investigate
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};
export default EarningSummary;