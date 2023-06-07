import React from 'react'
import btcImg from './../../resources/3d-casual-life-blockchain.png'


function FirstHand() {
  return (
    <div className='flex w-[90%] text-white my-12  mx-auto md:flex-col'>

        <div className="text w-[50%] md:w-[90%] mx-auto ">
            <h1 className='sm:text-3xl my-3'>
                Get A First-Hand Look
            </h1>

            <p className='my-8 w-[90%]'>
                Get a glimpse into the future with our demo video. Watch as our expert team showcases the power and potential of cryptocurrency. From easy-to-use interfaces to advanced security features, you'll see why we are the trusted choice for investors.
            </p>


            <button 
            className='bg-[#08ff10] p-3 px-8 text-sm rounded-full font-bold border border-[#08ff10] hover:text-[#08ff10] text-blue-950 transition-all hover:font-normal hover:bg-transparent '>

                PRESENT NOW 
            </button>
        </div>


        <div className="w-[50%] md:w-[100%] md:mt-8">
    <img src={btcImg} alt="" className='mx-auto' />
        </div>

    </div>
  )
}

export default FirstHand