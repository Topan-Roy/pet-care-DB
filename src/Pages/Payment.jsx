import React, { useState } from "react";
import { Search } from "lucide-react";

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
];
const ROWS_OPTIONS = [5, 10, 15];

export default function Payment() {
    const [search, setSearch] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

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
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#11293A] font-semibold text-lg">All Payment History</h2>
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

            <div className="overflow-x-auto">
                <table className="w-full text-md text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-[#333333]">
                            <th className="px-4 py-2 font-medium">Date</th>
                            <th className="px-4 py-2 font-medium">Transaction ID</th>
                            <th className="px-4 py-2 font-medium">Pet Sitter</th>
                            <th className="px-4 py-2 font-medium">Pet Owners</th>
                            <th className="px-4 py-2 font-medium">Amount</th>
                            <th className="px-4 py-2 font-medium">Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((row, id) => (
                            <tr
                                key={id}
                                className={"bg-white border-b text-[#333333] border-gray-200 hover:bg-[#035F750F] "}>
                                <td className="px-4 py-2">{row.date}</td>
                                <td className="px-4 py-2">{row.transactionId}</td>
                                <td className="px-4 py-2">{row.petSitter}</td>
                                <td className="px-4 py-2">{row.petOwner}</td>
                                <td className="px-4 py-2">{row.amount}</td>
                                <td className="px-4 py-2">{row.received}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end gap-10 items-center mt-4">
                <div className="flex items-center gap-2">
                    <span>Rows Per Page:</span>
                    <select
                        value={rowsPerPage}
                        onChange={(e) => {
                            setRowsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                        {ROWS_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-2 py-1 border rounded disabled:opacity-50"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 border rounded disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
