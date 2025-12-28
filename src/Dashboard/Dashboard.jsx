import { Link, NavLink, Outlet, useLocation } from 'react-router';
import logo from '../assets/Logo.png'
import { LayoutDashboard, CreditCard, User, Users, Tag, Grid3X3, FileText, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
import RecentPayment from '../Components/RecentPayment';
import EarningSummary from '../Components/EarningSummary';
import DashBoardCard from '../Components/DashBoardCard';
import DashBoardTopBar from '../Components/DashBoardTopBar';
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
        "/dashoard/privacypolicy",
        "/dashoard/editprivacypolicy",
        "/dashoard/faqtable",
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
               <DashBoardTopBar></DashBoardTopBar>
                <div className="p-5">
                    {showSummary && (
                        <>
                           
                            {/* -------- DASHBOARD CARDS (always) -------- */}
                           <DashBoardCard></DashBoardCard>
                        </>
                    )}
                    {/* -------- ONLY DASHBOARD HOME -------- */}
                    {isDashboardHome && (
                        <>
                            <EarningSummary></EarningSummary>
                           <RecentPayment></RecentPayment>
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
