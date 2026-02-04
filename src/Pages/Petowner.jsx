import React, { useState } from "react";
import {
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Download,
} from "lucide-react";
import { Link } from "react-router";
import PetOwnerDetailsModal from "../Components/PetOwnerDetailsModal";
export default function Petowner() {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("This Month");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Service Type");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);

  const monthOptions = ["This Month", "This Week", "Today"];
  const serviceOptions = ["All Services", "Boarding", "Daycare", "Walking"];
  const handleMonthSelect = (option) => {
    setSelectedMonth(option);
    setIsMonthDropdownOpen(false);
  };
  const handleServiceSelect = (option) => {
    setSelectedService(option);
    setIsServiceDropdownOpen(false);
  };

  const DATA = [
    {
      id: 1,
      name: "Doctor Jamie F. Jones",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=1",
      pets: "Max",
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      payment: 258,
      bookedDay: "2 Days",
    },
    {
      id: 2,
      name: "Kristin Watson",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=2",
      pets: "Max",
      completed: 5,
      recooked: 1,
      cancel: 0,
      upcoming: 3,
      payment: 450,
      bookedDay: "5 Days",
    },
    {
      id: 3,
      name: "Cody Fisher",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=3",
      pets: "Max",
      completed: 3,
      recooked: 0,
      cancel: 1,
      upcoming: 1,
      payment: 320,
      bookedDay: "3 Days",
    },
    {
      id: 4,
      name: "Jerome Bell",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=4",
      pets: "Max",
      completed: 8,
      recooked: 3,
      cancel: 2,
      upcoming: 4,
      payment: 890,
      bookedDay: "8 Days",
    },
    {
      id: 5,
      name: "Cameron Williamson",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=5",
      pets: "Max",
      completed: 2,
      recooked: 1,
      cancel: 0,
      upcoming: 2,
      payment: 258,
      bookedDay: "2 Days",
    },
    {
      id: 6,
      name: "Esther Howard",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=6",
      pets: "Max",
      completed: 4,
      recooked: 2,
      cancel: 1,
      upcoming: 3,
      payment: 560,
      bookedDay: "4 Days",
    },
    {
      id: 7,
      name: "Jenny Wilson",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=7",
      pets: "Max",
      completed: 1,
      recooked: 0,
      cancel: 0,
      upcoming: 1,
      payment: 120,
      bookedDay: "1 Days",
    },
    {
      id: 8,
      name: "Robert Fox",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=8",
      pets: "Max",
      completed: 6,
      recooked: 1,
      cancel: 3,
      upcoming: 2,
      payment: 670,
      bookedDay: "6 Days",
    },
    {
      id: 9,
      name: "Guy Hawkins",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=9",
      pets: "Max",
      completed: 2,
      recooked: 2,
      cancel: 2,
      upcoming: 2,
      payment: 258,
      bookedDay: "2 Days",
    },
    {
      id: 10,
      name: "Floyd Miles",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=10",
      pets: "Max",
      completed: 3,
      recooked: 0,
      cancel: 1,
      upcoming: 4,
      payment: 340,
      bookedDay: "3 Days",
    },
    {
      id: 11,
      name: "Floyd Miles",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=10",
      pets: "Max",
      completed: 3,
      recooked: 0,
      cancel: 1,
      upcoming: 4,
      payment: 340,
      bookedDay: "3 Days",
    },
    {
      id: 12,
      name: "Floyd Miles",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=10",
      pets: "Max",
      completed: 3,
      recooked: 0,
      cancel: 1,
      upcoming: 4,
      payment: 340,
      bookedDay: "3 Days",
    },
    {
      id: 13,
      name: "Floyd Miles",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=10",
      pets: "Max",
      completed: 3,
      recooked: 0,
      cancel: 1,
      upcoming: 4,
      payment: 340,
      bookedDay: "3 Days",
    },
    {
      id: 14,
      name: "Floyd Miles",
      ID: 43178,
      img: "https://i.pravatar.cc/150?u=10",
      pets: "Max",
      completed: 3,
      recooked: 0,
      cancel: 1,
      upcoming: 4,
      payment: 340,
      bookedDay: "3 Days",
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
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E0E0E0] rounded-lg shadow-lg z-50 py-1 ">
                  {monthOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleMonthSelect(option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors cursor-pointer ${selectedMonth === option ? "text-teal-600 font-medium bg-teal-50" : "text-gray-700"}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-lg text-sm text-gray-600 hover:bg-gray-50 min-w-[150px] justify-between cursor-pointer"
            >
              <span>{selectedService}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isServiceDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isServiceDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsServiceDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E0E0E0] rounded-lg shadow-lg z-50 py-1">
                  {serviceOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleServiceSelect(option)}
                      className={`w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${selectedService === option ? "text-teal-600 font-medium bg-teal-50" : "text-gray-700"}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <button className="ml-auto flex items-center gap-2 px-6 py-2.5 bg-[#2E7C83] text-white rounded-lg text-sm font-semibold hover:bg-[#035F75] transition-all shadow-md active:scale-95 self-end cursor-pointer">
            <Download size={18} />
            Export
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
                <th className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    Payment
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
                <th className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    Booked Day
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
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBEBEB]">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.img}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{row.name}</p>
                        <p className="text-xs text-gray-500"> ID:{row.ID}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.pets}
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
                  <td className="px-6 py-4 text-center font-medium text-gray-900">
                    ${row.payment}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {row.bookedDay}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => {
                        setSelectedOwner(row);
                        setIsModalOpen(true);
                      }}
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

      <PetOwnerDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        owner={selectedOwner}
      />
    </div>
  );
}
