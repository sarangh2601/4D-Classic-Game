import React from "react";

const Section1 = () => {
  const data = [
    "1029", "1125", "1248", "1364", "1429",
    "1594", "1666", "1748", "1896", "1903"
  ];

  return (
    <div className="flex justify-between gap-1 w-full 
                    h-[12vh] 
                    sm:h-[5vh]! 
                    md:h-[9vh] 
                    lg:h-[6vh] 
                    px-1">

      {/* Numbers */}
      {data.map((item, index) => (
        <div
          key={index}
          className="flex-1 flex items-center justify-center rounded-lg bg-red-500 text-white"
        >
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold">
            {item}
          </p>
        </div>
      ))}

      {/* Time */}
      <div className="flex-1 flex items-center justify-center border border-red-500 rounded-lg text-white">
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold">
          10:30 AM
        </p>
      </div>

      {/* Version */}
      <div className="flex-1 flex items-center justify-center border border-red-500 rounded-lg text-white">
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold">
          V-3.5.0.8
        </p>
      </div>

    </div>
  );
};

export default Section1;