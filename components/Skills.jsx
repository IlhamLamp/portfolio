import React from 'react'
import Image from 'next/image'
import SkillsData from '../data/skills.json'
import '../styles/styles.css'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-primary textShadow'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {SkillsData.map((skill) => (
                    <div key={skill.id} className='p-6 bg-tertiary/40 shadow-lg shadow-primary/40 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={skill.src} className='bg-white/30 rounded-lg' width='55' height='55' alt={skill.alt}/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-white'>{skill.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills