import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <div data-scroll data-scroll-speed='-.7' className='absolute w-full h-full bg-[url("/public/images/two.jpg")] bg-cover bg-center'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10 z-10'>
        <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className='line absolute top-1/2 left-1/2 -translate-x-[40%] translate-y-[40%] w-full h-10'
            >
              <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
        <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center'>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className='line absolute top-1/2 left-1/2 -translate-x-[40%] translate-y-[40%] w-full h-10'
            >
              <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
