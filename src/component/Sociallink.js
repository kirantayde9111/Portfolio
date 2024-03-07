import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

import second from 'react-icons/bi'
// import {BsFillPersonalLinesFill} from 'react-icons/bs'

const Sociallik = () => {
    const links =[
        {
            id:1,
            child:(
                <>
                    Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/kiran-tayde-0919b3191/'
        },
        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/kirantayde9111'

        },
        // {
        //     id:3,
        //     child:(
        //         <>
        //             Mail <size={30}/>
        //         </>
        //     ),
        //     href:'mailto:kirantayde9111@gmail.com'

        // },
        // {
        //     id:4,
        //     child:(
        //         <>
        //             Resume <BsFillPersonalLinesFill size={30}/>
        //         </>
        //     ),
        //     href:'Mkiranresume.pdf',
        //     style:"rounded-br-md",
        //     download: true,

        // },
    ]
  return (
    <div className='flex-col top-[35%] left-0 fixed'>
    <ul>
     {
        links.map(({id, child, href, style, download}) =>
        (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style }>
            <a href={href} 
            className='flex justify-between items-center w-full text-white'
            download={download}
            target='_blank'
            rel="noreferrer"
            >
                {child}
            </a>
        </li>
        ))
     }
        
        
     </ul>
    </div>
  )
}

export default Sociallik
