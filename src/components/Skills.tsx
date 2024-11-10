import React from 'react';

const Skills = () => {
  return (
    <div id='Skills' className='container pt-36'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in">
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center md:text-left'>Technologies I work with</h2>
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center md:text-left max-w-3xl mx-auto md:mx-0">
            I am proficient in a wide range of front-end development tools and technologies, enabling me to create responsive, high-performance web applications. I’m always expanding my skill set, staying up-to-date with the latest web technologies, and ensuring that the solutions I create are both innovative and practical.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-teal-700 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in">Typescript</h2>
              <h2 data-aos="zoom-in">Next.js</h2>
              <h2 data-aos="zoom-in">Tailwind CSS</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in">Shadcn UI</h2>
              <h2 data-aos="zoom-in">Node.js</h2>
              <h2 data-aos="zoom-in">CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
