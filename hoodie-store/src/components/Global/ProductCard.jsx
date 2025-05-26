import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="w-full 2xl:w-[400px] lg:w-[31%] h-[80vh] 2xl:h-[60vh] overflow-hidden relative bg-neutral-200">
      <img
        src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296264.jpg?t=st=1729005067~exp=1729008667~hmac=1d81ce11b3edefde6b9672dd25b8d0f516df9d0451053ee231a7ef1347f2fe17&w=740"
        alt=""
        className="absolute w-full h-full inset-0 z-10 bg-contain brightness-90"
      />
      <div className="absolute inset-0 w-full h-full z-20 flex items-start justify-between p-6">
        <span className="border-[1px] border-black text-lg font-medium rounded-full px-5 py-2">
          $18
        </span>
        <Link
          to={"/"}
          className="border-[1px] border-black text-xl font-semibold rounded-full px-3 py-3"
        >
          <GoArrowUpRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
