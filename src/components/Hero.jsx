import React from "react";

export const Hero = () => {
  return (
    <div className="pl-4 md:pl-[113px] pr-[75px] w-full  flex flex-col md:flex-row bg-slate-100 ">
      <div className="pt-[50px] w-1/2 ">
        <div className="flex gap-4">
          <img src="/icnirp-img.png" className="w-[74px] h-[74px] md:w-[112px] md:h-[112px]" alt="" />
          <img src="/fc-img.png"  className="w-[74px] h-[74px] md:w-[112px] md:h-[112px]"alt="" />
        </div>
        <div className="w-[325px] flex pr-10 md:pr-0 md:w-full ">
          <img src="/Hero-main-img.png" alt="" />
        </div>
        <div className="flex w-full gap-1  md:gap-4">
          <img
            src="/Hero-main-img.png"
            alt=""
            className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] object-cover "
          />
          <img
            src="/hero-bar-2.png"
            alt=""
            className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] object-cover "
          />
          <img
            src="/hero-bar-3.png"
            alt=""
            className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] object-cover "
          />
          <img
            src="/hero-bar-4.png"
            alt=""
            className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] object-cover "
          />
          <img
            src="/hero-bar-5.png"
            alt=""
            className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] object-cover  bg 
          "
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Right Section */}
        <div className="w-1/2 pt-[35px] flex flex-col gap-[5px]  ">
          <h1 className="poppins-bold text-[32px] w-[325px] md:w-[340px]  md:text-4xl">Firebee Headband</h1>
          <div className="w-[400px] md:w-full flex h-[16px] items-center gap-4">
            {[0, 1, 2, 3].map((i) => (
              <img src="/star.png" alt="" className="object-cover" />
            ))}
            <div
              className="w-[20px]"
              style={{ background: `url(/star-nolight.png)` }}
            >
              <img src="/half-star.png" alt="" />
            </div>
            <p className="text-lg poppins-light">267 Reviews</p>
          </div>
          <p className="poppins-light text-[16px] w-[300px] text-center md:w-full">
            Order today and receive your Firebee by June 15th, 2021
          </p>
          <div
            className="w-[325px] h-[528px] md:w-[634px]  md:h-[337px] p-[2px] mt-[15px]" //
            style={{
              background: "linear-gradient(180deg, #2D5ECE 0%, #9F4EA1 100%)",
              borderRadius: "10px",
            }}
          >
            <div
              className="w-full h-full pt-[20px] pr-[24px]"
              style={{
                backgroundColor: "white", //
                borderRadius: "10px", //
              }}
            >
              <div className="pl-[26px] w-[584] pt-[15px] h-full flex flex-col justify-center gap-2">
                {/* Title and Price Section */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center ">
                  <h2 className="poppins-bold text-2xl bg-[#3F3631] bg-clip-text text-transparent ">
                    Firebee Starter Kit
                  </h2>
                  <div className="flex gap-2 items-center">
                    <div className="text-2xl font-semibold relative inline-block">
                      <span className="poppins-light">$999.00</span>
                      <span
                        className="absolute inset-0 transform -rotate-12"
                        style={{
                          height: "2px",
                          backgroundColor: "red",
                          width: "94px", // يجب أن يكون أكبر قليلاً من العنصر ليمر بالكامل فوق السعر
                          top: "50%",
                          left: "0%",
                        }}
                      ></span>
                    </div>
                    <p className="text-2xl text-black poppins-light">$379.00</p>
                  </div>
                </div>

                {/* Button */}
                <div className="w-full flex ">
                  <button className="bg-gradient-to-r from-[#A34D9F] to-[#275FD0] text-white font-bold py-1 px-14 poppins-regular rounded-full">
                    MOST POPULAR KIT
                  </button>
                </div>

                {/* Features Section */}
                <div className=" flex flex-col gap-2">
                  <p className="flex items-center text-lg poppins-light">
                    <img src="/yes.png" alt="" className="mr-4" /> Access to 7
                    signals (and future signal releases)
                  </p>
                  <p className="flex items-center text-lg poppins-light">
                    <img src="/yes.png" alt="" className="mr-4" /> Firebee
                    Headband
                  </p>
                  <p className="flex items-center text-lg poppins-light">
                    <img src="/yes.png" alt="" className="mr-4" /> $19/month
                    membership, first 2 months free
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-500 w-[300px] md:w-[584px] poppins-light text-[16px] pb-8">
                  The starter kit is the most affordable way to get started with
                  Firebee. Pay $299 for the Firebee headband and access to the
                  entire Firebee Signal Catalogue for only $19 a month.
                  <span className="poppins-semibold">
                    {" "}
                    Membership can be cancelled anytime. No contracts.
                    Satisfaction guaranteed.
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 pt-[35px] flex flex-col gap-[5px]  ">
          <div
            className="w-[325px] h-[528px] md:w-[634px]  md:h-[337px] p-[2px] mt-[15px]" //
            style={{
              background: "linear-gradient(180deg, #2D5ECE 0%, #9F4EA1 100%)",
              borderRadius: "10px",
            }}
          >
            <div
              className="w-full h-full pt-[20px] pr-[24px]"
              style={{
                backgroundColor: "white", //
                borderRadius: "10px", //
              }}
            >
              <div className="pl-[26px]  pt-[15px] h-full flex flex-col justify-center gap-2">
                {/* Title and Price Section */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center ">
                  <h2 className="poppins-bold text-2xl bg-[#3F3631] bg-clip-text text-transparent ">
                    Founder’s Kit
                  </h2>
                  <div className="flex gap-2 items-center">
                    <p className="text-2xl text-black poppins-light">$799.00</p>
                  </div>
                </div>

              

                {/* Features Section */}
                <div className=" flex flex-col gap-2">
                  <p className="flex items-center text-lg poppins-light">
                    <img src="/yes.png" alt="" className="mr-4" /> Access to 7
                    signals (and future signal releases)
                  </p>
                  <p className="flex items-center text-lg poppins-light">
                    <img src="/yes.png" alt="" className="mr-4" /> Firebee
                    Headband
                  </p>
                  <p className="flex items-center text-lg poppins-light">
                    <img src="/yes.png" alt="" className="mr-4" /> $19/month
                    membership, first 2 months free
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-500 w-[280px] md:w-[584px] poppins-light text-[16px] pb-8">
                  The Founders kit allows you to get the Firebee headband and
                  lifetime access to the entire Firebee Signal Catalogue for a
                  one-time payment. The Founders is kit can be paid through
                  Affirm allowing customers to make small payments of $73 a
                  month.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-green-500 w-[300px] h-[79px] md:w-[650px] text-white poppins-semibold text-2xl py-2 px-6 rounded-full flex items-center justify-evenly hover:bg-green-600 transition duration-300">
          Add to Cart
          <img src="/arrow.png" className="" alt="" />
        </button>
        <img src="/collaction.png" alt="" />
      </div>
    </div>
  );
};
