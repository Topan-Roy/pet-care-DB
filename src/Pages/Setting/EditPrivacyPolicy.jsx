import React from "react";
import {LuChevronLeft,LuBold,LuItalic,LuUnderline,LuAlignLeft,LuAlignCenter,LuAlignRight,
LuLink,LuType,LuImage,} from "react-icons/lu";
import { useNavigate } from "react-router";
const EditPrivacyPolicy = () => {
    const navigate = useNavigate();
    const exec = (command, value = null) => {
        document.execCommand(command, false, value);
    };
    const changeFontSize = (size) => {
        exec("fontSize", 7);
        const fonts = document.getElementsByTagName("font");
        for (let i = 0; i < fonts.length; i++) {
            if (fonts[i].size === "7") {
                fonts[i].removeAttribute("size");
                fonts[i].style.fontSize = size + "px";
            }
        }
    };
    const changeColor = (color) => {
        exec("foreColor", color);
    };
    const addLink = () => {
        const url = prompt("Enter link URL");
        if (url) exec("createLink", url);
    };
    const addImage = () => {
        const url = prompt("Enter image URL");
        if (url) exec("insertImage", url);
    };
    const addCodeBlock = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        const range = selection.getRangeAt(0);
        const codeBlock = document.createElement("pre");
        const code = document.createElement("code");
        code.innerHTML = selection.toString();
        codeBlock.appendChild(code);
        codeBlock.style.backgroundColor = "#f5f5f5";
        codeBlock.style.padding = "8px";
        codeBlock.style.borderRadius = "6px";
        codeBlock.style.fontFamily = "monospace";
        codeBlock.style.whiteSpace = "pre-wrap";
        range.deleteContents();
        range.insertNode(codeBlock);
    };
    return (
        <div className="">
            <div className=" ">
                <div className="flex items-center justify-between p-2 ">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-slate-600 hover:text-slate-900"
                    >
                        <LuChevronLeft className="w-5 h-5 mr-1" />
                        <span className="text-[16px] text-[#111111] ">Privacy Policy</span>
                    </button>
                    <button className="bg-[#004D61] text-white px-6 py-2 rounded-lg text-sm">
                        Update
                    </button>
                </div>
                <div className=" bg-[#ffff] p-5 rounded shadow  ">
                    <div className="flex flex-wrap items-center gap-1 p-2 w-2/6 bg-[#F9FEFF]   mt-3 rounded-t-lg rounded">
                        <select
                            onChange={(e) => changeFontSize(e.target.value)}
                            className="text-xs border rounded px-1 mr-2"
                        >
                            <option value="16">16</option>
                            <option value="18">18</option>
                            <option value="20">20</option>
                        </select>
                        <button onClick={() => changeColor("#000000")} className="editor-btn">
                            <LuType />
                        </button>
                        <input
                            type="color"
                            onChange={(e) => changeColor(e.target.value)}
                            className="w-6 h-6 cursor-pointer"
                        />

                        <div className="w-px h-4 bg-slate-300 mx-2"></div>
                        <button onClick={() => exec("bold")} className="editor-btn"><LuBold /></button>
                        <button onClick={() => exec("italic")} className="editor-btn"><LuItalic /></button>
                        <button onClick={() => exec("underline")} className="editor-btn"><LuUnderline /></button>
                        <div className="w-px h-4 bg-slate-300 mx-2"></div>
                        <button onClick={() => exec("justifyLeft")} className="editor-btn"><LuAlignLeft /></button>
                        <button onClick={() => exec("justifyCenter")} className="editor-btn"><LuAlignCenter /></button>
                        <button onClick={() => exec("justifyRight")} className="editor-btn"><LuAlignRight /></button>

                        <div className="w-px h-4 bg-slate-300 mx-2"></div>
                        <button onClick={addLink} className="editor-btn">
                            <LuLink />
                        </button>
                        <button onClick={addImage} className="editor-btn">
                            <LuImage />
                        </button>
                        <button onClick={addCodeBlock} className="editor-btn">
                            &lt;/&gt;
                        </button>
                    </div>
                    <div className=" overflow-hidden  max-h-[70vh] overflow-y-auto">
                        <div
                            contentEditable
                            className=" p-4  outline-none -lg text-sm leading-relaxed"
                        >
                            <section>
                                <h3 className=" text-[#333333] text-[16px] mb-2">1. Information We Collect</h3>

                                <p className="text-[#333333] text-[16px] mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                </p>
                                <ul className="list-disc ml-5 space-y-1 text-[#333333] text-[16px] mb-2">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                                    <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                </ul>
                            </section>
                            <section>
                                <h3 className=" text-[#333333] text-[16px] mb-2">2. How We Use Information</h3>

                                <p className="text-[#333333] text-[16px] mb-2">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                </p>
                                <ul className="list-disc ml-5 space-y-1 text-[#333333] text-[16px] mb-2">
                                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus.</li>
                                    <li>Et harum quidem rerum facilis est et expedita distinctio.</li>
                                    <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus..</li>
                                </ul>
                            </section>
                            <section>
                                <h3 className=" text-[#333333] text-[16px] mb-2">3. Sharing of Information</h3>

                                <p className="text-[#333333] text-[16px] mb-2">
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                </p>
                                <ul className="list-disc ml-5 space-y-1 text-[#333333] text-[16px] mb-2">
                                    <li>Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</li>
                                    <li>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</li>
                                </ul>
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

            <style>
                {`
          .editor-btn {
            padding: 6px;
            border-radius: 6px;
            color: #475569;
          }
          .editor-btn:hover {
            background: white;
            box-shadow: 0 1px 2px rgba(0,0,0,.15);
          }
        `}
            </style>
        </div>
    );
};

export default EditPrivacyPolicy;
