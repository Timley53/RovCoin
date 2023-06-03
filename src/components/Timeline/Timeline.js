import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

import 'react-vertical-timeline-component'

function Timeline() {
  return (
    <div className='mx-auto flex flex-col  items-center justify-center text-white text-center w-[90%] py-14'>
        <h1 className='sm:text-3xl'>
            Ziptocoin Timeline 
        </h1>

        <p className='w-[80%]'>
            Cryptocurrency is a revolutionary digital asset that has the potential to change the financial world as we know it. By using decentralized tecehnology and advanced encryption method.
        </p>


       




<div className="mx-auto mt-10 w-[80%] flex justify-center items-center flex-col py-10  ">


        
    
  <VerticalTimelineElement
    className="bg-transparent text-center w-[300px]"
    contentStyle={{ background: "transparent", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #08ff10' }}
    iconStyle={{ background: 'transparent', width: '20px', margin: '1rem -.8rem auto auto', height: '20px', color: '#fff', outlineColor: '  #08ff10' }}
    position={'right'}
    // icon={<WorkIcon />}
    >
    <h3 className="font-bold text-center">February</h3>
   
    <p>
      Study Crypto <br /> market trends
          </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="bg-transparent text-center w-[300px]"
    contentStyle={{ background: "transparent", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #08ff10' }}
    iconStyle={{ background: 'transparent', width: '20px', margin: '1rem -.8rem auto auto', height: '20px', color: '#fff', outlineColor: '  #08ff10' }}
    position={'right'}
    // icon={<WorkIcon />}
    >
    <h3 className="font-bold text-center">February</h3>
   
    <p>
      Study Crypto <br /> Market trends
          </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="bg-transparent text-center w-[300px]"
    contentStyle={{ background: "transparent", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #08ff10' }}
    iconStyle={{ background: 'transparent', width: '20px', margin: '1rem -.8rem auto auto', height: '20px', color: '#fff', outlineColor: '  #08ff10' }}
    position={'right'}
    // icon={<WorkIcon />}
    >
    <h3 className="font-bold text-center">April</h3>
   
    <p>
      Evaluate  Crypto <br /> Investment Option
          </p>
  </VerticalTimelineElement>


      </div>
 

 

        </div>

  )
}

export default Timeline