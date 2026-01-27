import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { CalendarDays, ShieldCheck, ChevronDown } from "lucide-react";
import { AlertCircle } from "lucide-react";
const EarningSummary = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = Array.from({ length: 10 }, (_, i) => 2020 + i);
  const periods = ["This Week", "This Month"];

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
    setIsPeriodDropdownOpen(false);
  };
  const rawData = [
    { category: "Revenue", current: 90000, previous: 40000 },
    { category: "Orders", current: 65000, previous: 70000 },
    { category: "Customers", current: 35000, previous: 95000 },
    { category: "Avg Value", current: 90000, previous: 72000 },
  ];
  const comparisonData = rawData.map((item) => ({
    ...item,
    current: item.current,
    previous: item.previous,
  }));
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const currentVal = data.current;
      const previousVal = data.previous;

      const percentageChange =
        previousVal > 0
          ? (((currentVal - previousVal) / previousVal) * 100).toFixed(0)
          : 0;
      const isPositive = percentageChange >= 0;
      return (
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg min-w-[200px]">
          <h4 className="font-semibold text-gray-800 mb-2">{label}</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-600 font-medium">Current:</span>
              <span className="font-bold text-gray-900">
                {currentVal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Previous:</span>
              <span className="font-semibold text-gray-600">
                {previousVal.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div
              className={`text-sm font-semibold inline-flex items-center gap-1 ${isPositive ? "text-green-600" : "text-red-600"}`}
            >
              <span>
                {isPositive ? "↑" : "↓"} {Math.abs(percentageChange)}%
              </span>
              <span className="text-gray-500 font-normal ml-1">
                vs previous period
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="p-4">
      <div className="w-full h-1/2 bg-[#FFFFFF] p-5 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Earning Summary Comparison
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Compare metrics against previous periods to track growth.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setIsPeriodDropdownOpen(!isPeriodDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                style={{ minWidth: "120px", justifyContent: "space-between" }}
              >
                <span className="text-sm font-medium text-gray-700">
                  {selectedPeriod}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform ${isPeriodDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isPeriodDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsPeriodDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-2">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => handlePeriodSelect(period)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${selectedPeriod === period
                          ? "bg-teal-50 text-teal-700 font-medium"
                          : "text-gray-700"
                          }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full h-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} barGap={25}>
                <XAxis
                  dataKey="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  tickFormatter={(v) => `${v / 1000}k`}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "transparent" }}
                />
                <Legend />
                <Bar
                  dataKey="current"
                  fill="#0f766e"
                  radius={[4, 4, 0, 0]}
                  name="Current Period"
                  animationDuration={800}
                  barSize={70}
                />
                <Bar
                  dataKey="previous"
                  fill="#fca5a5"
                  radius={[4, 4, 0, 0]}
                  name="Previous Period"
                  animationDuration={800}
                  barSize={70}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EarningSummary;
