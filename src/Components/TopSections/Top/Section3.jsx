import React from "react";

const Section3 = () => {
    return (
        <div
            className="flex w-full 
                 h-[12vh] 
                 sm:h-[5vh]! 
                 md:h-[9vh] 
                 lg:h-[5vh] mt-1"
        >
            {/* LEFT */}
            <div className="w-1/5 flex gap-1 h-full">

                {/* All Ranges */}
                <div className="w-2/3 flex items-center justify-center gap-2 bg-gradient-to-t from-black via-purple-800 to-purple-600 border-b border-white rounded-lg">
                    <input type="checkbox" />
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-white">
                        All Ranges
                    </span>
                </div>

                {/* Empty Box */}
                <div className="w-1/3 flex items-center justify-center bg-gradient-to-t from-black via-purple-800 to-purple-600 border-b border-white rounded-lg"></div>
            </div>

            {/* CENTER */}
            <div className="flex w-3/5 gap-1 px-1 h-full">
                {Array(10).fill("B").map((item, index) => (
                    <div
                        key={index}
                        className="flex-1 flex flex-col items-center justify-center rounded-lg bg-blue-300 h-full"
                    >
                        <p className="sm:text-[9px]! md:text-sm lg:text-[15px]!">
                            {item}
                        </p>

                        <input
                            type="text"
                            className="w-full text-center rounded bg-gray-300 border-none 
                         h-[50%]"
                        />
                    </div>
                ))}
            </div>

            {/* RIGHT */}
            <div className="w-1/5 flex gap-1 h-full">

                {/* Qty + Amt */}
                <div className="flex w-1/2 gap-1">
                    <div className="w-1/2 bg-[#007834] rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm lg:text-base">
                        Qty
                    </div>
                    <div className="w-1/2 bg-[#007834] rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm lg:text-base">
                        AMT
                    </div>
                </div>

                {/* Empty Box */}
                <div className="w-1/2"></div>
            </div>
        </div>
    );
};

export default Section3;