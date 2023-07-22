import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactIcon from './Contact/ContactIcon'
import '../styles/styles.css'
import contactImg from '../public/assets/contact.png'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-primary textShadow'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* LEFT */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-primary/10 bg-white/5 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image 
                                className='rounded-xl hover:scale-105 ease-in duration-100 opacity-40'
                                src={contactImg}
                                alt='/'  
                            />
                        </div>
                        <div className='text-center'>
                            <h2 className="p-2">Ilham Nur Utomo</h2>
                            <p className='text-secondary font-bold'>A Student</p>
                            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, doloribus.</p>
                        </div>
                        <div className='text-center'>
                            <p className="uppercase pt-8 whiteShadow">Connect With Me</p>
                            <div className='flex item-center justify-between py-4'>
                                <div className='flex items-center justify-between m-auto py-4 w-full sm:w-[80%]'>
                                    <ContactIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-primary/10 bg-white/5 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm text-primary font-bold py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm text-primary font-bold py-2'>Phone</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300'
                                        type="tel" 
                                        onInput={(e) => {
                                            const maxDigits = 15
                                            let value = e.target.value.replace(/[^0-9]/g, "")
                                            value = value.slice(0, maxDigits); // Potong menjadi maksimal 15 angka
                                            e.target.value = value;
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm text-primary font-bold py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm text-primary font-bold py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300' rows='5' />
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={20} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact