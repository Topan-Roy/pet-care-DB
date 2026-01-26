import React, { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight, Plus, Trash2, ListFilter } from "lucide-react";
import CreatePromoModal from "./CreatePromoModal";

const DATA = [
    {
        id: "SAVE20NOW",
        type: "Generic",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "NEWYEAR2024",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
    {
        id: "SAV3N0W24",
        type: "Generic",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "FALLSAVINGS24",
        type: "Unique",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "NEWYEAR2024",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
    {
        id: "HAP8YSH0P24",
        type: "Unique",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "NEWYEAR2024",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
    {
        id: "D1SC0UNTNOW",
        type: "Unique",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "FLA5HSAL3",
        type: "Unique",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "FLA5HSAL3",
        type: "Unique",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "FLA5HSAL3",
        type: "Unique",
        appliesTo: "Owner",
        discount: "10% off payment",
        uses: 120,
        limit: 500,
        expiry: "2026-05-27",
        status: "Active",
    },
    {
        id: "B1G5AV24",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
    {
        id: "B1G5AV24",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
    {
        id: "B1G5AV24",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
    {
        id: "B1G5AV24",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
    {
        id: "B1G5AV24",
        type: "Generic",
        appliesTo: "Sitter",
        discount: "5%",
        uses: 5,
        limit: null,
        expiry: "2025-05-27",
        status: "Expired",
    },
];

export default function PromoCode() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [search, setSearch] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const ROW_OPTIONS = [5, 10, 15, 20];

    const filtered = useMemo(() => {
        return DATA.filter(
            (item) =>
                item.id.toLowerCase().includes(search.toLowerCase()) ||
                item.type.toLowerCase().includes(search.toLowerCase()) ||
                item.appliesTo.toLowerCase().includes(search.toLowerCase()),
        );
    }, [search]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
    const start = (page - 1) * rowsPerPage;
    const rows = filtered.slice(start, start + rowsPerPage);

    const getStatusColor = (status) => {
        if (status === "Active")
            return "bg-[#E3E6F0] text-[#00C394] border border-[#E3E6F0]";
        if (status === "Expired")
            return "bg-red-50 text-[#FE6C5D] border border-[#E3E6F0]";
        return "bg-gray-100 text-gray-600 border border-gray-200";
    };

    const getTypeColor = (type) => {
        if (type === "Unique")
            return "bg-[#E3E6F0] text-[#F3934F] text-[14px] border border-[#E3E6F0]";
        if (type === "Generic")
            return "bg-[#E3E6F0] text-[#357F91] text-[14px] border border-[#E3E6F0]";
        return "bg-gray-50 text-gray-500 border border-gray-200";
    };

    return (
        <div className="p-6 bg-white min-h-screen font-sans">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Promo Codes</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Manage marketing campaigns and referral codes.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <button
                        onClick={openModal}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#0F5A6D] text-white rounded-lg hover:bg-[#0c4b5b] transition-colors shadow-sm font-medium"
                    >
                        <Plus size={18} />
                        Create Promo
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="relative w-full sm:w-72">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={18} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                            />
                        </div>
                        <div className="text-gray-400 cursor-pointer">
                            {/* Placeholder for filter icon if needed in future */}
                            <ListFilter size={20} />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto overflow-y-auto max-h-[650px] relative">
                    <table className="w-full text-sm text-left">
                        <thead className="text-[14px] text-[#024B5E] uppercase bg-white border-b border-gray-100 sticky top-0 z-20">
                            <tr>
                                <th className="px-6 py-4  font-semibold text-[#024B5E]">Code</th>
                                <th className="px-6 py-4 font-semibold text-[#024B5E]">Type</th>
                                <th className="px-6 py-4 font-semibold text-[#024B5E]">
                                    Applies To
                                </th>
                                <th className="px-6 py-4 font-semibold text-[#024B5E]">
                                    Discount
                                </th>
                                <th className="px-6 py-4 font-semibold text-[#024B5E]">
                                    Usage
                                </th>
                                <th className="px-6 py-4 font-semibold text-[#024B5E]">
                                    Expiry
                                </th>
                                <th className="px-6 py-4 font-semibold text-[#024B5E] text-center">
                                    Status
                                </th>
                                <th className="px-6 py-4 font-semibold text-[#024B5E] text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {rows.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-[14px] font-medium text-[#333333]">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-md text-xs font-medium ${getTypeColor(item.type)}`}
                                        >
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-[14px] font-medium text-[#333333]">{item.appliesTo}</td>
                                    <td className="px-6 py-4 text-[14px] font-medium text-[#333333]">{item.discount}</td>
                                    <td className="px-6 py-4 text-[14px] font-medium text-[#333333]">
                                        {item.uses}
                                        {item.limit && (
                                            <span className="text-gray-400">/{item.limit}</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-[14px] font-medium text-[#333333]">
                                        {new Date(item.expiry).toLocaleDateString("en-US", {
                                            month: "numeric",
                                            day: "numeric",
                                            year: "2-digit",
                                        })}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-[14px] font-medium text-[#333333]${getStatusColor(item.status)}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="flex justify-end items-center gap-6 p-4 border-t border-gray-100 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <span>Rows Per Page</span>
                        <div className="relative">
                            <select
                                value={rowsPerPage}
                                onChange={(e) => {
                                    setRowsPerPage(Number(e.target.value));
                                    setPage(1);
                                }}
                                className="appearance-none bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer"
                            >
                                {ROW_OPTIONS.map((n) => (
                                    <option key={n} value={n}>
                                        {String(n).padStart(2, "0")}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <span>
                        Page {String(page).padStart(2, "0")} Of {totalPages}
                    </span>
                    <div className="flex gap-2">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <CreatePromoModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
