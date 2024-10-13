import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  // State to manage form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle submit button click
  const handleClick = () => {
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    // Log the form data (or handle submission)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Form submitted successfully, we will get back to you soon!');

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id='Contact' className='container pt-36'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl -ml-14' data-aos="zoom-in">Get in touch</h2>
          <p className='text-black text-xl  -ml-14' data-aos="zoom-in">
            I'm always open to new opportunities and collaborations! If you have any questions, suggestions, or would like to connect, feel free to reach out. You can fill out the contact form, or drop me a message. I look forward to hearing from you!
          </p>
          <div className='flex gap-3 items-center -ml-14' data-aos="zoom-in">
            <AiOutlineMail size={30} />xyz@example.com
          </div>
          <div className='flex gap-3 items-center -ml-14' data-aos="zoom-in">
            <BsTelephone size={30} />+92 234 567 890
          </div>
          <div className='flex gap-3 items-center -ml-14' data-aos="zoom-in">
            <FaXTwitter size={30} />@FrontendAnnas123
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="name">Name</label>
            <input
              type='text'
              className='h-40px bg-transparent border border-black outline-none'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
            />
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="email">Email</label>
            <input
              type='text'
              className='h-40px bg-transparent border border-black outline-none'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="message">Message</label>
            <textarea
              className='bg-transparent border border-black outline-none'
              id='message'
              rows={8}

              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update message state
            />
          </div>
          <button
            className='bg-teal-500 p-2 10px hover:text-[#c5c5c5]'
            data-aos="zoom-in"
            onClick={handleClick} // Call the handleClick function on click
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
