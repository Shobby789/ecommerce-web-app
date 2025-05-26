import React from "react";
import { GoDotFill } from "react-icons/go";

const SalesTrend = () => {
  return (
    <div className="w-full bg-white border p-7 rounded-lg min-h-[500px]">
      <div className="w-full flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Sales Trend</h3>
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-1">
            <GoDotFill className="text-indigo-500 text-2xl" />
            <span className="text-sm font-medium">Current year</span>
          </div>
          <div className="flex items-center gap-1">
            <GoDotFill className="text-red-500 text-2xl" />
            <span className="text-sm font-medium">Last year</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTrend;
