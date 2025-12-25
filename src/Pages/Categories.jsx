import { SquarePen } from "lucide-react";
import React from "react";
const services = [
    {
        title: "DOG BOARDING",
        description:
            "Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a familiar environment.",
        icon: "🐾",
    },
    {
        title: "DOGGY DAY CARE",
        description:
            "Your dog spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
        icon: "🐶",
    },
    {
        title: "DOG WALKING",
        description:
            "Your dog gets a walk around your neighborhood. Perfect for busy days and dogs with extra energy to burn.",
        icon: "🐕",
    },
];

const Categories = () => {
    return (
        <div className="">
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
                            <button className="text-gray-400 hover:text-gray-600">
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
                                <div className="border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm text-[#357F91]">
                                    $5.00
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-[#024B5E] mb-1">Up to Price</p>
                                <div className="border border-[#E5E7EB]  text-[#357F91] rounded-lg px-3 py-2 text-sm ">
                                    $2.50
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories