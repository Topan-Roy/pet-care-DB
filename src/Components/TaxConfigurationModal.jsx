import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
const TaxConfigurationModal = ({ isOpen, onClose }) => {
  const [feeType, setFeeType] = useState("Percentage");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40  transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-[900px] rounded-2xl shadow-2xl overflow-hidden flex flex-col p-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-medium text-[#020617]">
            Add New Configuration
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-[15px] font-normal text-[#0F172A] mb-2">
              Service Fees
            </h3>
            <div className="h-px bg-gray-100 w-full" />
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#374151]">
                Owner Service Fee (%)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#024B5E] transition-colors pr-10 text-gray-700"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">
                  %
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#374151]">
                Sitter Service Fee (%)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#024B5E] transition-colors pr-10 text-gray-700"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">
                  %
                </span>
              </div>
            </div>
            <div className="space-y-2 relative">
              <label className="block text-sm font-medium text-[#374151]">
                Type
              </label>
              <button
                onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none text-left flex items-center justify-between text-gray-700 hover:border-gray-300 transition-colors"
              >
                <span>{feeType}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${showTypeDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showTypeDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl z-[110] overflow-hidden">
                  <button
                    onClick={() => {
                      setFeeType("Percentage");
                      setShowTypeDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 text-sm transition-colors"
                  >
                    %
                  </button>
                  <button
                    onClick={() => {
                      setFeeType("Fixed");
                      setShowTypeDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 text-sm transition-colors"
                  >
                    Fixed
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#374151]">
                Sitter Tax Retention
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#024B5E] transition-colors pr-10 text-gray-700"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">
                  {feeType === "Percentage" ? "%" : "$"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-[#F1F5F9] text-[#0F172A] rounded-2xl font-bold text-base hover:bg-[#E2E8F0] transition-all"
            >
              Cancel
            </button>
            <button className="flex-1 py-4 bg-[#024B5E] text-white rounded-2xl font-bold text-base hover:bg-[#024B5E] transition-all shadow-md active:scale-[0.98]">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxConfigurationModal;
