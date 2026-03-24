import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";

const LeftOne = () => {
  return (
    <div className="w-1/5 mt-1 h-[58vh]">
      
      <div className="grid grid-rows-10 gap-1 h-full">
        
        {Array.from({ length: 10 }).map((_, index) => {
          const start = 1000 + index * 100;
          const end = start + 99;

          return (
            <div key={index} className="flex gap-1 h-full">

              {/* LEFT SIDE */}
              <div className="flex w-2/3 items-center gap-1">
                <input
                  type="checkbox"
                  className="w-2 h-2 sm:w-3 sm:h-3"
                />

                <div className="flex items-center justify-center gap-1 w-full bg-red-500 rounded-lg h-full">
                  <p className="text-[7px] sm:text-xs md:text-sm lg:text-base text-white">
                    {start}-{end}
                  </p>

                  <MdOutlineArrowRight className="text-xs sm:text-sm md:text-lg lg:text-xl text-white" />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex-1 flex flex-col items-center justify-center bg-blue-300 rounded-lg">
                <p className="lg:text-[15px]! sm:text-[9px]! md:text-sm">
                  A
                </p>

                <input
                  type="text"
                  className="w-full text-center rounded bg-gray-300 border-none h-[50%]"
                />
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default LeftOne;