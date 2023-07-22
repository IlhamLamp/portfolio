import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast, {Toaster} from 'react-hot-toast'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactIcon from './Contact/ContactIcon'
import contactImg from '../public/assets/contact.png'
import '../styles/styles.css'

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((state) => ({ ...state, [name]: value}))
    }

    const handleSubmit = () => {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        })
          .then((res) => {
            console.log("Response received");
            if (res.status === 200) {
              console.log("Success send message!");
              toast.success("Success send message!");
            } else {
              console.error(res);
              toast.error("Failed send message!");
            }
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed send message!");
          });
      };

  return (
    <div id='contact' className='w-full'>
        <Toaster />
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
                                    <input 
                                        className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300'
                                        type='text'
                                        placeholder='Name'
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm text-primary font-bold py-2'>Email</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300' 
                                        type='email'
                                        placeholder='Email'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm text-primary font-bold py-2'>Subject</label>
                                <input 
                                    className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300' 
                                    type='text'
                                    placeholder='Subject'
                                    onChange={handleChange}
                                 />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm text-primary font-bold py-2'>Message</label>
                                <textarea 
                                    className='border-2 rounded-lg p-3 text-bg font-bold flex border-gray-300' 
                                    rows='5'
                                    placeholder='Message'
                                    onChange={handleChange} 
                                />
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4 shadow-lg shadow-primary/20 hover:scale-105 ease-in duration-100' onClick={handleSubmit}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg bg-tertiary/50 shadow-primary p-5 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <HiOutlineChevronDoubleUp className='text-white/60' size={20} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact