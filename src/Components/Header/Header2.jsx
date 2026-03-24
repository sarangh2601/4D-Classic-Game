import React from 'react'
import { MdRefresh } from "react-icons/md";
const Header2 = () => {
    return (
        <div className='flex justify-between items-center font-semibold text-white lg:text-sm px-5 sm:text-[10px] mt-0.5!'>
            <div>
                <img src="https://classicwin.us/assets/uhi1-kOXnjDm0.png" alt="" className='lg:h-[40px] w-auto sm:h-[15px]' />
            </div>
            <h1>Classic4D</h1>
            <h1>5:45PM</h1>
            <div className='flex gap-2'>
                <h1>Last Transaction: </h1>
                <p>0</p>
            </div>
            <div>
                <h1>Time</h1>
            </div>
            <p className='border-t border-green-500 lg:px-15 sm:px-10 lg:text-sm sm:text-xs rounded-xl lg:py-1 sm:p-0 shadow-sm shadow-green-500'>Akshay</p>
            <div className='flex gap-2'>
                <h1>Limits :</h1>
                <p>9995.8</p>
            </div>
            <div className='bg-white text-black lg:p-1 rounded-full hover:bg-black hover:text-white sm:p-0.5! xs:p-0.25!'>
                <MdRefresh className='sm:text-sm md:text-2xl lg:text-3xl'/>
            </div>
        </div>
    )
}

export default Header2