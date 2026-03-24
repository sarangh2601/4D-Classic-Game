import React from "react";

const Section2 = () => {
  const items = [
    {
      type: "double",
      options: ["Odd", "Even"],
      style: "bg-blue-700 text-white",
      innerStyle: "bg-blue-900",
    },
    {
      label: "All",
      style: "bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 text-white",
    },
    {
      label: "1000-1999",
      style: "bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 text-white",
    },
    {
      label: "3000-3999",
      style: "bg-white text-black",
    },
    {
      label: "5000-5999",
      style: "bg-white text-black",
    },
    {
      label: "Ind",
      style: "bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 text-white",
    },
    {
      label: "Multi",
      style: "bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 text-white",
    },
  ];

  return (
    <div
      className="flex gap-1 w-full 
                 h-[10vh] 
                 sm:h-[5vh]! 
                 md:h-[9vh] 
                 lg:h-[6vh] mt-1"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex-1 flex items-center justify-center rounded-lg ${item.style}`}
        >
          {/* Double Option (Odd/Even) */}
          {item.type === "double" ? (
            <div className="flex gap-2">
              {item.options.map((opt, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-1 px-2 rounded ${item.innerStyle}`}
                >
                  <input
                    type="checkbox"
                    className="w-2 h-2 sm:w-3 sm:h-3"
                  />
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold">
                {item.label}
              </span>
              <input
                type="checkbox"
                className="ml-1 w-2 h-2 sm:w-3 sm:h-3"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Section2;