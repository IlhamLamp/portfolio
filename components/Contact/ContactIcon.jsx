import React from 'react'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactIcon = () => {

    // EMAIL 
    const emailAddress = 'test@mail.com'
    const subject = `Test subject`
    const message = `Test message`

  return (
    <>
    {/* Linkedin */}
    <Link href="https://www.linkedin.com/in/ilham-nur-utomo-064b89220/" passHref>
        <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
            <FaLinkedinIn className='text-bg'/>
        </div>
    </Link>
    {/* Github */}
    <Link href="https://github.com/IlhamLamp" passHref>
        <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
            <FaGithub className='text-bg'/>
        </div>
    </Link>
    {/* Email */}
    <Link 
        href={`
            mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}
        `}
    >
        <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
            <AiOutlineMail className='text-bg'/>
        </div>
    </Link>
    {/* Instagram */}
    <Link href="https://www.instagram.com/hamnurrr/" passHref>
        <div className='rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150 hover:shadow-none'>
            <FaInstagram className='text-bg'/>
        </div>
    </Link>
    </>
  )
}

export default ContactIcon