import React, { useState, useMemo } from "react";
import { Eye, ChevronLeft, ChevronRight, Trash2, UserCircle } from "lucide-react";
const DATA = [
    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

    {
        id: "ADG39",
        userName: "John Doe",
        petSitter: "Marvin McKinney",
        date: "2025-01-31",
        time: "10:30 AM",
        status: "Solved",
    },
    {
        id: "BDK52",
        userName: "Sarah Smith",
        petSitter: "Jerome Bell",
        date: "2025-02-15",
        time: "02:15 PM",
        status: "Unsolved",
    },

];
export default function Report() {
    const [search, setSearch] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);
    const ROW_OPTIONS = [10, 15, 20];
    const [selectedItem, setSelectedItem] = useState(null);
    const filtered = useMemo(() => {
        return DATA.filter(
            (item) =>
                item.id.toLowerCase().includes(search.toLowerCase()) ||
                item.userName.toLowerCase().includes(search.toLowerCase()) ||
                item.petSitter.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
    const start = (page - 1) * rowsPerPage;
    const rows = filtered.slice(start, start + rowsPerPage);
    return (
        <div className="p-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="mb-4">
                    <h1 className="text-[#202020] text-lg font-semibold">Tickets</h1>
                </div>
                <div className="overflow-x-auto max-h-[650px] rounded ">
                    <table className="w-full text-sm table-fixed border-collapse text-center">
                        <thead className="sticky top-0 bg-gray-100 z-10">
                            <tr className="text-[#333333] text-[16px] font-semibold">
                                <th className="px-3 py-2 w-[12%]">ID</th>
                                <th className="px-3 py-2 w-[18%]">User</th>
                                <th className="px-3 py-2 w-[18%]">Pet Sitter</th>
                                <th className="px-3 py-2 w-[12%]">Date</th>
                                <th className="px-3 py-2 w-[12%]">Time</th>
                                <th className="px-10 py-2 w-[12%]">Status</th>
                                <th className="px-10 py-2 w-[16%] text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((item) => (
                                <tr key={item.id} className="text-[#666666] hover:bg-[#EAF2F4]">
                                    <td className="px-3 py-2 w-[12%]">{item.id}</td>
                                    <td className="px-10 py-2 w-[18%]">{item.userName}</td>
                                    <td className="px-10 py-2 w-[18%]">{item.petSitter}</td>
                                    <td className="px-8 py-2 w-[12%]">{item.date}</td>
                                    <td className="px-10 py-2 w-[12%]">{item.time}</td>
                                    <td className="px-10 py-2 w-[12%]">
                                        <span
                                            className={`px-4 py-1 text-xs rounded-full font-medium ${item.status === "Solved"
                                                ? "bg-[#E4FAEF] text-[#1A7A5E]"
                                                : item.status === "Unsolved"
                                                    ? "bg-[#EDF6FF] text-[#006ADC]"
                                                    : "bg-gray-200 text-gray-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-2 w-[16%] text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                                                onClick={() => setSelectedItem(item)}
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-1 rounded-full hover:bg-red-100 text-red-600 cursor-pointer">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {selectedItem && (
                    <div
                        className="fixed inset-0 z-50 flex justify-center items-center bg-white/20 backdrop-blur-sm p-4 cursor-pointer"
                        onClick={() => setSelectedItem(null)}
                    >
                        <div
                            className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh] cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-[#EEF8FA] p-5 flex justify-between items-center px-8 flex-shrink-0">
                                <h2 className="text-xl font-extrabold text-[#111827]">
                                    Ticket #{selectedItem.id}
                                </h2>
                                <button className="bg-[#084C61] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#063b4b] transition-all shadow-md active:scale-95">
                                    Mark as Solved
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 lg:p-10">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                    {/* Left Content: Message */}
                                    <div className="lg:col-span-2 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#084C61] text-white rounded-full flex items-center justify-center shadow-lg">
                                                <UserCircle size={32} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#111827]">
                                                {selectedItem.userName}
                                            </h3>
                                        </div>

                                        <div className="bg-[#F9FDFE] border border-[#E5F3F5] rounded-2xl p-8 shadow-sm">
                                            <p className="text-[#374151] leading-relaxed text-lg">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Content: Info Cards */}
                                    <div className="space-y-6 flex flex-col h-full">
                                        {/* Ticket Info Card */}
                                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50">
                                            <h4 className="font-bold text-[#111827] text-lg mb-6 flex items-center justify-between border-b border-gray-100 pb-3">
                                                Ticket Information
                                            </h4>
                                            <div className="space-y-4 text-[14px]">
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium">Status:</span>
                                                    <span className="bg-[#EEF2FF] text-[#4F46E5] px-4 py-1 rounded-lg text-xs font-bold border border-[#E0E7FF]">
                                                        {selectedItem.status}
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium whitespace-nowrap">Pet Owner:</span>
                                                    <span className="text-[#374151] font-bold">{selectedItem.userName}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium">Email:</span>
                                                    <span className="text-[#084C61] font-semibold underline underline-offset-4 decoration-gray-200 cursor-pointer">
                                                        alice@gmail.com
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium">Service Type:</span>
                                                    <span className="text-[#0D9488] font-bold">Daycare</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium">Created:</span>
                                                    <span className="text-gray-600 font-medium italic">5 hour ago</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pet Sitter Card */}
                                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50">
                                            <div className="space-y-4 text-[14px]">
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium whitespace-nowrap">Pet setter:</span>
                                                    <span className="text-[#374151] font-bold">{selectedItem.petSitter}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium">Email:</span>
                                                    <span className="text-[#084C61] font-semibold underline underline-offset-4 decoration-gray-200 cursor-pointer">
                                                        alice@gmail.com
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-28 text-gray-500 font-medium">Service Type:</span>
                                                    <span className="text-[#0D9488] font-bold">Daycare</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6">
                                            <button className="w-full bg-[#084C61] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#063b4b] transition-all shadow-lg shadow-teal-100/50 active:scale-[0.98]">
                                                Send reply via Email
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer / Close Area Overlay */}
                            <button
                                className="absolute top-6 right-8 text-gray-400 hover:text-gray-600 transition-colors"
                                onClick={() => setSelectedItem(null)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
                {/* Pagination */}
                <div className="flex justify-end gap-6 items-center mt-4 text-sm">
                    <select
                        value={rowsPerPage}
                        onChange={(e) => {
                            setRowsPerPage(Number(e.target.value));
                            setPage(1);
                        }}
                        className="border border-[#EBEBEB] rounded-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                    >
                        {ROW_OPTIONS.map((n) => (
                            <option key={n}>{n}</option>
                        ))}
                    </select>

                    <span>
                        Page {page} of {totalPages}
                    </span>

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="p-2 border rounded-full disabled:opacity-40"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="p-2 border rounded-full disabled:opacity-40"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
