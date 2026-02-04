import React, { useState, useMemo } from "react";
import { ChevronDown, Search, Download } from "lucide-react";
import BookingDetailsModal from "../Components/BookingDetailsModal";

const paymentData = [
  {
    id: "BK-1018",
    date: "Jan 25, 2026",
    owner: "Carol White",
    sitter: "Sarah Wilson",
    service: "Daycare",
    totalPay: 49.02,
    sitterGross: 46.69,
    taxRet: 10,
    ISR: 10,
    sitterNet: 35.02,
    ownerFee: 2.33,
    ownerFeePct: "5.0%",
    sitterFee: 7.0,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 9.33,
    booked: 25,
    rebooked: 22,
  },
  {
    id: "BK-1002",
    date: "Jan 17, 2026",
    owner: "-",
    sitter: "Tom Anderson",
    service: "Daycare",
    totalPay: 99.99,
    sitterGross: 0,
    taxRet: 0,
    ISR: 10,
    sitterNet: 0,
    ownerFee: 0,
    ownerFeePct: "",
    sitterFee: 0,
    sitterFeePct: "",
    bgCheck: 99.99,
    wuffooNet: 99.99,
    booked: 0,
    rebooked: 0,
  },
  {
    id: "BK-1003",
    date: "Jan 17, 2026",
    owner: "David Brown",
    sitter: "Sarah Wilson",
    service: "Boarding",
    totalPay: 140.16,
    sitterGross: 133.49,
    taxRet: -13.35,
    ISR: 10,
    sitterNet: 100.12,
    ownerFee: 6.67,
    ownerFeePct: "5.0%",
    sitterFee: 20.02,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 26.69,
    booked: 8,
    rebooked: 5,
  },
  {
    id: "BK-1019",
    date: "Jan 14, 2026",
    owner: "Bob Smith",
    sitter: "Mike Miller",
    service: "Boarding",
    totalPay: 83.77,
    sitterGross: 79.78,
    taxRet: -7.98,
    ISR: 10,
    sitterNet: 59.83,
    ownerFee: 3.99,
    ownerFeePct: "5.0%",
    sitterFee: 11.97,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 15.96,
    booked: 3,
    rebooked: 0,
  },
  {
    id: "BK-1000",
    date: "Jan 7, 2026",
    owner: "Bob Smith",
    sitter: "Tom Anderson",
    service: "Daycare",
    totalPay: 67.2,
    sitterGross: 64.0,
    taxRet: -6.4,
    ISR: 10,
    sitterNet: 48.0,
    ownerFee: 3.2,
    ownerFeePct: "5.0%",
    sitterFee: 9.6,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 12.8,
    booked: 3,
    rebooked: 0,
  },
  {
    id: "BK-1014",
    date: "Jan 6, 2026",
    owner: "Bob Smith",
    sitter: "Jessica Taylor",
    service: "Boarding",
    totalPay: 155.19,
    sitterGross: 147.6,
    taxRet: -14.78,
    ISR: 10,
    sitterNet: 110.85,
    ownerFee: 7.39,
    ownerFeePct: "5.0%",
    sitterFee: 22.17,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 29.56,
    booked: 3,
    rebooked: 0,
  },
  {
    id: "BK-1015",
    date: "Jan 2, 2026",
    owner: "Eve Davis",
    sitter: "Mike Miller",
    service: "Boarding",
    totalPay: 134.47,
    sitterGross: 128.07,
    taxRet: -12.81,
    ISR: 10,
    sitterNet: 96.05,
    ownerFee: 6.4,
    ownerFeePct: "5.0%",
    sitterFee: 19.21,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 25.61,
    booked: 1,
    rebooked: 0,
  },
  {
    id: "BK-1004",
    date: "Dec 28, 2025",
    owner: "David Brown",
    sitter: "Tom Anderson",
    service: "Boarding",
    totalPay: 144.17,
    sitterGross: 137.3,
    taxRet: -13.73,
    ISR: 10,
    sitterNet: 102.97,
    ownerFee: 6.87,
    ownerFeePct: "5.0%",
    sitterFee: 20.6,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 29.97,
    booked: 8,
    rebooked: 5,
  },
  {
    id: "BK-1007",
    date: "Dec 26, 2025",
    owner: "Bob Smith",
    sitter: "Jessica Taylor",
    service: "Walking",
    totalPay: 37.71,
    sitterGross: 35.91,
    taxRet: -3.59,
    ISR: 10,
    sitterNet: 26.93,
    ownerFee: 1.8,
    ownerFeePct: "5.0%",
    sitterFee: 5.39,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 7.19,
    booked: 3,
    rebooked: 0,
  },
  {
    id: "BK-1009",
    date: "Dec 25, 2025",
    owner: "Eve Davis",
    sitter: "Jessica Taylor",
    service: "Walking",
    totalPay: 21.82,
    sitterGross: 20.78,
    taxRet: -2.08,
    ISR: 10,
    sitterNet: 15.58,
    ownerFee: 1.04,
    ownerFeePct: "5.0%",
    sitterFee: 3.12,
    sitterFeePct: "15.0%",
    bgCheck: 0,
    wuffooNet: 4.16,
    booked: 1,
    rebooked: 0,
  },
];

const Payment = () => {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState("Today");
  const [serviceType, setServiceType] = useState("All Service");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const filteredData = useMemo(() => {
    const today = new Date(2026, 0, 25);
    return paymentData.filter((item) => {
      const matchesSearch =
        item.id.toLowerCase().includes(search.toLowerCase()) ||
        item.owner.toLowerCase().includes(search.toLowerCase()) ||
        item.sitter.toLowerCase().includes(search.toLowerCase());

      const matchesService =
        serviceType === "All Service" || item.service === serviceType;

      let matchesDate = true;
      if (dateRange !== "All Date") {
        const itemDate = new Date(item.date);
        if (dateRange === "Today") {
          matchesDate = itemDate.toDateString() === today.toDateString();
        } else if (dateRange === "This Week") {
          const sevenDaysAgo = new Date(today);
          sevenDaysAgo.setDate(today.getDate() - 7);
          matchesDate = itemDate >= sevenDaysAgo && itemDate <= today;
        } else if (dateRange === "This Month") {
          matchesDate =
            itemDate.getMonth() === today.getMonth() &&
            itemDate.getFullYear() === today.getFullYear();
        }
      }

      return matchesSearch && matchesService && matchesDate;
    });
  }, [search, serviceType, dateRange]);

  const totals = useMemo(() => {
    return filteredData.reduce(
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
      {
        totalPay: 0,
        sitterGross: 0,
        taxRet: 0,
        sitterNet: 0,
        ownerFee: 0,
        sitterFee: 0,
        bgCheck: 0,
        wuffooNet: 0,
      },
    );
  }, [filteredData]);

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
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                All Payment History
              </h1>

              <div className="flex flex-col md:flex-row items-stretch md:items-end gap-3">
                <div className="relative w-full md:w-[340px]">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-teal-500 transition-colors shadow-sm"
                  />
                </div>

                <div className="flex items-center gap-3 flex-1">
                  <div className="relative">
                    <label className="block text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">
                      Date Range
                    </label>
                    <button
                      onClick={() => {
                        setShowDateDropdown(!showDateDropdown);
                        setShowServiceDropdown(false);
                      }}
                      className="w-44 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center justify-between hover:border-teal-500 transition-colors shadow-sm cursor-pointer"
                    >
                      {dateRange}
                      <ChevronDown
                        size={14}
                        className={`text-gray-400 transition-transform ${showDateDropdown ? "rotate-180" : ""}`}
                      />
                    </button>
                    {showDateDropdown && (
                      <div className="absolute top-full mt-1.5 w-44 bg-white border border-gray-100 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
                        {["Today", "This Week", "This Month", "All Date"].map(
                          (opt) => (
                            <button
                              key={opt}
                              onClick={() => {
                                setDateRange(opt);
                                setShowDateDropdown(false);
                              }}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                            >
                              {opt}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-[12px] font-bold text-gray-500 mb-1 uppercase tracking-wider">
                      SERVICE TYPE
                    </label>
                    <button
                      onClick={() => {
                        setShowServiceDropdown(!showServiceDropdown);
                        setShowDateDropdown(false);
                      }}
                      className="w-44 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center justify-between hover:border-teal-500 transition-colors shadow-sm cursor-pointer"
                    >
                      {serviceType}
                      <ChevronDown
                        size={14}
                        className={`text-gray-400 transition-transform ${showServiceDropdown ? "rotate-180" : ""}`}
                      />
                    </button>
                    {showServiceDropdown && (
                      <div className="absolute top-full mt-1.5 w-44 bg-white border border-gray-100 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
                        {["All Service", "Boarding", "Daycare", "Walking"].map(
                          (opt) => (
                            <button
                              key={opt}
                              onClick={() => {
                                setServiceType(opt);
                                setShowServiceDropdown(false);
                              }}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                            >
                              {opt}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  <button className="ml-auto flex items-center gap-2 px-6 py-2.5 bg-[#2E7C83] text-white rounded-lg text-sm font-semibold hover:bg-[#035F75] transition-all shadow-md active:scale-95 self-end cursor-pointer">
                    <Download size={18} />
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Integrated Table Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 overflow-auto custom-scrollbar min-w-0 relative">
              <table className="w-full text-[13px] ">
                <thead className="sticky top-0 z-40 bg-white">
                  <tr className="border-b border-gray-100">
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white first:rounded-tl-2xl">
                      ID
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      Date
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      Owner
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      Sitter
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 text-center bg-white">
                      Service
                    </th>
                    <th className="px-4 py-5 font-bold text-[#059669] bg-white">
                      Total Pay
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      Sitter Gross
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      IVA %
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      ISR %
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      Sitter Net
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      Owner Fee
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 bg-white">
                      Sitter Fee
                    </th>
                    <th className="px-4 py-5 font-bold text-gray-600 text-center bg-white">
                      BG Check
                    </th>
                    <th className="px-4 py-5 font-bold text-[#2563EB] bg-white">
                      <div className="flex items-center gap-1">
                        Wuffoos Net
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 4V20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 19L17 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="px-2 py-5 font-bold text-gray-600 bg-white">
                      <div className="flex items-center justify-center gap-1">
                        Booked
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 4V20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 19L17 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="px-2 py-5 font-bold text-gray-600 bg-white last:rounded-tr-2xl">
                      <div className="flex items-center justify-center gap-1">
                        Rebooked
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 4V20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 19L17 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 bg-white">
                  {filteredData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors group cursor-pointer"
                      onClick={() => handleRowClick(row)}
                    >
                      <td className="px-4 py-6 font-bold text-[#2563EB] whitespace-nowrap">
                        {row.id}{" "}
                        <span className="text-[10px] ml-1 opacity-70">›</span>
                      </td>
                      <td className="px-4 py-6 text-gray-500 whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="px-4 py-6 font-semibold text-gray-800 whitespace-nowrap">
                        {row.owner}
                      </td>
                      <td className="px-4 py-6 font-semibold text-gray-800 whitespace-nowrap">
                        {row.sitter}
                      </td>
                      <td className="px-4 py-6 font-semibold text-center whitespace-nowrap">
                        {getServiceBadge(row.service)}
                      </td>
                      <td className="px-4 py-6 font-bold text-[#059669] whitespace-nowrap">
                        {formatCurrency(row.totalPay)}
                      </td>
                      <td className="px-4 py-6 text-gray-600 whitespace-nowrap">
                        {formatCurrency(row.sitterGross)}
                      </td>
                      <td className="px-4 py-6 text-[#DD4B39] font-medium whitespace-nowrap">
                        {row.taxRet === 0 ? (
                          <span className="text-gray-300">-</span>
                        ) : (
                          formatCurrency(row.taxRet, true)
                        )}
                      </td>
                      <td className="px-4 py-6 text-[#DD4B39] font-medium whitespace-nowrap">
                        {row.ISR === 0 ? (
                          <span className="text-gray-300">-</span>
                        ) : (
                          formatCurrency(row.ISR, true)
                        )}
                      </td>
                      <td className="px-4 py-6 font-bold text-gray-900 whitespace-nowrap">
                        {formatCurrency(row.sitterNet)}
                      </td>
                      <td className="px-4 py-6 text-gray-400 text-[11px] whitespace-nowrap">
                        {row.ownerFee === 0
                          ? "-"
                          : `${formatCurrency(row.ownerFee)} (${row.ownerFeePct})`}
                      </td>
                      <td className="px-4 py-6 text-gray-400 text-[11px] whitespace-nowrap">
                        {row.sitterFee === 0
                          ? "-"
                          : `${formatCurrency(row.sitterFee)} (${row.sitterFeePct})`}
                      </td>
                      <td className="px-4 py-6 text-gray-400 text-center whitespace-nowrap">
                        {formatCurrency(row.bgCheck)}
                      </td>
                      <td className="px-4 py-6 font-bold text-[#2563EB] whitespace-nowrap text-sm">
                        {formatCurrency(row.wuffooNet)}
                      </td>
                      <td className="px-2 py-6 text-center text-gray-600 whitespace-nowrap font-medium">
                        {String(row.booked).padStart(2, "0")}
                      </td>
                      <td className="px-2 py-6 text-center text-gray-600 whitespace-nowrap font-medium">
                        {String(row.rebooked).padStart(2, "0")}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="sticky bottom-0 z-40 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.03)] selection:bg-none">
                  <tr className="bg-white font-bold border-t border-gray-200">
                    <td
                      className="px-4 py-5 text-gray-500 text-[10px] uppercase tracking-widest text-right bg-white first:rounded-bl-2xl"
                      colSpan={5}
                    >
                      Totals
                    </td>
                    <td className="px-4 py-5 text-[#059669] text-base bg-white">
                      {formatCurrency(totals.totalPay)}
                    </td>
                    <td className="px-4 py-5 text-gray-800 font-bold bg-white">
                      {formatCurrency(totals.sitterGross)}
                    </td>
                    <td className="px-4 py-5 text-[#DD4B39] font-bold bg-white">
                      {formatCurrency(totals.taxRet)}
                    </td>
                    <td className="px-4 py-5 text-gray-900 text-base font-black bg-white">
                      {formatCurrency(totals.sitterNet)}
                    </td>
                    <td className="px-4 py-5 text-gray-400 font-normal bg-white">
                      {formatCurrency(totals.ownerFee)}
                    </td>
                    <td className="px-4 py-5 text-gray-400 font-normal bg-white">
                      {formatCurrency(totals.sitterFee)}
                    </td>
                    <td className="px-4 py-5 text-gray-600 font-bold text-center bg-white">
                      {formatCurrency(totals.bgCheck)}
                    </td>
                    <td className="px-4 py-5 bg-blue-50 text-[#2563EB] text-lg font-black">
                      {formatCurrency(totals.wuffooNet)}
                    </td>
                    <td
                      className="px-2 py-5 bg-white last:rounded-br-2xl"
                      colSpan={2}
                    ></td>
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

export default Payment;
