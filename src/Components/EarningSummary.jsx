import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import {  ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';






const EarningSummary = () => {
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
                                <div className="md:col-span-2 bg-[#FFFFFF] p-5 rounded-xl shadow-sm ">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-lg font-semibold text-gray-800">
                                                Earning Summary
                                            </h2>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm text-gray-400">
                                                    May 2022 - Oct 2022
                                                </p>
                                                <select className="text-sm text-gray-500 bg-transparent outline-none cursor-pointer">
                                                    <option></option>
                                                    <option></option>
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span className="w-2 h-2 rounded-full bg-teal-700"></span>
                                            Last 6 months
                                        </div>
                                    </div>
                                    {/* Chart */}
                                    <div className="w-full h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={data}>
                                                <defs>
                                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#0f766e" stopOpacity={0.3} />
                                                        <stop offset="100%" stopColor="#0f766e" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis
                                                    dataKey="month"
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                                                />
                                                <YAxis
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                                                    tickFormatter={(v) => `$${v / 1000}k`}
                                                />
                                                <Tooltip
                                                    formatter={(value) => `$${value.toLocaleString()}`}
                                                />

                                                <Area
                                                    type="monotone"
                                                    dataKey="value"
                                                    stroke="#0f766e"
                                                    strokeWidth={2}
                                                    fill="url(#colorValue)"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                                <div className="space-y-4  bg-[#FFFFFF] rounded-xl shadow-sm p-8">
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
                                                <p className="font-medium text-[#1F2937] mb-2  text-md">
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