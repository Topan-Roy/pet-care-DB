import React, { useState } from "react";
import logo from '../assets/Group 12.png';
import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function VerifyOTP() {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };
    const handleSubmit = () => {
        const enteredOtp = otp.join("");
        console.log("Entered OTP:", enteredOtp);
    };
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
                        Verify Email
                    </span>
                </div>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Please enter the otp we have sent you in your email.
                </p>
                <div className="flex justify-between mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            className="w-12 h-12 text-center text-xl border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#004C5A]"
                        />
                    ))}
                </div>
                <Link to="/resetpassword">
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-[#024B5E] text-[#FFFFFF] py-2 rounded-md hover:bg-[#024B5E] transition mb-4 cursor-pointer"
                    >
                        Verify Email
                    </button>
                </Link>

            </div>
        </div>
    );
}
