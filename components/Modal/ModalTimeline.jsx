import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import {
    faBriefcase,
    faSchool,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import '../../styles/styles.css'
import '../../styles/Modal.css'

// ICON
const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(56, 103, 214)', color: '#fff' },
};
const schoolIcon = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: { background: 'rgb(38, 222, 129)', color: '#fff' },
};

const ModalTimeline = ({onClose}) => {
    const timeline = [
        {
          icon: schoolIcon,
          date: '2020 - present',
          title: 'Pelita Bangsa University',
          subtitle: '• Informatics Engineering',
          desc: '',
        },
        {
          icon: schoolIcon,
          date: `Jun 09 - Aug 31`,
          title: 'Dicoding',
          subtitle: '• DBS Foundation Coding Camp',
          desc: 'Learn to implement CI/CD, Linux System Administrator',
        },
        {
          icon: workIcon,
          date: 'May 05 - Jun 05',
          title: 'SMAN 2 Cibitung',
          subtitle: '• Internship',
          desc: 'Build presence system view with camera, React Js',
        },
        {
          icon: schoolIcon,
          date: 'Feb 16 - Jun 30',
          title: 'MSIB PT. Ruang Raya Indonesia',
          subtitle: '• Back-end Engineering Bootcamp',
          desc: 'REST API concept implementation, Go (Golang)',
        },
        {
          icon: schoolIcon,
          date: '2017 - 2020',
          title: 'SMAN 1 Cibarusah',
          subtitle: '• High School',
          desc: 'IPA',
        },
        { icon: starIcon },
      ];
  return (
      <>
        <div className='modal'>
            <div className="overlay backdrop-blur-sm bg-bg/70">
                <div className='modal-content bg-popup'>
                  {/* CLose Button */}
                  <button type="button" className="bg-close rounded-md p-2 m-2 inline-flex items-center justify-center text-white hover:text-gray-200 hover:bg-closeHover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-closeRing" onClick={onClose}>
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className='max-h-96 overflow-y-auto overflow-x-hidden bg-popup'>
                    <VerticalTimeline>
                      {timeline.map((t, i) => {
                        const contentStyle =
                            i === 0
                            ? { background: 'rgb(87, 96, 111)', color: '#000000' }
                            : undefined;
                        const arrowStyle =
                            i === 0
                            ? { borderRight: '7px solid rgb(87, 96, 111)' }
                            : undefined;
                          const dateStyle = i === 0 ? { color: 'red' } : { color: 'blue' };

                        return (
                            <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work text-bg"
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
                        } 
                      )}
                    </VerticalTimeline>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalTimeline