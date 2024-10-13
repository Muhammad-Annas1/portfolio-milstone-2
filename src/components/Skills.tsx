import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='caontainer pt-36'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in">
          <h2 className='text-4xl md:text-5xl ml-14' >Technologies I work with</h2>
          <p className='text-black pt-5 text-xl ml-14'>I am proficient in a wide range of front-end development tools and technologies, enabling me to create responsive, high-performance web applications.I’m always expanding my skill set, staying up-to-date with the latest web technologies, and ensuring that the solutions I create are both innovative and practical.I’m always expanding my skill set, staying up-to-date with the latest web technologies, and ensuring that the solutions I create are both innovative and practical.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-teal-700 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in">Typescript</h2>
              <h2 data-aos="zoom-in">Next.js</h2>
              <h2 data-aos="zoom-in">Tailwind Css</h2>
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
  )
}

export default Skills
