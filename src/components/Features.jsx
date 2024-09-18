import React from 'react'
import './Features.css'
const Features = () => {
    return (
        <div>
            <div className='pt-[100px] bg-[#FBFCFB] flex flex-col'>
                <div className='flex flex-col items-center '>
                    <h1 className='md:text-[72px] text-[36px] font-light text-[#3F3631] text-center'>What will Firebee <br className='md:hidden '/>do for me?</h1>
                    <p className='md:text-[24px] text-[18px] font-light text-[#3F3631] text-center'>Firebee will help you gently nudge <br className='md:hidden' />yourself into a different mental state</p>
                </div>
                <div className='flex items-center md:flex-row flex-col'>
                    <img src='women-prodect.png' className='md:w-[598px] md:h-[524px] w-[375px] h-[356px] object-cover' />
                    <div className='flex flex-col md:gap-[30px] md:ml-0 ml-[25px]'>
                        <div className='flex items-center justify-start  gap-[30px] md:mb-0 mb-[15px]'>
                            <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                            <p className='md:text-[30px] text-[18px] text-[#3F3631] '>Can’t sleep? Turn on the <br className='md:hidden' /><span  className='gradient-text-1 font-bold'>deep sleep</span> signal </p>
                        </div>
                        <div className='flex items-center justify-start  gap-[30px] md:mb-0 mb-[15px]'>
                            <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                            <p className='md:text-[30px] text-[#3F3631] text-[18px]'>Feeling tired? Turn on the <br className='md:hidden' /><span  className='gradient-text-2 font-bold'>alert</span> signal </p>
                        </div>
                        <div className='flex items-center justify-start  gap-[30px] md:mb-0 mb-[15px]'>
                            <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                            <p className='md:text-[30px] text-[#3F3631] text-[18px] '>Feeling anxious? Turn on the <br className='md:hidden' /><span  className='gradient-text-3 font-bold'>calm</span> signal </p>
                        </div>
                        <div className='flex items-center justify-start  gap-[30px] md:mb-0 mb-[15px]'>
                            <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                            <p className='md:text-[30px] text-[18px] text-[#3F3631] '>Feeling unproductive? Turn on the <br className='md:hidden' /><span  className='gradient-text-4 font-bold'>focus</span> signal </p>
                        </div>
                        <div className='flex items-center justify-start  gap-[30px] md:mb-0 mb-[15px]'>
                            <img src='Subtract.png' className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                            <p className='md:text-[30px] text-[18px] text-[#3F3631] '>Feeling blue? Turn on the <br className='md:hidden' /><span  className='gradient-text-5 font-bold'>happy</span> signal </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
