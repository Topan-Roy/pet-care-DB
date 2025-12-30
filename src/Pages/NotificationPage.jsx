import React, { useState } from "react";
import NotificationTabs from "./NotificationTabs";
const systemNotifications = [
    { id: 1, title: "Welcome Offer", target: "All Users", sentDate: "Oct 11, 2025", status: "Sent", sentBy: "Guy Hawkins" },
    { id: 2, title: "Pet Care Alert", target: "Pet Owners Only", sentDate: "Oct 12, 2025", status: "Sent", sentBy: "Kristin Watson" },
    { id: 3, title: "Maintenance Notice", target: "Sitters Only", sentDate: "Oct 13, 2025", status: "Sent", sentBy: "Guy Hawkins" },
    { id: 2, title: "Pet Care Alert", target: "Pet Owners Only", sentDate: "Oct 12, 2025", status: "Sent", sentBy: "Kristin Watson" },
    { id: 3, title: "Maintenance Notice", target: "Sitters Only", sentDate: "Oct 13, 2025", status: "Sent", sentBy: "Guy Hawkins" },
    { id: 2, title: "Pet Care Alert", target: "Pet Owners Only", sentDate: "Oct 12, 2025", status: "Sent", sentBy: "Kristin Watson" },
    { id: 3, title: "Maintenance Notice", target: "Sitters Only", sentDate: "Oct 13, 2025", status: "Sent", sentBy: "Guy Hawkins" },
];
export default function NotificationPage() {
    const [targetAudience, setTargetAudience] = useState("All Users");
    const [showAll, setShowAll] = useState(false);
    const visibleNotifications = showAll
        ? systemNotifications
        : systemNotifications.slice(0, 3);
    return (
        <div className="bg-[#F9FEFF] min-h-screen p-4">
            <NotificationTabs></NotificationTabs>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">CREATE NEW NOTIFICATIONS</h2>
                <label className="block mb-2 font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full mb-4 px-3 py-2 border rounded-lg border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#024B5E]"
                />
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea
                    placeholder="Write your notification message here..."
                    rows={4}
                    className="w-full mb-4 px-3 py-2 border rounded-lg border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#024B5E]"
                />
                <label className="block mb-2 font-medium text-gray-700">Target Audience</label>
                <div className="flex gap-6 mb-6">
                    {["All Users", "Pet Owners Only", "Sitters Only"].map((audience) => (
                        <label key={audience} className="flex items-center gap-2 cursor-pointer text-md text-[#024B5E]">
                            <input
                                type="radio"
                                name="targetAudience"
                                value={audience}
                                checked={targetAudience === audience}
                                onChange={() => setTargetAudience(audience)}
                                className="accent-[#024B5E]"
                            />
                            {audience}
                        </label>
                    ))}
                </div>
                <button className="w-2/6 bg-[#024B5E] text-white font-semibold py-2 rounded-xl cursor-pointer">Confirm</button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-[18px] text-[#11293A]">Previous Notification</h3>
                    <p
                        onClick={() => setShowAll(!showAll)}
                        className="text-[#024B5E] cursor-pointer font-medium"
                    >
                        {showAll ? "See less" : "See all"}
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600">
                                <th className="py-2 px-4">Title</th>
                                <th className="py-2 px-4">Target</th>
                                <th className="py-2 px-4">Sent Date</th>
                                <th className="py-2 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleNotifications.map(({ id, title, target, sentDate, status }) => (
                                <tr key={id} className="border-b border-gray-200">
                                    <td className="py-2 px-4">{title}</td>
                                    <td className="py-2 px-4">{target}</td>
                                    <td className="py-2 px-4">{sentDate}</td>
                                    <td className="py-2 px-4">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 text-white text-xs rounded-full bg-[#024B5E]">
                                            <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"></span>
                                            {status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
