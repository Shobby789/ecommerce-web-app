import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="w-full padding-horizontal bg-black text-white min-h-screen py-10 lg:pt-20">
      <h1 className="text-[290px] font-semibold uppercase text-center leading-none tracking-tighter flex flex-col items-center justify-center">
        hoodie
      </h1>

      <div className="w-full flex items-center justify-center mt-10">
        <p className="uppercase text-xl font-medium w-80 block text-gray-500">
          provide an email address where customers can send their inquiries.
        </p>
        <div className="h-[60vh] w-[35%] block mx-auto bg-[brown] relative">
          <img
            src="/news-letter-section-mockup.png"
            alt=""
            className="h-full w-full block mx-auto object-contain"
          />
        </div>
        <Link
          to="/"
          className="uppercase text-lg font-medium flex items-center gap-2 text-gray-500"
        >
          new Collection <GoArrowUpRight className="text-2xl" />
        </Link>
      </div>

      <div className="w-full flex items-center justify-between mt-10">
        <div className="flex items-center justify-start gap-2 text-gray-500">
          <span className="font-semibold uppercase">hoodie </span>
          <span>-</span>
          <span className="font-extralight uppercase">all rights reserved</span>
        </div>
        <div className="flex items-center justify-start gap-2 text-gray-500">
          <span className="font-semibold uppercase">designed by</span>
          <span>-</span>
          <span className="font-extralight uppercase">Shoaib muhammad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
