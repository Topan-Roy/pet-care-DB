import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const AudienceTargeting = () => {
    const [selectedAudience, setSelectedAudience] = useState("users");
    const [userIds, setUserIds] = useState([19205, 19206, 19266]);
    const [businessIds, setBusinessIds] = useState([19205, 19206, 19266]);
    const [filterUsers, setFilterUsers] = useState("All");
    const [filterBusinesses, setFilterBusinesses] = useState("All");
    const navigate = useNavigate();
    return (
        //   w-full max-w-md mx-auto
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-md mx-auto">
            <h2 className="text-2xl text-[#11293A] font-semibold mb-4">Audience Targeting</h2>
            <p className="text-[#11293A] mb-6">Select Target Audience</p>
            <div className="border p-3 mb-5 border-[#EBEBEB] rounded-xl">
                <label className="flex items-center gap-2 mb-2 ">
                    <input
                        type="radio"
                        checked={selectedAudience === "usersDropdown"}
                        onChange={() => setSelectedAudience("usersDropdown")}
                        className="w-4 h-4 accent-[#11293A]"
                    />
                    Users
                </label>
                <select
                    value={filterUsers}
                    onChange={(e) => setFilterUsers(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                >
                    <option>All</option>
                    <option>Free</option>
                    <option>Premium</option>
                </select>
            </div>
            <div className="border p-3 mb-5 border-[#EBEBEB] rounded-xl">
                <label className="flex items-center gap-2 mb-2">
                    <input
                        type="radio"
                        checked={selectedAudience === "businessesDropdown"}
                        onChange={() => setSelectedAudience("businessesDropdown")}
                        className="w-4 h-4 accent-[#11293A]"
                    />
                    Businesses
                </label>
                <select
                    value={filterBusinesses}
                    onChange={(e) => setFilterBusinesses(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                >
                    <option>All</option>
                    <option>Free</option>
                    <option>Premium</option>
                </select>
            </div>
            <div className="border p-3 mb-5 border-[#EBEBEB] rounded-xl">
                <label className="flex items-center gap-2 mb-2">
                    <input
                        type="radio"
                        checked={selectedAudience === "users"}
                        onChange={() => setSelectedAudience("users")}
                        className="w-4 h-4 accent-[#11293A]"
                    />
                    Users
                </label>
                <p className="text-gray-500 text-sm mb-2">
                    ID: {userIds.join(", ")}
                </p>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2 mb-6">
                    <input
                        type="text"
                        placeholder="Select users"
                        className="w-full outline-none"
                    />
                    <Search size={18} className="text-gray-400" />
                </div>
            </div>
            <div className="border p-3 mb-5 border-[#EBEBEB] rounded-xl">
                <label className="flex items-center gap-2 mb-2">
                    <input
                        type="radio"
                        checked={selectedAudience === "businesses"}
                        onChange={() => setSelectedAudience("businesses")}
                        className="w-4 h-4 accent-[#11293A]"
                    />
                    Businesses
                </label>
                <p className="text-gray-500 text-sm mb-2">
                    ID: {businessIds.join(", ")}
                </p>
                <div className="flex items-center border border-gray-300 rounded px-3 py-2 mb-6">
                    <input
                        type="text"
                        placeholder="Select business"
                        className="w-full outline-none"
                    />
                    <Search size={18} className="text-gray-400" />
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    className="px-6 py-2 bg-[#ECF7FE] text-[#11293A] rounded"
                    onClick={() => navigate(-1)}
                >
                    Previous
                </button>
                <Link to="/dashboard/reviewdeploy">
                <button className="px-6 py-2 bg-[#024B5E] text-[#F9FAFB] rounded">
                    Next
                </button>
                </Link>
            </div>
        </div>



    );
};

export default AudienceTargeting;
