import React from 'react'
import { servicesData } from '@/utils/portfolioData/servicesData'
import serviceThumbnail from "../assets/Services.webp"
import Image from 'next/image'
const Services = () => {
  return (
    <section id="services" className='flex flex-col w-full  gap-8  pt-[4vh] lg:pt-[10vh]'>
      <h1 className='text-2xl md:text-4xl'>{servicesData?.sectionName}</h1>
      <div className='w-full flex justify-center items-center'>
        <Image priority src={serviceThumbnail} alt="serviceThumbnail" height={300} width={400} className="w-[300px] h-[200px] lg:h-[300px] lg:w-[400px]" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {servicesData?.services && servicesData?.services?.map((service, index) => (
          <div className='serviceCard serviceCardBorder pl-2' key={`${service?.serviceTitle + index}`} >
            <h4 className='font-bold'>{service?.serviceTitle}</h4>
            <p className='text-gray-500 text-sm'>{service?.serviceDescription}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services