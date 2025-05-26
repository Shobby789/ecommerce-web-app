import React from "react";

const Collection2 = () => {
  return (
    <section className="w-full padding-y padding-horizontal flex items-center justify-center flex-wrap gap-6 2xl:gap-10">
      <div className="w-full lg:w-[40%] 2xl:w-[35%]">
        <div className="w-full h-[90vh] 2xl:h-[70vh] relative bg-brown">
          <img
            src="/hoodie-1.png"
            alt=""
            className="w-full object-contain absolute bottom-0"
          />
        </div>
        <div className="w-full flex items-start gap-4 mt-4">
          <h2 className="font-medium text-6xl">01</h2>
          <div>
            <h3 className="font-medium text-4xl uppercase">sweatshirt</h3>
            <p className="font-medium text-lg lg:leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              enim facere voluptatem perferendis possimus similique.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[40%] 2xl:w-[35%]">
        <div className="w-full h-[90vh] 2xl:h-[70vh] relative bg-brown">
          <img
            src="/hoodie-1.png"
            alt=""
            className="w-full object-contain absolute bottom-0"
          />
        </div>
        <div className="w-full flex items-start gap-4 mt-4">
          <h2 className="font-medium text-6xl">02</h2>
          <div>
            <h3 className="font-medium text-4xl uppercase">sweatshirt</h3>
            <p className="font-medium text-lg lg:leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              enim facere voluptatem perferendis possimus similique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection2;
