import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white px-3 py-2">
      
      <div className="flex items-center justify-between lg:min-w-[900px]">

        {/* Left Section */}
        <div className="flex items-center lg:gap-4 sm:gap-2">

          <h2 className="lg:text-lg sm:text-[10px] font-semibold">
            Claim (U)
          </h2>

          <input
            type="text"
            placeholder="Enter Barcode(F8)"
            className="lg:w-[140px] sm:w-[70px] rounded-md p-1 lg:placeholder:text-xs sm:placeholder:text-[10px] sm:h-[15px] lg:h-auto border border-gray-400"
          />

          <button className="uppercase  lg:py-1 lg:px-4 sm:px-2  text-black bg-green-400 rounded-lg hover:bg-green-300 lg:text-lg sm:text-[10px]">
            PLAY(F7)
          </button>

          <button className="uppercase lg:py-1  lg:px-4 sm:px-2 bg-orange-500 rounded-lg hover:bg-orange-400 lg:text-lg sm:text-[10px]">
            CLEAR(Esc)
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center lg:gap-5 sm:gap-2">

          <div className="flex items-center gap-2">
            <h2 className="lg:text-lg sm:text-[10px] font-semibold">Price Pool:</h2>
            <p className="bg-[#FFDF20] lg:px-6 sm:px-3 lg:py-1 rounded-lg text-black lg:text-lg sm:text-[10px]">0</p>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="lg:text-lg sm:text-[10px] font-semibold">Server:</h2>
            <p className="bg-[#FFDF20] lg:px-6 sm:px-3 lg:py-1 rounded-lg text-black lg:text-lg sm:text-[10px]">0</p>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="lg:text-lg sm:text-[10px]  font-semibold">Spot:</h2>
            <p className="bg-[#FFDF20] lg:px-6 sm:px-3 lg:py-1 rounded-lg text-black lg:text-lg sm:text-[10px]">0</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="bg-[#FFDF20] lg:px-6 sm:px-3 lg:py-1 rounded-lg text-black lg:text-lg sm:text-[10px]">0</p>
            <h2 className="lg:text-lg sm:text-[10px]  font-semibold">Points</h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer