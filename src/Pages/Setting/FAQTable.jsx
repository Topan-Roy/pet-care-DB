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
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingFaq, setEditingFaq] = useState(null);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    const handleAddFAQ = () => {
        if (!newQuestion || !newAnswer) return;
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

    const handleEditClick = (faq) => {
        setEditingFaq(faq);
        setNewQuestion(faq.question);
        setNewAnswer(faq.answer);
        setShowEditModal(true);
    };

    const handleUpdateFAQ = () => {
        if (!newQuestion || !newAnswer) return;
        const updatedFaqs = faqs.map(f =>
            f.id === editingFaq.id ? { ...f, question: newQuestion, answer: newAnswer } : f
        );
        setFaqs(updatedFaqs);
        setShowEditModal(false);
        setEditingFaq(null);
        setNewQuestion("");
        setNewAnswer("");
    };



    return (
        <div className="p-4">
            <div className="rounded-xl">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-slate-600 hover:text-slate-900 transition-colors">
                        <LuChevronLeft
                            onClick={() => navigate(-1)}
                            className="w-5 h-5 mr-1 text-[#111111] cursor-pointer"
                            aria-label="Go back"
                        />

                        <span className="text-[18px] text-[#111111]">
                            Update FAQ
                        </span>
                    </div>

                    <button
                        onClick={() => {
                            setNewQuestion("");
                            setNewAnswer("");
                            setShowModal(true);
                        }}
                        className="flex items-center gap-2 bg-[#004D61] text-white px-4 py-2 rounded-lg hover:bg-[#003a4a] cursor-pointer transition-all active:scale-95"
                    >
                        <Plus size={16} />
                        Add FAQ
                    </button>
                </div>
                <div className="overflow-hidden rounded-xl overflow-y-auto max-h-[700px] bg-[#FFFFFF] p-3 shadow-sm border border-gray-100">
                    <table className="min-w-full text-sm text-left border-separate border-spacing-0">
                        <thead className="bg-[#9999990D] text-[#333333] text-[14px] text-center sticky top-0 z-20">
                            <tr>
                                <th className="py-3 px-4 font-bold border-b border-gray-200">User ID</th>
                                <th className="py-3 px-4 font-bold border-b border-gray-200">Questions</th>
                                <th className="py-3 px-4 font-bold border-b border-gray-200">Answer</th>
                                <th className="py-3 px-4 font-bold border-b border-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.map((faq) => (
                                <tr
                                    key={faq.id}
                                    className="border-b border-[#EBEBEB] hover:bg-gray-50 transition-colors duration-200 text-center text-[#333333]"
                                >
                                    <td className="py-2 px-2 ">#{faq.id}</td>
                                    <td className="py-2 px-2">{faq.question}</td>
                                    <td className="py-2 px-2">{faq.answer}</td>
                                    <td className="py-2 px-2">
                                        <div className="flex gap-3 justify-center">
                                            <button
                                                onClick={() => handleEditClick(faq)}
                                                className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors cursor-pointer"
                                                title="Edit FAQ"
                                            >
                                                <SquarePen size={20} />
                                            </button>
                                            <button

                                                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer"
                                                title="Delete FAQ"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4 cursor-pointer"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-200 cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-[#111827]">Add new FAQ</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            >
                                <Plus size={24} className="rotate-45" />
                            </button>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Question</label>
                                <input
                                    type="text"
                                    placeholder="Enter your question here..."
                                    value={newQuestion}
                                    onChange={(e) => setNewQuestion(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D61]/20 focus:border-[#004D61] bg-gray-50 transition-all text-gray-800"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Answer*</label>
                                <textarea
                                    placeholder="Detailed description..."
                                    value={newAnswer}
                                    onChange={(e) => setNewAnswer(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#004D61]/20 focus:border-[#004D61] bg-gray-50 transition-all text-gray-800"
                                />
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 font-bold transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddFAQ}
                                    className="flex-1 px-6 py-3 bg-[#004D61] text-white rounded-xl hover:bg-[#003a4a] font-bold shadow-lg shadow-[#004D61]/20 transition-all active:scale-95 cursor-pointer"
                                >
                                    Add FAQ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4 cursor-pointer"
                    onClick={() => setShowEditModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-200 cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-[#111827]">Edit FAQ</h2>
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            >
                                <Plus size={24} className="rotate-45" />
                            </button>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Question</label>
                                <input
                                    type="text"
                                    placeholder="Enter your question here..."
                                    value={newQuestion}
                                    onChange={(e) => setNewQuestion(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D61]/20 focus:border-[#004D61] bg-gray-50 transition-all text-gray-800"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Answer*</label>
                                <textarea
                                    placeholder="Detailed description..."
                                    value={newAnswer}
                                    onChange={(e) => setNewAnswer(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#004D61]/20 focus:border-[#004D61] bg-gray-50 transition-all text-gray-800"
                                />
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => setShowEditModal(false)}
                                    className="flex-1 px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 font-bold transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleUpdateFAQ}
                                    className="flex-1 px-6 py-3 bg-[#004D61] text-white rounded-xl hover:bg-[#003a4a] font-bold shadow-lg shadow-[#004D61]/20 transition-all active:scale-95 cursor-pointer"
                                >
                                    Update FAQ
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

