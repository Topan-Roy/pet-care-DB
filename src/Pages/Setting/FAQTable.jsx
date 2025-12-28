import React, { useState } from "react";
import { Pencil, Trash2, Plus, SquarePen } from "lucide-react";
import { useNavigate } from "react-router";
import { LuChevronLeft } from "react-icons/lu";
const FAQTable = () => {
    const navigate = useNavigate();
    const [faqs, setFaqs] = useState([
        { id: 1, question: "Leslie Alexander", answer: "Lorem ipsum dolor sit amet consectetur. Nunc dui tincidunt mi amet diam malesuada et. Consectetur arcu scelerisque ut" },
        { id: 2, question: "Leslie Alexander", answer: "Lorem ipsum dolor sit amet consectetur. Nunc dui tincidunt mi amet diam malesuada et. Consectetur arcu scelerisque ut" },
        { id: 3, question: "Leslie Alexander", answer: "Lorem ipsum dolor sit amet consectetur. Nunc dui tincidunt mi amet diam malesuada et. Consectetur arcu scelerisque ut" },
        { id: 4, question: "Leslie Alexander", answer: "Lorem ipsum dolor sit amet consectetur. Nunc dui tincidunt mi amet diam malesuada et. Consectetur arcu scelerisque ut" },
        { id: 5, question: "Leslie Alexander", answer: "Lorem ipsum dolor sit amet consectetur. Nunc dui tincidunt mi amet diam malesuada et. Consectetur arcu scelerisque ut" },
        { id: 6, question: "Leslie Alexander", answer: "Lorem ipsum dolor sit amet consectetur. Nunc dui tincidunt mi amet diam malesuada et. Consectetur arcu scelerisque ut" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    const handleAddFAQ = () => {
        const newFAQ = {
            id: faqs.length + 1,
            question: newQuestion,
            answer: newAnswer
        };
        setFaqs([...faqs, newFAQ]);
        setShowModal(false);
        setNewQuestion("");
        setNewAnswer("");
    };
    return (
        <div>
            <div className="rounded-xl">
                <div className="flex items-center justify-between mb-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label="Go back"
                    >
                        <LuChevronLeft className="w-5 h-5 mr-1 text-[#111111]" />
                        <span className="text-[18px] font-medium text-[#111111] ">Update FAQ</span>
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 bg-[#004D61] text-white px-4 py-2 rounded-lg hover:bg-[#003a4a]"
                    >
                        <Plus size={16} />
                        Add FAQ
                    </button>
                </div>
                <div className="overflow-hidden rounded overflow-y-auto max-h-[700px] bg-[#FFFFFF] p-3 ">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-[#9999990D] text-[#333333] text-[14px] text-center sticky top-0 z-20">
                            <tr>
                                <th className="py-3 px-4 font-medium">User ID</th>
                                <th className="py-3 px-4 font-medium">Questions</th>
                                <th className="py-3 px-4 font-medium">Answer</th>
                                <th className="py-3 px-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.map((faq) => (
                                <tr
                                    key={faq.id}
                                    className="border-b border-[#EBEBEB] hover:bg-[#0E7A601A] transition-colors duration-200 cursor-pointer text-center text-[#333333] text-md"
                                >
                                    <td className="py-3 px-4">{faq.id}</td>
                                    <td className="py-3 px-4">{faq.question}</td>
                                    <td className="py-3 px-4">{faq.answer}</td>
                                    <td className="py-3 px-4 flex gap-2 justify-center">
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <SquarePen size={20} />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <Trash2 size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-40 z-50">
                    <div className="bg-white rounded-lg w-[600px] p-6 shadow-lg">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Add new FAQ</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-600 font-bold text-xl"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-md text-[#5B5B5F] font-medium mb-1">Question</label>
                                <input
                                    type="text"
                                    placeholder="How to apply for a campaign?"
                                    value={newQuestion}
                                    onChange={(e) => setNewQuestion(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F9FEFF] bg-[#F9FEFF]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-md text-[#5B5B5F] font-medium mb-1">Answer*</label>
                                <textarea
                                    placeholder="Description..."
                                    value={newAnswer}
                                    onChange={(e) => setNewAnswer(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#F9FEFF] bg-[#F9FEFF]"
                                />
                            </div>
                            <div className="flex gap-3 w-full mt-2">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-1/2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddFAQ}
                                    className="w-1/2 px-4 py-2 bg-[#004D61] text-white rounded hover:bg-[#003a4a]"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQTable;
