import React from 'react'
import img2 from "../assets/image/img2.jpg"
import img3 from "../assets/image/img3.jpg"
import img4 from "../assets/image/img4.jpg"
import img5 from "../assets/image/img5.jpg"
import img7 from "../assets/image/img7.webp"
const Portfolio = () => {

  const portfolio=[
    {
      id:1,
      src:img2
    },
    {
      id:2,
      src:img3
    },
    {
      id:3,
      src:img4
    },
    {
      id:4,
      src:img5
    },
    {
      id:5,
      src:img7
    },

  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full'>
        <div className='pb-8 mt-96'>
          <p className='text-4xl font-bold inline border-b-4  border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

       
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolio.map(({id, src}) =>
        (
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button className="w-1/2 px-6 py-3 m-4 duration-150 bg-slate-600 hover:scale-105">Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200  bg-slate-600 hover:scale-105'>Code</button>
            </div>
          </div>

        ))}
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio
