import React from 'react'
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
<nav>
    <div className="container pt-7 ">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold font-serif -ml-6 mb-1 ">Muhammad Annas</div>

        <ul className="gap-10 lg:gap-8 hidden md:flex text-xl -mr-6 mb-1 font-serif">
          <li className='menuLink'><a href='#hero'>Home</a></li>
          <li className='menuLink'><a href='#about'>About</a></li>
          <li className='menuLink'><a href='#Skills'>Skills</a></li>
          <li className='menuLink'><a href='#Projects'>Projects </a></li>
          <li className='menuLink'><a href='#Contact'>Contact</a></li>
        </ul>

        <MdMenu className="md:hidden" size={30} />
      </div>
    </div>
    </nav>

  )
}

export default Navbar
