import React from 'react'
import Typewriter from 'typewriter-effect'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {

    // data roles typewriter effect
    const roles = [
        "A Student",
        "Junior Golang Developer",
        "Frontend Developer",
    ]

  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET&#39;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&#39;m <span className='text-[#5651e5]'> Ilham</span>
                </h1>
                {/* <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1> */}
                <Typewriter
                    options={{
                        strings: roles.map((role) => `<span className="py-2 text-gray-800">${role}</span>`),
                        autoStart: true,
                        loop: true,
                        cursor: "<span style='font-size : 2rem;'>|</span>",
                    }}
                />
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                    I’m focused on building responsive front-end web applications
                    integrating back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main