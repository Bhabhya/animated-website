import React from 'react';

const Navbar = () => {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
      <div className='logo'>
        <h1 className='text-white font-bold text-3xl'>OCHI</h1>
      </div>

      <div className='links flex gap-10 text-white'>
        {['Services', 'Our Work', 'About us', 'Insights', 'Contact'].map((item, index) => (
          <a key={index} className={`text-md font-semibold ${index === 4 ? 'ml-32' : ''}`}>{item}</a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
