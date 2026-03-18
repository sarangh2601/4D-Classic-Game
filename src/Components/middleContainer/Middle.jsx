import React from 'react'
import LeftOne from './Container/LeftOne'
import MiddleOne from './Container/MiddleOne'
import RightOne from './Container/RightOne'

const Middle = () => {
    return (
        <>
            <div className='flex text-black'>
            <LeftOne />
            <MiddleOne />
            <RightOne />
            </div>
        </>
    )
}

export default Middle