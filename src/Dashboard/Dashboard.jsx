import { Bell, Search, RefreshCcw, ShieldCheck } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import logo from '../assets/Logo.png'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts";
import { LayoutDashboard, CreditCard, User, Users, Tag, Grid3X3, FileText, Settings, LogOut, CalendarCheck, UserCheck, TrendingUp, CalendarDays, } from 'lucide-react';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { useState } from 'react';
const data = [
    { month: "May", value: 300000 },
    { month: "Jun", value: 140000 },
    { month: "Jul", value: 170000 },
    { month: "Aug", value: 220000 },
    { month: "Sep", value: 210000 },
    { month: "Oct", value: 240000 },
    { month: "Nov", value: 260000 },
];
export default function Dashboard() {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    const { pathname } = useLocation();
    const isDashboardHome = pathname === "/dashoard";
    const NO_SUMMARY_PAGES = [
        "/dashoard/notificationpage",
        "/dashoard/petowner",
        "/dashoard/petownerdelails",
        "/dashoard/petsitter",
        "/dashoard/petsitterdeleils",
        "/dashoard/promocode",
        "/dashoard/basicsettings",
        "/dashoard/audiencetargeting",
        "/dashoard/reviewdeploy",
        "/dashoard/categories",
        "/dashoard/report",
        "/dashoard/settingsmenu",
        "/dashoard/personalinformation",
        "/dashoard/personalinfon",
        "/dashoard/termscondition",
        "/dashoard/editTermsandconditions",
    ];
    const showSummary = !NO_SUMMARY_PAGES.includes(pathname);
    const menus = [
        {
            name: 'Dashboard',
            path: '/dashoard',
            icon: LayoutDashboard,
        },
        {
            name: 'Payment',
            path: '/dashoard/payment',
            icon: CreditCard,
        },
        {
            name: 'Pet Owner',
            path: '/dashoard/petowner',
            icon: User,
        },
        {
            name: 'Pet Sitter',
            path: '/dashoard/petsitter',
            icon: Users,
        },
        {
            name: 'Promo Code',
            path: '/dashoard/promocode',
            icon: Tag,
        },
        {
            name: 'Categories',
            path: '/dashoard/categories',
            icon: Grid3X3,
        },
    ];
    const paymentHistory = [
        {
            id: 1,
            date: "21/03/2025",
            transactionId: "93451",
            petOwner: "Guy Hawkins",
            petSitter: "Kristin Watson",
            amount: "$900",
            received: "$855",
        },
        {
            id: 2,
            date: "20/03/2025",
            transactionId: "93452",
            petOwner: "Savannah Nguyen",
            petSitter: "Cody Fisher",
            amount: "$700",
            received: "$665",
        },
        {
            id: 3,
            date: "19/03/2025",
            transactionId: "93453",
            petOwner: "Eleanor Pena",
            petSitter: "Jane Cooper",
            amount: "$500",
            received: "$475",
        },
        {
            id: 4,
            date: "18/03/2025",
            transactionId: "93454",
            petOwner: "Robert Fox",
            petSitter: "Wade Warren",
            amount: "$1200",
            received: "$1140",
        },
    ];
    const tableHeaders = [
        { key: "date", label: "Date" },
        { key: "transactionId", label: "Transaction ID" },
        { key: "petOwner", label: "Pet Owner" },
        { key: "petSitter", label: "Pet Sitter" },
        { key: "amount", label: "Amount" },
        { key: "received", label: "Received" },
    ];
    return (
        <div className="flex min-h-screen ">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-64 bg-[#FFFFFF] border-r border-[#E3E6F0]  py-6">
                <div className="flex justify-center  mt-3 p-1 border-b border-[#E3E6F0]">
                    <img src={logo} alt="Logo" className="w-30 h-auto" />
                </div>
                <p className='font-semibold text-sm text-[#666666] mt-5 mb-3 px-5'>Menu</p>
                <ul className="space-y-2 px-5">
                    {menus.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                            ? 'bg-[#024B5E] text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    <Icon size={18} />
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-10 px-5">
                    <p className='font-semibold text-sm text-[#666666]  mb-3'>Other</p>
                    <NavLink
                        to="/dashoard/report"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                ? 'bg-[#024B5E] text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}>
                        <FileText size={18} />
                        <span>Report</span>
                    </NavLink>
                    <NavLink
                        to="/dashoard/settingsmenu"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                ? 'bg-[#024B5E] text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}>
                        <Settings size={18} />
                        <span>Setting</span>
                    </NavLink>
                    <button
                        onClick={() => setIsLogoutOpen(true)}
                        className="flex items-center gap-3 w-full px-4 py-2 text-[#F34F4F] hover:bg-red-50 transition mt-15 border-t border-[#EBEBEB]"
                    >
                        <LogOut size={18} />
                        <span>Log Out</span>
                    </button>
                    {isLogoutOpen && (
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                            <div className="bg-white w-[360px] rounded-xl p-6 shadow-lg text-center">
                                <h2 className="text-lg font-semibold text-[#024B5E] mb-3">
                                    Log Out
                                </h2>
                                <p className="text-md text-[#666666] mb-6 leading-relaxed">
                                    Are you sure <br /> you want to log out?
                                </p>
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={() => setIsLogoutOpen(false)}
                                        className="px-6 py-1.5 text-sm border border-[#024B5E] rounded-full text-gray-700 hover:bg-gray-100 transition"
                                    >
                                        No
                                    </button>
                                    <button
                                        onClick={() => {
                                            console.log("Logged out");
                                            setIsLogoutOpen(false);
                                        }}
                                        className="px-6 py-1.5 text-sm bg-[#024B5E] text-white rounded-full hover:bg-[#024B5E] transition"
                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </aside>
            <main className="flex-1 ">
                {/* -------- TOP BAR (always) -------- */}
                <div className="flex justify-between items-center border-b border-[#E3E6F0]  p-5 bg-[#FFFFFF]">
                    <h2 className="text-xl text-[#333333] font-semibold">Dashboard</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-[#FC94400D] px-10 py-2 rounded-full shadow-sm">
                            <Search size={20} className="text-gray-400" />
                            <input
                                placeholder="Search"
                                className="ml-2 outline-none text-sm" />
                        </div>
                        <Link to="/dashoard/notificationpage">
                            <Bell size={20} />
                        </Link>
                        <div className="flex items-center gap-2">
                            <Link to="/dashoard/personalinformation">
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
                <div className="p-5">
                    {showSummary && (
                        <>
                            <div className="flex items-center justify-between px-1 py-3  ">
                                <div className="flex items-center gap-2 px-15 p-3 bg-[#FFFFFF]  text-gray-600 text-sm rounded-2xl">
                                    <CalendarDays size={18} className="text-teal-600" />
                                    <span className='text-[#333333]'>Aug 1, 2025 - Oct 31, 2025</span>
                                </div>
                                <button className="flex items-center gap-1 ml-6 px-3  bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-lg text-sm transition p-3 cursor-pointer">
                                    <RefreshCcw size={20} color='#333333' />
                                    <span>Refresh</span>
                                </button>
                            </div>
                            {/* -------- DASHBOARD CARDS (always) -------- */}
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
                        </>
                    )}
                    {/* -------- ONLY DASHBOARD HOME -------- */}
                    {isDashboardHome && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                                <p className="font-medium text-[#1F2937] mb-2 text-md">
                                                    Reports
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    5 new report
                                                </p>
                                            </div>
                                        </div>
                                        <button className="mt-2 bg-[#F34F4F] text-white px-4 rounded-full text-md cursor-pointer">
                                            Investigate
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#FFFFFF] mt-6 p-5 rounded-xl shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-xl text-[#11293A]">
                                        Recent Payment History
                                    </h3>

                                    <button className="text-sm font-medium text-teal-600 hover:underline cursor-pointer">
                                        See all
                                    </button>
                                </div>

                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className=" shadow rounded bg-[#9999990D] text-[#333333]">
                                            {tableHeaders.map((header) => (
                                                <th
                                                    key={header.key}
                                                    className="text-left px-5 py-3 font-medium"
                                                >
                                                    {header.label}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    {/* TABLE BODY */}
                                    <tbody>
                                        {paymentHistory.map((row) => (
                                            <tr key={row.id} className="border-b border-[#EBEBEB] last:border-none text-[#333333]">
                                                {tableHeaders.map((header) => (
                                                    <td key={header.key} className="py-3">
                                                        {row[header.key]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                    {!isDashboardHome && (
                        <div className="">
                            <Outlet />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
