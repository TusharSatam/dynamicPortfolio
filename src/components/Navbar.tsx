"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { navbarData } from "../utils/portfolioData/navbar"
interface NavLinkProps {
    href: string;
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

interface NavigationItem {
    id: string;
    label: string;
}

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const [isMoboMenuOpen, setIsMoboMenuOpen] = useState<boolean>(false);

    const handleSetActiveLink = (link: string) => {
        setActiveLink(link);
    };

    return (
        <nav className='py-3 lg:py-4 px-[1rem] lg:px-[4rem] flex justify-between items-center relative w-full max-w-[1600px] mx-auto h-full lg:h-[10vh]'>
            <div>
                <Link href="/" className='text-2xl md:text-3xl font-bold primaryTextColor'>{navbarData?.LogoUserName ? navbarData?.LogoUserName : "N/A"}</Link>
            </div>
            <div className='hidden links lg:flex flex-wrap gap-6 font-semibold'>
                {navbarData?.links?.map(({ id, label }) => (
                    <NavLink key={id} href={`#${id}`} isActive={activeLink === `#${id}`} onClick={() => handleSetActiveLink(`#${id}`)}>
                        {label}
                    </NavLink>
                ))}
            </div>
            <div className='flex lg:hidden z-[100]'>
                {isMoboMenuOpen ? <IoMdClose onClick={() => setIsMoboMenuOpen(!isMoboMenuOpen)} className='text-2xl text-white' />
                    : <GiHamburgerMenu onClick={() => setIsMoboMenuOpen(!isMoboMenuOpen)} />}
            </div>
            {isMoboMenuOpen &&
                <div className='moboMenu  py-6 h-fit w-[100vw] absolute left-0 top-0 flex flex-col justify-center items-center bg-[#ff6464] gap-2'>
                    {navbarData?.links.map(({ id, label }) => (
                        <NavLink key={id} href={`#${id}`} isActive={activeLink === `#${id}`} onClick={() => handleSetActiveLink(`#${id}`)}>
                            {label}
                        </NavLink>
                    ))}
                </div>
            }
        </nav>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ href, isActive, onClick, children }) => {
    return (
        <Link href={href} onClick={onClick} className={`text-lg lg:text-lg lg:hover:text-[#ff6464] lg:hover:scale-105 transition-all ${isActive ? 'text-white lg:text-[#ff6464] underline' : ''}`}>
            {children}
        </Link>
    );
};

export default Navbar;
