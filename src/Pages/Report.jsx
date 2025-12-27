import React, { useState, useMemo } from "react";
import {
    Search,
    Eye,
    ChevronLeft,
    ChevronRight,
    Trash2,
} from "lucide-react";

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

    /* ✅ Correct filter */
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
        <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Search */}
            <div className="mb-4">
              <h1 className="text-[#202020] text-lg font-semibold">Reports</h1>
            </div>

            {/* Table */}
            <div className="overflow-x-auto max-h-[650px] rounded ">
                <table className="w-full text-sm table-fixed border-collapse">
                    <thead className="sticky top-0 bg-gray-100 z-10">
                        <tr className="text-[#333333] font-semibold">
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
                                        <button className="p-1 rounded-full hover:bg-gray-200">
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

            {/* Pagination */}
            <div className="flex justify-end gap-6 items-center mt-4 text-sm">
                <select
                    value={rowsPerPage}
                    onChange={(e) => {
                        setRowsPerPage(Number(e.target.value));
                        setPage(1);
                    }}
                    className="border border-[#EBEBEB] rounded-full px-3 py-1"
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
    );
}
