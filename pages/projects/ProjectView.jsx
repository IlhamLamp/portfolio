import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import projectsData from '../../data/projects.json'

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
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{title}</h2>
          <h3>{stack}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            {description}
          </p>
          <a
            href={repo}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                {tools.map((tool, index) => (
                    <p key={index} className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' />{tool}
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