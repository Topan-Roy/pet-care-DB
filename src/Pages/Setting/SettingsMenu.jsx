import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
const SettingsMenu = () => {
    return (
        <div className="   ">
            <div className="  bg-white rounded-xl border border-gray-200 ">
                <Link to='/dashoard/personalinformation'>
                    <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">

                        <span className="text-md text-[#333333] ">
                            Edit Personal Information
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                </Link>
                <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        Change Password
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <Link to ='/dashoard/termscondition'>  
                 <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        Terms & Conditions
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                </Link>
               <Link to="/dashoard/privacypolicy">
               <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        Privacy Policy
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
               </Link>
                
                <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        FAQ
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </div>
    );
};

export default SettingsMenu;
