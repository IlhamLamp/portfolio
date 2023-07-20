import React, {useState} from 'react'
import ModalTimeline from './Modal/ModalTimeline'
import '../styles/styles.css'

const About = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-primary textShadow'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-whiteSec'>
                    Hello, my name is Ilham Nur Utomo, usually called ilham. I am 21 years old and currently
                    studying at Pelita Bangsa University. In between these times, I like to take the time to
                    follow programming tutorials. Looking at the code running after the error, somehow it looks
                    so beautiful. Well, even though before it was dizzy hehe.
                </p>
                <p className='py-2 text-whiteSec'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                    sunt minima ut qui quas amet, et illo dolores eum veritatis consequatur
                    omnis magni rem eligendi voluptates ipsa sequi doloremque excepturi.
                </p>
                <div className='text-center md:text-left'>
                    {/* TIMELINE */}
                    <p onClick={toggleModal} className="tlnToggle group hover:cursor-pointer">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">See Timeline</span>
                        <span className="relative invisible">See Timeline</span>
                    </p>
                    {/* <p onClick={toggleModal} className='py-2 text-tertiary hover:text-cursor hover:whiteShadow underline cursor-pointer'>My Timeline.</p> */}
                    {/* RESUME */}
                    {/* <button href="#_" className="p-3 group">
                        <span className="btnHover"></span>
                        <span className="btnIdle"></span>
                        <span className="relative text-md">Download Resume</span>
                    </button> */}
                </div>
                {/* Modal Popup */}
                {modal && <ModalTimeline onClose={toggleModal}/>}
            </div>
            <div className='w-full h-auto my-3 shadow-lg hover:shadow-none shadow-gray-400 rounded-2xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-200'>
                <img className='rounded-full w-1/2' src="https://github.com/IlhamLamp/Assignment1/blob/main/src/images/profile.jpeg?raw=true" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About