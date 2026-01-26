import React from "react";
import {
  X,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  ShieldCheck,
  Mail as MailIcon,
  Image as ImageIcon,
  ShieldAlert,
} from "lucide-react";

export default function SitterDetailsSidebar({ isOpen, onClose, sitter }) {
  const details = {
    ...sitter,
    name: sitter?.name || "David Miller",
    location: "Seattle, WA",
    age: "23 years old",
    experience: "3y exp",
    reviews: "(52 reviews)",
    email: "david.miller@example.com",
    phone: "(555) 916-1679",
    about:
      "Hi, I'm David! I've been a pet lover all my life. I specialize in caring for dogs and cats with special needs. I'm reliable, punctual, and will treat your furry friends like my own.",
    verificationDate: "Oct 12, 2023",
    gallery: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 w-[500px] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-1">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">
                Sitter Details
              </h2>
              <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                Verified
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex items-start gap-4">
            <img
              src={details.img}
              alt={details.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {details.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <MapPin size={14} />
                <span>{details.location}</span>
                <span>•</span>
                <span>{details.age}</span>
                <span>•</span>
                <span>{details.experience}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500 font-bold">
                  ★ {details.rating}
                </span>
                <span className="text-gray-400 text-sm">{details.reviews}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                <Mail size={14} />
                <span>Email</span>
              </div>
              <p
                className="text-sm font-medium text-gray-900 truncate"
                title={details.email}
              >
                {details.email}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                <Phone size={14} />
                <span>Phone</span>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {details.phone}
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">About</h4>
            <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 leading-relaxed">
              {details.about}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">
              Verification Status
            </h4>
            <div className="space-y-3">
              <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-full">
                    <ShieldCheck className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">
                      Government ID
                    </p>
                    <p className="text-xs text-gray-400">
                      Verified on {details.verificationDate}
                    </p>
                  </div>
                </div>
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-full">
                    <ShieldAlert className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">
                      Background Check
                    </p>
                    <p className="text-xs text-gray-400">Clear</p>
                  </div>
                </div>
                <CheckCircle className="text-green-500" size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon size={18} className="text-gray-900" />
              <h4 className="font-bold text-gray-900">Gallery</h4>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {details.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Gallery"
                  className="w-full h-24 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-sm text-gray-900">
                Profile Quality
              </span>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded font-medium">
                75% Complete
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
              <div className="h-full bg-orange-500 w-3/4 rounded-full" />
            </div>
          </div>
          <div className="space-y-3 pt-2">
            <button className="w-full flex justify-center items-center gap-2 border border-gray-200 py-2 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50">
              <MailIcon size={16} />
              Send Reminder to Complete Profile
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-2 rounded-lg border border-teal-600 text-teal-700 text-sm font-medium hover:bg-teal-50">
                Request Better Photos
              </button>
              <button className="py-2 rounded-lg bg-[#0E5F76] text-white text-sm font-medium hover:bg-[#0b4d60]">
                Request Profile Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
