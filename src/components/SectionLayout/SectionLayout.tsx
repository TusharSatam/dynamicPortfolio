import React from 'react'
import UserCard from '../userCard'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects/Projects'
import Services from '../Services'
import Timeline from '../Timeline'

const SectionLayout = () => {
    return (
        <div className='w-full flex relative'>
            <div className='lg:w-2/5 sticky top-0  h-fit hidden lg:flex'>
                <UserCard />
            </div>
            <div className='w-full lg:w-3/5 flex flex-col mb-[3rem]'>
                <About />
                <Skills />
                <Services />
                <Projects />
                <Timeline/>
            </div>
        </div>
    )
}

export default SectionLayout