import { Bell } from "lucide-react";
import React from "react";
import NotificationTabs from "./NotificationTabs";
export default function NotificationPagee() {

    const notifications = [
        {
            id: 1,
            message: "You have received $500 from John Doe",
            time: "Fri, 12:30pm",
        },
        {
            id: 2,
            message: "New bar has been added.",
            time: "Fri, 12:30pm",
        },
        {
            id: 3,
            message: "New bar has been added.",
            time: "Fri, 12:30pm",
        },
    ];
    return (
        <div className="bg-[#F9FEFF] min-h-screen p-4">
            <NotificationTabs></NotificationTabs>
            <div className=" rounded-lg">
                <div className="bg-white rounded-xl  ">
                    <div className="px-6 py-4 border-b border-[#C0C0C0]">
                        <h2 className="text-lg font-semibold text-[#004C5A]">
                            Notification
                        </h2>
                    </div>
                    <div>
                        {notifications.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start gap-4 px-6 py-4 shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-md bg-[#EAF4F5] flex items-center justify-center">
                                    <Bell size={18} className="text-[#004C5A]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-800">
                                        {item.message}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    );
}
