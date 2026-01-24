import React from "react";
import { Link } from "react-router";

const RecentPayment = () => {
  const paymentHistory = [
    {
      id: 1,
      date: "21/03/2025",
      transactionId: "93451",
      petOwner: "Guy Hawkins",
      petSitter: "Kristin Watson",
      amount: "$900",
      received: "$855",
    },
    {
      id: 2,
      date: "20/03/2025",
      transactionId: "93452",
      petOwner: "Savannah Nguyen",
      petSitter: "Cody Fisher",
      amount: "$700",
      received: "$665",
    },
    {
      id: 3,
      date: "19/03/2025",
      transactionId: "93453",
      petOwner: "Eleanor Pena",
      petSitter: "Jane Cooper",
      amount: "$500",
      received: "$475",
    },
    {
      id: 4,
      date: "18/03/2025",
      transactionId: "93454",
      petOwner: "Robert Fox",
      petSitter: "Wade Warren",
      amount: "$1200",
      received: "$1140",
    },
  ];

  return (
    <div className="p-4">
      <div className="bg-[#FFFFFF] mt-6 p-5 rounded-xl shadow-sm ">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-xl text-[#11293A]">
            Recent Payment History
          </h3>
          <Link to="/dashboard/payment">
            <button className="text-sm font-medium text-teal-600 hover:underline cursor-pointer">
              See all
            </button>
          </Link>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="shadow rounded bg-[#9999990D] text-[#333333]">
              <th className="text-center px-5 py-3 font-medium">Date</th>
              <th className="text-center px-5 py-3 font-medium">
                Transaction ID
              </th>
              <th className="text-center px-5 py-3 font-medium">Pet Owner</th>
              <th className="text-center px-5 py-3 font-medium">Pet Sitter</th>
              <th className="text-center px-5 py-3 font-medium">Amount</th>
              <th className="text-center px-5 py-3 font-medium">Received</th>
            </tr>
          </thead>

          <tbody>
            {paymentHistory.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#EBEBEB] last:border-none text-[#333333]"
              >
                <td className="py-3 text-center">{row.date}</td>
                <td className="py-3 text-center">{row.transactionId}</td>
                <td className="py-3 text-center">{row.petOwner}</td>
                <td className="py-3 text-center">{row.petSitter}</td>
                <td className="py-3 text-center">{row.amount}</td>
                <td className="py-3 text-center">{row.received}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPayment;
