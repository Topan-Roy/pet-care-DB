import React from "react";
const ReviewDeploy = ({ prev }) => {
  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md border border-gray-200">
        <div className="px-6 py-5 ">
          <h1 className="text-2xl font-semibold text-[#11293A]">
            Review & Deploy
          </h1>
        </div>
        <div className="px-10 py-6 ">
          <h2 className="text-xl font-semibold text-[#11293A] mb-4">
            Campaign Summary
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between text-md
             text-[#11293A] border-[#EEEEEE] border-b pb-2">
              <span className="text-[#11293A] text-md">Campaign Name:</span>
              <span className="font-medium text-[#11293A] text-md">Summer Sale</span>
            </div>
            <div className="flex justify-between border-b  text-[#11293A] border-[#EEEEEE] pb-2">
              <span className="text-[#11293A] text-md">Coupon Name:</span>
              <span className="font-medium text-[#11293A] text-md">SUMMER 20</span>
            </div>
            <div className="flex justify-between  text-[#11293A] border-[#EEEEEE] border-b pb-2">
              <span className="text-[#11293A] text-md">Discount:</span>
              <span className="font-medium text-[#11293A] text-md">20% OFF</span>
            </div>
            <div className="flex justify-between  text-[#11293A] border-[#EEEEEE] border-b pb-2">
              <span className="text-[#11293A] text-md">Usage Limit:</span>
              <span className="font-medium text-[#11293A] text-md">1000 users</span>
            </div>
            <div className="flex justify-between  text-[#11293A] border-[#EEEEEE] border-b pb-2">
              <span className="text-[#11293A] text-md">Target Audience:</span>
              <span className="font-medium text-[#11293A] text-md">All users</span>
            </div>
            <div className="flex justify-between ">
              <span className="text-[#11293A] text-md">Expiry:</span>
              <span className="font-medium text-[#11293A] text-md">No expiry</span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t flex gap-3  text-[#11293A] border-[#EEEEEE]">
          <button
            className="px-6 py-2 bg-[#ECF7FE] text-[#11293A] rounded"
            onClick={prev}
          >
            Previous
          </button>
          <button className="px-5 py-2 rounded-lg  bg-[#024B5E] text-[#F9FAFB] ">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDeploy;
