import React, { useState } from "react";
import { CreditCard, Download, Mail, MapPin, PrinterCheck, Search, User } from "lucide-react";
const paymentHistoryData = [
  {
    id: 1,
    date: "14:15:20 21/03/2025",
    transactionId: "93451",
    petSitter: "Guy Hawkins",
    petOwner: "Kristin Watson",
    amount: "$900",
    received: "$855",
  },
  {
    id: 2,
    date: "14:15:20 21/03/2025",
    transactionId: "93452",
    petSitter: "Savannah Nguyen",
    petOwner: "Cody Fisher",
    amount: "$700",
    received: "$665",
  },
  {
    id: 3,
    date: "14:15:20 21/03/2025",
    transactionId: "93453",
    petSitter: "Eleanor Pena",
    petOwner: "Jane Cooper",
    amount: "$500",
    received: "$475",
  },
  {
    id: 4,
    date: "14:15:20 21/03/2025",
    transactionId: "93454",
    petSitter: "Robert Fox",
    petOwner: "Wade Warren",
    amount: "$1200",
    received: "$1140",
  },
  {
    id: 1,
    date: "14:15:20 21/03/2025",
    transactionId: "93451",
    petSitter: "Guy Hawkins",
    petOwner: "Kristin Watson",
    amount: "$900",
    received: "$855",
  },
  {
    id: 2,
    date: "14:15:20 21/03/2025",
    transactionId: "93452",
    petSitter: "Savannah Nguyen",
    petOwner: "Cody Fisher",
    amount: "$700",
    received: "$665",
  },
  {
    id: 3,
    date: "14:15:20 21/03/2025",
    transactionId: "93453",
    petSitter: "Eleanor Pena",
    petOwner: "Jane Cooper",
    amount: "$500",
    received: "$475",
  },
  {
    id: 4,
    date: "14:15:20 21/03/2025",
    transactionId: "93454",
    petSitter: "Robert Fox",
    petOwner: "Wade Warren",
    amount: "$1200",
    received: "$1140",
  },
  {
    id: 1,
    date: "14:15:20 21/03/2025",
    transactionId: "93451",
    petSitter: "Guy Hawkins",
    petOwner: "Kristin Watson",
    amount: "$900",
    received: "$855",
  },
  {
    id: 2,
    date: "14:15:20 21/03/2025",
    transactionId: "93452",
    petSitter: "Savannah Nguyen",
    petOwner: "Cody Fisher",
    amount: "$700",
    received: "$665",
  },
  {
    id: 3,
    date: "14:15:20 21/03/2025",
    transactionId: "93453",
    petSitter: "Eleanor Pena",
    petOwner: "Jane Cooper",
    amount: "$500",
    received: "$475",
  },
  {
    id: 4,
    date: "14:15:20 21/03/2025",
    transactionId: "93454",
    petSitter: "Robert Fox",
    petOwner: "Wade Warren",
    amount: "$1200",
    received: "$1140",
  },
  {
    id: 1,
    date: "14:15:20 21/03/2025",
    transactionId: "93451",
    petSitter: "Guy Hawkins",
    petOwner: "Kristin Watson",
    amount: "$900",
    received: "$855",
  },
  {
    id: 2,
    date: "14:15:20 21/03/2025",
    transactionId: "93452",
    petSitter: "Savannah Nguyen",
    petOwner: "Cody Fisher",
    amount: "$700",
    received: "$665",
  },
  {
    id: 3,
    date: "14:15:20 21/03/2025",
    transactionId: "93453",
    petSitter: "Eleanor Pena",
    petOwner: "Jane Cooper",
    amount: "$500",
    received: "$475",
  },
  {
    id: 4,
    date: "14:15:20 21/03/2025",
    transactionId: "93454",
    petSitter: "Robert Fox",
    petOwner: "Wade Warren",
    amount: "$1200",
    received: "$1140",
  },
  {
    id: 1,
    date: "14:15:20 21/03/2025",
    transactionId: "93451",
    petSitter: "Guy Hawkins",
    petOwner: "Kristin Watson",
    amount: "$900",
    received: "$855",
  },
  {
    id: 2,
    date: "14:15:20 21/03/2025",
    transactionId: "93452",
    petSitter: "Savannah Nguyen",
    petOwner: "Cody Fisher",
    amount: "$700",
    received: "$665",
  },
  {
    id: 3,
    date: "14:15:20 21/03/2025",
    transactionId: "93453",
    petSitter: "Eleanor Pena",
    petOwner: "Jane Cooper",
    amount: "$500",
    received: "$475",
  },
  {
    id: 4,
    date: "14:15:20 21/03/2025",
    transactionId: "93454",
    petSitter: "Robert Fox",
    petOwner: "Wade Warren",
    amount: "$1200",
    received: "$1140",
  },
];
const ROWS_OPTIONS = [10, 15, 20];
export default function Payment() {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredData = paymentHistoryData.filter(
    (item) =>
      item.transactionId.includes(search) ||
      item.petSitter.toLowerCase().includes(search.toLowerCase()) ||
      item.petOwner.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = filteredData.slice(startIndex, startIndex + rowsPerPage);
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#11293A] font-semibold text-lg">
            All Payment History
          </h2>
          <div className="flex items-center bg-[#035F750F] border border-[#024B5E] px-5 py-2 rounded-full">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 outline-none bg-transparent text-sm"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded overflow-y-auto max-h-[400px]">
          <table className="w-full text-md text-left border-collapse">
            {/* Table Header */}
            <thead className="sticky top-0 z-20">
              <tr className="bg-gray-100 text-[#333333]">
                <th className="px-2 py-1 font-medium w-1/6">Date</th>
                <th className="px-2 py-1 font-medium w-1/6">Transaction ID</th>
                <th className="px-2 py-1 font-medium w-1/6">Pet Sitter</th>
                <th className="px-2 py-1 font-medium w-1/6">Pet Owners</th>
                <th className="px-2 py-1 font-medium w-1/6">Amount</th>
                <th className="px-2 py-1 font-medium w-1/6">Received</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-2"></tr>
              {currentRows.map((row) => (
                <tr key={row.id} className="bg-transparent">
                  <td colSpan={6}>
                    <div
                      onClick={() => {
                        setSelectedRow(row);
                        setIsModalOpen(true);
                      }}
                      className={`
          flex justify-between items-center rounded cursor-pointer border-b border-[#EBEBEB] p-1 transition
          ${selectedRow?.id === row.id ? 'bg-[#EAF2F4]' : 'bg-white hover:bg-[#035F750F]'}
        `}
                    >
                      <span className="w-1/6 px-1 py-0.5">{row.date}</span>
                      <span className="w-1/6 px-1 py-0.5">{row.transactionId}</span>
                      <span className="w-1/6 px-1 py-0.5">{row.petSitter}</span>
                      <span className="w-1/6 px-1 py-0.5">{row.petOwner}</span>
                      <span className="w-1/6 px-1 py-0.5">{row.amount}</span>
                      <span className="w-1/6 px-1 py-0.5">{row.received}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-end gap-10 items-center mt-4">
          <div className="flex items-center gap-2">
            <span className="text-[#333333]">Rows Per Page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              {ROWS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#333333]">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 py-1 border rounded disabled:opacity-50 text-[#333333]"
            >
              &lt;
            </button>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-2 py-1 text-[#333333] border rounded disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && selectedRow && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[420px] p-6 relative shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-[20px] text-[#000] font-semibold">Receipt</h2>
                <p className="text-sm text-[#666666]">
                  Transaction ID: #{selectedRow.transactionId}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm bg-[#689FAC] text-white px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Paid
              </span>

            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-[16px] text-black mb-2">Pet Owners Information</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <User size={20} className="" />
                    <span>{selectedRow.petOwner}</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Mail size={20} className="" />
                    <span className="text-[#2563EB]">alice@gmail.com</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <MapPin size={20} className="" />
                    <span>75021, New York</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] mb-2">Pet Sitter Information</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <User size={20} className="" />
                    <span>{selectedRow.petSitter}</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Mail size={20} className="" />
                    <span className="text-[#2563EB]">alice@gmail.com</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <MapPin size={20} className="" />
                    <span>75021, New York</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-[16px] text-black mb-2">Pet Owners Information</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between border-b border-[#EBEBEB] mb-2">
                  <span className="text-[#4B5563] text-[16px] mb-1">Service:</span>
                  <span className="text-[#024B5E] text-[16px]">Daycare</span>
                </div>
                <div className="flex justify-between border-b border-[#EBEBEB] mb-2">
                  <span className="text-[#4B5563] text-[16px] mb-1">Date:</span>
                  <span className="text-[14px]">21/09/2025</span>
                </div>
                <div className="flex justify-between border-b border-[#EBEBEB] mb-2">
                  <span className="text-[#4B5563] text-[16px] mb-1">Time:</span>
                  <span className="text-[14px]">14:15</span>
                </div>
                <div className="flex justify-between border-b border-[#EBEBEB] mb-2">
                  <span className="text-[#4B5563] text-[16px] mb-1">Status:</span>
                  <span className="text-green-600 text-[14px]">Completed</span>
                </div>
              </div>
            </div>
            <div className=" pt-3 text-sm text-gray-700 space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CreditCard size={18} />
                <span className="text-[#666666] text-[16px]">Payment Method:</span>
                <span className="text-black font-medium text-[16px]">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[16px]">Base Amount:</span>
                <span className="text-[14px] font-medium text-black">$1000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[16px]">Pet Owners 10%:</span>
                <span className="text-[14px] font-medium text-black">$45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[16px]">Pet Sitter 20%:</span>
                <span className="text-[14px] font-medium text-black">$55</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Sitter Received:</span>
                <span className="text-[14px] font-medium text-black">{selectedRow.received}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button className="flex-1 border border-teal-700 text-[#024B5E] rounded-lg py-2 text-[16px] flex items-center justify-center gap-2">
                <Download /> Download PDF
              </button>
              <button className="flex-1 bg-[#024B5E] text-white rounded-lg py-2 text-[16px] flex items-center justify-center gap-2">
                <PrinterCheck /> Print Receipt
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
