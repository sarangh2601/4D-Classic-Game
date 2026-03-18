import React from 'react'
import Section1 from './Components/TopSections/Top/Section1'
import Section2 from './Components/TopSections/Top/Section2'
import Section3 from './Components/TopSections/Top/Section3'
import Middle from './Components/middleContainer/Middle'
import Topbar from './Components/TopSections/Topbar'
import Footer from './Components/Bottom/Footer'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <div className='bg-[#172134] h-screen flex flex-col justify-between'>
      <div className='flex flex-col'>
        <Header />
        
          <Topbar />
          <Middle />
      </div>
      <Footer />
    </div>
  )
}

export default App