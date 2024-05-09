import React from 'react'
import { timelineData } from '@/utils/portfolioData/timeline'

const Timeline = () => {
  return (
    <section id="timeline" className='flex flex-col w-full  gap-8  pt-[4vh] lg:pt-[10vh]'>
      <h3 className='text-2xl md:text-4xl'>{timelineData?.sectionName}</h3>
      <div className='timelineWrapper flex flex-col gap-6'>
        <div className='education'>
          <h2 className='text-2xl font-bold mt-2 mb-4'>Education</h2>
          {timelineData?.timelines?.educations && timelineData?.timelines?.educations?.map((education, index) => (
            <div key={education?.educationTitle + index} className='flex w-full'>
              <div className='leftside w-2/5'>
                <h3 className='font-bold pr-1'>{education?.educationDate}</h3>
                <h4 className='text-gray-500 text-sm'>{education?.educationUniversity}</h4>
              </div>
              <div className='rightside  w-3/5 serviceCardBorder pl-3 relative'>
                <span className='h-[10px] w-[10px] rounded-full bg-white absolute left-[-7px] top-[7px] border border-[#ff6464]'></span>
                <h3 className='font-bold'>{education?.educationTitle}</h3>
                <p className='text-gray-500 text-sm'>{education?.educationDescription}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='experience'>
          <h4 className='text-2xl font-bold  mt-2 mb-4'>Experience</h4>
          {timelineData?.timelines?.experiences && timelineData?.timelines?.experiences?.map((experience, index) => (
            <div key={experience?.experienceTitle + index} className='flex w-full'>
              <div className='leftside w-2/5'>
                <h3 className='font-bold pr-1'>{experience?.experienceDate}</h3>
                <h4 className='text-gray-500 text-sm'>{experience?.experienceCompany}</h4>
              </div>
              <div className='rightside  w-3/5 serviceCardBorder pl-3 relative'>
                <span className='h-[10px] w-[10px] rounded-full bg-white absolute left-[-7px] top-[7px] border border-[#ff6464]'></span>
                <h3 className='font-bold'>{experience?.experienceTitle}</h3>
                <p className='text-gray-500 text-sm'>{experience?.experienceDescription}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Timeline