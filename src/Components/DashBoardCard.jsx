import React, { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";
import {
  Users,
  CalendarCheck,
  UserCheck,
  TrendingUp,
  MapPin,
  LayoutGrid,
} from "lucide-react";
import { Link } from "react-router";
const DashBoardCard = () => {
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  useEffect(() => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    setDateRange([firstDay, lastDay]);
  }, []);
  const [location, setLocation] = useState("All Locations");
  const [service, setService] = useState("All Services");

  return (
    <div className="p-4">
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
            {/* <MapPin size={18} className="text-blue-500" /> */}
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
            {/* <LayoutGrid size={18} className="text-indigo-500" /> */}
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm">
            <Users size={20} className=" " />
            <span className="text-[#333333] text-xl">Pet Owners</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-bold text-[#333333]">12,54,286</h3>
            <div className="flex items-center gap-1 text-green-500 text-sm -mb-10">
              <TrendingUp size={20} />
              <span>+11.01%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm">
            <CalendarCheck size={20} className="" />
            <span className="text-[#333333] text-xl">Total Bookings</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-bold text-[#333333]">1526</h3>
            <div className="flex items-center gap-1 text-green-500 text-sm -mb-10">
              <TrendingUp size={20} />
              <span>+11.01%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm">
            <UserCheck size={20} className="" />
            <span className="text-[#333333] text-xl">Active Sitters</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-bold text-[#333333]">1526</h3>
            <div className="flex items-center gap-1 text-green-500 text-sm -mb-10">
              <TrendingUp size={20} />
              <span>+11.01%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm">
            <svg
              width="25"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17.5c.5 0 1 0 1.5-.5.5-.5.5-1.5.5-2.5V4c0-1.1.9-2 2-2h4a5 5 0 0 1 0 10h-4" />
              <path d="M10 21c.5 0 1 0 1.5-.5.5-.5.5-1.5.5-2.5V10c0-1.1.9-2 2-2h4a5 5 0 0 1 0 10h-4" />
            </svg>
            <span className="text-[#333333] text-xl">Total Revenue</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-bold text-[#333333]">$12,526</h3>
            <div className="flex items-center gap-1 text-green-500 text-sm -mb-10">
              <TrendingUp size={20} />
              <span>+11.01%</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8333 8.66667H7.83333M16.1667 12H7.83333M19.5 14.5C19.5 14.942 19.3244 15.366 19.0118 15.6785C18.6993 15.9911 18.2754 16.1667 17.8333 16.1667H7.83333L4.5 19.5V6.16667C4.5 5.72464 4.67559 5.30072 4.98816 4.98816C5.30072 4.67559 5.72464 4.5 6.16667 4.5H17.8333C18.2754 4.5 18.6993 4.67559 19.0118 4.98816C19.3244 5.30072 19.5 5.72464 19.5 6.16667V14.5Z"
                stroke="#F3934F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#333333] text-xl">Support</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-lg  text-[#333333]">8 New Chat</h3>
            <Link to="/dashboard/report">
              <button className="bg-[#f0934e] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#e0833d] transition-all hover:shadow-lg hover:shadow-orange-200/50">
                Respond
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
