import React, { useState } from "react";
import { Search, Eye, ChevronLeft, ChevronRight, ListFilter } from "lucide-react";
import { Link } from "react-router";
export default function Petowner() {
    const [search, setSearch] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);
    const DATA = [
        { "id": 29505, "name": "Marvin McKinney", "email": "mountain@email.com", "contact": "(239) 555-0108" },
        { "id": 29506, "name": "Jerome Bell", "email": "jerome@email.com", "contact": "(239) 555-0109" },
        { "id": 29507, "name": "Cameron Williamson", "email": "cameron@email.com", "contact": "(239) 555-0110" },
        { "id": 29508, "name": "Kristin Watson", "email": "kristin@email.com", "contact": "(239) 555-0111" },
        { "id": 29509, "name": "Cody Fisher", "email": "cody@email.com", "contact": "(239) 555-0112" },
        { "id": 29509, "name": "Cody Fisher", "email": "cody@email.com", "contact": "(239) 555-0112" },
    ];
    const ROW_OPTIONS = [5, 10, 15];
    const filtered = DATA.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase())
    );
    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    const start = (page - 1) * rowsPerPage;
    const rows = filtered.slice(start, start + rowsPerPage);
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                {/* Search Bar */}
                <div className="flex items-center gap-2 border rounded-full border-[#7A7A7A] bg-[#F5F6FA] px-4 py-2 w-[220px]">
                    <Search size={16} className="text-gray-400" />
                    <input
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-none text-sm w-full"
                    />
                </div>
                <div>
                    <ListFilter size={16} />
                </div>
            </div>

            <div className="overflow-hidden rounded ">
                <table className="w-full text-md text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-[#333333]">
                            <th className="px-3 py-2 font-medium">ID</th>
                            <th className="px-10 py-2 font-medium">Pet Owners Name</th>
                            <th className="px-15 py-2 font-medium">Email</th>
                            <th className="px-25 py-2 font-medium">Contact</th>
                            <th className="px-3 py-2 font-medium text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-2"></tr>
                        {rows.map((item, index) => (
                            <tr key={index} className="bg-transparent">
                                <td colSpan={5}>
                                    <div className="flex justify-between items-center bg-white rounded-xl hover:rounded-xl hover:bg-[#EAF2F4] transition border-b border-[#EBEBEB] p-2">
                                        <span className="w-1/12 text-[#333333]">{item.id}</span>
                                        <span className="w-3/12 text-[#333333]">{item.name}</span>
                                        <span className="w-3/12 text-[#333333]">{item.email}</span>
                                        <span className="w-2/12 text-[#333333]">{item.contact}</span>
                                        <span className="w-3/12 text-right">
                                        <Link to='/dashboard/petownerdelails'>
                                          <button className="p-2 rounded-full hover:bg-gray-200 text-[#333333] cursor-pointer">
                                                <Eye size={18} />
                                            </button>
                                        </Link>
                                          
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-end gap-10 items-center mt-6 text-sm">
                <div className="flex items-center gap-2">
                    <span>Rows Per Page</span>
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
                </div>
                <div className="flex items-center gap-4">
                    <span>
                        Page {page} Of {totalPages}
                    </span>
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        className="p-2 border rounded-full disabled:opacity-40"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        className="p-2 border rounded-full disabled:opacity-40"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
