import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import ProjectItem from './ProjectItem'
import ProjectsData from '../data/projects.json'
import '../styles/styles.css'

const Projects = () => {

  // Carousel
  const confCarousel = {
    className: "center",
    dots: true,
    infinite: true,
    centerPadding: "20px",
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 3,
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          initialSlide: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
          centerPadding: "10px",
          infinite: true
        }
      }
    ]
  };


  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary textShadow'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        {/* <div className='grid md:grid-cols-2 gap-8'> FOR GRID*/}
        <div className='mx-4 p-3'>
          <Slider {...confCarousel}>
            {ProjectsData.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                backgroundImg={project.backgroundImg}
                projectUrl={project.projectUrl}
                tech={project.tech}
              />  
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;