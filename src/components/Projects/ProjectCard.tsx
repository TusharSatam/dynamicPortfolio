import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    project: {
        projectThumbnail: string;
        projectName: string;
        projectTechs: string;
        projectDescription: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className='projectCard flex flex-col flex-1 border rounded-2xl overflow-hidden '>
            <Image src={project?.projectThumbnail} alt={project?.projectName} height={300} width={300} priority className='w-full hover:scale-105 transition-all'/>
            <div className='p-2 py-4'>
                <h3 className='text-xl font-bold'>{project?.projectName}</h3>
                <h4 className='text-lg'>{project?.projectTechs}</h4>
                <div className=''>
                <p className='text-gray-500 text-sm'>
            {project?.projectDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
