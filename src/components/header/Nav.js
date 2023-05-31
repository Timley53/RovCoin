import React, { useContext, useState } from 'react'
import NavIMg from './../../resources/logo-no-background.png'
import {AiOutlineMenu} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import RovCoinContext from '../Utils'

const links = [
    'home',
    'company',
    'services',
    'blog',
    'contact',
]

function Nav() {
    const [openMenu, setOpenMenu]= useState(false)
    const {int} = useContext(RovCoinContext)

console.log(int, 'jsdjsdjk');


  return (
    <nav className={`flex w-[100%] mx-auto sm:w-full px-3 py-5 md:py-4 top-0 justify-between fixed ${ !int ? 'w-[100%] mx-auto backdrop-blur-md bg-[#00000018] ': 'static '} z-50 transition-all`}>


        <img src={NavIMg}
         alt={'NavIMg'}
         className='w-[80px] h-[50px]
         md:w-[15%] ml-6 md:h-[20%] object-contain 
         ' />

<button className={`hidden md:block text-2xl ${openMenu ? 'text-black' :'text-white'}  z-10  p-2`}
onClick={()=> setOpenMenu(!openMenu)}
>
       {openMenu && <ImCross/> || <AiOutlineMenu/>}
</button>
{ 
<div className={`links-btn ${openMenu ? ' md:flex' : 'md:hidden'} flex 
justify-center md:flex-col md:fixed md:w-screen
 md:h-screen md:bg-white md:left-0 md:top-0
 md:justify-start md:text-black
 md:pt-10
 
 `}>

        <ul className=' flex  justify-center items-center md:flex-col md:items-start '>
          {links.map((link,i)=>{

            return(
                <li key={i + 1} className='md:my-2 '>

                    <a href={`#${link}`} 
                    className='mx-3 text-gray-300
                        text-sm
                    p-2 
                    transition-all
                    hover:text-[#08ff10]
                       hover:text-base
                       inline
                       md:text-black
                       
                        '
                    >
                        {link.toUpperCase()}
                    </a>
                </li>
            )
          })}
        </ul>


        <div className="btn flex justify-center mr-5 mx-2 items-center  
            md:mt-5
        ">
        <button className='mx-6 md:mx-7 px-6 md:py-3  py-1 
        font-semibold
        rounded-full text-sm 
        bg-[#08ff10]
        hover:bg-transparent 
        hover:border-2
        hover:border-lime-500
        transition-all'>
            SIGN UP
        </button>

        <button className='border-2 border-lime-400 text-sm  px-6 md:py-3 py-1 rounded-full hover:bg-[#08ff10] font-semibold transition-all'>
            LOG IN
        </button>

        </div>
</div>
}
        
    </nav>
  )
}

export default Nav