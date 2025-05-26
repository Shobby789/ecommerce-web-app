import React from "react";
import { GoDotFill } from "react-icons/go";

const ProductViews = () => {
  return (
    <div className="w-full bg-white border p-7 rounded-lg min-h-[500px]">
      <div className="w-full flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Sales Trend</h3>
        <div className="flex items-center justify-end gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <GoDotFill className="text-indigo-500 text-xl" />
            <span className="text-xs font-medium">This week</span>
          </div>
          <div className="flex items-center gap-1">
            <GoDotFill className="text-red-500 text-xl" />
            <span className="text-xs font-medium">Last week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViews;
