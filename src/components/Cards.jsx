import React from 'react'

const Cards = () => {
  return (
    <div className=' w-full h-screen bg-zinc-100 flex gap-5 py-10 px-32'>
    <div className='cardcointainer w-1/2 h-[50vh]'>
    <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
        <img src='/public/images/ochi.svg' className='rounded-xl w-50'></img>
        <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2019-2020</button>
    </div>

    </div>

    <div className='cardcointainer flex gap-5 w-1/2 h-[50vh]'>
    <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
    <img src='/public/images/white.jpg' className='rounded-xl w-20'></img>
    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2021-2022</button>
    </div>

    <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
    <img src='/public/images/white.jpg' className='rounded-xl w-20'></img>
    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2023-2024</button>
    </div>

    </div>
      
    </div>
  )
}

export default Cards
