import React, { useState, useMemo } from "react";
import { Search, Eye, ChevronLeft, ChevronRight, Plus, } from "lucide-react";
import AudienceTargeting from "./PromoEdit/AudienceTargeting";
import BasicSettings from "./PromoEdit/BasicSettings";
import ReviewDeploy from "./PromoEdit/ReviewDeploy";
const DATA = [
    {
        id: 29505,
        campaignName: "New Year Pet Care",
        petSitter: "Marvin McKinney",
        uses: 45,
        limit: 100,
        targetAudience: "Pet Owners",
        expiry: "2025-01-31",
        status: "Active",
    },
    {
        id: 29506,
        campaignName: "Winter Grooming Offer",
        petSitter: "Jerome Bell",
        uses: 80,
        limit: 100,
        targetAudience: "Dog Owners",
        expiry: "2025-02-15",
        status: "Active",
    },
    {
        id: 29507,
        campaignName: "Cat Care Discount",
        petSitter: "Cameron Williamson",
        uses: 100,
        limit: 100,
        targetAudience: "Cat Owners",
        expiry: "2024-12-20",
        status: "Expired",
    },
    {
        id: 29508,
        campaignName: "First Booking Offer",
        petSitter: "Kristin Watson",
        uses: 20,
        limit: 50,
        targetAudience: "New Users",
        expiry: "2025-03-10",
        status: "Active",
    },
    {
        id: 29505,
        campaignName: "New Year Pet Care",
        petSitter: "Marvin McKinney",
        uses: 45,
        limit: 100,
        targetAudience: "Pet Owners",
        expiry: "2025-01-31",
        status: "Active",
    },
    {
        id: 29506,
        campaignName: "Winter Grooming Offer",
        petSitter: "Jerome Bell",
        uses: 80,
        limit: 100,
        targetAudience: "Dog Owners",
        expiry: "2025-02-15",
        status: "Active",
    },
    {
        id: 29507,
        campaignName: "Cat Care Discount",
        petSitter: "Cameron Williamson",
        uses: 100,
        limit: 100,
        targetAudience: "Cat Owners",
        expiry: "2024-12-20",
        status: "Expired",
    },
    {
        id: 29508,
        campaignName: "First Booking Offer",
        petSitter: "Kristin Watson",
        uses: 20,
        limit: 50,
        targetAudience: "New Users",
        expiry: "2025-03-10",
        status: "Active",
    },
    {
        id: 29505,
        campaignName: "New Year Pet Care",
        petSitter: "Marvin McKinney",
        uses: 45,
        limit: 100,
        targetAudience: "Pet Owners",
        expiry: "2025-01-31",
        status: "Active",
    },
    {
        id: 29506,
        campaignName: "Winter Grooming Offer",
        petSitter: "Jerome Bell",
        uses: 80,
        limit: 100,
        targetAudience: "Dog Owners",
        expiry: "2025-02-15",
        status: "Active",
    },
    {
        id: 29507,
        campaignName: "Cat Care Discount",
        petSitter: "Cameron Williamson",
        uses: 100,
        limit: 100,
        targetAudience: "Cat Owners",
        expiry: "2024-12-20",
        status: "Expired",
    },
    {
        id: 29508,
        campaignName: "First Booking Offer",
        petSitter: "Kristin Watson",
        uses: 20,
        limit: 50,
        targetAudience: "New Users",
        expiry: "2025-03-10",
        status: "Active",
    },
    {
        id: 29509,
        campaignName: "Holiday Special",
        petSitter: "Cody Fisher",
        uses: 50,
        limit: 50,
        targetAudience: "All Users",
        expiry: "2024-12-25",
        status: "Completed",
    },
    {
        id: 29509,
        campaignName: "Holiday Special",
        petSitter: "Cody Fisher",
        uses: 50,
        limit: 50,
        targetAudience: "All Users",
        expiry: "2024-12-25",
        status: "Completed",
    },
    {
        id: 29509,
        campaignName: "Holiday Special",
        petSitter: "Cody Fisher",
        uses: 50,
        limit: 50,
        targetAudience: "All Users",
        expiry: "2024-12-25",
        status: "Completed",
    },
];
export default function PromoCode() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setModalStep(1);
    };
    const [search, setSearch] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);
    const ROW_OPTIONS = [10, 15, 20];
    const filtered = useMemo(() => {
        return DATA.filter(
            (item) =>
                item.campaignName.toLowerCase().includes(search.toLowerCase()) ||
                item.petSitter.toLowerCase().includes(search.toLowerCase()) ||
                item.targetAudience.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, DATA]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
    const start = (page - 1) * rowsPerPage;
    const rows = filtered.slice(start, start + rowsPerPage);

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                <div className="flex items-center gap-2 border rounded-full border-[#7A7A7A] bg-[#F5F6FA] px-4 py-2 w-full sm:w-[240px]">
                    <Search size={16} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
                    />
                </div>
                <div className="flex items-center gap-4">
                    {/* <button className="">
                        <ListFilter size={16} />
                    </button> */}
                    <button
                        onClick={openModal}
                        className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-[#024B5E] text-white hover:opacity-90"
                    >
                        <Plus size={16} />
                        Add New Offer
                    </button>
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 bg-black/40 flex justify-center items-start pt-20 z-50"
                            onClick={closeModal}
                        >
                            <div
                                className=" rounded-xl shadow-lg w-full max-w-3xl p-6 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray-500"
                                >
                                    ✕
                                </button>
                                {modalStep === 1 && <BasicSettings next={() => setModalStep(2)} />}
                                {modalStep === 2 && (
                                    <AudienceTargeting
                                        next={() => setModalStep(3)}
                                        prev={() => setModalStep(1)}
                                    />
                                )}
                                {modalStep === 3 && <ReviewDeploy prev={() => setModalStep(2)} />}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Table */}
            <div className="overflow-hidden rounded overflow-y-auto max-h-[650px]">
                <table className="w-full text-md  border-collapse text-center">
                    <thead className="sticky top-0 z-20 ">
                        <tr className="bg-gray-100 text-center text-[#024B5E] text-md font-semiboldl">
                            <th className="px-2 py-2  font-semibold">Campaign Name</th>
                            <th className="px-5 py-2  font-semibold ">Coupon Code</th>
                            <th className="px-10 py-2  font-semibold">Pet Sitter</th>
                            <th className="px-4 py-2 font-semibold">Uses Limit</th>
                            <th className="px-6 py-2  font-semibold">Target Audience</th>
                            <th className="px-8 py-2  font-semibold">Expiry</th>
                            <th className="px-8 py-2  font-semibold">Status</th>
                            <th className="px-12 py-2  text-right font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-2"></tr>
                        {rows.map((item) => (
                            <tr key={item.id}>
                                <td colSpan={8}>
                                    <div className="flex items-center bg-white rounded-xl hover:bg-[#EAF2F4] transition border-b border-[#EBEBEB] px-2 py-1 font-normal text-[#333333] text-center ">
                                        <span className="w-[13%]">{item.campaignName}</span>
                                        <span className="w-[10%]">{item.id}</span>
                                        <span className="w-[20%]">{item.petSitter}</span>
                                        <span className="w-[5%]">{item.limit}</span>
                                        <span className="w-[17%]">{item.targetAudience}</span>
                                        <span className="w-[12%]">{new Date(item.expiry).toLocaleDateString()}</span>
                                        <span className="w-[10%]">
                                            <span
                                                className={`px-3 py-1 text-xs rounded-full font-normal ${item.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : item.status === "Expired"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-gray-200 text-gray-700"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </span>
                                        <span className="w-[10%] text-right">
                                            {/* <Link to={`/campaign/${item.id}`}>   </Link> */}
                                            <button
                                                className="p-2 rounded-full hover:bg-gray-200"
                                                onClick={() => setSelectedCampaign(item)} // ✅ Eye button
                                            >
                                                <Eye size={18} />
                                            </button>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedCampaign && (
                <div
                    className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
                    onClick={() => setSelectedCampaign(null)}
                >
                    <div
                        className="bg-white rounded-xl shadow-md p-6 max-w-3xl w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500"
                            onClick={() => setSelectedCampaign(null)}
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Coupon
                        </h2>
                        <h3 className="text-lg font-medium text-gray-700 mb-6">
                            Campaign Summary
                        </h3>
                        <div className="space-y-4">
                            {[
                                ["Campaign Name", selectedCampaign.campaignName],
                                ["Coupon Code", selectedCampaign.id],
                                ["Discount", "20% OFF"],
                                ["Usage", `${selectedCampaign.uses}/${selectedCampaign.limit}`],
                                ["Target Audience", selectedCampaign.targetAudience],
                                ["Expiry", selectedCampaign.expiry || "No expiry"],
                            ].map(([label, value], index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b pb-2 text-gray-700"
                                >
                                    <span className="text-sm">{label}:</span>
                                    <span className="text-sm font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <button
                                className="px-5 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                                onClick={() => setSelectedCampaign(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Pagination */}
            <div className="flex justify-end gap-10 items-center mt-4 text-sm">
                <div className="flex items-center gap-2">
                    <span>Rows Per Page</span>
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
                </div>
                <div className="flex items-center gap-4">
                    <span>Page {page} Of {totalPages}</span>
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
