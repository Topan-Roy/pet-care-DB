import React, { useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { ChevronDown, MessageSquareMore, AlertCircle, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const data = [
    { name: 'May', value: 260 },
    { name: '', value: 130 },
    { name: '', value: 255 },
    { name: 'Jun', value: 140 },
    { name: '', value: 175 },
    { name: '', value: 130 },
    { name: 'Jul', value: 130 },
    { name: '', value: 235 },
    { name: '', value: 210 },
    { name: 'Aug', value: 245 },
    { name: '', value: 195 },
    { name: 'Sep', value: 240 },
    { name: '', value: 215 },
    { name: 'Oct', value: 235 },
];

const Earningnew = () => {
    const [startDate, setStartDate] = useState(new Date(2022, 2, 1)); // Mar 2022
    const [endDate, setEndDate] = useState(new Date(2022, 9, 31)); // Oct 2022

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const DateRangeInput = React.forwardRef(({ value, onClick }, ref) => (
        <div
            className="flex items-center gap-2 cursor-pointer group select-none"
            onClick={onClick}
            ref={ref}
        >
            <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors font-medium">
                {startDate ? format(startDate, 'MMM yyyy') : 'Start Date'} - {endDate ? format(endDate, 'MMM yyyy') : 'End Date'}
            </span>
            <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
    ));

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6">
            {/* Earning Summary Section */}
            <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-6">
                        <h2 className="text-xl font-bold text-gray-800">Earning Summary</h2>
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            customInput={<DateRangeInput />}
                            dateFormat="MMM yyyy"
                            showMonthYearPicker
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0a6e7c]"></div>
                        <span className="text-sm text-gray-400 font-medium whitespace-nowrap">Last 6 months</span>
                    </div>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                        >
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0a6e7c" stopOpacity={0.12} />
                                    <stop offset="95%" stopColor="#0a6e7c" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={true} horizontal={false} strokeDasharray="0" stroke="#f3f4f6" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                                dy={15}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                                tickFormatter={(value) => value === 0 ? '$0.00' : `$${value}k`}
                                ticks={[0, 100, 200, 300]}
                            />
                            <Tooltip
                                cursor={{ stroke: '#0a6e7c', strokeWidth: 1, strokeDasharray: '4 4' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                formatter={(value) => [`$${value}k`, 'Earnings']}
                            />
                            <Area
                                type="natural"
                                dataKey="value"
                                stroke="#0a6e7c"
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                                dot={false}
                                activeDot={{ r: 6, strokeWidth: 0, fill: '#0a6e7c' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

           
        </div>
    );
};

export default Earningnew;