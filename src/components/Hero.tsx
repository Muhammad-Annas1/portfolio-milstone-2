import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero" className='min-h-screen bg-no-repeat bg-[url(/my_pic.png)] bg-cover'
      style={{ backgroundSize: "20%", backgroundPosition: "left 250px top 200px" }}

    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100px-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center m-28'>
          <div>
            <p className='text-teal-500' data-aos="zoom-in" >Hello, I'm</p>
            <p className='text-teal-400' data-aos="zoom-in">Muhammad</p>
            <p className='text-teal-300' data-aos="zoom-in">Annas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
