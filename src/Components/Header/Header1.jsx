import React from 'react'
import { FaPowerOff } from "react-icons/fa";

const Header1 = () => {
    return (
        <div className='text-white flex justify-between px-1'>
            <div className='flex gap-2'>
                <button className='bg-[#BA9C26] py-1 px-4 rounded-lg sm:text-[10px] sm:h-[20px] lg:w-auto lg:h-auto sm:w-[10px] lg:text-lg items-center justify-center flex'>G</button>
                <button className='bg-[#BA9C26] py-1 px-4 rounded-lg sm:text-[10px] sm:h-[20px] lg:w-auto lg:h-auto sm:w-[10px] lg:text-lg items-center justify-center flex'>H</button>
                <button className='bg-[#BA9C26] py-1 px-4 rounded-lg sm:text-[10px] sm:h-[20px] lg:w-auto lg:h-auto sm:w-[10px] lg:text-lg items-center justify-center flex'>3D</button>
                <button className='bg-[#BA9C26] py-1 px-4 rounded-lg sm:text-[10px] sm:h-[20px] lg:w-auto lg:h-auto sm:w-[10px] lg:text-lg items-center justify-center flex'>4D</button>
            </div>
            <div>
                <h4 className='sm:text-xs lg:text-lg'>16/03/2026 | 17:26:47</h4>
            </div>
            <div>
                <button className="flex items-center lg:text-lg gap-2 bg-red-500 text-white lg:px-6 lg:py-1 rounded-full sm:px-3 sm:py-1 sm:text-[8px]">
                    <FaPowerOff className='' />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Header1