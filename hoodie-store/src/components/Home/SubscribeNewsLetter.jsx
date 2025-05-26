import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const SubscribeNewsLetter = () => {
  return (
    <section className="w-full padding-y mt-20 padding-horizontal">
      <div className="w-full bg-brown h-[65vh] relative flex flex-col items-center justify-center gap-12">
        <img
          src="/news-letter-section-mockup.png"
          alt=""
          className="h-[130%] 2xl:h-[120%] object-contain absolute z-0 bottom-0 brightness-90"
        />
        <h2 className="font-medium text-[110px] uppercase text-center leading-[120px] z-10">
          subscribe our <br /> news letter
        </h2>

        <div className="z-10">
          <div className="bg-white rounded-full w-[360px] flex items-center px-6">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="bg-transparent font-medium text-base py-3.5 pr-3 w-full outline-none"
            />
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsLetter;
