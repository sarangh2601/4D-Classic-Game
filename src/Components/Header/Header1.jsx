import React from "react";
import { FaPowerOff } from "react-icons/fa";

const Header1 = () => {
  const buttons = ["G", "H", "3D", "4D"];

  return (
    <div
      className="flex justify-between items-center px-2 text-white 
                 h-[10vh] 
                 sm:h-[5vh]! 
                 md:h-[8vh] 
                 lg:h-[6vh] mt-1"
    >
      {/* LEFT BUTTONS */}
      <div className="flex gap-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="bg-[#BA9C26] flex items-center justify-center rounded-lg
                       px-2 sm:px-3 md:px-4
                       py-1
                       text-[10px] sm:text-xs md:text-sm lg:text-base"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* CENTER DATE */}
      <div>
        <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-base">
          16/03/2026 | 17:26:47
        </h4>
      </div>

      {/* RIGHT LOGOUT */}
      <div>
        <button
          className="flex items-center gap-1 sm:gap-2 bg-red-500 text-white rounded-full
                     px-2 sm:px-3 md:px-4 lg:px-6
                     py-1
                     text-[10px] sm:text-xs md:text-sm lg:text-base"
        >
          <FaPowerOff />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header1;