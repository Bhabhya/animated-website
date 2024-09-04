import React from 'react';

const Footer = () => {
  const socialMediaLinks = ['Facebook', 'Instagram', 'Twitter'];

  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-3 my-30'>
      <div className='w-1/2 text-white pl-10'>
        <div className='heading'>
          <h1 className='text-[15vh] font-bold'>EYE-</h1>
          <h1 className='text-[15vh] font-bold'>OPENING</h1>
        </div>
      </div>
      <div className='w-1/2'>
        <h1 className='text-[13vh] font-bold text-white'>PRESENTATIONS</h1>
        <div className='dets text-white'>
          {socialMediaLinks.map((link, index) => (
            <a href='#' key={index} className='block text-2xl'>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
