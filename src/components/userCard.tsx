import { userInfo } from '@/utils/portfolioData/userinfo';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

// Define types/interfaces for user information and social links
interface UserInfo {
    image?: string;
    email?: string;
    phone?: string;
    socialLinks?: SocialLink[];
}

interface SocialLink {
    url: string;
    display: boolean;
    icon: JSX.Element;
    iconColor: string
}

const UserCard: React.FC = () => {
    return (
        <div className='flex flex-col justify-start gap-3 md:items-center w-full pl-4 py-4 md:mt-[10vh]'>
            <Image src={userInfo?.image} alt="userImage" height={250} width={250} priority={true} className='hidden lg:flex rounded-full h-[250px] w-[250px] mx-auto mix-blend-multiply' />
            <h3 className='text-2xl'>Get in touch</h3>
            <ul>
                <li>Email: {userInfo?.email}</li>
                <li>Phone: {userInfo?.phone}</li>
            </ul>
            <div className='socialMedia flex gap-2'>
                {userInfo?.socialLinks && userInfo?.socialLinks.filter(link => link.display).map((socialMedia, index) => (
                    <Link href={socialMedia.url} key={index} className={`text-3xl`} style={{color:socialMedia?.iconColor}}>
                        {socialMedia.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserCard;
