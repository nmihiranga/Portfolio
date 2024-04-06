'use client';
import { projectsData } from '@/lib/data'
import React, { useEffect } from 'react'
import Project from './project'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Projects() {
  const {ref, inView} = useInView({
    threshold: 0.5
  });
  const {setActiveSection} = useActiveSectionContext();

  useEffect(() => {
    if(inView) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
      <h2 className='text-3xl font-medium mb-10 text-center'>My Projects</h2>

      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}



