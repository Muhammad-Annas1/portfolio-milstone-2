import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/my_pic.png)] bg-cover " 
      style={{
        backgroundSize: "20%",
        backgroundPosition: "left 245px top 210px",
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 sm:grid-cols-1 h-full">
        <div className="hidden lg:block md:block sm:block"></div>
        <div className="text-[45px] sm:text-[70px] md:text-[85px] lg:text-[90px] font-bold leading-tight flex justify-center items-center sm:m-10 md:m-16 lg:m-28 ">
          <div>
            <p className="text-teal-500" data-aos="zoom-in">Hello, I'm</p>
            <p className="text-teal-400" data-aos="zoom-in">Muhammad</p>
            <p className="text-teal-300" data-aos="zoom-in">Annas</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
