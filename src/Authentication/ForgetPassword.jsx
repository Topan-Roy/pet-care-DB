import React, { useState } from "react";
import logo from '../assets/Group 12.png'
import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
export default function ForgetPassword() {
    const [email, setEmail] = useState("");
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
                <div className="flex justify-center mb-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label="Go back"
                    >
                        <ArrowLeft size={10} className="w-4 h-4 mr-2 text-[#111111]" />
                        <span className="text-[20px] font-medium text-[#111111]">Forgot Password</span>
                    </button>
                </div>

                <p className="text-center text-sm text-gray-500 mb-6">
                    Please enter your email address to reset your password.
                </p>

                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-5 px-4 py-2 border border-gray-200 rounded-md bg-[#FFF8F2] focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
                />
                <Link to='/verifyotp'>
                <button className="w-full bg-[#004C5A] text-white py-2 rounded-md hover:bg-[#024B5E] transition mb-4">
                   Send OTP
                </button>
                </Link>
            </div>
        </div>
    );
}
