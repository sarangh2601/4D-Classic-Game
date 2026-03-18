import React from 'react'

const Section3 = () => {
    return (
        <div className='flex h-auto'>
            <div className='w-1/5 flex gap-1 sm:h-[18px]! lg:h-[30px]!'>
                <div className='w-2/3 flex items-center justify-center flex gap-2 bg-gradient-to-t border-b border-white from-black via-blue-purple to-purple-700 rounded-lg'>
                    <input type="checkbox" name="" /><span className='lg:text-sm sm:text-[10px] font-semibold text-white '>All Ranges</span>
                </div>
                <div className='w-1/3 sm:h-[18px] lg:h-auto flex items-center justify-center flex gap-2 border-b border-white bg-gradient-to-t from-black via-blue-purple to-purple-700 rounded-lg'>
                </div>
            </div>
            <div className="flex w-3/5 sm:gap-0.25! lg:gap-0.5! px-1">
                {Array(10).fill("B").map((item, index) => (
                    <div
                        key={index}
                        className="flex-1 flex flex-col items-center justify-center sm:h-[18px] lg:h-[30px]! rounded-lg bg-blue-300"
                    >
                        <p className="lg:text-xs sm:text-[5px]">{item}</p>
                        <input
                            type="text"
                            className="w-full text-center rounded-lg sm:h-[9px] lg:h-[16px] bg-gray-300 border-none"
                        />
                    </div>
                ))}
            </div>
            <div className='w-1/5 flex h-auto gap-1'>
                <div className='flex w-1/2 gap-1'>
                    <div className='w-1/2 bg-[#007834] rounded-lg flex items-center justify-center sm:h-[18px] lg:h-[30px] lg:text-lg! sm:text-[10px]!'>Qty</div>
                    <div className='w-1/2 bg-[#007834] rounded-lg flex items-center justify-center sm:h-[18px] lg:h-[30px] lg:text-lg! sm:text-[10px]!'>AMT</div>
                </div>
                <div className=' w-1/2 border-1 lg:h-auto sm:h-[18px]'></div>
            </div>
        </div>
    )
}

export default Section3