import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const LocationFilterModal = ({ isOpen, onClose, onApply, initialValues }) => {
    const [state, setState] = useState(initialValues?.state || "Texas");
    const [city, setCity] = useState(initialValues?.city || "Austin");
    const [neighborhood, setNeighborhood] = useState(initialValues?.neighborhood || "Downtown");

    if (!isOpen) return null;

    const handleApply = () => {
        onApply({ state, city, neighborhood });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className="relative bg-white w-[350px] rounded-[32px] p-8 shadow-2xl flex flex-col gap-6">
                {/* State Section */}
                <div className="flex flex-col gap-2">
                    <label className="text-[#344054] text-sm font-medium">State</label>
                    <div className="relative">
                        <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full appearance-none bg-white border border-[#D0D5DD] rounded-2xl px-4 py-3 text-[#101828] font-medium outline-none cursor-pointer focus:ring-2 focus:ring-teal-500/20 transition-all font-sans"
                        >
                            <option value="Texas">Texas</option>
                            <option value="California">California</option>
                            <option value="New York">New York</option>
                            <option value="Florida">Florida</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" size={20} />
                    </div>
                </div>

                {/* City Section */}
                <div className="flex flex-col gap-2">
                    <label className="text-[#344054] text-sm font-medium">City</label>
                    <div className="relative">
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full appearance-none bg-white border border-[#D0D5DD] rounded-2xl px-4 py-3 text-[#101828] font-medium outline-none cursor-pointer focus:ring-2 focus:ring-teal-500/20 transition-all font-sans"
                        >
                            <option value="Austin">Austin</option>
                            <option value="Dallas">Dallas</option>
                            <option value="Houston">Houston</option>
                            <option value="San Antonio">San Antonio</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" size={20} />
                    </div>
                </div>

                {/* Neighborhood Section */}
                <div className="flex flex-col gap-2">
                    <label className="text-[#344054] text-sm font-medium">Neighborhood</label>
                    <div className="relative">
                        <select
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                            className="w-full appearance-none bg-white border border-[#D0D5DD] rounded-2xl px-4 py-3 text-[#101828] font-medium outline-none cursor-pointer focus:ring-2 focus:ring-teal-500/20 transition-all font-sans"
                        >
                            <option value="Downtown">Downtown</option>
                            <option value="South Congress">South Congress</option>
                            <option value="East Austin">East Austin</option>
                            <option value="North Loop">North Loop</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" size={20} />
                    </div>
                </div>

                {/* Apply Button */}
                <button
                    onClick={handleApply}
                    className="w-full bg-[#D6EFFF] text-[#1D2939] font-bold py-4 rounded-2xl hover:bg-[#C2E5FF] transition-colors mt-2"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default LocationFilterModal;
