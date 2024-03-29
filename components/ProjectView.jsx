import Image from 'next/image'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
// import ProjectsButton from '../components/Button/ProjectsButton'
import projectsData from '../data/projects.json'
import '../styles/styles.css'


const ProjectView = ({projectUrl}) => {
    // Find the project based on the projectUrl
    const project = projectsData.find((proj) => proj.projectUrl === projectUrl);

    if (!project) {
        // Handle case when project is not found
        return <div>Project not found</div>;
    }

    // Define from json
    const { title,
            backgroundImg,
            tech, 
            stack,
            tools,
            repo,
            demo,
            description 
    } = project;  

  return (
    <div className='w-full overflow-x-hidden'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={backgroundImg}
          alt={title}
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 whiteShadow'>{title}</h2>
          <h3 className='text-cursor'>{stack}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-white whiteShadow'>Project</p>
          <h2 className='text-light textShadow'>Overview</h2>
          <p className='text-whiteSec'>
            {description}
          </p>
          <a
            href={repo}
            target='_blank'
            rel='noreferrer'
          >
            <button
                type="button"
                className="inline-block rounded bg-primary pb-2 pt-2.5 px-8 py-2 mt-4 mr-8 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
                Code
            </button>
            {/* <ProjectsButton text="Code" /> */}
          </a>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl backdrop-blur-md bg-white/10 shadow-gray-400/20 rounded-2xl py-4 hover:scale-105 ease-in-out duration-200'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-white'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                {tools.map((tool, index) => (
                    <p key={index} className='text-whiteSec font-bold py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1 text-primary' />{tool}
                    </p>
                ))}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectView