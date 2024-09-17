import React from "react";
import { LuUser2 } from "react-icons/lu";
import { useState } from "react";
export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-2 md:mx-[30px] flex items-center justify-between  p-4">
        {/* Left Section: Logo */}
        <div className="flex items-center justify-between gap-[43px]">
          <img
            src="/logo-nav.png" //
            alt="logo"
            className="object-cover "
          />

          <div className="hidden md:flex space-x-6 text-lg poppins-light">
            <a href="#" className="text-gray-900 hover:underline ">
              How It Works
            </a>
            <a href="#" className="text-gray-900 hover:underline ">
              Signals
            </a>
            <a href="#" className="text-gray-900 hover:underline ">
              Reviews
            </a>
            <a href="#" className="text-gray-900 hover:underline ">
              Blog
            </a>
          </div>
        </div>

        {/* Right Section: Button and Icon */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="inline-block font-medium bg-green-500 w-4/5 text-white py-[6px] px-[17px] md:px-[38px] md:py-[19px] rounded-full  hover:bg-green-600 transition"
          >
            Buy Now
          </a>
          <div className="bg-blue-400 text-white rounded-full p-[14px] hidden md:block">
            <i className="" style={{background:`url('/user-icon.png')`}}><LuUser2 className="w-[25px] h-[25px]" /></i> {/* أيقونة المستخدم */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={()=>setOpen(!open)} type="button" className="focus:outline-none text-gray-600 cursor-pointer">
              <img src="/burgure-icon.svg" alt="" /> {/* أيقونة القائمة */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Visible in Mobile) */}
    { open && (<div className="md:hidden bg-white shadow-md">
        <div className="flex flex-col p-4 space-y-4 poppins-light">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            How It Works
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Signals
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Reviews
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
        </div>
      </div>)}
    </nav>
  );
};
