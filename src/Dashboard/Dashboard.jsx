import { Bell, Search, RefreshCcw, ShieldCheck } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router';
import logo from '../assets/Logo.png'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import {
    LayoutDashboard,
    CreditCard,
    User,
    Users,
    Tag,
    Grid3X3,
    FileText,
    Settings,
    LogOut,

    CalendarCheck,
    UserCheck,
    DollarSign,
    TrendingUp,
    CalendarDays,
} from 'lucide-react';
const chartData = [
    { month: 'May', value: 220 },
    { month: 'Jun', value: 160 },
    { month: 'Jul', value: 180 },
    { month: 'Aug', value: 240 },
    { month: 'Sep', value: 210 },
    { month: 'Oct', value: 260 },
];

export default function Dashboard() {
    const { pathname } = useLocation();
    const isDashboardHome = pathname === '/dashboard';

    const menus = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: LayoutDashboard,
        },
        {
            name: 'Payment',
            path: '/dashboard/pay',
            icon: CreditCard,
        },
        {
            name: 'Pet Owner',
            path: '/dashboard/pet-owner',
            icon: User,
        },
        {
            name: 'Pet Sitter',
            path: '/dashboard/pet-sitter',
            icon: Users,
        },
        {
            name: 'Promo Code',
            path: '/dashboard/promo',
            icon: Tag,
        },
        {
            name: 'Categories',
            path: '/dashboard/categories',
            icon: Grid3X3,
        },
    ];
    const dashboardCards = [
        {
            id: 1,
            title: 'Pet Owners',
            value: '12,54,286',
            icon: Users,
            bg: 'bg-teal-50',
            color: 'text-teal-600',
        },
        {
            id: 2,
            title: 'Total Bookings',
            value: '1526',
            icon: CalendarCheck,
            bg: 'bg-blue-50',
            color: 'text-blue-600',
        },
        {
            id: 3,
            title: 'Active Sitters',
            value: '1526',
            icon: UserCheck,
            bg: 'bg-purple-50',
            color: 'text-purple-600',
        },
        {
            id: 4,
            title: 'Total Revenue',
            value: '$12,526',
            icon: DollarSign,
            bg: 'bg-green-50',
            color: 'text-green-600',
        },
    ];

    return (
        <div className="flex min-h-screen ">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-64 bg-[#FFFFFF] border-r border-[#E3E6F0]  py-6">

                <div className="flex justify-center  mt-5 p-1 border-b border-[#E3E6F0]">
                    <img src={logo} alt="Logo" className="w-30 h-auto" />
                </div>
                <p className='font-semibold text-sm text-[#666666] mt-5 mb-3 px-5'>menu</p>
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
                    <p className='font-semibold text-sm text-[#666666]  mb-3'>other</p>
                    <NavLink
                        to="/dashboard/report"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                ? 'bg-teal-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`
                        }
                    >
                        <FileText size={18} />
                        <span>Report</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/setting"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                ? 'bg-teal-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`
                        }
                    >
                        <Settings size={18} />
                        <span>Setting</span>
                    </NavLink>

                    <button className="flex items-center gap-3 w-full px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition">
                        <LogOut size={18} />
                        <span>Log Out</span>
                    </button>
                </div>

            </aside>

            {/* ================= MAIN ================= */}
            <main className="flex-1 ">

                {/* -------- TOP BAR (always) -------- */}
                <div className="flex justify-between items-center border-b border-[#E3E6F0]  p-6 bg-[#FFFFFF]">
                    <h2 className="text-xl text-[#333333] font-semibold">Dashboard</h2>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-[#FC94400D] px-10 py-2 rounded-full shadow-sm">
                            <Search size={20} className="text-gray-400" />
                            <input
                                placeholder="Search"
                                className="ml-2 outline-none text-sm"
                            />
                        </div>



                        <Bell size={20} />

                        <div className="flex items-center gap-2">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://i.pravatar.cc/40"
                                alt=""
                            />
                            <div className="text-sm">
                                <p className="font-medium text-[#333333]">Jane Cooper</p>
                                <p className="text-gray-400">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between px-2 py-3  ">
                        {/* Date Range */}
                        <div className="flex items-center gap-2 px-15 p-3 bg-[#FFFFFF]  text-gray-600 text-sm rounded-2xl">
                            <CalendarDays size={18} className="text-teal-600" />
                            <span className='text-[#333333]'>Aug 1, 2025 - Oct 31, 2025</span>
                        </div>

                        {/* Refresh Button */}
                        <button className="flex items-center gap-1 ml-6 px-3  bg-[#FFFFFF] hover:bg-[#FFFFFF] rounded-lg text-sm transition p-3">
                            <RefreshCcw size={16} />
                            <span>Refresh</span>
                        </button>
                    </div>

                    {/* -------- DASHBOARD CARDS (always) -------- */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {dashboardCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.id}
                                    className="bg-[#FFFFFF]  p-10 rounded-xl shadow-sm"
                                >
                                    {/* Title + Icon */}
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Icon size={16} className={card.color} />
                                        <span className='text-[#333333] text-md'>{card.title}</span>
                                    </div>

                                    <div className="flex flex-col">
                                        {/* Value + Growth in one flex row */}
                                        <div className="flex items-center justify-between mt-2">
                                            <h3 className="text-2xl text-[#333333] font-bold">{card.value}</h3>
                                            <div className="flex items-center gap-1 text-green-500 text-sm -mb-15">
                                                <TrendingUp size={16} />
                                                <span className=''>+11.01%</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>


                    {/* -------- ONLY DASHBOARD HOME -------- */}
                    {isDashboardHome && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 bg-white p-5 rounded-xl shadow-sm">
                                    <h3 className="font-semibold mb-3">Earning Summary</h3>
                                    <div className="h-48">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={chartData}>
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Line dataKey="value" strokeWidth={3} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="space-y-4  bg-[#FFFFFF] rounded-xl shadow-sm p-8">
                                    <p className='font-medium text-xl text-[#1F2937]'>Pending Actions</p>
                                    <div className="flex justify-between bg-blue-50 p-4 rounded-xl">
                                        <div className="flex">
                                              <ShieldCheck/>
                                              <div className="">
                                                 <p className="font-semibold">Verification</p> 
                                        <p className="text-sm text-gray-500">
                                            12 Pet Sitter awaiting verification
                                        </p>
                                              </div>
                                           
                                        </div>
                                        <button className="mt-2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm">
                                            Review
                                        </button>
                                    </div>

                                    <div className="flex justify-between bg-red-50 p-4 rounded-xl">
                                       <div className="">
                                         <p className="font-semibold">Reports</p>
                                        <p className="text-sm text-gray-500">5 new report</p>
                                       </div>
                                        <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                                            Investigate
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white mt-6 p-5 rounded-xl shadow-sm">
                                <h3 className="font-semibold mb-4">Recent Payment History</h3>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {[1, 2, 3, 4].map((i) => (
                                            <tr key={i} className="border-b">
                                                <td className="py-2">21/03/2025</td>
                                                <td>93451</td>
                                                <td>Guy Hawkins</td>
                                                <td>Kristin Watson</td>
                                                <td>$900</td>
                                                <td>$855</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {/* -------- OTHER PAGES -------- */}
                    {!isDashboardHome && (
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Outlet />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
