import React from "react";
import ProductCard from "../Global/ProductCard";

const Collection = () => {
  return (
    <section className="w-full">
      <section className="w-full padding-y padding-horizontal">
        <h2 className="text-center text-[130px] 2xl:text-[160px] font-medium uppercase tracking-tighter leading-none">
          our collection
        </h2>
        <p className="text-xl text-center w-2/3 mx-auto font-semibold uppercase mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          excepturi molestiae, eveniet modi quo consequatur cupiditate doloribus
          mollitia ex laudantium praesentium esse placeat nihil, ipsam
          voluptatibus similique. Enim, delectus ipsa!
        </p>

        <div className="w-full flex items-center justify-center mt-10">
          <span className="font-semibold text-2xl border-2 px-9 py-3 border-gray-400 rounded-full uppercase">
            instagram
          </span>
          <span className="font-semibold text-2xl border-2 px-9 py-3 border-gray-400 rounded-full uppercase">
            telegram
          </span>
          <span className="font-semibold text-2xl border-2 px-9 py-3 border-gray-400 rounded-full uppercase">
            facebook
          </span>
          <span className="font-semibold text-2xl border-2 px-9 py-3 border-gray-400 rounded-full uppercase">
            telegram
          </span>
        </div>
      </section>
      <div className="w-full flex items-center justify-evenly">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Collection;
