import { Link, useLocation } from "react-router";
export default function NotificationTabs() {
    const location = useLocation();
    const path = location.pathname;
    const isSystem = path === "/dashboard/notificationpagee";
    const isCreate = path === "/dashboard/notificationpage";
    return (
        <div className="flex gap-2 mb-6 ">
            <Link to="/dashboard/notificationpagee">
                <button
                    className={`px-4 py-2 rounded-xl border font-medium focus:outline-none
            ${isSystem
                            ? "bg-[#024B5E] text-[#FFFFFF] border-[#024B5E]"
                            : "bg-gray-100 text-[#585858] border-gray-300 hover:bg-gray-200"
                        }`}
                >
                    System Notification
                </button>
            </Link>
            <Link to="/dashboard/notificationpage">
                <button
                    className={`px-4 py-2 rounded-xl border font-medium focus:outline-none
            ${isCreate
                            ? "bg-[#024B5E] text-[#FFFFFF] border-[#024B5E]"
                            : "bg-gray-100 text-[#585858] border-gray-300 hover:bg-gray-200"
                        }`}
                >
                    Create Notification
                </button>
            </Link>
        </div>
    );
}
