import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export const heroData = {
    title: "Welcome to my Website",
    subtitle: "Explore the world of creativity",
    image: "https://iili.io/JrO8Ae2.jpg",
    resumeLink: "https://aiapply.co/r/663a52cd99e00",
    socialLinks: {
        facebook: {
            url: "https://www.facebook.com/yourpage",
            display: true,
            icon: FaFacebook
        },
        instagram: {
            url: "https://www.instagram.com/yourpage",
            display: true,
            icon: FaInstagram
        },
        github: {
            url: "https://github.com/yourusername",
            display: true,
            icon: FaGithub
        },
        linkedin: {
            url: "https://www.linkedin.com/in/yourprofile",
            display: true,
            icon: FaLinkedin
        }
    }
};
