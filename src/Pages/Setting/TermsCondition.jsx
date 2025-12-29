import { LucideFileEdit, SquarePen } from "lucide-react";
import React from "react";
import { LuChevronLeft } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
const TermsCondition = () => {
    const navigate = useNavigate();
    return (
        <div className="   text-slate-700">
            <div className="  overflow-hidden">

                <div className="flex items-center justify-between p-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label="Go back"
                    >
                        <LuChevronLeft className="w-5 h-5 mr-1 text-[#111111]" />
                        <span className="text-[18px]  text-[#111111] ">Terms & Conditions</span>
                    </button>
                    <Link to="/dashboard/editTermsandconditions">
                        <button
                            className="flex items-center bg-[#004D61] text-white px-4 py-2 rounded-lg hover:bg-[#003a4a] transition-colors shadow-sm"
                            aria-label="Edit terms and conditions"
                        >
                            <SquarePen className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Edit</span>
                        </button>
                    </Link>

                </div>

                <div className=" bg-white p-6 md:p-10 max-h-[80vh] overflow-y-auto shadow rounded">
                    <h2 className="text-[#024B5E] font-semibold text-lg mb-6">
                        Last Updated: October 2025
                    </h2>
                    <div className="space-y-8 text-sm leading-relaxed text-slate-600">
                        <section>
                            <h3 className=" text-[#333333] text-[16px] mb-2">1. Introduction</h3>
                            <p className="text-[#333333] text-[16px] mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>
                        </section>
                        <section>
                            <h3 className="text-[#333333] text-[16px] mb-2">2. Eligibility</h3>
                            <p className="text-[#333333] text-[16px] mb-2">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                            </p>
                        </section>
                        <section>
                            <h3 className="text-[#333333] text-[16px] mb-2">3. User Responsibilities</h3>
                            <ul className="list-disc ml-5 space-y-1 text-[#333333] text-[16px] mb-2">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                                <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="text-[#333333] text-[16px] mb-2">4. Prohibited Activities</h3>
                            <p className="text-[#333333] text-[16px] mb-2">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </section>
                        <section>
                            <h3 className="text-[#333333] text-[16px] mb-2">5. Limitation of Liability</h3>
                            <p className="text-[#333333] text-[16px] mb-2">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                            </p>
                        </section>
                        <section>
                            <h3 className="text-[#333333] text-[16px] mb-2">6. Termination</h3>
                            <p className="text-[#333333] text-[16px] mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </section>
                        <section>
                            <h3 className="text-[#333333] text-[16px] mb-2">7. Governing Law</h3>
                            <p className="text-[#333333] text-[16px] mb-2">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                            </p>
                        </section>
                        <section className="pt-4">
                            <h3 className="text-[#333333] text-[16px] mb-2">Contact Us</h3>
                            <p className="text-[#333333] text-[16px] mb-2">
                                If you have any questions regarding these Terms & Conditions, please contact us at:
                                <span className="font-semibold text-[#333333] text-[16px] mb-2 ml-1">
                                    LoremIpsum@example.com
                                </span>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;
