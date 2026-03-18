import React from 'react'

const RightOne = () => {

  return (
    <div className='w-1/5 flex gap-1'>
      <div className="flex flex-col w-1/2 sm:gap-0.75! lg:gap-0.25! sm:mt-0.5 lg:mt-0.75! ">

        {[...Array(10)].map((_, index) => (
          <div key={index} className='flex lg:gap-1 sm:gap-1'>

            <div className='w-1/2 bg-[#FFDF20] rounded-lg flex items-center justify-center sm:text-xs lg:text-lg  lg:h-[30px] lg:mt-[4px]! sm:h-[16px] sm:gap-1! sm:mt-0.25!'>
              0
            </div>

            <div className='w-1/2 bg-[#FFDF20] rounded-lg flex items-center justify-center sm:text-xs lg:text-lg  lg:h-[30px] lg:mt-[4px]! sm:h-[16px] sm:gap-1! sm:mt-0.25!'>
              0
            </div>

          </div>
        ))}

      </div>
      <div className='w-1/2 flex flex-col gap-[2px] text-white'>
        <button className='bg-[#FF8904] w-full rounded-xl h-1/6 hover:scale-95 sm:text-[9px] lg:text-lg'>
          Cancel (F10)
        </button>

        <button className='bg-[#50A2FF] w-full rounded-xl h-1/6 hover:scale-95 sm:text-[9px] lg:text-lg'>
          Reprint (F2)
        </button>

        <button className='bg-[#FF6467] w-full rounded-xl h-1/6 hover:scale-95 sm:text-[9px] lg:text-lg'>
          Advance
        </button>

        <button className='bg-[#C10007] w-full rounded-xl h-1/6 hover:scale-95 sm:text-[9px] lg:text-lg'>
          INFO (F3)
        </button>

        <button className='bg-[#0069A8] w-full rounded-xl h-1/6 hover:scale-95 sm:text-[9px] lg:text-lg'>
          Result (F4)
        </button>

        <button className='bg-[#D08700] w-full rounded-xl h-1/6 hover:scale-95 sm:text-[9px] lg:text-lg'>
          🎲 Random
        </button>

        <div className='flex items-center justify-center bg-[#00BC7D] w-full rounded-xl h-1/6 hover:scale-95 sm:text-[9px] lg:text-lg'>
            <input type="checkbox" className='sm:w-2.5! sm:h-2.5! lg:w-4! lg:h-4!' />
            Family
        </div>
      </div>
    </div>
  )
}

export default RightOne