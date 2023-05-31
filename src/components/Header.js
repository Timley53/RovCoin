import React, { useContext } from 'react'
import Nav from './header/Nav'
import Hero from './header/Hero'
import RovCoinContext from './Utils'


function Header() {
  const {myRef} = useContext(RovCoinContext)

  return (
    <div ref={myRef} className='h-[100vh]'>
        <Nav/>
        <Hero/>
    </div>
  )
}

export default Header