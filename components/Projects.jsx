import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectsData from '../data/projects.json'
import '../styles/styles.css'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary textShadow'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {ProjectsData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              tech={project.tech}
            />  
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;