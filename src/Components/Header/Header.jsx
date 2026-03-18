import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'

const Header = () => {
  return (
    <div className='p-1 flex flex-col lg:gap-1! sm:gap-0.5!'>
        <Header1/>
        <Header2/>
    </div>
  )
}

export default Header