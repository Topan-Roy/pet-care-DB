import React, { useState } from "react";
import logo from '../assets/Group 12.png';
import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FCFC] relative overflow-hidden px-4">
            <div className="absolute -top-40 -left-60 w-[450px] h-[450px] bg-[#004C5A] rounded-full"></div>
            <div className="absolute -bottom-40 -right-60 w-[450px] h-[450px] bg-[#004C5A] rounded-full"></div>
            <div className="relative bg-white w-full max-w-[380px] rounded-xl border border-[#CFE3E6] p-6 sm:p-8 z-10">
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#004C5A] rounded-full overflow-hidden">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex justify-center mb-3 items-center gap-2">
                    <span
                        onClick={() => navigate(-1)}
                        className="cursor-pointer text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label="Go back"
                    >
                        <ArrowLeft size={10} className="w-4 h-4 text-[#111111]" />
                    </span>
                    <span className="text-[20px] font-medium text-[#111111]">
                        Reset Password
                    </span>
                </div>

                <p className="text-center text-sm text-gray-500 mb-6">
                    Your password must be 8-10 characters long.
                </p>
                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Set your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-md bg-[#FFF8F2] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
                    />
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                </div>
                <div className="relative mb-6">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-md bg-[#FFF8F2] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
                    />
                    <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                </div>
                <Link to='/'>
                 <button
                    className="w-full bg-[#024B5E] text-[#FFFFFF] py-2 rounded-md hover:bg-[#024B5E] transition mb-4 cursor-pointer"
                >
                    Reset Password
                </button>
                </Link>
               
            </div>
        </div>
    );
}
