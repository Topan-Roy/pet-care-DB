import React, { useState } from "react";
import { Bell, X } from "lucide-react";
import NotificationTabs from "./NotificationTabs";
export default function NotificationPagee() {
  const notifications = [
    {
      id: 1,
      message: "You have received $500 from John Doe",
      time: "Fri, 12:30pm",
      transactionId: "#12345678",
      date: "01-24-2024",
      username: "Rokey",
      accountNumber: "**** **** **** *545",
      accountHolder: "Rokey",
      amount: "$260",
      provider: "XYZ",
    },
    {
      id: 4,
      message: "You have received $500 from John Doe",
      time: "Fri, 12:30pm",
      transactionId: "#12345678",
      date: "01-24-2024",
      username: "Rokey",
      accountNumber: "**** **** **** *545",
      accountHolder: "Rokey",
      amount: "$260",
      provider: "XYZ",
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const handleNotificationClick = (notification) => {
    if (notification.message.toLowerCase().includes("received $")) {
      setSelectedNotification(notification);
      setModalOpen(true);
    }
  };
  return (
    <div className="bg-[#F9FEFF] min-h-screen p-4 relative">
        <NotificationTabs></NotificationTabs>
      <div className="rounded-lg">
        <div className="bg-white rounded-xl">
          <div className="px-6 py-4 border-b border-[#C0C0C0]">
            <h2 className="text-lg font-semibold text-[#004C5A]">Notification</h2>
          </div>
          <div>
            {notifications.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNotificationClick(item)}
                className={`flex items-start gap-2 rounded px-4 py-3 shadow-sm cursor-pointer ${
                  item.message.toLowerCase().includes("received")
                    ? "hover:bg-[#E0F2F7]"
                    : ""
                }`}
              >
                <div className="w-5 h-5 rounded-md bg-[#EAF4F5] flex items-center  justify-center mt-3">
                  <Bell size={24} className="text-[#004C5A]" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">{item.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedNotification && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 bg-black/40 bg-opacity-30 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg p-6 w-[320px] relative"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <h3 className="text-center font-semibold mb-4 border-b border-gray-300 pb-2">
              Transaction Details
            </h3>
            <div className="mb-2 flex justify-between border-b border-gray-200 py-1">
              <span>Transaction ID :</span>
              <span>{selectedNotification.transactionId || "-"}</span>
            </div>
            <div className="mb-2 flex justify-between border-b border-gray-200 py-1">
              <span>Date :</span>
              <span>{selectedNotification.date || "-"}</span>
            </div>
            <div className="mb-2 flex justify-between border-b border-gray-200 py-1">
              <span>User name :</span>
              <span>{selectedNotification.username || "-"}</span>
            </div>
            <div className="mb-2 flex justify-between border-b border-gray-200 py-1">
              <span>A/C number :</span>
              <span>{selectedNotification.accountNumber || "-"}</span>
            </div>
            <div className="mb-2 flex justify-between border-b border-gray-200 py-1">
              <span>A/C holder name :</span>
              <span>{selectedNotification.accountHolder || "-"}</span>
            </div>
            <div className="mb-2 flex justify-between border-b border-gray-200 py-1">
              <span>Transaction amount :</span>
              <span>{selectedNotification.amount || "-"}</span>
            </div>
            <div className="mb-2 flex justify-between py-1">
              <span>Provider name :</span>
              <span>{selectedNotification.provider || "-"}</span>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="flex-1 border border-[#024B5E] text-[#024B5E] py-2 rounded-md hover:bg-[#EAF4F5]">
                Download
              </button>
              <button className="flex-1 bg-[#024B5E] text-white py-2 rounded-md hover:bg-[#01373B]">
                Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
