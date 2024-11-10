import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, description, img, tags }) => {
  return (
    <div className='border border-white rounded-lg shadow-lg overflow-hidden w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] transition-transform transform hover:scale-105' data-aos="zoom-in">
      <div>
        <Image
          className='w-full h-auto'
          src={img}
          width={450}
          height={300}
          alt={title}
        />
      </div>
      <div className='p-4 space-y-3'>
        <h3 className='text-2xl sm:text-3xl font-semibold text-black'>{title}</h3>
        <p className='text-black text-sm sm:text-base'>{description}</p>
        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag) => (
            <span
              className='bg-gray-200 text-black px-3 py-1 rounded-full text-xs sm:text-sm'
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
