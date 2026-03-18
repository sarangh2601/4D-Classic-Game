import React from 'react'

const MiddleOne = () => {
  const numbers = Array.from({ length: 100 }, (_, i) => 1000 + i);
  return (
    <div className='w-3/5 sm:px-1 lg:px-0.5! pt-0.5 lg:mt-1!' >
      <div className="grid grid-cols-10 gap-0.5! ">
        {Array.from({ length: 100 }).map((_, index) => {
          const num = 1000 + index;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center 
                   sm:h-[17px] lg:h-[30px]  lg:m-0.5! lg:mt-0.25! sm:mt-0.25! rounded-lg bg-white hover:scale-95"
            >
              <p className="lg:text-sm sm:text-[5px]">
                {num}
              </p>

              <input
                type="text"
                className="w-full text-center rounded-lg 
                     sm:h-[9px] lg:h-[16px] bg-gray-300 border-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MiddleOne