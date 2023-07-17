import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import NavLogo from '../public/assets/navLogo.png'
import ToggleTheme from './button/ToggleTheme'


const Navbar = () => {
  const [theme, setTheme] = useState("light")
  // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  // smooth scrolling
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  // set toggle local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem("theme")
      setTheme(storedTheme ? storedTheme : "light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className= {
        shadow 
          ? 'fixed w-full h-20 bg-[#ecf0f3] shadow-xl z-[100]' 
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* LOGO */}
        <Link href='/'>
          <Image 
            src={NavLogo}
            alt="/"
            width='70'
            height='50'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <div className='flex'>
              <Link href='/'>
                <li className='ml-10 text-sm hover:border-b'>Home</li>
              </Link>
              <Link href='/#about'>
                <li className='ml-10 text-sm hover:border-b'>About</li>
              </Link>
              <Link href='/#skills'>
                <li className='ml-10 text-sm hover:border-b'>Skils</li>
              </Link>
              <Link href='/#projects'>
                <li className='ml-10 text-sm hover:border-b'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li className='ml-10 text-sm hover:border-b'>Contacts</li>
              </Link>
            </div>
            <div className='mx-4'>
              <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
            </div>
          </ul>

          {/* Mode Device */}
          <div className='md:hidden flex gap-3'>
            <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
            <div onClick={handleNav} className=''>
              <AiOutlineMenu size={25}/>
            </div>
          </div>

        </div>
      </div>

      {/* SIDEBAR */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
          {/* LOGO */}
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={NavLogo} width='87' height='35' alt='/'/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>My Portfolio hehe.</p>
            </div>
          </div>
          {/* MENU */}
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <BsFillPersonLinesFill/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Navbar