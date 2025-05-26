import React, { useEffect } from "react";
import Stats from "../../components/Dashboard/Stats";
import SalesTrend from "../../components/Dashboard/SalesTrend";
import ProductViews from "../../components/Dashboard/ProductViews";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div className="flex flex-col items-start gap-6 w-full">
      <Stats />
      <div className="w-full grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <SalesTrend />
        </div>
        <div className="col-span-1">
          <ProductViews />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
