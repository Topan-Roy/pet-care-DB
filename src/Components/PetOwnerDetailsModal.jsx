import React from "react";
import { X, Mail, Phone, Calendar, DollarSign, Clock, Dog } from "lucide-react";

export default function PetOwnerDetailsModal({ isOpen, onClose, owner }) {
  if (!isOpen || !owner) return null;
  const pets = [
    {
      name: "Bailey",
      breed: "German Shepherd",
      initial: "B",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Jac k",
      breed: "Golden Retriever",
      initial: "J",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Jac k",
      breed: "Dachshund",
      initial: "J",
      color: "bg-orange-100 text-orange-600",
    },
  ];
  const recentBookings = [
    {
      date: "Jan 22, 2026",
      service: "Daycare",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-600",
    },
    {
      date: "Jan 20, 2026",
      service: "Boarding",
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      date: "Jan 19, 2026",
      service: "Walking",
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      date: "Dec 28, 2025",
      service: "Walking",
      status: "Upcoming",
      statusColor: "bg-blue-100 text-blue-600",
    },
    {
      date: "Dec 24, 2025",
      service: "Walking",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-600",
    },
  ];

  const recentPayments = [
    { date: "Jan 20, 2026", method: "PayPal", amount: "$260" },
    { date: "Jan 19, 2026", method: "Mastercard", amount: "$25" },
    { date: "Dec 19, 2025", method: "Mastercard", amount: "$260" },
    { date: "Dec 18, 2025", method: "Amex", amount: "$90" },
    { date: "Dec 16, 2025", method: "Amex", amount: "$65" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Owner Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <div className="p-8 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-10">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold">
                {owner.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  {owner.name} <span className="text-[#4B5563] font-bold text-lg">ID: 43178</span>
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span className="text-sm">owner19@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span className="text-sm">(555) 870-2186</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-gray-50 p-4 rounded-xl min-w-[140px] border border-gray-100">
                <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wider">
                  Total Spend
                </p>
                <p className="text-xl font-bold text-gray-900">
                  ${owner.payment?.toLocaleString() || "3,055"}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl min-w-[140px] border border-gray-100">
                <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wider">
                  Booked Days
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {owner.bookedDay || "55"}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1 bg-gray-100 rounded text-gray-500">
                <Dog size={16} />
              </div>
              <h4 className="font-bold text-gray-800 text-xs tracking-widest">
                Pets
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pets.map((pet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${pet.color} rounded-full flex items-center justify-center text-xl font-bold`}
                  >
                    {pet.initial}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{pet.name}</h5>
                    <p className="text-sm text-gray-400">{pet.breed}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={18} className="text-gray-400" />
                <h4 className="font-bold text-gray-800 text-sm">
                  Recent Bookings
                </h4>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Service</th>
                      <th className="px-4 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentBookings.map((booking, idx) => (
                      <tr key={idx} className="text-gray-600">
                        <td className="px-4 py-3">{booking.date}</td>
                        <td className="px-4 py-3 font-medium">
                          {booking.service}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span
                            className={`px-3 py-1 rounded-lg text-xs font-semibold ${booking.statusColor}`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <DollarSign size={18} className="text-gray-400" />
                <h4 className="font-bold text-gray-800 text-sm">
                  Recent Payments
                </h4>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Method</th>
                      <th className="px-4 py-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentPayments.map((payment, idx) => (
                      <tr key={idx} className="text-gray-600">
                        <td className="px-4 py-3">{payment.date}</td>
                        <td className="px-4 py-3 font-medium">
                          {payment.method}
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-gray-900">
                          {payment.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
