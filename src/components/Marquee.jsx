import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full bg-[#004D43] overflow-hidden '>
      <motion.div
        className='flex gap-10 whitespace-nowrap py-4'
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 10,
        }}
      >
        <h1 className='text-[8vw] leading-none text-white pb-10'>We Are Ochi</h1>
        <h1 className='text-[8vw] leading-none text-white pb-10'>We Are Ochi</h1>
        <h1 className='text-[8vw] leading-none text-white pb-10'>We Are Ochi</h1>
      </motion.div>
    </div>
  );
};

export default Marquee;
