import React from 'react';

const Featured = () => {
  return (
    <div className='w-full py-20 bg-zinc-900'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl text-white tracking-tighter'>Featured Projects</h1>
      </div>

      <div className='px-20 mt-20'>
        <div className='cards w-full flex gap-10'>
          <div className='cardcontainer w-1/2 h-[80vh] relative'>
            <div className='w-full h-full rounded-xl bg-green-700 overflow-hidden relative'>
              <img className='w-full h-full object-cover' src='/public/images/girl.jpeg' alt='Girl' />
              <div className='overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                <span className='text-white text-4xl'>Girl</span>
              </div>
            </div>
          </div>
          <div className='cardcontainer w-1/2 h-[80vh] relative'>
            <div className='w-full h-full rounded-xl bg-green-700 overflow-hidden relative'>
              <img className='w-full h-full object-cover' src='/public/images/boy.jpeg' alt='Boy' />
              <div className='overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                <span className='text-white text-4xl'>Boy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
