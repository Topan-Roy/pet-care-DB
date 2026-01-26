import { NavLink, Outlet, useLocation } from 'react-router';
import logo from '../assets/Logo.png'
const DashboardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
    </svg>
);

const PaymentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.29358 4.83499L4.16511 17.6712C3.98586 18.7522 3.89623 19.2927 4.19427 19.6464C4.49231 20 5.03749 20 6.12785 20H6.53027C7.35308 20 7.76448 20 8.04501 19.7555C8.32554 19.5109 8.38372 19.1016 8.50008 18.2828L8.96761 14.9934C9.00457 14.7333 9.02305 14.6033 9.05213 14.492C9.26041 13.6948 9.93391 13.1077 10.7485 13.0132C10.8622 13 10.9929 13 11.2543 13H12.4163C15.5113 13 18.1943 10.8473 18.8803 7.81384C19.5536 4.83576 17.3016 2 14.2631 2L9.62312 2C8.5093 2 7.95239 2 7.51383 2.2348C7.26304 2.36907 7.04377 2.55577 6.87077 2.78235C6.56824 3.17856 6.47669 3.7307 6.29358 4.83499Z" stroke="#666666" stroke-width="1.5" />
        <path d="M8.24315 19.5001L8.01451 20.8328C7.90978 21.4432 8.38532 22.0001 9.01128 22.0001H11.0018C11.4961 22.0001 11.9179 21.6467 11.9991 21.1645L12.7285 16.8357C12.8098 16.3535 13.2316 16.0001 13.7258 16.0001H15.5289C18.11 16.0001 20.3448 14.2269 20.9047 11.7348C21.2967 9.99028 20.4437 8.31017 19 7.50122" stroke="#666666" stroke-width="1.5" />
    </svg>

);

const UserIcon = () => (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.32782 14.2316C2.91305 15.074 -0.796391 16.7941 1.46291 18.9466C2.56655 19.998 3.79573 20.75 5.34111 20.75H14.1594C15.7048 20.75 16.9339 19.998 18.0376 18.9466C20.2969 16.7941 16.5874 15.074 15.1727 14.2316C11.8551 12.2561 7.64543 12.2561 4.32782 14.2316Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.2502 5.25C14.2502 7.73528 12.2355 9.75 9.75024 9.75C7.26496 9.75 5.25024 7.73528 5.25024 5.25C5.25024 2.76472 7.26496 0.75 9.75024 0.75C12.2355 0.75 14.2502 2.76472 14.2502 5.25Z" stroke="#666666" stroke-width="1.5" />
    </svg>

);

const UsersIcon = () => (
    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8663 17.25H18.3565C19.5064 17.25 20.421 16.7261 21.2421 15.9936C23.3283 14.1326 18.4244 12.25 16.7502 12.25M14.7502 2.31877C14.9773 2.27373 15.2131 2.25 15.455 2.25C17.2749 2.25 18.7502 3.59315 18.7502 5.25C18.7502 6.90685 17.2749 8.25 15.455 8.25C15.2131 8.25 14.9773 8.22627 14.7502 8.18123" stroke="#666666" stroke-width="1.5" stroke-linecap="round" />
        <path d="M3.73156 13.3612C2.55258 13.993 -0.538619 15.2831 1.34413 16.8974C2.26384 17.686 3.28815 18.25 4.57597 18.25H11.9245C13.2123 18.25 14.2367 17.686 15.1564 16.8974C17.0391 15.2831 13.9479 13.993 12.7689 13.3612C10.0043 11.8796 6.49623 11.8796 3.73156 13.3612Z" stroke="#666666" stroke-width="1.5" />
        <path d="M12.2502 4.75C12.2502 6.95914 10.4594 8.75 8.25024 8.75C6.04111 8.75 4.25024 6.95914 4.25024 4.75C4.25024 2.54086 6.04111 0.75 8.25024 0.75C10.4594 0.75 12.2502 2.54086 12.2502 4.75Z" stroke="#666666" stroke-width="1.5" />
    </svg>

);

const PromoIcon = () => (
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.21433 6.59375C0.96579 6.59375 0.738987 6.39229 0.750414 6.12895C0.817328 4.58687 1.00481 3.58298 1.53008 2.78884C1.83228 2.33196 2.20765 1.93459 2.63923 1.61468C3.80575 0.75 5.45139 0.75 8.74266 0.75H12.7574C16.0486 0.75 17.6943 0.75 18.8608 1.61468C19.2924 1.93459 19.6677 2.33196 19.9699 2.78884C20.4952 3.58289 20.6827 4.58665 20.7496 6.12843C20.761 6.39208 20.5339 6.59375 20.2851 6.59375C18.8993 6.59375 17.7759 7.78299 17.7759 9.25C17.7759 10.717 18.8993 11.9062 20.2851 11.9062C20.5339 11.9062 20.761 12.1079 20.7496 12.3716C20.6827 13.9134 20.4952 14.9171 19.9699 15.7112C19.6677 16.168 19.2924 16.5654 18.8608 16.8853C17.6943 17.75 16.0486 17.75 12.7574 17.75H8.74266C5.45139 17.75 3.80575 17.75 2.63923 16.8853C2.20765 16.5654 1.83228 16.168 1.53008 15.7112C1.00481 14.917 0.817328 13.9131 0.750414 12.3711C0.738987 12.1077 0.96579 11.9062 1.21433 11.9062C2.60012 11.9062 3.72352 10.717 3.72352 9.25C3.72352 7.78299 2.60012 6.59375 1.21433 6.59375Z" stroke="#585858" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M8.25 11.75L13.25 6.75" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.25 6.75H8.26122M13.2388 11.75H13.25" stroke="#585858" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

const CategoryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2V10M22 6L14 6" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6C10 7.40013 10 8.1002 9.72752 8.63498C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6Z" stroke="#666666" stroke-width="1.5" />
        <path d="M2 18C2 16.5999 2 15.8998 2.27248 15.365C2.51217 14.8946 2.89462 14.5122 3.36502 14.2725C3.8998 14 4.59987 14 6 14C7.40013 14 8.1002 14 8.63498 14.2725C9.10538 14.5122 9.48783 14.8946 9.72752 15.365C10 15.8998 10 16.5999 10 18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18Z" stroke="#666666" stroke-width="1.5" />
        <path d="M14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18Z" stroke="#666666" stroke-width="1.5" />
    </svg>

);
const PricingTaxes = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.75 4.75C18.0501 4.8787 18.9252 5.16956 19.5784 5.82691C20.75 7.00596 20.75 8.90362 20.75 12.6989C20.75 16.4942 20.75 18.3919 19.5784 19.5709C18.4069 20.75 16.5212 20.75 12.75 20.75H8.75C4.97876 20.75 3.09315 20.75 1.92157 19.5709C0.75 18.3919 0.75 16.4942 0.75 12.6989C0.75 8.90362 0.75 7.00596 1.92157 5.82691C2.57475 5.16956 3.44989 4.8787 4.75 4.75" stroke="#666666" stroke-width="1.5" stroke-linecap="round" />
        <path d="M17.2578 12.75H17.2488" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.25781 12.75H4.24883" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.25 12.75C13.25 14.1307 12.1307 15.25 10.75 15.25C9.36929 15.25 8.25 14.1307 8.25 12.75C8.25 11.3693 9.36929 10.25 10.75 10.25C12.1307 10.25 13.25 11.3693 13.25 12.75Z" stroke="#666666" stroke-width="1.5" />
        <path d="M8.25 3.25C8.74153 2.7443 10.0498 0.75 10.75 0.75M13.25 3.25C12.7585 2.7443 11.4502 0.75 10.75 0.75M10.75 0.75V6.75" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


);

const ReportIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.75 14.75H10.759H10.75Z" fill="#585858" />
        <path d="M10.75 14.75H10.759" stroke="#585858" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.75 11.75V6.75" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.9028 3.03405C12.7289 2.59839 12.2077 0.854734 10.8698 0.75447C10.7903 0.74851 10.7103 0.74851 10.6308 0.75447C9.2929 0.854736 8.77166 2.59829 7.5978 3.03405C6.35482 3.49524 4.65521 2.54988 3.60272 3.60239C2.58967 4.61542 3.48613 6.37993 3.03438 7.59747C2.57256 8.84153 0.64134 9.35607 0.7548 10.8695C0.855064 12.2074 2.59872 12.7286 3.03438 13.9025C3.48615 15.12 2.58962 16.8846 3.60272 17.8976C4.65506 18.9501 6.35478 18.0051 7.5978 18.4659C8.77135 18.9022 9.29309 20.6454 10.6308 20.7455C10.7103 20.7515 10.7903 20.7515 10.8698 20.7455C12.2075 20.6454 12.7293 18.9021 13.9028 18.4659C15.1204 18.0145 16.8851 18.9107 17.8979 17.8976C18.9852 16.8105 17.9376 15.0481 18.512 13.792C19.0429 12.6355 20.8563 12.0939 20.7458 10.6305C20.6457 9.29277 18.9025 8.77102 18.4662 7.59747C18.0054 6.35445 18.9504 4.65473 17.8979 3.60239C16.8455 2.54983 15.1458 3.49527 13.9028 3.03405Z" stroke="#585858" stroke-width="1.5" />
    </svg>

);

const SettingsIcon = () => (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.757577 14.3822C0.791537 14.059 1.02575 13.7985 1.49418 13.2776L2.52525 12.1249C2.77728 11.8058 2.95613 11.25 2.95613 10.7498C2.95613 10.25 2.77722 9.694 2.52522 9.375L1.49418 8.22231C1.02575 7.70137 0.791527 7.4409 0.757577 7.11768C0.723617 6.79446 0.898577 6.49083 1.24849 5.88358L1.74207 5.02698C2.11537 4.37915 2.30201 4.05523 2.61959 3.92607C2.93717 3.7969 3.29633 3.89883 4.01467 4.10267L5.2349 4.44637C5.69351 4.55212 6.17466 4.49213 6.59341 4.27698L6.93029 4.08261C7.28937 3.85262 7.56557 3.51352 7.71845 3.11493L8.05241 2.11754C8.27198 1.45753 8.38177 1.12752 8.64312 0.93876C8.90452 0.75 9.25172 0.75 9.94602 0.75H11.0608C11.7552 0.75 12.1024 0.75 12.3637 0.93876C12.6251 1.12752 12.7349 1.45753 12.9545 2.11754L13.2884 3.11493C13.4413 3.51352 13.7175 3.85262 14.0766 4.08261L14.4135 4.27698C14.8322 4.49213 15.3134 4.55212 15.772 4.44637L16.9922 4.10267C17.7105 3.89883 18.0697 3.7969 18.3873 3.92607C18.7049 4.05523 18.8915 4.37915 19.2648 5.02698L19.7584 5.88358C20.1083 6.49083 20.2832 6.79446 20.2493 7.11768C20.2153 7.4409 19.9811 7.70137 19.5127 8.22231L18.4816 9.375C18.2297 9.694 18.0507 10.25 18.0507 10.7498C18.0507 11.25 18.2296 11.8058 18.4816 12.1249L19.5127 13.2776C19.9811 13.7985 20.2153 14.059 20.2493 14.3822C20.2832 14.7055 20.1083 15.0091 19.7584 15.6163L19.2648 16.4729C18.8915 17.1207 18.7049 17.4447 18.3873 17.5738C18.0697 17.703 17.7105 17.6011 16.9922 17.3972L15.772 17.0535C15.3133 16.9477 14.8321 17.0078 14.4133 17.223L14.0765 17.4174C13.7174 17.6474 13.4413 17.9864 13.2885 18.385L12.9545 19.3825C12.7349 20.0425 12.6251 20.3725 12.3637 20.5612C12.1024 20.75 11.7552 20.75 11.0608 20.75H9.94602C9.25172 20.75 8.90452 20.75 8.64312 20.5612C8.38177 20.3725 8.27198 20.0425 8.05241 19.3825" stroke="#666666" stroke-width="1.5" stroke-linecap="round" />
        <path d="M1.2394 17.53C2.3194 16.45 5.9914 12.814 6.3514 12.394C6.73197 11.95 6.4234 11.35 6.607 9.49005C6.69584 8.59005 6.88943 7.91579 7.4434 7.41405C8.1034 6.79005 8.6434 6.79005 10.5034 6.74805C12.1234 6.79005 12.3154 6.61005 12.4834 7.03005C12.6034 7.33005 12.2434 7.51005 11.8114 7.99005C10.8514 8.95005 10.2874 9.43005 10.2334 9.73005C9.8434 11.0501 11.3794 11.83 12.2194 10.99C12.5371 10.6724 14.0074 9.19005 14.1514 9.07005C14.2594 8.97405 14.5179 8.97869 14.6434 9.13005C14.7514 9.23615 14.7634 9.25005 14.7514 9.73005C14.7403 10.1744 14.7453 10.8122 14.7466 11.47C14.7483 12.3224 14.7034 13.27 14.3434 13.75C13.6234 14.83 12.4234 14.89 11.3434 14.938C10.3234 14.998 9.4834 14.89 9.2194 15.082C9.0034 15.19 7.8634 16.39 6.4834 17.77L4.0234 20.23C1.9834 21.85 -0.260601 19.33 1.2394 17.53Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" />
    </svg>

);

const LogoutIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54" stroke="#F34F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.0001 12H3.62012" stroke="#F34F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#F34F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const LocationsIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>


);

import { useState } from 'react';
import RecentPayment from '../Components/RecentPayment';
import EarningSummary from '../Components/EarningSummary';
import DashBoardCard from '../Components/DashBoardCard';
import DashBoardTopBar from '../Components/DashBoardTopBar';
export default function Dashboard() {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const { pathname } = useLocation();
    const isDashboardHome = pathname === "/dashboard";
    const NO_SUMMARY_PAGES = [
        "/dashboard/notificationpage",
        "/dashboard/notificationpagee",
        "/dashboard/notificationtabs",
        "/dashboard/petowner",
        "/dashboard/petownerdelails",
        "/dashboard/petsitter",
        "/dashboard/petsitterdeleils",
        "/dashboard/promocode",
        "/dashboard/basicsettings",
        "/dashboard/audiencetargeting",
        "/dashboard/reviewdeploy",
        "/dashboard/categories",
        "/dashboard/report",
        "/dashboard/settingsmenu",
        "/dashboard/personalinformation",
        "/dashboard/personalinfon",
        "/dashboard/termscondition",
        "/dashboard/editTermsandconditions",
        "/dashboard/privacypolicy",
        "/dashboard/editprivacypolicy",
        "/dashboard/faqtable",
        "/dashboard/changepassword",
        "/dashboard/PricingTaxes",
        "/dashboard/locations",
    ];
    const showSummary = !NO_SUMMARY_PAGES.includes(pathname);
    const menus = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: DashboardIcon,
        },
        {
            name: 'Payment',
            path: '/dashboard/payment',
            icon: PaymentIcon,
        },
        {
            name: 'Pet Owner',
            path: '/dashboard/petowner',
            icon: UserIcon,
        },
        {
            name: 'Pet Sitter',
            path: '/dashboard/petsitter',
            icon: UsersIcon,
        },
        {
            name: 'Promo Code',
            path: '/dashboard/promocode',
            icon: PromoIcon,
        },
        {
            name: 'Categories',
            path: '/dashboard/categories',
            icon: CategoryIcon,
        },
        {
            name: 'Pricing & Taxes',
            path: '/dashboard/PricingTaxes',
            icon: PricingTaxes,
        },
    ];


    return (
        <div className="flex min-h-screen ">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-64 bg-[#FFFFFF] border-r border-[#E3E6F0]  py-6">
                <div className="flex justify-center  mt-1 p-1 border-b border-[#E3E6F0]">
                    <img src={logo} alt="Logo" className="w-24  mb-4" />
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
                                    <Icon />
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-10 px-5">
                    <p className='font-semibold text-sm text-[#666666]  mb-3'>Other</p>

                    <NavLink
                        to="/dashboard/locations"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                ? 'bg-[#024B5E] text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}>
                        <LocationsIcon />
                        <span>Locations</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/report"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                ? 'bg-[#024B5E] text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}>
                        <ReportIcon />
                        <span>Report</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/settingsmenu"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive
                                ? 'bg-[#024B5E] text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}>
                        <SettingsIcon />
                        <span>Setting</span>
                    </NavLink>
                    <button
                        onClick={() => setIsLogoutOpen(true)}
                        className="flex items-center gap-3 w-full px-4 py-2 text-[#F34F4F] hover:bg-red-50 transition mt-60 border-t border-[#EBEBEB]"
                    >
                        <LogoutIcon />
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
                <div className="">
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
