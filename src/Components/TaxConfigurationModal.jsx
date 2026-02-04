import React, { useState } from "react";
import { X } from "lucide-react";

const TaxConfigurationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />
      <div
        className="relative bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden flex flex-col p-10 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Add New Configuration
          </h2>
          {/* <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button> */}
        </div>

        <div className="space-y-6">
          {/* Section Header */}
          <div className="border-b border-gray-100 pb-2">
            <h3 className="text-sm font-bold text-[#0F172A]">
              Service Fees
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Owner Service Fee */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#4B5563]">
                Owner Service Fee (%)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-4 bg-white border border-[#E2E8F0] rounded-xl outline-none focus:border-[#084C61] transition-all pr-12 text-[#1F2937] placeholder:text-[#94A3B8]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] font-bold text-xl">
                  %
                </span>
              </div>
            </div>

            {/* Sitter Service Fee */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#4B5563]">
                Sitter Service Fee (%)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-4 bg-white border border-[#E2E8F0] rounded-xl outline-none focus:border-[#084C61] transition-all pr-12 text-[#1F2937] placeholder:text-[#94A3B8]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] font-bold text-xl">
                  %
                </span>
              </div>
            </div>

            {/* IVA % */}
            <div className="col-span-2 space-y-2">
              <label className="block text-sm font-medium text-[#4B5563]">
                IVA %
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-4 bg-white border border-[#E2E8F0] rounded-xl outline-none focus:border-[#084C61] transition-all pr-12 text-[#1F2937] placeholder:text-[#94A3B8]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] font-bold text-xl">
                  %
                </span>
              </div>
            </div>

            {/* ISR % */}
            <div className="col-span-2 space-y-2">
              <label className="block text-sm font-medium text-[#4B5563]">
                ISR %
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-4 bg-white border border-[#E2E8F0] rounded-xl outline-none focus:border-[#084C61] transition-all pr-12 text-[#1F2937] placeholder:text-[#94A3B8]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569] font-bold text-xl">
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-[#F1F5F9] text-[#0F172A] rounded-lg font-medium text-xl hover:bg-[#E2E8F0] transition-all active:scale-95"
            >
              Cancel
            </button>
            <button
              className="flex-1 py-4 bg-[#084C61] text-white rounded-xl font-medium text-lg hover:bg-[#063b4b] transition-all shadow-lg shadow-[#084C61]/20 active:scale-95"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxConfigurationModal;
