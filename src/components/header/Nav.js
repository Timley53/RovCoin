import React, { useContext, useState } from 'react'
import NavIMg from './../../resources/icons8-blockchain-100.png'
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

// console.log(int, 'jsdjsdjk');


  return (
    <nav className={`flex w-[100%] my-0 mx-auto sm:w-full px-3 py-3 md:py-3   justify-between items-center   ${ !int ? ' fixed md:top-0 backdrop-blur-md bg-[#00000022] ': 'static top-0 md:top-[0]'} z-50 transition-all`}>

    <div className="logo flex items-center justify-center text-[#08ff10] h-[60px]
         md:w-[15%] ml-3" >
    
    
        <img src={NavIMg}
         alt={'NavIMg'}
         className='w-[40px] h-[50px]
          ml-6 md:ml-3 md:w-[30px]  object-contain 
        ' />
    <p className='ml-1 italic'>
        RovCoin
    </p>

    </div>

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