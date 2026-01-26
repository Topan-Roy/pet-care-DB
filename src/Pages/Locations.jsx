import React, { useState, useMemo } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Filter,
} from "lucide-react";

const LOCATION_DATA = [
  {
    id: 1,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 2,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 3,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Inactive",
  },
  {
    id: 4,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 5,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 6,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Inactive",
  },
  {
    id: 7,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 8,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 8,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 8,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 8,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 8,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
  {
    id: 8,
    state: "Texas",
    city: "Austin",
    neighborhood: "Downtown",
    status: "Active",
  },
];

export default function Locations() {
  const [formData, setFormData] = useState({
    state: "10",
    city: "10",
    neighborhood: "",
    status: "Active",
  });

  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const ROW_OPTIONS = [10, 15, 20];

  const filtered = useMemo(() => {
    return LOCATION_DATA.filter(
      (item) =>
        item.state.toLowerCase().includes(search.toLowerCase()) ||
        item.city.toLowerCase().includes(search.toLowerCase()) ||
        item.neighborhood.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const start = (page - 1) * rowsPerPage;
  const rows = filtered.slice(start, start + rowsPerPage);

  const getStatusColor = (status) => {
    if (status === "Active")
      return "bg-[#E4FAEF] text-[#1A7A5E] border border-teal-100";
    if (status === "Inactive")
      return "bg-[#FFF0EE] text-[#FE6C5D] border border-red-100";
    return "bg-gray-100 text-gray-600 border border-gray-200";
  };

  return (
    <div className="p-6  min-h-screen font-sans space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Add Location Rule
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium">State</label>
            <div className="relative">
              <select
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 outline-none text-sm text-gray-700"
              >
                <option value="Texas">Texas</option>
                <option value="Texas2">Texas2</option>
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
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium">
              City (Optional)
            </label>
            <div className="relative">
              <select
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 outline-none text-sm text-gray-700"
              >
                <option value="Austin">Austin</option>
                <option value="Austin2">Austin2</option>
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
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium">
              Neighborhood (Optional)
            </label>
            <input
              type="text"
              value={formData.neighborhood}
              onChange={(e) =>
                setFormData({ ...formData, neighborhood: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-500 font-medium">Status</label>
            <div className="relative">
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full appearance-none bg-[#E7F4F6] border border-gray-300 rounded-lg px-4 py-2 pr-8 outline-none text-sm text-[#008236]"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#008236]">
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
        </div>
        <div className="mt-4 flex justify-end">
          <button className="px-6 py-2.5 bg-[#4F39F6] text-[#FFFFFF] rounded-lg font-medium hover:bg-[#5558E3] transition-colors shadow-sm">
            Add Rule
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Location Rule</h2>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Filter size={20} />
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[650px]">
          <table className="w-full text-sm text-left">
            <thead className="text-[16px] text-[#333333]  bg-gray-50 border-b border-gray-100 ticky top-0 z-20">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700 text-center">
                  Status
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[16px] text-gray-600">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="font-normal text-[#0F172B] ">
                        {item.state}
                      </span>
                      <span className="text-gray-400">/</span>
                      <span className="font-normal text-[#0F172B]">
                        {item.city}
                      </span>
                      <span className="text-gray-400">/</span>
                      <span className="font-normal text-[#0F172B]">
                        {item.neighborhood}
                      </span> 
                      <span className="text-xs text-gray-400 ml-2">
                        NEIGHBORHOOD RULE
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
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
    </div>
  );
}
