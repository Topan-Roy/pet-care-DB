import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
export default function ChangePassword() {
    const navigate = useNavigate();
   
    const [showConfirm, setShowConfirm] = useState(false);
    const handleSubmit = () => {
       
    };
    return (
        <div className="min-h-screen  relative overflow-hidden flex items-center justify-center ">
            <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-[#004C5A] rounded-full"></div>
            <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-[#004C5A] rounded-full"></div>
            <div
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6 flex items-center gap-1 text-sm text-gray-700 cursor-pointer z-10"
            >
                <ArrowLeft size={16} className="w-5 h-5 mr-1 text-[#111111]" />
              <span className="text-[18px]  text-[#111111]">  Change Password</span>
            </div>
            <div className="relative z-10 bg-white w-full max-w-[420px] rounded-xl shadow-sm  p-6">
                <h2 className="text-xl font-semibold text-[#004C5A] mb-6 text-center">
                    Change Password
                </h2>
                <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-1 block">Current Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md bg-[#f9f9f9] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-1 block">New Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md bg-[#f9f9f9] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
                    />
                </div>
                <div className="mb-6 relative">
                    <label className="text-sm text-gray-600 mb-1 block">Confirm Password</label>
                    <input
                        type={showConfirm ? "text" : "password"}
                          placeholder="Confirm Password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md bg-[#f9f9f9] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
                    />
                    <div
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-9 cursor-pointer text-gray-500"
                    >
                        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#024B5E] text-[#FFFFFF] py-2 rounded-md hover:bg-[#024B5E] transition cursor-pointer"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
