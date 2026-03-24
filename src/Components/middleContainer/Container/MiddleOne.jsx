import React from "react";

const MiddleOne = () => {
  const numbers = Array.from({ length: 100 }, (_, i) => 1000 + i);

  return (
    <div className="w-3/5 h-[58vh] px-1 mt-1">
      
      <div className="grid grid-cols-10 grid-rows-10 gap-1 h-full">
        
        {numbers.map((num, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center 
                       bg-white rounded-lg hover:scale-95 transition"
          >
            {/* Number */}
            <p className="lg:text-[14px]! sm:text-[9px]! md:text-sm lg:text-base font-medium">
              {num}
            </p>

            {/* Input */}
            <input
              type="text"
              className="w-full text-center rounded bg-gray-300 border-none 
                         h-[50%] outline-none"
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default MiddleOne;