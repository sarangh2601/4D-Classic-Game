import React from 'react'
import Section1 from './Top/Section1'
import Section2 from './Top/Section2'
import Section3 from './Top/Section3'

const Topbar = () => {
  return (
    <div className='flex flex-col h-auto'>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  )
}

export default Topbar