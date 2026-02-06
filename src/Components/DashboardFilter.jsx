import React, { useEffect, useState } from "react";
import { RefreshCcw, CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LocationFilterModal from "./LocationFilterModal";


const DashboardFilter = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [location, setLocation] = useState("All Locations");
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [locationFilters, setLocationFilters] = useState({
        state: "Texas",
        city: "Austin",
        neighborhood: "Downtown"
    });
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

                    {/* Filter Button */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLocationModalOpen(true)}
                            className="flex items-center gap-2 p-3 shadow bg-white text-gray-600 text-sm rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer min-w-[100px]"
                        >
                            <span className="text-[#333333] font-medium grow text-center">
                                Filter
                            </span>
                        </button>

                        <LocationFilterModal
                            isOpen={isLocationModalOpen}
                            onClose={() => setIsLocationModalOpen(false)}
                            initialValues={locationFilters}
                            onApply={(filters) => {
                                setLocationFilters(filters);
                                // You can optionally update the location label or state here
                                console.log("Applied Filters:", filters);
                            }}
                        />
                    </div>


                    {/* Service Dropdown */}
                    <div className="flex items-center gap-2 p-3 shadow bg-white text-gray-600 text-sm rounded-2xl border border-gray-100">
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="outline-none focus:ring-0 bg-transparent cursor-pointer text-[#333333] font-medium min-w-[120px]"
                        >
                            <option value="All Services">Services</option>
                            <option value="Dog Walking">Dog Walking</option>
                            <option value="Doggy Day Care">Doggy Day Care</option>
                            <option value="Boarding">Boarding</option>

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
