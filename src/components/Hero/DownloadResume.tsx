"use client"
import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import { heroData } from '@/utils/portfolioData/heroData';
const DownloadResume = () => {
    const handleDownload = () => {
        let resumeLink = heroData?.resumeLink;
        if (resumeLink) {
          const link = document.createElement('a');
          link.href = resumeLink;
          link.download = 'resume.pdf';
          link.target = '_blank'; // Open the file in a new tab if needed
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };
  return (
    <PrimaryButton text='Download Resume' customClass='' onClickFunction={handleDownload} />
  )
}

export default DownloadResume