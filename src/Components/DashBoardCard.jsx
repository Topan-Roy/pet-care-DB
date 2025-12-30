import React from 'react';
import { RefreshCcw, } from 'lucide-react';
import { Users, CalendarCheck, UserCheck, TrendingUp, CalendarDays, } from 'lucide-react';
const DashBoardCard = () => {
    const [isSpinning, setIsSpinning] = React.useState(false);

    return (
        <div className='p-4'>
            <div className="flex items-center justify-between px-1 py-3  ">
                <div className="flex items-center gap-2 px-15 p-3 bg-[#FFFFFF]  text-gray-600 text-sm rounded-2xl">
                    <CalendarDays size={18} className="text-teal-600" />
                    <span className='text-[#333333]'>Aug 1, 2025 - Oct 31, 2025</span>
                </div>
                <button
                    onClick={() => {
                        setIsSpinning(true);         
                        setTimeout(() => window.location.reload(), 300); 
                    }}
                    className="flex items-center gap-1 ml-6 px-3 bg-[#FFFFFF] rounded-lg text-sm p-3 cursor-pointer"
                >
                    <RefreshCcw
                        size={20}
                        color="#333333"
                        className={isSpinning ? "animate-spin" : ""}
                    />
                    <span>Refresh</span>
                </button>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
                {/* Card 1 */}
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
                {/* Card 2 */}
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
                {/* Card 3 */}
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
                {/* Card 4 */}
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

            </div>
        </div>
    );
};

export default DashBoardCard;