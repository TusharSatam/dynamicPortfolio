import React from 'react'
import { skillsData } from '@/utils/portfolioData/skillsData';
import figmaIcon from "../assets/icons/figmaIcon.svg"
import Image from 'next/image';
const Skills = () => {
  return (
    <section id="skills" className='flex flex-col w-full  gap-8  pt-[4vh] lg:pt-[10vh]'>
      <h1 className='text-2xl md:text-4xl'>{skillsData?.sectionName}</h1>
      <div className='flex  justify-center gap-10 items-center flex-wrap'>


        {skillsData?.skills && skillsData?.skills?.map((e) => (
          <div className='flex flex-col justify-center items-center gap-2'>
            <div style={{ color: e?.iconColor }} className='text-2xl'>
              {e?.skillname==="Figma"?<Image src={figmaIcon} alt="figmaIcon" height={25} width={25}/>:e?.icon}
            </div>
            {e?.skillname}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills