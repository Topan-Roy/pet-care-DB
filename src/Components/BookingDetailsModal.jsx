import React from 'react';
import { X } from 'lucide-react';

const BookingDetailsModal = ({ isOpen, onClose, booking }) => {
    if (!isOpen || !booking) return null;

    const formatCurrency = (val) => {
        if (val === 0 || !val) return "-";
        return `$${Math.abs(val).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40  transition-opacity"
                onClick={onClose}
            />
            <div className="relative bg-white w-full max-w-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-5 flex items-center justify-between border-b border-gray-50 flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-900">Booking Details: {booking.id}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pt-3 space-y-8">
                    <div className="bg-[#F9FAFB] rounded-2xl p-6 grid grid-cols-2 gap-y-4">
                        <div>
                            <p className="text-[12px] font-normal text-gray-400 tracking-wider mb-1">Reference</p>
                            <p className="text-sm font-bold text-gray-800">REF-{booking.id.split('-')[1]}Y0MW8G</p>
                        </div>
                        <div>
                            <p className="text-[12px] font-normal text-gray-400  tracking-wider mb-1">Date Completed</p>
                            <p className="text-sm font-bold text-gray-800">{booking.date}, 01:54 AM</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Service</p>
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-bold rounded-lg border border-blue-100">
                                {booking.service}
                            </span>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Status</p>
                            <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-[11px] font-bold rounded-lg border border-green-100">
                                Completed
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-gray-900">Owner</p>
                            <div>
                                <p className="text-[14px] font-normal text-gray-800">{booking.owner || "-"}</p>
                                <p className="text-[12px] text-gray-400 font-medium">ID: o1</p>
                                <p className="text-[12px] text-gray-400 font-medium mt-1">Total Bookings: 12</p>
                                <p className="text-[12px] text-gray-400 font-medium">Rebooked: 10</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-gray-900">Sitter</p>
                            <div>
                                <p className="text-[14px] font-normal text-gray-800">{booking.sitter}</p>
                                <p className="text-[12px] text-gray-400 font-medium">ID: s4</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 ">
                        <p className="text-xs font-bold text-gray-900">Financial Breakdown</p>

                        {/* Total Payment Banner */}
                        <div className="bg-[#F0FDF4] border border-green-100 rounded-xl px-3 py-3 flex items-center justify-between">
                            <p className="text-sm font-normal text-green-800">Total Payment (Money In)</p>
                            <p className="text-lg font-normal text-green-700">{formatCurrency(booking.totalPay)}</p>
                        </div>

                        {/* Sitter Financials Container */}
                        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-gray-50/50 px-3 py-2 border-b border-gray-50">
                                <p className="text-[12px] font-normal text-gray-500 tracking-widest">Sitter Financials</p>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-gray-500 text-[12px] font-normal">Gross Income</span>
                                    <span className="text-gray-800 text-[12px] font-normal">{formatCurrency(booking.sitterGross)}</span>
                                </div>
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-red-500 text-[12px] font-normal">Tax Retention (10%)</span>
                                    <span className="text-red-500 text-[12px] font-normal">-{formatCurrency(Math.abs(booking.taxRet))}</span>
                                </div>
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-red-500">Platform Fee (15.0%)</span>
                                    <span className="text-red-500">-{formatCurrency(booking.sitterFee)}</span>
                                </div>
                                <div className="pt-2 border-t border-gray-50 flex justify-between items-end">
                                    <span className="text-sm font-semibold text-gray-900">Sitter Net Income</span>
                                    <span className="text-base font-semibold text-gray-900">{formatCurrency(booking.sitterNet)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Wuffoos Platform Revenue Container */}
                        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-gray-50/50 px-4 py-3 border-b border-gray-50">
                                <p className="text-[12px] font-medium text-[#374151] tracking-widest">Wuffoos Platform Revenue</p>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-gray-500 text-[12px] font-normal">Owner Fee ( 5.0% )</span>
                                    <span className="text-gray-800 text-[12px] font-normal">{formatCurrency(booking.ownerFee)}</span>
                                </div>
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-gray-500 text-[12px] font-normal">Sitter Fee ( 15.0% )</span>
                                    <span className="text-gray-800 text-[12px] font-normal">{formatCurrency(booking.sitterFee)}</span>
                                </div>
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-gray-500 text-[12px] font-normal">ID Validation</span>
                                    <span className="text-gray-800 text-[12px] font-normal">$2.50</span>
                                </div>
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-gray-500 text-[12px] font-normal">Background Check</span>
                                    <span className="text-gray-800 text-[12px] font-normal">{formatCurrency(booking.bgCheck)}</span>
                                </div>
                                <div className="pt-2 border-t border-gray-50 flex justify-between items-end">
                                    <span className="text-sm font-bold text-blue-600">Wuffoos Net Income</span>
                                    <span className="text-base font-black text-blue-700">{formatCurrency(booking.wuffooNet)}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetailsModal;
