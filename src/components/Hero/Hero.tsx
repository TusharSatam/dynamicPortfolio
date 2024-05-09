import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import Image from 'next/image';
import { heroData } from '@/utils/portfolioData/heroData';
import DownloadResume from './DownloadResume';
interface HeroData {
  role: string;
  fullname: string;
  subTitle: string;
  image?: string | undefined;
  resumeLink: string;
}

const Hero: React.FC = () => {

  return (
    <section id="hero" className='flex gap-3 py-[2rem] lg:py-0 lg:gap-0 lg:h-[90vh] lg:min-h-[80vh] flex-col-reverse lg:flex-row w-full'>
      <div className='w-full lg:w-2/4 flex-1 flex justify-center items-center flex-col'>
        {heroData && (
          <div className=' flex flex-col justify-center items-center lg:justify-start lg:items-start max-w-[400px] text-center lg:text-left gap-2 lg:gap-3'>
            <h3 className='text-gray-500 text-lg lg:text-2xl'>{heroData?.role}</h3>
            <h1 className='text-4xl lg:text-6xl primaryTextColor'>{heroData.fullname}</h1>
            <p className='text-sm'>{heroData.subTitle}</p>
            <DownloadResume />
          </div>
        )}
      </div>
      <div className='w-full lg:w-2/4 flex-1 flex justify-center items-center'>
        {heroData?.image && (
          <Image src={heroData.image} alt="userImage" height={400} width={400} priority={false} className='rounded-full h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]' />
        )}
      </div>
    </section>
  );
};

export default Hero;
