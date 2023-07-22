import React from 'react'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ContactIcon = () => {
  return (
    <>
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
    </>
  )
}

export default ContactIcon