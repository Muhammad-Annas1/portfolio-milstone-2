import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Form submitted successfully, we will get back to you soon!');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id='Contact' className='container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-36'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div className='space-y-8'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white' data-aos="zoom-in">
            Get in touch
          </h2>
          <p className='text-black text-base sm:text-lg lg:text-xl' data-aos="zoom-in">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm always open to new opportunities and collaborations! If you have any questions, suggestions, or would like to connect, feel free to reach out. You can fill out the contact form, or drop me a message. I look forward to hearing from you!
          </p>
          <div className='flex gap-3 items-center text-black' data-aos="zoom-in">
            <AiOutlineMail size={24} /> xyz@example.com
          </div>
          <div className='flex gap-3 items-center text-black' data-aos="zoom-in">
            <BsTelephone size={24} /> +92 234 567 890
          </div>
          <div className='flex gap-3 items-center text-black' data-aos="zoom-in">
            <FaXTwitter size={24} /> @FrontendAnnas123
          </div>
        </div>
        <div className='space-y-6'>
          <div className='flex flex-col gap-2' data-aos="zoom-in">
            <label htmlFor="name" className='text-black font-medium'>Name</label>
            <input
              type='text'
              className='h-10 px-3 bg-transparent border border-black rounded-md outline-none focus:border-teal-500'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2' data-aos="zoom-in">
            <label htmlFor="email" className='text-black font-medium'>Email</label>
            <input
              type='email'
              className='h-10 px-3 bg-transparent border border-black rounded-md outline-none focus:border-teal-500'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2' data-aos="zoom-in">
            <label htmlFor="message" className='text-black font-medium'>Message</label>
            <textarea
              className='px-3 bg-transparent border border-black rounded-md outline-none focus:border-teal-500'
              id='message'
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className='w-full sm:w-auto bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition'
            data-aos="zoom-in"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
