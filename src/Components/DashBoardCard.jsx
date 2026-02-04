import React from "react";
import {
  Users,
  CalendarCheck,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";

const DashBoardCard = () => {
  return (
    <div className="px-5 py-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm">
            <Users size={20} />
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
            <CalendarCheck size={20} />
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
            <UserCheck size={20} />
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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#333333] text-xl">Support</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-lg text-[#333333]">8 New Tickets</h3>
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
