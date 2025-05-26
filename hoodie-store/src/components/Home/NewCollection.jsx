import React from "react";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <section className="w-full padding-y padding-horizontal">
      <h2 className="flex items-center justify-center text-[160px] font-medium uppercase tracking-tighter">
        full winters
      </h2>

      <div className="w-full h-[80vh] 2xl:h-[70vh] flex items-start gap-6">
        <div className="w-full lg:w-[40%] h-full relative bg-brown overflow-hidden">
          <img
            src="/hoodie-1.png"
            alt=""
            className="object-contain absolute bottom-0 h-full w-full"
          />
        </div>
        <div className="w-full lg:w-[60%] h-full flex flex-col items-start justify-between overflow-hidden pb-4 gap-4">
          <div className="w-full h-[75%] bg-brown relative overflow-hidden flex items-center justify-center">
            <img
              src="/shoes-pair.png"
              alt=""
              className="object-contain w-[90%]"
            />
          </div>
          <p className="text-xl 2xl:text-3xl block">
            a "hoodie full winters" likely refers to a hoodie specifically
            designed for cold winter weather.
          </p>
          <div className="block">
            <Link
              to="/"
              className="border-[2px] border-gray-400 rounded-full py-3 px-5 text-xl font-semibold uppercase 2xl:text-2xl"
            >
              new collection / limited edition
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
