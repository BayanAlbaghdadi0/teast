import React from "react";

export const Hero = () => {
  return (
    <div className="pl-4 md:pl-[113px] md:pr-[75px] w-full flex flex-col md:flex-row bg-slate-100">
      {/* Left Section */}
      <div className="pt-[50px] mx-4 md:mx-0 w-full md:w-1/2">
        <div className="flex gap-4">
          <img
            src="/icnirp-img.png"
            className="w-[74px] h-[74px] md:w-[112px] md:h-[112px]"
            alt=""
          />
          <img
            src="/fc-img.png"
            className="w-[74px] h-[74px] md:w-[112px] md:h-[112px]"
            alt=""
          />
        </div>
        <div className="w-full md:w-[400px] flex pr-4 md:pr-0">
          <img src="/Hero-main-img.png" alt="" className="object-cover" />
        </div>
        <div className="flex w-full gap-1 md:gap-4">
          {[
            "/Hero-main-img.png",
            "/hero-bar-2.png",
            "/hero-bar-3.png",
            "/hero-bar-4.png",
            "/hero-bar-5.png",
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="w-[45px] h-[45px] md:w-[100px] md:h-[100px] object-cover"
            />
          ))}
        </div>
        <div className="flex w-full gap-8 mt-8 items-center">
          
          <div className="flex flex-wrap gap-6 w-full justify-between">
            <div className="flex flex-col md:flex-row gap-4 items-center w-1/3 md:w-[48%]">
              <img src="/svg1.svg" alt="" />
              <p className="text-center md:text-left">
                30-day Money-back Guarantee
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center w-1/2 md:w-[48%]">
              <img src="/svg2.svg" alt="" />
              <p className="text-center md:text-left">
                Signal Catalogue Updates Included
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center w-1/3 md:w-[48%]">
              <img src="/svg3.svg" alt="" />
              <p className="text-center md:text-left">
                Free Shipping within USA
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center w-1/2 md:w-[48%]">
              <img src="/svg4.svg" alt="" />
              <p className="text-center md:text-left">
                Customer Support via E-mail, Phone, and Chat
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2 pt-[35px] gap-6">
        {/* Kit 1 */}
        <div className="w-full h-auto md:h-[337px] bg-gradient-to-b from-[#2D5ECE] to-[#9F4EA1] p-[2px] rounded-lg">
          <div className="bg-white w-full h-full rounded-lg p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="poppins-bold text-2xl bg-[#3F3631] bg-clip-text text-transparent">
                Firebee Starter Kit
              </h2>
              <div className="flex items-center gap-2">
                <div className="relative inline-block text-2xl font-semibold">
                  <span className="poppins-light">$999.00</span>
                  <span
                    className="absolute transform -rotate-12"
                    style={{
                      height: "2px",
                      backgroundColor: "red",
                      width: "94px",
                      top: "50%",
                      left: "0%",
                    }}
                  ></span>
                </div>
                <p className="text-2xl poppins-light">$379.00</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[#A34D9F] to-[#275FD0] text-white font-bold py-2 px-8 rounded-full">
                MOST POPULAR KIT
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center">
                <img src="/yes.png" alt="" className="mr-4" />
                Access to 7 signals (and future signal releases)
              </p>
              <p className="flex items-center">
                <img src="/yes.png" alt="" className="mr-4" />
                Firebee Headband
              </p>
              <p className="flex items-center">
                <img src="/yes.png" alt="" className="mr-4" />
                $19/month membership, first 2 months free
              </p>
            </div>
            <p className="text-gray-500 text-[16px]">
              The starter kit is the most affordable way to get started with
              Firebee. Pay $299 for the Firebee headband and access to the
              entire Firebee Signal Catalogue for only $19 a month.{" "}
              <span className="font-semibold">
                Membership can be cancelled anytime. No contracts. Satisfaction
                guaranteed.
              </span>
            </p>
          </div>
        </div>

        {/* Kit 2 */}
        <div className="w-full h-auto md:h-[337px] bg-gradient-to-b from-[#2D5ECE] to-[#9F4EA1] p-[2px] rounded-lg">
          <div className="bg-white w-full h-full rounded-lg p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="poppins-bold text-2xl bg-[#3F3631] bg-clip-text text-transparent">
                Founder’s Kit
              </h2>
              <p className="text-2xl poppins-light">$799.00</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center">
                <img src="/yes.png" alt="" className="mr-4" />
                Access to 7 signals (and future signal releases)
              </p>
              <p className="flex items-center">
                <img src="/yes.png" alt="" className="mr-4" />
                Firebee Headband
              </p>
              <p className="flex items-center">
                <img src="/yes.png" alt="" className="mr-4" />
                $19/month membership, first 2 months free
              </p>
            </div>
            <p className="text-gray-500 text-[16px]">
              The Founders kit allows you to get the Firebee headband and
              lifetime access to the entire Firebee Signal Catalogue for a
              one-time payment.
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="bg-green-500 w-full md:w-[650px] h-[79px] text-white poppins-semibold text-2xl py-2 px-6 rounded-full flex items-center justify-evenly hover:bg-green-600 transition duration-300">
          Add to Cart
          <img src="/arrow.png" alt="" />
        </button>

        {/* Collaction Image */}
        <img src="/collaction.png" className="w-full my-8" alt="" />
      </div>
    </div>
  );
};
