import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from 'react-vertical-timeline-component';
  import 'react-vertical-timeline-component/style.min.css';
  
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
    faBriefcase,
    faSchool,
    faStar,
  } from '@fortawesome/free-solid-svg-icons';
import '../../styles/styles.css'
import '../../styles/Modal.css'

// ICON
const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

const ModalTimeline = ({onClose}) => {
    const timeline = [
        {
          icon: workIcon,
          date: '2011 - present',
          title: 'Creative Director',
          subtitle: 'Miami, FL',
          desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
        },
        {
          icon: workIcon,
          date: '2010 - 2011',
          title: 'Art Director',
          subtitle: 'San Francisco, CA',
          desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
        },
        {
          icon: workIcon,
          date: '2008 - 2010',
          title: 'Web Designer',
          subtitle: 'Los Angeles, CA',
          desc: 'User Experience, Visual Design',
        },
        {
          icon: workIcon,
          date: '2006 - 2008',
          title: 'Web Designer',
          subtitle: 'San Francisco, CA',
          desc: 'User Experience, Visual Design',
        },
        {
          icon: schoolIcon,
          date: 'April 2013',
          title: 'Content Marketing for Web, Mobile and Social Media',
          subtitle: 'Online Course',
          desc: 'Strategy, Social Media',
        },
        {
          icon: schoolIcon,
          date: 'November 2012',
          title: 'Agile Development Scrum Master',
          subtitle: 'Certification',
          desc: 'Creative Direction, User Experience, Visual Design',
        },
        {
          icon: schoolIcon,
          date: '2002 - 2006',
          title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
          subtitle: 'Bachelor Degree',
          desc: 'Creative Direction, Visual Design',
        },
        { icon: starIcon },
      ];
  return (
    <>
        <div className='modal'>
            <div className="overlay backdrop-blur-sm bg-bg/70">
                <div className='modal-content'>
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={onClose}>
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                    <div className='max-h-96 overflow-y-auto'>
                        <VerticalTimeline>
                            {timeline.map((t, i) => {
                            const contentStyle =
                                i === 0
                                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                                : undefined;
                            const arrowStyle =
                                i === 0
                                ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                                : undefined;

                            return (
                                <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                {...t.icon}
                                >
                                {t.title ? (
                                    <React.Fragment>
                                    <h3 className="vertical-timeline-element-title text-primary">{t.title}</h3>
                                    {t.subtitle && (
                                        <h4 className="vertical-timeline-element-subtitle text-bg">
                                        {t.subtitle}
                                        </h4>
                                    )}
                                    {t.desc && <p className='text-bg'>{t.desc}</p>}
                                    </React.Fragment>
                                ) : undefined}
                                </VerticalTimelineElement>
                            );
                            })}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalTimeline