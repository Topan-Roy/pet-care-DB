import { BadgeCheck, BadgeCheckIcon } from "lucide-react";
export default function PetSitterDeleils() {
    return (
        <div className="p-4">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div className="bg-white rounded-xl p-6 shadow border border-[#EBEBEB]">
                    <div className="flex items-center gap-4 bg-[#1C59410D] p-8 rounded-2xl">
                        <img
                            src="https://i.pravatar.cc/100"
                            className="w-16 h-16 rounded-full ring-2 ring-green-400"
                            alt=""
                        />
                        <div>
                            <h3 className="font-semibold flex items-center gap-2 text-[#333333] text-lg">
                                Wade Warren
                                <span className="bg-blue-500 text-white  rounded-full flex items-center justify-center">
                                    <BadgeCheckIcon size={24} className="w-5 h-5" />
                                </span>
                            </h3>
                            <p className="text-[#333333] mt-2 mb-2">★ 5.0 (55 reviews)</p>
                            <div className="flex gap-2 mt-1">
                                <span className="text-xs px-3 py-1 rounded-full bg-[#FFFFFF] text-[#333333] border border-[#3EBF5A] font-medium">
                                   Pet Sitter
                                </span>
                                <span className="text-xs px-4 py-1 rounded-full bg-[#F34F4F] text-white">
                                    Ban
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="font-semibold mb-2 text-[#000000] text-lg">About</h4>
                        <p className="text-sm text-[#7A7A7A] border-t-2  border-b-2  border-[#EBEBEB] py-4 ">
                            Ocean View Hotel is a premium beachfront destination renowned for
                            its exceptional guest service, welcoming atmosphere, and dynamic
                            work culture.
                        </p>
                    </div>
                    {/* DETAILS */}
                    <div className=" ">
                        <h4 className="font-semibold mb-3 mt-2 text-[#000000] text-lg">Details</h4>
                        <ul className="text-sm space-y-2 text-gray-600">
                            <li>
                                <span className="font-medium text-[#333333] text-md">Name:</span> <span className="text-[#7A7A7A] text-sm px-2">Jacob Maicle</span>
                            </li>
                            <li>
                                <span className="font-medium text-[#333333] text-md">Location:</span><span className="text-[#7A7A7A] text-sm px-2">Building 1303 Wake Island</span>
                            </li>
                            <li>
                                <span className="font-medium text-[#333333] text-md">Business Hours:</span><span className="text-[#7A7A7A] text-sm px-2">9:00AM - 5:00PM</span>
                            </li>
                            <li>
                                <span className="font-medium text-[#333333] text-md">Joined Date:</span> <span className="text-[#7A7A7A] text-sm px-2">Aug 5, 2023</span>
                            </li>
                            <li>
                                <span className="font-medium text-[#333333] text-md">Business Status:</span> <span className="bg-[#E4F6E8] text-[#3EBF5A] px-2 py-1 rounded-full text-xs font-medium">Verified</span>
                            </li>
                            <li>
                                <span className="font-medium text-[#333333] text-md">Contact:</span> <span className="text-[#7A7A7A] text-sm px-2">(603) 555-0123</span>
                            </li>
                            <li>
                                <span className="font-medium text-[#333333] text-md">Email:</span> <span className="text-[#7A7A7A] text-sm px-2">support@romasportsclub.com</span>
                            </li>
                            <li>
                                <span className="font-medium text-[#333333] text-md">Language:</span> <span className="text-[#7A7A7A] text-sm px-2">English</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-medium text-[#333333] text-md">Services Provided:</span>
                                <span className="flex items-center gap-1 bg-[#E7F4F6] rounded-full px-2 py-1">
                                    <span className="w-2 h-2 bg-[#024B5E] rounded-full inline-block"></span>
                                    <span className=" text-[#024B5E]  rounded-full text-xs font-medium">
                                        BOARDING
                                    </span>
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
                {/* RIGHT ACTIVITY TIMELINE */}
                <div className="md:col-span-2 bg-white rounded-xl p-6 shadow border border-[#EBEBEB]">
                    <h2 className="text-xl font-semibold mb-4">Activity Timeline</h2>
                    <div className="space-y-4">
                        <div className="border-l-3 border border-[#024B5E] rounded-xl p-4 flex justify-between items-start">
                            <div className="flex gap-3 w-full font-medium">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div className="w-full">
                                    <h4 className="font-semibold">Text</h4>
                                    <p className="mt-1 text-sm text-gray-500">Sub text</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap">
                                Aug,12 2025
                            </span>
                        </div>
                        <div className="border-l-3 border border-[#024B5E] rounded-xl p-4 flex justify-between items-start">
                            <div className="flex gap-3 w-full font-medium">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div className="w-full">
                                    <h4 className="font-semibold">Text</h4>
                                    <p className="mt-1 text-sm text-gray-500">Sub text</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap">
                                Aug,12 2025
                            </span>
                        </div>
                        <div className="border-l-3 border border-[#024B5E] rounded-xl p-4 flex justify-between items-start">
                            <div className="flex gap-3 w-full font-medium">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div className="w-full">
                                    <h4 className="font-semibold">Text</h4>
                                    <p className="mt-1 text-sm text-gray-500">Sub text</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap">
                                Aug,12 2025
                            </span>
                        </div>
                        <div className="border-l-3 border border-[#024B5E] rounded-xl p-4 flex justify-between items-start">
                            <div className="flex gap-3 w-full font-medium">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div className="w-full">
                                    <h4 className="font-semibold">Text</h4>
                                    <p className="mt-1 text-sm text-gray-500">Sub text</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap">
                                Aug,12 2025
                            </span>
                        </div>
                        <div className="border-l-3 border border-[#024B5E] rounded-xl p-4 flex justify-between items-start">
                            <div className="flex gap-3 w-full font-medium">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div className="w-full">
                                    <h4 className="font-semibold">Text</h4>
                                    <p className="mt-1 text-sm text-gray-500">Sub text</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap">
                                Aug,12 2025
                            </span>
                        </div>
                        <div className="border-l-3 border border-[#024B5E] rounded-xl p-4 flex justify-between items-start">
                            <div className="flex gap-3 w-full font-medium">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <div className="w-full">
                                    <h4 className="font-semibold">Text</h4>
                                    <p className="mt-1 text-sm text-gray-500">Sub text</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap">
                                Aug,12 2025
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
