import React from "react";

const RightOne = () => {
  const buttons = [
    { label: "Cancel (F10)", color: "bg-[#FF8904]" },
    { label: "Reprint (F2)", color: "bg-[#50A2FF]" },
    { label: "Advance", color: "bg-[#FF6467]" },
    { label: "INFO (F3)", color: "bg-[#C10007]" },
    { label: "Result (F4)", color: "bg-[#0069A8]" },
    { label: "🎲 Random", color: "bg-[#D08700]" },
  ];

  return (
    <div
      className="w-1/5 flex gap-1 
                 h-[80vh] 
                 sm:h-[60vh]! 
                 md:h-[70vh] 
                 lg:h-[59vh] mt-1"
    >
      {/* LEFT GRID */}
      <div className="flex flex-col w-1/2 gap-1 h-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex gap-1 h-[9%]">
            
            <div className="w-1/2 bg-[#FFDF20] rounded-lg flex items-center justify-center lg:text-[14px]! sm:text-[8px]! md:text-sm lg:text-base">
              0
            </div>

            <div className="w-1/2 bg-[#FFDF20] rounded-lg flex items-center justify-center lg:text-[14px]! sm:text-[8px]! md:text-sm lg:text-base">
              0
            </div>

          </div>
        ))}
      </div>

      {/* RIGHT BUTTON PANEL */}
      <div className="w-1/2 flex flex-col gap-0.75! text-white h-full">
        
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`${btn.color} w-full rounded-xl flex items-center justify-center 
                        h-[13.5%]! hover:scale-95 transition
                        text-[9px] sm:text-xs md:text-sm lg:text-base`}
          >
            {btn.label}
          </button>
        ))}

        {/* FAMILY CHECKBOX */}
        <div
          className="flex items-center justify-center gap-1 bg-[#00BC7D] w-full rounded-xl 
                     h-[13.5%] hover:scale-95 transition
                     text-[9px] sm:text-xs md:text-sm lg:text-base"
        >
          <input type="checkbox" className="w-3 h-3 sm:w-4 sm:h-4" />
          Family
        </div>

      </div>
    </div>
  );
};

export default RightOne;