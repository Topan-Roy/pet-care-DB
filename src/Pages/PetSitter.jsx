import React, { useState } from "react";
import {
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Download,
  Star,
} from "lucide-react";
import { Link } from "react-router";
import SitterDetailsSidebar from "../Components/SitterDetailsSidebar";

export default function PetSitter() {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [selectedSitter, setSelectedSitter] = useState(null);

  // Filter States
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("This Month");

  const monthOptions = [
    "This Month",
    "Last Month",
    "Last 3 Months",
    "This Year",
  ];

  const handleMonthSelect = (option) => {
    setSelectedMonth(option);
    setIsMonthDropdownOpen(false);
  };

  // Sample data matching the screenshot
  const DATA = [
    {
      id: 1,
      name: "Adriana torres",
      img: "https://i.pravatar.cc/150?u=20",
      rating: 4.6,
      completed: 3,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 2,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=21",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 3,
      name: "Adriana torres",
      img: "https://i.pravatar.cc/150?u=22",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 4,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=23",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 5,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=24",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 6,
      name: "Adriana Jamie",
      img: "https://i.pravatar.cc/150?u=25",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 7,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=26",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 8,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=27",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 9,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=28",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 10,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=29",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 11,
      name: "Adriana Jamie",
      img: "https://i.pravatar.cc/150?u=29",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 12,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=29",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 13,
      name: "Adriana Jamie",
      img: "https://i.pravatar.cc/150?u=29",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
    {
      id: 14,
      name: "Doctor Jamie",
      img: "https://i.pravatar.cc/150?u=29",
      rating: 4.6,
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      gross: 12,
      tax: 12,
      fees: 12,
      netIncome: 12345,
    },
  ];
  const ROW_OPTIONS = [10, 15, 20];
  const filtered = DATA.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const rows = filtered.slice(start, start + rowsPerPage);
  return (
    <div className="p-4 bg-[#F9FAFB] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-[350px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#F5F6FA] border border-[#E0E0E0] rounded-full text-sm text-gray-700 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-lg text-sm text-gray-600 hover:bg-gray-50 min-w-[140px] justify-between cursor-pointer"
            >
              <span>{selectedMonth}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isMonthDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMonthDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsMonthDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E0E0E0] rounded-lg shadow-lg z-50 py-1">
                  {monthOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleMonthSelect(option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${selectedMonth === option ? "text-teal-600 font-medium bg-teal-50" : "text-gray-700"}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-white border border-[#E0E0E0] rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-[#EBEBEB] overflow-hidden">
        <div className="overflow-x-auto overflow-y-auto max-h-[650px]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#F9FAFB] text-gray-700 font-semibold border-b border-[#EBEBEB] sticky top-0 z-20">
              <tr>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4 text-center">Pets</th>
                <th className="px-6 py-4 text-center">Completed</th>
                <th className="px-6 py-4 text-center"> Rebooked</th>
                <th className="px-6 py-4 text-center">Cancel</th>
                <th className="px-6 py-4 text-center">Upcoming</th>
                <th className="px-6 py-4 text-center">gross</th>
                <th className="px-6 py-4 text-center">Tax</th>
                <th className="px-6 py-4 text-center">Fees</th>
                <th className="px-6 py-4 text-center">Net Income</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBEBEB]">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-1">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.img}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                      />
                      <p className="font-medium text-gray-900">{row.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      <span className="text-gray-600">{row.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.completed}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.recooked}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.cancel}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.upcoming}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    ${row.gross}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    ${row.tax}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    ${row.fees}
                  </td>
                  <td className="px-6 py-4 text-center font-medium text-gray-900">
                    ${row.netIncome.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => setSelectedSitter(row)}
                      className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end gap-6 items-center mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Rows Per Page</span>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="border border-[#E0E0E0] bg-white rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            {ROW_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span>
            Page {page} Of {totalPages}
          </span>
          <div className="flex gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="p-1.5 border border-[#E0E0E0] rounded-md bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              className="p-1.5 border border-[#E0E0E0] rounded-md bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <SitterDetailsSidebar
        isOpen={!!selectedSitter}
        onClose={() => setSelectedSitter(null)}
        sitter={selectedSitter}
      />
    </div>
  );
}
