import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTypescript, SiShadcnui, SiNestjs } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrNode } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";

export const skillsData = {
  sectionName: "Skills",
  skills: [
    {
      skillname: "Adobe",
      icon: <SiAdobe />,
      iconColor: "#FF0000", // Red color for Adobe
      display: true,
    },
    {
      skillname: "Figma",
      icon: <FaFigma />,
      iconColor: "#4A90E2", // Blue color for Figma
      display: true,
    },
    {
      skillname: "Html",
      icon: <FaHtml5 />,
      iconColor: "#E44D26", // Orange color for HTML
      display: true,
    },
    {
      skillname: "Css",
      icon: <FaCss3Alt />,
      iconColor: "#1572B6", // Blue color for CSS
      display: true,
    },
    {
      skillname: "Js",
      icon: <IoLogoJavascript />,
      iconColor: "#F7DF1E", // Yellow color for JavaScript
      display: true,
    },
    {
      skillname: "Typescript",
      icon: <SiTypescript />,
      iconColor: "#007ACC", // Blue color for TypeScript
      display: true,
    },
    {
      skillname: "React",
      icon: <FaReact />,
      iconColor: "#61DAFB", // Light Blue color for React
      display: true,
    },
    {
      skillname: "Next.js",
      icon: <RiNextjsFill />,
      iconColor: "#000000", // Black color for Next.js
      display: true,
    },
    {
      skillname: "TailwindCss",
      icon: <RiTailwindCssFill />,
      iconColor: "#38B2AC", // Teal color for Tailwind CSS
      display: true,
    },
    {
      skillname: "Shadcn ui",
      icon: <SiShadcnui />,
      iconColor: "#5D62B5", // Purple color for Shadcn UI
      display: true,
    },
    {
      skillname: "Framer motion",
      icon: <FiFramer />,
      iconColor: "#1CAADE", // Blue color for Framer Motion
      display: true,
    },
    {
      skillname: "Express",
      icon: <SiExpress />,
      iconColor: "#000000", // Black color for Express
      display: true,
    },
    {
      skillname: "Node",
      icon: <GrNode />,
      iconColor: "#68A063", // Green color for Node.js
      display: true,
    },
    {
      skillname: "MongoDB",
      icon: <BiLogoMongodb />,
      iconColor: "#4DB33D", // Green color for MongoDB
      display: true,
    },
    {
      skillname: "Nestjs",
      icon: <SiNestjs />,
      iconColor: "#E0234E", // Red color for Nest.js
      display: true,
    },
    {
      skillname: "Aws",
      icon: <FaAws />,
      iconColor: "#F90", // Orange color for AWS
      display: true,
    },
  ],
};
