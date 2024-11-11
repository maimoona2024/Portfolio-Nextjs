import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-bold'>Moona</div>
            <ul className='gap-10 lg:gap-8 hidden md:flex'>
              <li className='menuLink'><a className='a' href="#hero">HOME</a></li>
              <li className='menuLink'><a className='a' href="#about">ABOUT</a></li>
              <li className='menuLink'><a className='a' href="#projects">PROJECTS</a></li>
              <li className='menuLink'><a className='a' href="#contact">CONTACTS</a></li>
              <li className='menuLink'><a className='a' href="#skills">SKILLS</a></li>
            </ul>
            <IoMenuSharp className='md:hidden' size={30}/>
        </div>
      
    </div>
  )
}

export default Navbar