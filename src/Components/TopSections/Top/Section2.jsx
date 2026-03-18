import React from 'react'

const Section2 = () => {
    return (
        <div className='flex gap-1 text-white lg:py-2 sm:py-0.5!'>
            <div className='flex w-1/7 items-center justify-center lg:gap-5 sm:gap-2 border-1 py-1 bg-blue-700 rounded-lg sm:h-[18px] lg:h-[30px]'>
                <div className='flex justify-center items-center lg:gap-2 sm:gap-1 bg-blue-900 lg:px-3 sm:px-1 rounded-lg'>
                    <input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3'/><span className='sm:text-[10px] lg:text-lg'>Odd</span>
                </div>
                <div className='flex justify-center items-center lg:gap-2 sm:gap-1 bg-blue-900 lg:px-3 sm:px-1 rounded-lg'>
                    <input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3'/><span className='sm:text-[10px] lg:text-lg'>Even</span>
                </div>
            </div>
            <div className="bg-gradient-to-r gap-2 from-purple-700 via-blue-600 to-purple-700 flex items-center justify-center text-white lg:px-6! lg:py-2! sm:px-1! sm:py-1! sm:h-[18px] lg:h-[30px] rounded-lg w-1/7 ">
                <span className='font-semibold lg:text-lg sm:text-[10px]'>All</span><input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3' />
            </div>
            <div className='flex w-1/7 bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 rounded-lg items-center justify-center gap-2 border-1 py-1 lg:px-6! lg:py-2! sm:px-1! sm:py-1! sm:h-[18px] lg:h-[30px]'>
                <input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3' /><span className='font-semibold lg:text-lg sm:text-[10px]'>1000-1999</span>
            </div>
            <div className='flex w-1/7 items-center justify-center gap-2 border-1 py-1 bg-white text-black rounded-lg lg:px-6! lg:py-2! sm:px-1! sm:py-1! sm:h-[18px] lg:h-[30px] '>
                <input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3'/><span className='font-semibold lg:text-lg sm:text-[10px]'>3000-3999</span>
            </div>
            <div className='flex w-1/7 items-center justify-center gap-2 border-1 py-1 bg-white text-black rounded-lg lg:px-6! lg:py-2! sm:px-1! sm:py-1! sm:h-[18px] lg:h-[30px]'>
                <input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3' /><span className='font-semibold lg:text-lg sm:text-[10px]'>5000-5999</span>
            </div>
            <div className='flex w-1/7 bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 rounded-lg items-center justify-center gap-2 border-1 py-1 lg:px-6! lg:py-2! sm:px-1! sm:py-1! sm:h-[18px] lg:h-[30px]'>
                <span className='lg:text-lg sm:text-[10px] font-semibold'>Ind</span><input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3' />
            </div>
            <div className='flex w-1/7 bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 rounded-lg items-center justify-center gap-2 border-1 py-1 lg:px-6! lg:py-2! sm:px-1! sm:py-1! sm:h-[18px] lg:h-[30px]'>
                <span className='lg:text-lg sm:text-[10px] font-semibold'>Mutli</span><input type="checkbox" className='sm:w-2 sm:h-2 lg:w-3 lg:h-3'/>
            </div>
        </div>
    )
}

export default Section2