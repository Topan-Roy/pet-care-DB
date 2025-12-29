import React, { useState, useMemo } from "react";
import {Eye,ChevronLeft,ChevronRight,Trash2,UserCircle} from "lucide-react";
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
                <h1 className="text-[#202020] text-lg font-semibold">Reports</h1>
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
                                            className="p-1 rounded-full hover:bg-gray-200"
                                            onClick={() => setSelectedItem(item)}
                                        >
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-1 rounded-full hover:bg-red-100 text-red-600">
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
                <div className="fixed inset-0 z-50 flex justify-center items-start bg-black/40 bg-opacity-40 pt-20">
                    <div className="bg-[#F9FEFF] w-full max-w-5xl rounded-lg  overflow-hidden">
                        <div className="bg-cyan-50 p-4 flex justify-between items-center border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800">
                                Ticket #{selectedItem.id}
                            </h2>
                            <button className="bg-[#084c61] text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
                                Mark as Solved
                            </button>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <UserCircle className="w-12 h-12 text-[#084c61]" />
                                    <h3 className="text-xl font-semibold text-[#333333]">
                                        {selectedItem.userName}
                                    </h3>
                                </div>
                                <p className="text-[#333333] leading-relaxed text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="border border-gray-100 rounded-xl p-5 shadow bg-white">
                                    <h4 className="font-bold text-[#1F2937] border-b border-[#E3E6F0] pb-2 mb-4">
                                        Ticket Information
                                    </h4>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Status:</span>
                                            <span className="bg-[#EDF6FF] text-[#006ADC] px-3 py-1 rounded-full text-xs font-semibold">
                                                {selectedItem.status}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Pet Owner:</span>
                                            <span className="text-gray-700 font-medium">{selectedItem.userName}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Email:</span>
                                            <span className="text-gray-800 font-semibold underline decoration-gray-300">
                                                alice@gmail.com
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Service Type:</span>
                                            <span className="text-[#024B5E]">Daycare</span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Created:</span>
                                            <span className="text-gray-600 ">5 hour ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-gray-100 rounded-xl p-5 shadow-sm bg-white">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Pet setter:</span>
                                            <span className="text-gray-700 font-medium">{selectedItem.petSitter}</span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Email:</span>
                                            <span className="text-gray-800 font-semibold underline decoration-gray-300">
                                                alice@gmail.com
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-24 text-[#4B5563]">Service Type:</span>
                                            <span className="text-[#024B5E]">Daycare</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end p-4">
                            <button
                                className="bg-gray-200 px-6 py-2 rounded-md hover:bg-gray-300"
                                onClick={() => setSelectedItem(null)}
                            >
                                Close
                            </button>
                        </div>
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
