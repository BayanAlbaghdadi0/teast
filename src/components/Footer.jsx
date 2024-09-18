import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <div className=' w-full  bg-gradient-to-r from-[#8BF2B5] to-[#35C8EB] h-[10px] '>
      </div>
      <div className='bg-black'>
        <div className='flex w-full md:flex-row flex-col  justify-start items-start bg-black' >

          <div className=' bg-black md:h-[195px] flex md:flex-row md:mr-40 md:gap-[155px] gap-[65px]'>
            <div className='md:pl-[80px] pl-[25px] pt-[30px] pb-[50px] '>
              <p className=' text-white font-light text-[24px] mb-[6px]'>About</p>
              <p className=' text-white font-light '>Home</p>
              <p className=' text-white font-light '>Product</p>
            </div>
            <div className='md:pl-[80px] pl-[25px] pt-[30px] pb-[50px] '>
              <p className=' text-white font-light text-[24px] mb-[6px]'>Support</p>
              <p className=' text-white font-light '>Activate</p>
              <p className=' text-white font-light '>Login</p>
            </div>
          </div>
          <div className='md:pl-[80px] pl-[25px] pt-[30px] pb-[50px] '>
            <p className=' text-white font-light text-[24px] '>Find us on</p>
            <div className='flex gap-[20px]'>
              <FaYoutube className='text-white text-4xl' />
              <FaTwitter className='text-white text-4xl' />
              <FaFacebookF className='text-white text-4xl' />
              <FaPinterestP className='text-white text-4xl' />
            </div>
          </div>
        </div>
        <hr className='border-slate-500 ' />

        <div className=" bg-black w-full h-[340px] overflow-hidden md:h-[220px] relative">
          <div className='w-full h-full relative z-20 flex md:flex-row text-slate-400 justify-between md:px-[75px] px-[25px] pt-[23px] flex-col'>
            <div className='flex md:flex-[3] h-full flex-col items-start gap-[20px]'>
              <img src="logo-footer.png" alt="logo" className='' />
              <p>Copyright 2020 Firebee Technologies, Inc. All rights reserved.</p>
              <p className='text-[14px]'>The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
            <p className='flex-[1] mb-[35px]'>Privacy Policy Terms of Service</p>
          </div>
          <img src='footer-bg.png' className='contrast-150 absolute md:top-8 top-56 md:scale-[1] scale-[4]' />
        </div>
      </div>
    </>

  )
}
