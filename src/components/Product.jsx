import React from 'react'
import { MdOutlineDone } from "react-icons/md";
const Product = () => {
    return (
        <div className='w-full h-full pt-[177px] flex flex-col items-center '>
            <h1 className='md:text-[48px] text-[33px] mx-auto text-slate-700'>What’s in the box?</h1>
            <img src='product-image.png' className='md:w-[824px] md:h-[519px] w-[346px] h-[232px]' />
            <div className='flex flex-col items-center md:w-[1100px] mb-[83px] w-[325px]'>
                <div className='flex flex-col items-center'>
                    <p className='text-slate-700 font-medium pb-[20px]'>FEATURED ON</p>
                    <div className='flex justify-between md:flex-nowrap flex-wrap md:w-[940px] w-[292px]'>
                        <img src="brand-1.png" alt="" className='md:w-[110px] w-[88px]' />
                        <img src="brand-2.png" alt="" className='md:w-[110px] w-[88px]' />
                        <img src="brand-3.png" alt="" className='md:w-[110px] w-[88px]' />
                        <img src="brand-4.png" alt="" className='md:w-[110px] w-[88px]' />
                        <img src="brand-5.png" alt="" className='md:w-[110px] w-[88px]' />
                        <img src="brand-6.png" alt="" className='md:w-[110px] w-[88px]' />
                    </div>
                </div>
                <hr className='border-slate-300 w-full my-[37px]' />
                <div className='w-full flex md:flex-nowrap flex-wrap justify-between  md:text-[30px] text-[20px] text-slate-500'>
                    <div className='flex items-center  justify-start  gap-2 md:mb-0 mb-[15px] ' >
                        <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                        <p >1 Firebeeheadband </p>
                    </div>
                    <div className='flex items-center  justify-start  gap-2 md:mb-0 mb-[15px]'>
                        <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                        <p>1 Charging cable</p>
                    </div>
                    <div className='flex items-center  justify-start  gap-2 md:mb-0 mb-[15px]'>
                        <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                        <p>1 User manual</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
