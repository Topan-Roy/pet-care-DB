import React, { useEffect, useState } from "react";
import { RefreshCcw, CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DashboardFilter = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [location, setLocation] = useState("All Locations");
    const [service, setService] = useState("All Services");

    useEffect(() => {
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        setDateRange([firstDay, lastDay]);
    }, []);

    return (
        <div className="px-5">
            <div className="flex flex-wrap items-center gap-4 py-3">
                <div className="flex items-center gap-6">
                    {/* Date Picker */}
                    <div className="flex items-center gap-2 p-3 shadow bg-white text-gray-600 text-sm rounded-2xl border border-gray-50">
                        <CalendarDays size={18} className="text-teal-600 cursor-pointer" />
                        <DatePicker
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => setDateRange(update)}
                            placeholderText="Select date"
                            className="outline-none text-[#333333] bg-transparent cursor-pointer w-[180px]"
                        />
                    </div>

                    {/* Location Dropdown */}
                    <div className="flex items-center gap-2 p-3 shadow bg-white text-gray-600 text-sm rounded-2xl border border-gray-100">
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="outline-none focus:ring-0 bg-transparent cursor-pointer text-[#333333] font-medium min-w-[120px]"
                        >
                            <option value="All Locations">Locations</option>
                            <option value="California">California</option>
                            <option value="Texas">Texas</option>
                            <option value="New York">New York</option>
                            <option value="Florida">Florida</option>
                        </select>
                    </div>

                    {/* Service Dropdown */}
                    <div className="flex items-center gap-2 p-3 shadow bg-white text-gray-600 text-sm rounded-2xl border border-gray-100">
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="outline-none focus:ring-0 bg-transparent cursor-pointer text-[#333333] font-medium min-w-[120px]"
                        >
                            <option value="All Services">Services</option>
                            <option value="Pet Sitting">Pet Sitting</option>
                            <option value="Dog Walking">Dog Walking</option>
                            <option value="Grooming">Grooming</option>
                            <option value="Training">Training</option>
                        </select>
                    </div>
                </div>

                <button
                    onClick={() => {
                        setIsSpinning(true);
                        setTimeout(() => window.location.reload(), 300);
                    }}
                    className="flex items-center gap-1 ml-auto px-6 bg-[#FFFFFF] rounded-2xl text-sm p-3 cursor-pointer shadow border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                    <RefreshCcw
                        size={20}
                        color="#333333"
                        className={isSpinning ? "animate-spin" : ""}
                    />
                    <span className="font-semibold text-gray-700">Refresh</span>
                </button>
            </div>
        </div>
    );
};

export default DashboardFilter;
