import React, { useState } from "react";
const systemNotifications = [
    {
        id: 1,
        title: "Welcome Offer",
        target: "All Users",
        sentDate: "Oct 11, 2025",
        status: "Sent",
        sentBy: "Guy Hawkins"
    },
    {
        id: 2,
        title: "Pet Care Alert",
        target: "Pet Owners Only",
        sentDate: "Oct 12, 2025",
        status: "Sent",
        sentBy: "Kristin Watson"
    },
    {
        id: 3,
        title: "Maintenance Notice",
        target: "Sitters Only",
        sentDate: "Oct 13, 2025",
        status: "Sent",
        sentBy: "Guy Hawkins"
    }
];
export default function NotificationPage() {
    const [activeTab, setActiveTab] = useState("create");
    return (
        <div className="bg-[#F9FEFF]  min-h-screen">

            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setActiveTab("system")}
                    className={`px-5 py-3 rounded-xl text-md font-medium border cursor-pointer
                      ${activeTab === "system"
                            ? "font-bold bg-[#F8F4EF] text-[#000] border-[#024B5E]"
                            : "bg-transparent text-[#585858] border-gray-300"
                        }`}

                    style={activeTab === "system" ? { borderColor: "#024B5E" } : {}}>
                    System Notification
                </button>
                <button
                    onClick={() => setActiveTab("create")}
                    className={`px-5 py-3 rounded-xl text-md font-medium border cursor-pointer
                    ${activeTab === "create"
                            ? "font-bold bg-[#F8F4EF] text-[#000] border-[#024B5E]"
                            : "bg-transparent text-[#585858] border-gray-300"
                        }`}

                    style={activeTab === "create" ? { borderColor: "#024B5E" } : {}}>
                    Create Notification
                </button>
            </div>
            <div>
                {activeTab === "create" && <CreateNotificationForm />}
                {activeTab === "system" && <SystemNotificationList notifications={systemNotifications} />}
            </div>
        </div>
    );
}
function CreateNotificationForm() {
    const [targetAudience, setTargetAudience] = useState("All Users");
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 text-[#333333] text-xl ">
                    Create New Notification
                </h3>
                <label className="block mb-2 text-[#000000] font-medium">Title</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full mb-4 px-3 py-2 border rounded border-[#E3E6F0] focus:border-[#b1b4bd] focus:outline-none"
                />

                <label className="block mb-2 text-[#000000] font-medium">Message</label>
                <textarea
                    placeholder="Write your notification message here..."
                    className="w-full mb-4 px-3 py-2 border rounded border-[#E3E6F0] focus:border-[#b1b4bd] focus:outline-none "
                    rows={4} />
                <label className="block mb-2 text-gray-700 font-medium">Target Audience</label>
                <div className="flex gap-6 mb-6 text-md text-[#024B5E]">
                    {["All Users", "Pet Owners Only", "Sitters Only"].map((audience) => (
                        <label key={audience} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="targetAudience"
                                value={audience}
                                checked={targetAudience === audience}
                                onChange={() => setTargetAudience(audience)}
                                className="cursor-pointer" />
                            {audience}
                        </label>
                    ))}
                </div>
                <button className="bg-[#024B5E] cursor-pointer text-white font-semibold px-40 py-2 rounded">
                    Confirm
                </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-700 text-base">Previous Notifications</h3>
                    <a href="#!" className="text-teal-600 text-sm hover:underline">
                        See all
                    </a>
                </div>
                <table className="w-full text-left p-5 border-collapse">
                    <thead className="mb-5">
                        <tr className="text-md rounded bg-[#FFFFFF] text-[#333333] shadow ">
                            <th className="py-2 px-5">Title</th>
                            <th className="py-2">Target</th>
                            <th className="py-2">Sent Date</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Sent By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {systemNotifications.map(({ id, title, target, sentDate, status, sentBy }) => (
                            <tr key={id} className="border-b border-gray-200 px-5 rounded">
                                <td className="py-3">{title}</td>
                                <td className="py-3">{target}</td>
                                <td className="py-3">{sentDate}</td>
                                <td className="py-3">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 text-white text-xs rounded-full bg-teal-700">
                                        <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"></span>
                                        {status}
                                    </span>
                                </td>
                                <td className="py-3">{sentBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
function SystemNotificationList({ notifications }) {
    return (
        <div className="space-y-2">
            {/* System notifications display */}
        </div>
    );
}
