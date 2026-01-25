import React, { useState, useMemo } from "react";
import { ChevronDown, Search, Download } from "lucide-react";
import BookingDetailsModal from "../Components/BookingDetailsModal";

const paymentData = [
  { id: 'BK-1018', date: 'Jan 25, 2026', owner: 'Carol White', sitter: 'Sarah Wilson', service: 'Daycare', totalPay: 49.02, sitterGross: 46.69, taxRet: 0, sitterNet: 35.02, ownerFee: 2.33, ownerFeePct: '5.0%', sitterFee: 7.00, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 9.33, booked: 25, rebooked: 22 },
  { id: 'BK-1002', date: 'Jan 17, 2026', owner: '-', sitter: 'Tom Anderson', service: 'Daycare', totalPay: 99.99, sitterGross: 0, taxRet: 0, sitterNet: 0, ownerFee: 0, ownerFeePct: '', sitterFee: 0, sitterFeePct: '', bgCheck: 99.99, wuffooNet: 99.99, booked: 0, rebooked: 0 },
  { id: 'BK-1003', date: 'Jan 17, 2026', owner: 'David Brown', sitter: 'Sarah Wilson', service: 'Boarding', totalPay: 140.16, sitterGross: 133.49, taxRet: -13.35, sitterNet: 100.12, ownerFee: 6.67, ownerFeePct: '5.0%', sitterFee: 20.02, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 26.69, booked: 8, rebooked: 5 },
  { id: 'BK-1019', date: 'Jan 14, 2026', owner: 'Bob Smith', sitter: 'Mike Miller', service: 'Boarding', totalPay: 83.77, sitterGross: 79.78, taxRet: -7.98, sitterNet: 59.83, ownerFee: 3.99, ownerFeePct: '5.0%', sitterFee: 11.97, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 15.96, booked: 3, rebooked: 0 },
  { id: 'BK-1000', date: 'Jan 7, 2026', owner: 'Bob Smith', sitter: 'Tom Anderson', service: 'Daycare', totalPay: 67.20, sitterGross: 64.00, taxRet: -6.40, sitterNet: 48.00, ownerFee: 3.20, ownerFeePct: '5.0%', sitterFee: 9.60, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 12.80, booked: 3, rebooked: 0 },
  { id: 'BK-1014', date: 'Jan 6, 2026', owner: 'Bob Smith', sitter: 'Jessica Taylor', service: 'Boarding', totalPay: 155.19, sitterGross: 147.60, taxRet: -14.78, sitterNet: 110.85, ownerFee: 7.39, ownerFeePct: '5.0%', sitterFee: 22.17, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 29.56, booked: 3, rebooked: 0 },
  { id: 'BK-1015', date: 'Jan 2, 2026', owner: 'Eve Davis', sitter: 'Mike Miller', service: 'Boarding', totalPay: 134.47, sitterGross: 128.07, taxRet: -12.81, sitterNet: 96.05, ownerFee: 6.40, ownerFeePct: '5.0%', sitterFee: 19.21, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 25.61, booked: 1, rebooked: 0 },
  { id: 'BK-1004', date: 'Dec 28, 2025', owner: 'David Brown', sitter: 'Tom Anderson', service: 'Boarding', totalPay: 144.17, sitterGross: 137.30, taxRet: -13.73, sitterNet: 102.97, ownerFee: 6.87, ownerFeePct: '5.0%', sitterFee: 20.60, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 29.97, booked: 8, rebooked: 5 },
  { id: 'BK-1007', date: 'Dec 26, 2025', owner: 'Bob Smith', sitter: 'Jessica Taylor', service: 'Walking', totalPay: 37.71, sitterGross: 35.91, taxRet: -3.59, sitterNet: 26.93, ownerFee: 1.80, ownerFeePct: '5.0%', sitterFee: 5.39, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 7.19, booked: 3, rebooked: 0 },
  { id: 'BK-1009', date: 'Dec 25, 2025', owner: 'Eve Davis', sitter: 'Jessica Taylor', service: 'Walking', totalPay: 21.82, sitterGross: 20.78, taxRet: -2.08, sitterNet: 15.58, ownerFee: 1.04, ownerFeePct: '5.0%', sitterFee: 3.12, sitterFeePct: '15.0%', bgCheck: 0, wuffooNet: 4.16, booked: 1, rebooked: 0 },
];

const RecentPayment = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const totals = useMemo(() => {
    return paymentData.reduce(
      (acc, curr) => ({
        totalPay: acc.totalPay + (curr.totalPay || 0),
        sitterGross: acc.sitterGross + (curr.sitterGross || 0),
        taxRet: acc.taxRet + (curr.taxRet || 0),
        sitterNet: acc.sitterNet + (curr.sitterNet || 0),
        ownerFee: acc.ownerFee + (curr.ownerFee || 0),
        sitterFee: acc.sitterFee + (curr.sitterFee || 0),
        bgCheck: acc.bgCheck + (curr.bgCheck || 0),
        wuffooNet: acc.wuffooNet + (curr.wuffooNet || 0),
      }),
      { totalPay: 0, sitterGross: 0, taxRet: 0, sitterNet: 0, ownerFee: 0, sitterFee: 0, bgCheck: 0, wuffooNet: 0 }
    );
  }, []);

  const formatCurrency = (val, isTax = false) => {
    if (val === 0) return "-";
    const formatted = Math.abs(val).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const sign = val < 0 ? "-" : "";
    return `${sign}$${formatted}`;
  };

  const getServiceBadge = (service) => {
    return (
      <span className="px-3 py-1 rounded-full text-[14px] font-medium text-gray-500 border bg-[#F3F4F6] border-gray-100">
        {service}
      </span>
    );
  };

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
          width: 8px;
          background-color: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
          -ms-overflow-style: none;
        }
        .custom-scrollbar::-webkit-scrollbar:horizontal {
          display: none;
        }
      `}</style>

      <div className="p-3">
        <div className="flex flex-col w-full h-screen overflow-hidden bg-[#F9FAFB] rounded-2xl">
          <div className="p-4 md:p-6 w-full flex flex-col flex-1 min-h-0">
            {/* Header Area */}
            <div className="max-w-full mx-auto w-full mb-6 flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 mb-6 font-Inter">Recent Payment History</h1>
            </div>

            {/* Integrated Table Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 overflow-auto custom-scrollbar min-w-0 relative">
              <table className="w-full text-[13px] text-left">
                <thead className="sticky top-0 z-40 bg-white">
                  <tr className="border-b border-gray-100">
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white first:rounded-tl-2xl">ID</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Date</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Owner</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Sitter</th>
                    <th className="px-4 py-5 font-bold text-gray-600 text-center bg-white">Service</th>
                    <th className="px-4 py-5 font-bold text-[#059669] bg-white">Total Pay</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Sitter Gross</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Tax Ret.</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Sitter Net</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Owner Fee</th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">Sitter Fee</th>
                    <th className="px-4 py-5 font-bold text-gray-600 text-center bg-white">BG Check</th>
                    <th className="px-4 py-5 font-bold text-[#2563EB] bg-white">Wuffoos Net</th>
                    <th className="px-2 py-5 font-bold text-gray-600 text-center bg-white">Booked</th>
                    <th className="px-2 py-5 font-bold text-gray-600 text-center bg-white last:rounded-tr-2xl">Rebooked</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 bg-white">
                  {paymentData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors group cursor-pointer"
                      onClick={() => handleRowClick(row)}
                    >
                      <td className="px-4 py-6 font-bold text-[#2563EB] whitespace-nowrap">
                        {row.id} <span className="text-[10px] ml-1 opacity-70">›</span>
                      </td>
                      <td className="px-4 py-6 text-gray-500 whitespace-nowrap">{row.date}</td>
                      <td className="px-4 py-6 font-semibold text-gray-800 whitespace-nowrap">{row.owner}</td>
                      <td className="px-4 py-6 font-semibold text-gray-800 whitespace-nowrap">{row.sitter}</td>
                      <td className="px-4 py-6 font-semibold text-center whitespace-nowrap">{getServiceBadge(row.service)}</td>
                      <td className="px-4 py-6 font-bold text-[#059669] whitespace-nowrap">{formatCurrency(row.totalPay)}</td>
                      <td className="px-4 py-6 text-gray-600 whitespace-nowrap">{formatCurrency(row.sitterGross)}</td>
                      <td className="px-4 py-6 text-[#DD4B39] font-medium whitespace-nowrap">
                        {row.taxRet === 0 ? <span className="text-gray-300">-</span> : formatCurrency(row.taxRet, true)}
                      </td>
                      <td className="px-4 py-6 font-bold text-gray-900 whitespace-nowrap">{formatCurrency(row.sitterNet)}</td>
                      <td className="px-4 py-6 text-gray-400 text-[11px] whitespace-nowrap">
                        {row.ownerFee === 0 ? "-" : `${formatCurrency(row.ownerFee)} (${row.ownerFeePct})`}
                      </td>
                      <td className="px-4 py-6 text-gray-400 text-[11px] whitespace-nowrap">
                        {row.sitterFee === 0 ? "-" : `${formatCurrency(row.sitterFee)} (${row.sitterFeePct})`}
                      </td>
                      <td className="px-4 py-6 text-gray-400 text-center whitespace-nowrap">{formatCurrency(row.bgCheck)}</td>
                      <td className="px-4 py-6 font-bold text-[#2563EB] whitespace-nowrap text-sm">{formatCurrency(row.wuffooNet)}</td>
                      <td className="px-2 py-6 text-center text-gray-600 whitespace-nowrap font-medium">{String(row.booked).padStart(2, '0')}</td>
                      <td className="px-2 py-6 text-center text-gray-600 whitespace-nowrap font-medium">{String(row.rebooked).padStart(2, '0')}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="sticky bottom-0 z-40 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.03)] selection:bg-none">
                  <tr className="bg-white font-bold border-t border-gray-200">
                    <td className="px-4 py-5 text-gray-500 text-[10px] uppercase tracking-widest text-right bg-white first:rounded-bl-2xl" colSpan={5}>Totals</td>
                    <td className="px-4 py-5 text-[#059669] text-base bg-white">{formatCurrency(totals.totalPay)}</td>
                    <td className="px-4 py-5 text-gray-800 font-bold bg-white">{formatCurrency(totals.sitterGross)}</td>
                    <td className="px-4 py-5 text-[#DD4B39] font-bold bg-white">{formatCurrency(totals.taxRet)}</td>
                    <td className="px-4 py-5 text-gray-900 text-base font-black bg-white">{formatCurrency(totals.sitterNet)}</td>
                    <td className="px-4 py-5 text-gray-400 font-normal bg-white">{formatCurrency(totals.ownerFee)}</td>
                    <td className="px-4 py-5 text-gray-400 font-normal bg-white">{formatCurrency(totals.sitterFee)}</td>
                    <td className="px-4 py-5 text-gray-600 font-bold text-center bg-white">{formatCurrency(totals.bgCheck)}</td>
                    <td className="px-4 py-5 bg-blue-50 text-[#2563EB] text-lg font-black">{formatCurrency(totals.wuffooNet)}</td>
                    <td className="px-2 py-5 bg-white last:rounded-br-2xl" colSpan={2}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

      <BookingDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        booking={selectedBooking}
      />
    </>
  );
};

export default RecentPayment;
