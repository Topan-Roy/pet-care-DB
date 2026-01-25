import React, { useState } from "react";
import { Calendar } from "lucide-react";
import TaxConfigurationModal from "../Components/TaxConfigurationModal";

const PricingTaxes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const configs = [
        { title: "Owner Service Fee", value: "10" },
        { title: "Sitter Service Fee", value: "10" },
        { title: "Tax Retention", value: "10" },
        { title: "Social Security", value: "10" },
    ];
    return (
        <div className="p-5 font-Inter">
            <div className=" mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-[20px] font-medium text-[#0F172A]">
                        Fees & Tax Configuration
                    </h1>
                    <p className="text-[#6B7280] text-[15px]">
                        Manage service fees and tax retention rules. Changes apply
                        immediately.
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#024B5E] text-[#FFFFFF] px-7 py-3 rounded-xl font-bold text-[15px] hover:bg-[#024B5E] transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                    Tax Configuration
                </button>
            </div>

            {/* Main Configuration Card */}
            <div className=" bg-white border border-[#E5E7EB] rounded-[32px] p-10 shadow-sm">
                <div className="mb-10">
                    <h2 className="text-[20px] font-normal text-[#020617] mb-2">
                        Currently Active Configuration
                    </h2>
                    <p className="text-[#64748B] text-[15px]">
                        These fees are currently being applied to all new bookings.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {configs.map((config, idx) => (
                        <div
                            key={idx}
                            className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#F1F5F9] hover:border-[#E2E8F0] transition-colors group"
                        >
                            <p className="text-[14px] font-semibold text-[#64748B] mb-4 group-hover:text-[#475569]">
                                {config.title}
                            </p>
                            <div className="flex items-end gap-1">
                                <span className="text-[32px] font-bold text-[#024B5E] leading-none tracking-tight">
                                    {config.value}
                                </span>
                                <span className="text-[24px] font-bold text-[#94A3B8] mb-1">
                                    %
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#F1F5F9]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#F8FAFC] rounded-xl text-[#94A3B8] border border-[#F1F5F9]">
                            <Calendar size={20} />
                        </div>
                        <p className="text-[15px] text-[#64748B]">
                            Effective since{" "}
                            <span className="font-bold text-[#689FAC]">January 1, 2024</span>
                        </p>
                    </div>
                    <div className="bg-[#D9FCDC] text-[#0A5E02] px-6 py-2 rounded-full text-[14px] font-bold border border-[#BBF7D0] shadow-sm">
                        Active Now
                    </div>
                </div>
            </div>

            <TaxConfigurationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default PricingTaxes;
