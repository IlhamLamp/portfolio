import React from 'react'
import Typewriter from 'typewriter-effect'
import ContactIcon from './Contact/ContactIcon'
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
                    LET&apos;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4'>
                    Hi, I&apos;m <span className='text-primary textShadow'> Ilham</span>
                </h1>
                <Typewriter
                    options={{
                        strings: roles.map((role) => `<span class="text-3xl text-white whiteShadow">${role}</span>`),
                        autoStart: true,
                        loop: true,
                        cursor: `<span class="text-3xl text-cursor">|</span>`,
                    }}
                />
                <p className='py-4 text-whiteSec sm:max-w-[70%] m-auto'>
                    I&apos;m focused on building responsive front-end web applications
                    integrating back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <ContactIcon/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main