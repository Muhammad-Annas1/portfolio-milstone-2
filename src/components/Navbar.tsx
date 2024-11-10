import React, { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-400 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-serif text-white -ml-1 mb-1">
          Muhammad Annas
        </div>

        <ul className="gap-10 lg:gap-8 hidden md:flex text-xl text-white mb-1 font-serif">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#Skills">Skills</a></li>
          <li className="menuLink"><a href="#Projects">Projects</a></li>
          <li className="menuLink"><a href="#Contact">Contact</a></li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose size={30} className="text-white" /> : <MdMenu size={30} className="text-white" />}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden bg-teal-500 text-white p-4">
          <li className="menuLink"><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li className="menuLink"><a href="#about" onClick={toggleMenu}>About</a></li>
          <li className="menuLink"><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
          <li className="menuLink"><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
          <li className="menuLink"><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
