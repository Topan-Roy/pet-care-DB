import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
export default function PersonalInfo() {
    const navigate = useNavigate();
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <div
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#0F172A] font-semibold cursor-pointer"
                >
                    <ArrowLeft size={18} />
                    <span className="text-[#111111]">Personal Information</span>
                </div>
                <Link to="/dashboard/personalinfon">
                    <button className="flex items-center gap-2 bg-[#024B5E] text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
                        Save Change
                    </button>
                </Link>

            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-[#FEFEFE] rounded-xl p-5 shadow-sm flex flex-col items-center w-full md:w-[240px] h-72">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="profile"
                        className="w-[72px] h-[72px] rounded-full object-cover mb-3"
                    />
                    <span className="text-sm text-gray-500 mb-1">
                        Profile
                    </span>
                    <span className="text-base font-medium text-[#024B5E]">
                        Admin
                    </span>
                </div>
                <div className="flex-1  rounded-xl p-6 shadow-sm">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#575757] mb-1">Name</label>
                            <input
                                type="text"
                                defaultValue="Tamim"
                                className="w-full border border-[#E3E6F0] rounded-lg px-4 py-2 text-[#575757] outline-none focus:border-[#b1b4bd] bg-[#FEFEFE]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#575757] mb-1">
                                Email
                            </label>
                            <input
                               defaultValue="gddvc@gmail.com"
                               type="text"
                                className="w-full  border border-[#E3E6F0] rounded-lg px-4 py-2  text-[#575757] outline-none focus:border-[#b1b4bd] focus:outline-none bg-[#FEFEFE] "
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#575757] mb-1">
                                Phone Number
                            </label>
                            <div className="flex">
                                <div className="flex items-center gap-2 px-3 border rounded-l-lg bg-[#024B5E]">
                                    <img
                                        src="https://flagcdn.com/w20/us.png"
                                        alt="flag"
                                        className="w-7 h-5"
                                    />
                                    <span className="text-sm text-[#ffffff]">+1</span>
                                </div>
                                <input
                                   defaultValue="5735353"
                                  type="number"
                                    className="w-full  border border-[#E3E6F0] rounded-lg px-4 py-2  text-[#575757] outline-none focus:border-[#b1b4bd] focus:outline-none bg-[#FEFEFE] "
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-[#575757] mb-1">
                                Facebook
                            </label>
                            <input
                              defaultValue="gddvc@gmail.com"
                               type="text"
                                className="w-full border border-[#E3E6F0] rounded-lg px-4 py-2 text-[#575757] outline-none focus:border-[#b1b4bd] 
                                  focus:outline-none bg-[#FEFEFE]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#575757] mb-1">
                                Instagram
                            </label>
                            <input
                               defaultValue="gddvc@gmail.com"
                              type="text"
                                className="w-full border border-[#E3E6F0] rounded-lg px-4 py-2 text-[#575757] outline-none focus:border-[#b1b4bd] 
                                 focus:outline-none bg-[#FEFEFE]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#575757] mb-1">
                                LinkedIn
                            </label>
                            <input
                               defaultValue="gddvc@gmail.com"
                          type="text"
                                className="w-full border border-[#E3E6F0] rounded-lg px-4 py-2 text-[#575757] outline-none focus:border-[#b1b4bd] 
                                  focus:outline-none bg-[#FEFEFE]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#575757] mb-1">
                                Twitter
                            </label>
                            <input
                             defaultValue="gddvc@gmail.com"
                                 type="text"
                                className="w-full border border-[#E3E6F0] rounded-lg px-4 py-2 text-[#575757] outline-none focus:border-[#b1b4bd] 
                                 focus:outline-none bg-[#FEFEFE]"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
