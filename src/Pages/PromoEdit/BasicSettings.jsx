import React, { useState } from "react";
import { Link } from "react-router";

export default function BasicSettings() {
    const [campaignName, setCampaignName] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [couponType, setCouponType] = useState("auto");
    const [discountType, setDiscountType] = useState("percentage");
    const [percentage, setPercentage] = useState("");
    const [fixedAmount, setFixedAmount] = useState("");
    const [expiry, setExpiry] = useState("");
    const [noExpiry, setNoExpiry] = useState(false);
    const [usageLimit, setUsageLimit] = useState("max");
    const [maxUses, setMaxUses] = useState(1000);
    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
            <h2 className="text-2xl text-[#11293A] font-semibold mb-4">Basic Settings</h2>
            <div className="mb-4">
                <label className="block mb-1 text-md text-[#11293A]">Campaign Name</label>
                <input
                    type="text"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    placeholder="Summer Sale"
                    className="w-full border border-[#EEEEEE] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-md text-[#11293A]">Coupon Code</label>
                <div className="flex items-center gap-4 mb-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={couponType === "auto"}
                            onChange={() => setCouponType("auto")}
                            style={{ accentColor: "#11293A" }}
                            className="w-4 h-4"
                        />
                        Auto-generated
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={couponType === "custom"}
                            onChange={() => setCouponType("custom")}
                           style={{ accentColor: "#11293A" }}
                           className="w-4 h-4"
                        />
                        Custom
                    </label>
                </div>
                {couponType === "custom" && (
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="SUMMER20"
                        className="w-full border border-[#EEEEEE] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                    />
                )}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-md text-[#11293A]">Discount Type</label>
                <div className="flex gap-4">
                    <div className="flex flex-col w-1/2">
                        <label className="flex items-center gap-2 text-md text-[#11293A] mb-1">
                            <input
                                type="radio"
                                checked={discountType === "percentage"}
                                onChange={() => setDiscountType("percentage")}
                               style={{ accentColor: "#11293A" }}
                               className="w-4 h-4"
                            />
                            Percentage
                        </label>
                        <input
                            type="number"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            placeholder="20"
                            disabled={discountType !== "percentage"}
                            className={`border border-[#EEEEEE] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 ${discountType === "percentage" ? "focus:ring-[#EEEEEE]" : " cursor-not-allowed"
                                }`}
                        />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="flex items-center gap-2 text-md text-[#11293A] mb-1">
                            <input
                                type="radio"
                                checked={discountType === "fixed"}
                                onChange={() => setDiscountType("fixed")}
                                style={{ accentColor: "#11293A" }}
                                className="w-4 h-4"
                            />
                            Fixed Amount
                        </label>
                        <input
                            type="number"
                            value={fixedAmount}
                            onChange={(e) => setFixedAmount(e.target.value)}
                            placeholder="10"
                            disabled={discountType !== "fixed"}
                            className={`border border-[#EEEEEE] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 ${discountType === "fixed" ? "focus:ring-[#EEEEEE]" : " cursor-not-allowed"
                                }`}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-md text-[#11293A]">Expiry</label>
                <div className=" items-center gap-4">
                    <input
                        type="date"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        disabled={noExpiry}
                        className="border border-[#EEEEEE] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                    />
                    <div className="flex items-center mt-5 gap-3">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={noExpiry}
                                onChange={() => setNoExpiry(!noExpiry)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-all duration-300"></div>
                        </label>
                        <span className="text-md text-[#11293A]">No expiry</span>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-md text-[#11293A]">Usage Limit</label>
                <div className="flex items-center gap-4 mb-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={usageLimit === "max"}
                            onChange={() => setUsageLimit("max")}
                            style={{ accentColor: "#11293A" }}
                            className="w-4 h-4"
                        />
                        Max uses
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={usageLimit === "unlimited"}
                            onChange={() => setUsageLimit("unlimited")}
                             style={{ accentColor: "#11293A" }}
                               className="w-4 h-4"
                        />
                        Unlimited
                    </label>
                </div>
                {usageLimit === "max" && (
                    <input
                        type="number"
                        value={maxUses}
                        onChange={(e) => setMaxUses(e.target.value)}
                        className="w-full border border-[#EEEEEE] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#EEEEEE]"
                    />
                )}
            </div>
            <div className="flex  gap-4 mt-6">
                <button className="px-6 py-2 rounded bg-[#ECF7FE] text-[#11293A] hover:bg-[#ECF7FE] cursor-pointer">
                    Cancel
                </button>
                <Link to="/dashboard/audiencetargeting">
                <button className="px-6 py-2 rounded bg-[#024B5E] text-[#F9FAFB] cursor-pointer">
                    Next
                </button>
                </Link>
            </div>
        </div>
    );
}
