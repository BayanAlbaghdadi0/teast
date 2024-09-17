import React from "react";

export const Hero = () => {
  return (
    <div className="pl-[113px] pr-[75px]">
      <div className="pt-[50px]">
        <div className="flex gap-4">
          <img src="/icnirp-img.png" alt="" />
          <img src="/fc-img.png" alt="" />
        </div>
        <div className="w-1/2 ">
          <img src="/Hero-main-img.png" alt="" />
        </div>
        <div className="flex w-full gap-4">
          <img
            src="/Hero-main-img.png"
            alt=""
            className="w-[100px] h-[100px] object-cover "
          />
          <img
            src="/hero-bar-2.png"
            alt=""
            className="w-[100px] h-[100px] object-cover "
          />
          <img
            src="/hero-bar-3.png"
            alt=""
            className="w-[100px] h-[100px] object-cover "
          />
          <img
            src="/hero-bar-4.png"
            alt=""
            className="w-[100px] h-[100px] object-cover "
          />
          <img
            src="/hero-bar-5.png"
            alt=""
            className="w-[100px] h-[100px] object-cover  bg 
          "
          />
        </div>
      </div>
      <div>
        <h1 className="poppins-bold">
         Firebee Headband
        </h1>
      </div>
    </div>
  );
};
