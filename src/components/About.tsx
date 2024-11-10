import React from 'react'

const About = () => {
  return (
    <div id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center md:text-left" 
        data-aos="zoom-in"
      >
        About Me
      </h2>
      <p 
        className="text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center md:text-left max-w-3xl mx-auto md:mx-0" 
        data-aos="zoom-in"
      >
        Hello! I am Muhammad Annas, a passionate front-end web developer with a deep interest in
        building visually appealing, responsive, and user-friendly websites. Currently, I am a student of
        GIAIC, learning web development. I’m well-versed in TypeScript, Tailwind CSS, and modern frameworks like
        ShadcnUI, enabling me to craft both functional and aesthetic designs. I am constantly exploring the latest trends in
        front-end development and have a keen eye for detail, which helps me bring creative ideas to life while ensuring code
        quality and performance. When I’m not coding, you will likely find me exploring new tools and improving my skills to
        stay ahead in this fast-evolving field.
      </p>
    </div>
  )
}

export default About
