import React from 'react'
import SkillsData from '../data/skills.json'
import '../styles/styles.css'

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen p-2'>
        <div className='max-w-[1240px] m-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-primary textShadow'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='flex flex-wrap md:grid md:grid-cols-6 lg:grid-cols-10 gap-2 lg:gap-6'>
                {SkillsData.map((skill) => (
                    <div key={skill.id}>
                        <img src={skill.src} width={20} height={20} alt={skill.alt} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills