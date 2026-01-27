import { SquarePen, X } from "lucide-react";
import React, { useState } from "react";
const servicesData = [
    {
        title: "DOG BOARDING",
        description:
            "Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a familiar environment.",
        icon: "🐾",
        startPrice: "5.0000",
        upToPrice: "2.50",
    },
    {
        title: "DOGGY DAY CARE",
        description:
            "Your dog spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
        icon: "🐶",
        startPrice: "5.00",
        upToPrice: "2.50",
    },
    {
        title: "DOG WALKING",
        description:
            "Your dog gets a walk around your neighborhood. Perfect for busy days and dogs with extra energy to burn.",
        icon: "🐕",
        startPrice: "5.00",
        upToPrice: "2.50",
    },
];
const Categories = () => {
    const [services, setServices] = useState(servicesData);
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(null);
    const handleEdit = (item, index) => {
        setCurrent({ ...item, index });
        setOpen(true);
    };
    const handleChange = (e) => {
        setCurrent({ ...current, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        const updated = [...services];
        updated[current.index] = current;
        setServices(updated);
        setOpen(false);
    };
    return (
        <>
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-xl">
                                {item.icon}
                            </div>
                            <button
                                onClick={() => handleEdit(item, index)}
                                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                                <SquarePen />
                            </button>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold tracking-wide text-[#024B5E]">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#585858] leading-relaxed">
                            {item.description}
                        </p>
                        <div className="mt-5 flex gap-4">
                            <div className="flex-1">
                                <p className="text-sm text-[#024B5E] mb-1">Starting Price</p>
                                <div className="border rounded-lg px-3 py-2 text-sm text-[#357F91]">
                                    ${item.startPrice}
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-[#024B5E] mb-1">Up to Price</p>
                                <div className="border rounded-lg px-3 py-2 text-sm text-[#357F91]">
                                    ${item.upToPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            {/* Modal */}
            {open && current && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 relative">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-[#024B5E]">
                                Add  Edit Category
                            </h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-[#024B5E] mb-1">
                                    Category name
                                </label>
                                <input
                                    name="title"
                                    value={current.title}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#024B5E]"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-[#024B5E] mb-1">
                                        Starting Price
                                    </label>
                                    <input
                                        name="startPrice"
                                        value={current.startPrice}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#024B5E]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-[#024B5E] mb-1">
                                        Up to Price
                                    </label>
                                    <input
                                        name="upToPrice"
                                        value={current.upToPrice}
                                        onChange={handleChange}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#024B5E]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-6 py-2 rounded-full border border-[#024B5E] text-[#024B5E] text-sm font-medium cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 rounded-full bg-[#024B5E] text-white text-sm font-medium cursor-pointer"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Categories;
