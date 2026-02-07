import React from "react";
import { Users, CalendarCheck, UserCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const DashBoardCard = () => {
  return (
    <div className="px-5 py-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
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
                d="M6.29358 4.83499L4.16511 17.6712C3.98586 18.7522 3.89623 19.2927 4.19427 19.6464C4.49231 20 5.03749 20 6.12785 20H6.53027C7.35308 20 7.76448 20 8.04501 19.7555C8.32554 19.5109 8.38372 19.1016 8.50008 18.2828L8.96761 14.9934C9.00457 14.7333 9.02305 14.6033 9.05213 14.492C9.26041 13.6948 9.93391 13.1077 10.7485 13.0132C10.8622 13 10.9929 13 11.2543 13H12.4163C15.5113 13 18.1943 10.8473 18.8803 7.81384C19.5536 4.83576 17.3016 2 14.2631 2L9.62312 2C8.5093 2 7.95239 2 7.51383 2.2348C7.26304 2.36907 7.04377 2.55577 6.87077 2.78235C6.56824 3.17856 6.47669 3.7307 6.29358 4.83499Z"
                stroke="#333333"
                stroke-width="1.5"
              />
              <path
                d="M8.24315 19.5001L8.01451 20.8328C7.90978 21.4432 8.38532 22.0001 9.01128 22.0001H11.0018C11.4961 22.0001 11.9179 21.6467 11.9991 21.1645L12.7285 16.8357C12.8098 16.3535 13.2316 16.0001 13.7258 16.0001H15.5289C18.11 16.0001 20.3448 14.2269 20.9047 11.7348C21.2967 9.99028 20.4437 8.31017 19 7.50122"
                stroke="#333333"
                stroke-width="1.5"
              />
            </svg>

            <span className="text-[#333333] text-xl">Total Revenue</span>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#333333] text-xl">Active Users</span>
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
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8666 17.25H18.3568C19.5066 17.25 20.4212 16.7261 21.2424 15.9936C23.3285 14.1326 18.4246 12.25 16.7505 12.25M14.7505 2.31877C14.9776 2.27373 15.2134 2.25 15.4552 2.25C17.2752 2.25 18.7505 3.59315 18.7505 5.25C18.7505 6.90685 17.2752 8.25 15.4552 8.25C15.2134 8.25 14.9776 8.22627 14.7505 8.18123"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3.7318 13.3612C2.55282 13.993 -0.538374 15.2831 1.34437 16.8974C2.26408 17.686 3.2884 18.25 4.57621 18.25H11.9248C13.2126 18.25 14.2369 17.686 15.1566 16.8974C17.0394 15.2831 13.9482 13.993 12.7692 13.3612C10.0045 11.8796 6.49648 11.8796 3.7318 13.3612Z"
                stroke="#333333"
                stroke-width="1.5"
              />
              <path
                d="M12.2505 4.75C12.2505 6.95914 10.4596 8.75 8.25049 8.75C6.04135 8.75 4.25049 6.95914 4.25049 4.75C4.25049 2.54086 6.04135 0.75 8.25049 0.75C10.4596 0.75 12.2505 2.54086 12.2505 4.75Z"
                stroke="#333333"
                stroke-width="1.5"
              />
            </svg>

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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6161 20H19.1063C20.2561 20 21.1707 19.4761 21.9919 18.7436C24.078 16.8826 19.1741 15 17.5 15M15.5 5.06877C15.7271 5.02373 15.9629 5 16.2048 5C18.0247 5 19.5 6.34315 19.5 8C19.5 9.65685 18.0247 11 16.2048 11C15.9629 11 15.7271 10.9763 15.5 10.9312"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M4.48131 16.1112C3.30234 16.743 0.211137 18.0331 2.09388 19.6474C3.01359 20.436 4.03791 21 5.32572 21H12.6743C13.9621 21 14.9864 20.436 15.9061 19.6474C17.7889 18.0331 14.6977 16.743 13.5187 16.1112C10.754 14.6296 7.24599 14.6296 4.48131 16.1112Z"
                stroke="#333333"
                stroke-width="1.5"
              />
              <path
                d="M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z"
                stroke="#333333"
                stroke-width="1.5"
              />
            </svg>

            <span className="text-[#333333] text-xl">Active Sitters</span>
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
