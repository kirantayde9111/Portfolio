import React from 'react'
import Heroimage from '../assets/image/heroimage.jpeg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gray-800 text-slate-100'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
     <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>Hello..
I am looking job as a fresher, recently i have done 6 month training in full stack development,
profile: MernStack, React Js
Skills: Html,Css,Javascript,Jquery,Bootstrap,React js,Node Js, Express Js,Mongo DB..
</p>
        
        <div>
        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'>Portfolio
        <span className=' group-hover:rotate-90 duration-300'>
            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
        </span>
        </button></div></div>
        <div>
<img src={Heroimage} className='rounded-2xl mx-auto w-2/3 ' alt='myportfolio'/>
      </div>
    </div>
    
    </div>
  
  )
}

export default Home
