import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Link, } from 'react-router';
const DashBoardTopBar = () => {
    return (
        <div className="flex justify-between items-center border-b border-[#E3E6F0]  p-5 bg-[#FFFFFF]">
            <h2 className="text-xl text-[#333333] font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
                <div className="flex items-center bg-[#FC94400D] px-10 py-2 rounded-full shadow-sm">
                    <Search size={20} className="text-gray-400" />
                    <input
                        placeholder="Search"
                        className="ml-2 outline-none text-sm" />
                </div>
                <Link to="/dashboard/notificationpage">
                    <Bell size={20} />
                </Link>
                <div className="flex items-center gap-2">
                    <Link to="/dashboard/personalinformation">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://i.pravatar.cc/40"
                            alt=""
                        />
                    </Link>

                    <div className="text-sm">
                        <p className="font-medium text-[#333333]">Jane Cooper</p>
                        <p className="text-gray-400">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardTopBar;