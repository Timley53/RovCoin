import React from 'react'
import HeroImg from './../../resources/3d-casual-life-blockchain.png'
import Hero2Img from './../../resources/441-removebg-preview.png'

function Hero() {
  return (
    <div className='flex justify-between pt-[10rem] md:pt-[8rem] items-center w-[80%] mx-auto first-letter:
    md:flex-col md:w-[90%] 
    '>
        <div className="crypto-matters w-[45%] md:w-[95%] text-white  flex flex-col  " >


    <div className="head leading-3">
            <h1 className='font-bold text-[#08ff10]'
        >Crypto Matters:</h1>


        <h1 className='leading-8'>
            The Importance of Cryptocurrency
        </h1>
    </div>

        

        <p className='w-[80%] mt-6'>
            Cryptocurrency is a revolutionary digital asset that has the potential to change the financial world as we know it.
            You'll learn about the different types of cryptocurrency.
        </p>



    <div className="hero-btn mt-6 flex items-center">

<button className='p-3 border text-sm border-[#08ff10] rounded-full bg-[#08ff10]  my-4 hover:bg-transparent transition-all'>
    WHITEPAPER
</button>


<button className='border border-[#08ff10]  p-3 rounded-full mx-6 hover:bg-[#08ff10] transition-all' >
    BUY TOKEN NOW
</button>


    </div>

            </div>

        <div className="hero-img w-[50%]  items-center justify-center md:w-[100%]">
            <img src={Hero2Img} alt='Blockahin Image' 
            className='w-[850px] md:[100%] md:object-cover  object-contain mx-auto' />
        </div>
        
    </div>
  )
}

export default Hero