import React from 'react'
import { MdOutlineArrowRight } from "react-icons/md";


const LeftOne = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-1/5 lg:gap-1.25! sm:gap-0.75! sm:mt-1">
                {Array.from({ length: 10 }).map((_, index) => {
                    const start = 1000 + index * 100;
                    const end = start + 99;
                    return (
                        <div key={index} className="flex sm:gap-0.75! lg:gap-1!">

                            {/* LEFT SIDE */}
                            <div className="flex w-2/3 items-center lg:gap-1! sm:gap-1! rounded-lg sm:h-[17px] lg:h-[30px]!">
                                <input type="checkbox" className='sm:w-2.5! sm:h-2.5! lg:w-3 lg:h-3' />

                                <div className="flex bg-red-500 rounded-lg lg:px-9 lg:py-1 sm:px-4! sm:py-0 justify-center items-center lg:gap-2 sm:gap-0.25 w-full">
                                    <p className='lg:text-[15px] sm:text-[7px]'>{start}-{end}</p>
                                    <MdOutlineArrowRight className="text-lg sm:text-[15px]! lg:text-[23px]!" />
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div
                                className="flex-1 flex flex-col items-center justify-center sm:h-[17px] lg:h-[30px]! rounded-lg bg-blue-300"
                            >
                                <p className="lg:text-[10px] sm:text-[5px]">A</p>
                                <input
                                    type="text"
                                    className="w-full text-center rounded-lg sm:h-[9px] lg:h-[15px] bg-gray-300 border-none"
                                />
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default LeftOne