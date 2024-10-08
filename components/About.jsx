import React, {useState} from 'react'
import ModalTimeline from './Modal/ModalTimeline'
import '../styles/styles.css'

const About = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const currentYear = new Date().getFullYear();
    const myAge = currentYear - 2002

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-primary textShadow'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-whiteSec'>
                    Hello! my name is Ilham Nur Utomo, usually called ilham. I was born in Purbalingga on May 24, 2002 ({myAge} years old). I live in Bekasi and I just graduated from Universitas Pelita Bangsa with a bachelor&apos;s degree in informatics engineering. I&apos;m currently working part-time as a programming teacher, while also sharpening my programming, communication, and problem-solving skills. 
                </p>
                <p className='py-2 text-whiteSec'>
                    I Have an interest in a career as a Back-end Developer (Node.Js or Golang). I am a diligent person and often look for new opportunities to develop.
                </p>
                <div className='lg:w-1/2 flex flex-row gap-6 text-center md:text-left'>
                    {/* TIMELINE */}
                    <p onClick={toggleModal} className="tlnToggle group hover:cursor-pointer">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">See Timeline</span>
                        <span className="relative invisible">See Timeline</span>
                    </p>
                    
                    {/* RESUME */}
                    <button href="/assets/resume/CV_Ilham_Bekasi.pdf" className="p-3 group" type="button" onClick={() => window.open('/assets/resume/CV_Ilham_Bekasi.pdf', '_blank')}>
                        <span className="btnHover"></span>
                        <span className="btnIdle"></span>
                        <span className="relative text-md">Download Resume</span>
                    </button>
                </div>
                {/* Modal Popup */}
                {modal && <ModalTimeline onClose={toggleModal}/>}
            </div>
            <div className='w-full h-auto my-3 flex items-center justify-center p-2 hover:scale-105 ease-in duration-200 hover:cursor-pointer'>
                <img className='rounded-full w-1/2' src="/assets/profile.jpg" alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default About