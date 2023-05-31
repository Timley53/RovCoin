import React, { useEffect, useRef,useState, useContext } from 'react'
import CompImg from './../../resources/514-removebg-preview.png'
import RovCoinContext from '../Utils'





function Company() {
    const {myRef} = useContext(RovCoinContext)

    const [inView, setInView] = useState(false)


    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setInView(entry.isIntersecting)
            // console.log(inView);
            
        }, {
            rootMargin:'-15px',
            triggerOnce: true
        })


        observer.observe(myRef.current)
        
        return ()=> observer.disconnect()
    }, [inView])

    


  return (
    <div  className={`flex md:flex-col ${inView ? 'pt-2 opacity-100':'opacity-0'} md:mt-32   h-full items-center w-[80%] mx-auto  p-4 text-white  transition-all duration-[5s]`}>
        <div className="w-[50%] md:w-[100%]">
    <h1>About The Rovcoin</h1>

    <p> 
        Cryptocurrency is a revolutionary digital asset that has the potential to change the financial world as we know it.By using decentralized tecehnology and advanced encryption methods.
    </p>

    <button className='my-8 border-2 border-[#08ff10] p-3 px-10 rounded-full bg-[#08ff10]  hover:bg-transparent transition-all'>
        LET'S GO
    </button>



        </div>

        <div className="">
        <img src={CompImg} alt="" />
        </div>
        

    </div>
  )
}

export default Company






