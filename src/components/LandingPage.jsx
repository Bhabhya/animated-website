import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
    <div className='textstructure mt-40 px-20'>

    <div className='masker'>
    <h1 className='text-9xl leading-[6.5vw] tracking-tighter text-white'>WE CREATE</h1>
    </div>

    <div className='masker'>
    <h1 className='text-9xl leading-[6.5vw] tracking-tighter text-white ml-20'>EYE OPENING</h1>
    </div>
    

    <div className='masker'>
    <h1 className='text-9xl leading-[6.5vw] tracking-tighter text-white'>PRESENTATIONS</h1>
    </div>

    <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
    {['For public and private companies', 'From the first pitch to IPO'].map((item,index)=>(
        <p className='text-md font light tracking-tight leading-none text-white'>{item}</p>
    ))}

    <div className='px-4 py-2 border-[2px] rounded-full border-zinc-500 font-light text-sm text-white'>start the project


    </div>


    </div>


    </div>
      
    </div>
  )
}

export default LandingPage
