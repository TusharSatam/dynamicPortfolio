import React from 'react'
import { aboutData } from '@/utils/portfolioData/aboutData';
import UserCard from './userCard';
const About = () => {
  return (
    <section id="about" className='pt-[4vh] lg:pt-[10vh] w-full'>
      <h1 className='text-2xl md:text-4xl'>{aboutData?.sectionName}</h1>
      <p className='text-gray-500 mt-[1rem] text-sm md:text-[1rem]'>{aboutData?.description}</p>
      <div className='userInfo flex lg:hidden'>
        <UserCard/>
      </div>
    </section>
  )
}

export default About