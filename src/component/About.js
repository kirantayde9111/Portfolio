import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About us</p>
     </div>
     <p className='text-xl mt-200'>
     The first use of Lorem ipsum is uncertain, though some have suggested the 1500s, when sections of Classical works were often used as dummy texts by printers to make type specimen books demonstrating different fonts. According to this account
     </p>
     
     <br/>
     {/* <p className='text-xl '>
     The first use of Lorem ipsum is uncertain, though some have suggested the 1500s, when sections of Classical works were often used as dummy texts by printers to make type specimen books demonstrating different fonts. According to this account, the material was chosen based on Latin’s familiarity as a lingua franca across Europe and the popularity of Classical works during the Middle Ages. Whenever it was first created, Lorem ipsum did not gain widespread popularity until the 1960s, when Letraset manufactured preprinted transfer sheets that featured the passage for use in the advertising industry. The sheets allowed typesetters and designers to cut out and rub on the text in various fonts, sizes, and formats for mock-ups and prototypes.
     </p> */}
     </div>
    </div>
  )
}

export default About
