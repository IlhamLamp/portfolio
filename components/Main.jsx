import React from 'react'
import Typewriter from 'typewriter-effect'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import '../styles/styles.css'

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
                <p className='uppercase text-sm tracking-widest text-whiteSec'>
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4'>
                    Hi, I'm <span className='text-primary textShadow'> Ilham</span>
                </h1>
                <Typewriter
                    options={{
                        strings: roles.map((role) => `<span class="text-3xl">${role}</span>`),
                        autoStart: true,
                        loop: true,
                        cursor: `<span class="text-3xl text-cursor">|</span>`,
                    }}
                />
                <p className='py-4 text-whiteSec sm:max-w-[70%] m-auto'>
                    I’m focused on building responsive front-end web applications
                    integrating back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
                        <FaLinkedinIn className='text-bg'/>
                    </div>
                    <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
                        <FaGithub className='text-bg'/>
                    </div>
                    <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
                        <AiOutlineMail className='text-bg'/>
                    </div>
                    <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
                        <BsFillPersonLinesFill className='text-bg'/>
                    </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main