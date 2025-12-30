import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
const SettingsMenu = () => {
    return (
        <div className=" p-4">
            <div className="  bg-white rounded-xl border border-gray-200 ">
                <Link to='/dashboard/personalinformation'>
                    <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">

                        <span className="text-md text-[#333333] ">
                            Edit Personal Information
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                </Link>
                <Link to='/dashboard/changepassword'>
                  <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        Change Password
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                </Link>
              
                <Link to ='/dashboard/termscondition'>  
                 <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        Terms & Conditions
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                </Link>
               <Link to="/dashboard/privacypolicy">
               <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        Privacy Policy
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
               </Link>
                <Link to="/dashboard/faqtable">
                 <div className="flex justify-between items-center px-5 py-3 hover:bg-[#E7F4F6] cursor-pointer">
                    <span className="text-md text-[#333333] ">
                        FAQ
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                </Link>
               
            </div>
        </div>
    );
};

export default SettingsMenu;
