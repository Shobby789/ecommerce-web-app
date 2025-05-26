import React from "react";

const Hero = () => {
  return (
    <main className="w-full py-12 lg:pt-20 padding-horizontal min-h-screen">
      <h1 className="text-4xl md:text-9xl xl:text-[290px] font-semibold uppercase text-center leading-none flex flex-col items-center lg:items-end justify-center w-fit mx-auto">
        <span className="text-xl xl:text-3xl font-semibold right-0 bottom-0 mr-4 tracking-normal">
          the best hoodies are only here
        </span>
        <span className="tracking-tighter">hoodie</span>
      </h1>
      <div className="w-full bg-neutral-300 my-10 overflow">
        <img
          src="/young-adults-wearing-hoodie-mockup.png"
          alt="youg girls waring hoodie"
          className="object-cover w-full h-[90vh] mt-10"
        />
      </div>
    </main>
  );
};

export default Hero;
