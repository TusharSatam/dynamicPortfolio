import { projectsData } from '@/utils/portfolioData/projectsData'
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className='flex flex-col w-full  gap-8  pt-[4vh] lg:pt-[10vh]'>
      <h1 className='text-2xl md:text-4xl'>{projectsData?.sectionName}</h1>
      <div className='projectCards  grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          projectsData?.projects?.map((e, index) => (
            <ProjectCard project={e} key={`${e?.projectName + index}`} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects