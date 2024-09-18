import React from "react";

export const Gurantee = () => {
  return (
    <div className="mx-[25px] md:mx-[75px] my-[30px] md:my-[50px] flex flex-col md:flex-row gap-[50px] ">
      <div className="">
        <img
          className=" mx-auto md:mx-0  w-[200px] h-[200px] md:w-[292px] md:h-[292px]"
          src="/30- Guarantee.png"
          alt=""
        />
      </div>
      <div className="w-2/3 flex flex-col mx-auto md:mx-0">
        <h2 className=" text-3xl md:text-5xl poppins-light md:leading-[82px]">
          30 Day Money Back Guarantee
        </h2>
        <p className=" text-lg md:text-2xl poppins-light leading-[36px]">
          At Firebee we believe in building quality products that actually work.
          Firebee and its partners have invested over $85 million in research
          and development to create the highest quality wearable for customers
          to enjoy. If for any reason if you are not satisfied with your Firebee
          headband we will happily refund your purchase.{" "}
        </p>
      </div>
    </div>
  );
};
