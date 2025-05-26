import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  return (
    <div className="w-full 2xl:w-[400px] lg:w-[31%] h-[80vh] 2xl:h-[60vh] overflow-hidden relative bg-neutral-200">
      <img
        src="https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296264.jpg?t=st=1729005067~exp=1729008667~hmac=1d81ce11b3edefde6b9672dd25b8d0f516df9d0451053ee231a7ef1347f2fe17&w=740"
        alt=""
        className="absolute h-full oject-cover inset-0 z-10 brightness-90 w-full"
      />
      <div className="absolute inset-0 w-full h-full z-20 flex flex-col items-center justify-end pb-10 gap-5">
        <h3 className="text-2xl text-center w-2/3 uppercase font-semibold leading-7">
          man's black num the pain graphic printed oversized hoodies
        </h3>
        <Link
          to={"/"}
          className="border-2 px-5 py-2 rounded-full uppercase font-semibold text-black border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          explore
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
