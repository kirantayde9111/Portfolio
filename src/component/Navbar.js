import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import {FaBars, faBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
  const{nav, setNav}= useState(false);
  const links = [
    {
      id:1,
      links:"aboutus",
    },
    {
      id:2,
      links:"services",
    },
    {
      id:3,
      links:"Portfolio",
    },
    {
      id:4,
      links:"Portfolio",
    }
  ]
  
  
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div className='text-5xl font-signature ml-2'>
        <h1>Kiran</h1>
      </div>
      <ul className='flex'>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Home</li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>About us</li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Contact us</li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Portfoili</li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Services</li>


      
      </ul>
      <div  onClick= {() => setNav (!nav)}className='cursor-pointer pr-4 z-10 text-gray-500'>
       {nav ?<FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

    </div>
  )
}

export default Navbar
