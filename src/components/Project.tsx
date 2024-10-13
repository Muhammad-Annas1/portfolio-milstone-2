import React from 'react'

import Card from './Card'



const data = [
  {
    id: 0,
    title: 'Simple Header Footer Template',
    description: 'This is a simple header footer template build using Next.js, Typescript and Tailwind CSS',
    img: "/Project_1.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],

  },
  {
    id: 1,
    title: 'Countdown App',
    description: 'Countdown timet application build using Next.js, Typescript and Tailwind CSS',
    img: "/Project_2.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Students ID Card',
    description: 'An ID card application powered by Next.js, Typescript and Tailwind CSS',
    img: "/Project_3.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A weather app powered by Next.js, Typescript and Tailwind CSS',
    img: "/Project_4.jpg",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
  },


]



const Project = () => {
  return (
    <div id='Projects' className='container pt-36' >
      <h1 data-aos="zoom-in"  className='flex justify-center text-4xl underline mb-10 text-black' >My Projects</h1>
      <div className='grid gap-10 xl:gap-x-30 xl:gap-y-0 md:grid-cols-2 lg:grid-cols-3 place-items-center'  >
        {data.map((el) => (<Card
          key={el.id}
          title={el.title}
          description={el.description}
          img={el.img}
          tags={el.tags}
        />))}


      </div>
    </div>
  )
}

export default Project