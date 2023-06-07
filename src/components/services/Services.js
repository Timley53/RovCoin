import React from 'react'
import {BiAbacus } from 'react-icons/bi'
import {MdInsertChartOutlined} from 'react-icons/md'
import {TbPlant} from 'react-icons/tb'




const missionDiagramDetails =[ 
    {
    icons: '<MdInsertChartOutlined/>',
    header: "Charting Your Crypto Path",
    details: 'Join the path to financial freedom with Charting Your Crypto Path'

},
    {
    icons: '<BiAbacus/>',
    header: "Mastering Crypto Investments",
    details: 'Discover the key principles and strategies for successful crypto-currency'

},
    {
    icons: '<TbPlant/>',
    header: "Advancing Crypto Investments",
    details: 'Take your cryptocurrency investments to the next level with Advacncing Crypto Investments'

}
]



function Services() {
  return (
    <div className='w-[90%] text-white text-center mx-auto p-4 md:text-left'>

        <h1  className='sm:text-3xl '>Our Services Mission</h1>

        <p className='mt-16 sm:mt-8'> 
            Get a glimpse into the future of finance with demo our video. Watch as our expert team showcases the potential of cryptocurrency. From easy use interfaces to advanced security features, you see why we are the trusted choice for investors.
        </p>

        <div className="w-full flex justify-center flex-wrap mt-14">
            {missionDiagramDetails.map((misson, i)=>{
                const {header, details, icons} = misson

                return(
                    <article key={i + 1} className='text-left border-2 rounded-lg w-[250px] mx-14 m-2 p-3 py-4 text-sm'>

                        <button className='text-3xl
                        '>

                    {i === 0 && <BiAbacus/>  || i === 1 && <MdInsertChartOutlined/> || i === 2 && <TbPlant/>}
                        </button>

                        <h2>{header}</h2>
                        <p>{details}</p>

                    </article>
                )
            })}
        </div>

    </div>
  )
}

export default Services