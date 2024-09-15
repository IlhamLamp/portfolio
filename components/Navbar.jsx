import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import NavLogo from '../public/assets/navLogo.png'
// import ToggleTheme from './button/ToggleTheme'


const Navbar = () => {

  const router = useRouter();

  // const [theme, setTheme] = useState("light")
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

  // -- set toggle theme --
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedTheme = localStorage.getItem("theme")
  //     if (storedTheme) {
  //       setTheme(storedTheme)
  //       document.documentElement.setAttribute("data-theme", storedTheme)
  //     } else {
  //       localStorage.removeItem("theme")
  //     }
  //   }
  // }, [])

  // -- DESKTOP --
  // const toggleThemeDesktop = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme)
  // };

  // -- PHONE --
  // const toggleThemePhone = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme)
  // }

  const menuItems = [
    { path: '/#about', label: 'About' },
    { path: '/#skills', label: 'Skills' },
    { path: '/#projects', label: 'Projects' },
    { path: '/#contact', label: 'Contact' },
  ];

  return (
    <div
      className= {
        shadow 
          ? 'fixed w-full h-20 backdrop-blur-sm bg-bg/70 shadow-xl z-[100]' 
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* LOGO */}
        <Link href='/'>
          <Image 
            src={NavLogo}
            alt="/"
            width='60'
            height='60'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <div className='flex'>
              <Link href='/'>
                <li className='mx-5 text-sm text-white hover:border-b'>Home</li>
              </Link>
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <li className={`mx-5 text-sm ${router.asPath.includes(item.path) ? 'text-primary textShadow' : 'text-white'} hover:border-b`}>
                    {item.label}
                  </li>
                </Link>
              ))}
            </div>
            {/* Desktop Dark Toggle */}
            {/* <div className='mx-4'>
              <ToggleTheme id="toggleThemeDesktop" theme={theme} toggleTheme={toggleThemeDesktop}/>
            </div> */}
          </ul>

          {/* Phone Dark Toggle */}
          <div className='md:hidden flex gap-3'>
            {/* <ToggleTheme id="toggleThemePhone" theme={theme} toggleTheme={toggleThemePhone}/> */}
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
            ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] text-bg p-10 ease-in duration-500'
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
              <p className='w-[85%] md:w-[90%] py-4'>My Portfolio</p>
            </div>
          </div>
          {/* MENU */}
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/?about=about'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/?skills=skills'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/?projects=projects'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/?contact=contact'>
                <li onClick={() => setNav(false)}className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
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