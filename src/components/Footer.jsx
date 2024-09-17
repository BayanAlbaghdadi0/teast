import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className=' w-full pt-1 bg-gradient-to-r from-[#8BF2B5] to-[#35C8EB] md:h-[10px]'>
      <div className='w-full bg-black md:h-[195px] flex  gap-[155px]'>
        <div className='pl-[80px] pt-[30px] pb-[50px] '>
          <p className=' text-white font-light text-[24px] mb-[6px]'>About</p>
          <p className=' text-white font-light '>Home</p>
          <p className=' text-white font-light '>Product</p>
        </div>
        <div className='pl-[80px] pt-[30px] pb-[50px] '>
          <p className=' text-white font-light text-[24px] mb-[6px]'>Support</p>
          <p className=' text-white font-light '>Activate</p>
          <p className=' text-white font-light '>Login</p>
        </div>
        <div className='pl-[80px] pt-[30px] pb-[50px] '>
          <p className=' text-white font-light text-[24px] mb-[6px] '>Find us on</p>
          <div className='flex gap-[20px]'>
            <FaYoutube className='text-white text-4xl' />
            <FaTwitter className='text-white text-4xl' />
            <FaFacebookF className='text-white text-4xl' />
            <FaPinterestP className='text-white text-4xl' />
          </div>
        </div>
          <hr className='mb-1 border-white'/>
          <div>

          </div>
      </div>
    </div>
  )
}
