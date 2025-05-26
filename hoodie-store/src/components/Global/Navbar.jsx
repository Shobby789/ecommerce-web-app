import React from "react";
import { TbMenu2 } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <main className="w-full py-6 padding-horizontal border-b-[2px]">
      <div className="flex items-center justify-between">
        <button className="border border-gray-500 px-5 py-2 rounded-full">
          <TbMenu2 className="text-xl" />
        </button>
        <h2 className="text-3xl font-medium">HOODIE</h2>
        <div>
          <button className="border border-gray-500 px-2.5 py-2.5 rounded-full mr-2">
            <IoPersonOutline className="text-lg" />
          </button>
          <button className="border border-gray-500 px-2.5 py-2.5 rounded-full">
            <IoBagHandleOutline className="text-lg" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-6 mt-8">
        <div className="flex items-center justify-end gap-x-2">
          <select
            name=""
            id=""
            className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5 outline-none"
          >
            <option value="">categories</option>
            <option value="">men</option>
            <option value="">women</option>
            <option value="">children</option>
            <option value="">popular</option>
          </select>
          <select
            name=""
            id=""
            className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5 outline-none"
          >
            <option value="">new product</option>
            <option value="">men</option>
            <option value="">women</option>
            <option value="">children</option>
            <option value="">popular</option>
          </select>
          <div className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search"
              className="outline-none h-full placeholder:text-black"
            />
            <LuSearch className="text-lg" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-2">
          <Link
            to={"/"}
            className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5"
          >
            Men
          </Link>
          <Link
            to={"/"}
            className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5"
          >
            women
          </Link>
          <Link
            to={"/"}
            className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5"
          >
            children
          </Link>
          <Link
            to={"/"}
            className="uppercase font-semibold border-[1px] border-gray-400 py-2 rounded-full px-5"
          >
            popular
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
