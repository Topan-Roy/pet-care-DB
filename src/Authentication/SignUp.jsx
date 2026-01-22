import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/Logo.png";
import { Link } from "react-router";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FCFC] relative overflow-hidden">
      <div className="absolute -top-40 -left-60 w-[450px] h-[450px] bg-[#004C5A] rounded-full"></div>
      <div className="absolute -bottom-40 -right-60 w-[450px] h-[450px] bg-[#004C5A] rounded-full"></div>
      <div className="relative bg-white w-[380px] rounded-xl border border-[#CFE3E6] p-8 z-10">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-auto">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h2 className="text-center text-[#333333] text-xl font-semibold mb-6">
          Sign In
        </h2>
        <input
          type="text"
          placeholder="User name"
          className="w-full text-[#666666] mb-4 px-4 py-2 border border-gray-200 rounded-md bg-[#FFF8F2] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full text-[#666666] px-4 py-2 border border-gray-200 rounded-md bg-[#FFF8F2] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>
        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center gap-2 text-md text-[#333333]">
            <input
              type="checkbox"
              className="accent-[#004C5A] text-[#333333]"
            />
            Remember me
          </label>
          <Link to="/forgetpassword">
            <button className="text-[#FE6C5D] hover:underline cursor-pointer">
              Forgot password?
            </button>
          </Link>
        </div>
        <Link to="/dashboard">
          <button className="w-full bg-[#024B5E] text-[#FFFFFF] py-2 rounded-md hover:bg-[#024B5E] transition cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
