import React from 'react'
import people from './../../resources/data'


function toCapital(str){
    return str.split(' ').map(m =>{
        return m[0].toUpperCase() + m.slice(1)
    }).join(' ')
}

function Team() {
  return (
    <div className="team w-[90%] mx-auto text-white text-center md:text-left my-8 py-12">

    <h1 className='w-[80%] mx-auto sm:text-3xl sm:my-4'>Our Core Team</h1>


    <p className='w-[80%] mx-auto'>
        Our Cryptocurrency team is a passionate and dedicated group of proffessionals with a wealth of experience in finances, technology, and blockchain. We are commited providing our clients with the knowledge and resources they need to succeed in rapidly evolving world of Cryptocurrency. 
    </p>


    <div className='text-white flex justify-center items-center flex-wrap w-[80%] mx-auto'>
{people.map(person =>{
    const {id, image,name,title} = person

    return(
        <article key={id} className='text-center'>
            <img src={image} alt="" className='object-cover w-[150px] h-[150px] md:w-[100px] md:h-[100px] m-4 my-14 mx-10 md:mx-4 rounded-[50%] outline-offset-8 outline outline-1' />
            <h2 className='font-semibold text-lg'>{toCapital(name)}</h2>

            <p className='mt-2 font-light text-sm'>

            {toCapital(title)
            }
            </p>
        </article>
    )
})}
    </div>
    </div>
  )
}

export default Team