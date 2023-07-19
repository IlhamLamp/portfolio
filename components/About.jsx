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
                <p onClick={toggleModal} className='py-2 text-tertiary hover:text-cursor hover:whiteShadow underline cursor-pointer'>My Timeline.</p>
                {/* Modal Popup */}
                {modal && <ModalTimeline onClose={toggleModal}/>}
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.4rgos.it/i/Argos/1121-m0014-m007-m050-m008-gaming-pcs-and-laptops-guide-as274382882?maxW=1200&qlt=75&fmt.jpeg.interlaced=true" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About