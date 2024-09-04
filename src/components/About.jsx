import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68]'>
    <h1 className='text-6xl'>An animated website uses motion graphics, transitions, and interactive elements to enhance user experience and engagement. These animations can guide users through the content, highlight important features, or simply add a layer of visual appeal. Whether it's subtle hover effects, loading animations, or full-page transitions, the use of animation can make a website feel more dynamic, modern, and memorable. However, it's important to balance creativity with usability, ensuring that animations don't overwhelm or slow down the site.</h1>
      
      <div className='w-full border-t-[2px] mt-20 bg-[#738146] pt-20 flex gap-5 pb-20'>
      <div className='w-1/2'>
      <h1 className='text-7xl'>  Our Approach</h1>
      <button className=' flex gap-10 w-42 px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read More
      <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
      </button>
     

      </div>

      <div className='w-1/2 h-[60vh]  '>
      <img src='/public/images/store.webp' className='rounded-3xl'></img>


      </div>


      </div>
    </div>
  )
}

export default About
