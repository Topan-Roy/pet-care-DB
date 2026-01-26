import React, { useState } from "react";
import { X, Info, RefreshCw, CheckCircle2, Circle } from "lucide-react";

export default function CreatePromoModal({ isOpen, onClose }) {
  const [promoType, setPromoType] = useState("generic");
  const [formData, setFormData] = useState({
    code: "",
    assignTo: "",
    generatedCode: "SIT-JOHN-XKAT",
    owners: false,
    sitters: false,
    firstTime: false,
    referralOnly: false,
    discountAmount: "10",
    discountType: "percentage",
    totalLimit: "",
    expiryDate: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm p-4">
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Create New Promo Code
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Configure discount rules and eligibility
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="p-6 space-y-8">
          <section>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">
              1. Promo Type
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Generic Card */}
              <div
                onClick={() => setPromoType("generic")}
                className={`cursor-pointer border rounded-lg p-4 flex items-start gap-3 transition-all ${
                  promoType === "generic"
                    ? "border-[#0F5A6D] bg-[#F1F6F7]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`mt-0.5 ${
                    promoType === "generic" ? "text-[#0F5A6D]" : "text-gray-300"
                  }`}
                >
                  {promoType === "generic" ? (
                    <CheckCircle2
                      size={20}
                      fill="#0F5A6D"
                      className="text-white"
                    />
                  ) : (
                    <Circle size={20} />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Generic Code
                  </div>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">
                    For campaigns (e.g., SUMMER25). Used by multiple users.
                  </p>
                </div>
              </div>

              {/* Unique Card */}
              <div
                onClick={() => setPromoType("unique")}
                className={`cursor-pointer border rounded-lg p-4 flex items-start gap-3 transition-all ${
                  promoType === "unique"
                    ? "border-[#0F5A6D] bg-[#F1F6F7]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`mt-0.5 ${
                    promoType === "unique" ? "text-[#0F5A6D]" : "text-gray-300"
                  }`}
                >
                  {promoType === "unique" ? (
                    <CheckCircle2
                      size={20}
                      fill="#0F5A6D"
                      className="text-white"
                    />
                  ) : (
                    <Circle size={20} />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Unique (Referral)
                  </div>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">
                    Auto-generated for a specific user. Tied to referrals.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {promoType === "generic" ? (
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Promo Code String
              </label>
              <input
                type="text"
                placeholder="E.G. SUMMER25"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-sm uppercase"
              />
              <p className="text-xs text-gray-400">
                Only uppercase letters, numbers, and hyphens allowed.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Assign to User
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-lg p-3 flex items-center gap-2 text-[#4F46E5] text-sm font-medium">
                <RefreshCw size={16} />
                <span>Generated Code:</span>
                <span className="text-[#111827] font-bold">SIT-JOHN-XKAT</span>
              </div>
            </div>
          )}
          <section>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">
              2. Eligibility Rules
            </h3>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">Owners</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">Sitters</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">
                  First-time users only
                </span>
              </label>
              {promoType === "unique" && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-sm text-gray-700">Referral only</span>
                </label>
              )}
            </div>
          </section>

          {/* 3. Discount Rules */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">
              3. Discount Rules
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Discount Amount</label>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full px-2 py-1.5 outline-none"
                  />
                  <div className="border-l border-gray-300 bg-gray-50  pr-2">
                    <select className="h-full px-2 bg-transparent outline-none text-gray-600 text-sm cursor-pointer">
                      <option value="percentage">%</option>
                      <option value="fixed">$</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Applied To</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 outline-none text-sm text-gray-700">
                    <option value="owner_total">Owner Payment (Total)</option>
                    <option value="sitter_fee">Sitter Platform Fee</option>
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
            </div>

            {promoType === "unique" && (
              <div className="mt-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-4 flex items-start gap-3">
                <Info className="text-[#3B82F6] shrink-0 mt-0.5" size={18} />
                <div className="text-sm text-[#1E40AF]">
                  <span className="font-semibold block mb-1">
                    Referral Logic Active
                  </span>
                  Since this is a unique code linked to a sitter, the discount
                  will be applied automatically to the referring sitter's fee on
                  their next completed service after a successful referral.
                </div>
              </div>
            )}
          </section>

          {/* 4. Usage Limits */}
          <section>
            <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">
              4. Usage Limits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-500">
                  Total Usage Limit
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 (Leave blank for unlimited)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Expiration Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 pt-2 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 bg-[#0F5A6D] text-white rounded-lg font-medium hover:bg-[#0c4b5b] transition-colors shadow-sm">
            Create Promo
          </button>
        </div>
      </div>
    </div>
  );
}
