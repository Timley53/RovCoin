import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

import {HiPhoneIncoming} from 'react-icons/hi'

function Footer() {
  return (
    <div className='w-full p-8 py-16  bg-[#100b3ed4] flex md:flex-col'>

        <div className="input-field  w-[50%] p-8 flex text-white  flex-col items-start justify-start md:w-[80%] md:p-2">

    <h2 className='text-lg my-4'>Join Our Newsletter.</h2>

            <div className="flex border-2  rounded-full">
                <input type="text" className='p-2 px-3 rounded-l-md bg-transparent '  placeholder='Input your mail'/>


                <button className="bg-[#08ff10] rounded-full px-8 hover:border-2 hover:bg-transparent transition-all">
                    Subscribe
                </button>
            </div>
        </div>

        <div className="contact w-[50%]  text-white flex items-center flex-col justify-center md:w-[80%] md:p-2 md:mt-8">
            <h2>Contact</h2>
            <div className="flex my-6">

            <a href='tel:+2349056499020' target='_blank' className='text-2xl m-3 hover:scale-110'>
            <HiPhoneIncoming/>
        </a>

        <a href="mailto:kuntimmy@gmail.com" target='_blank' className='text-2xl m-3 hover:scale-110'>
            <AiOutlineMail/>
        </a>

        <a href='https://wa.me/message/QF4ERDN5JIYUP1' target='_blank' className='text-2xl m-3 hover:scale-110'>
            <AiOutlineWhatsApp/>
        </a>

        <a href="https://www.linkedin.com/in/timileyin-adedokun-35b36b219" target='_blank' className='text-2xl m-3 hover:scale-110'>
<AiOutlineLinkedin/>
        </a>

<a href="https://github.com/Timley53" target='_blank' className='text-2xl m-3 hover:scale-110' >
    <AiOutlineGithub/>
</a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer