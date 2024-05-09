import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const userInfo = {
  firstname: "John",
  fullname: "John Ola",
  email: "tsatam91@gmail.com",
  phone: "123567890",
  image: "https://iili.io/JrO8Ae2.jpg",
  socialLinks: [
    {
      media: "linkedin",
      url: "https://www.linkedin.com/in/yourprofile",
      display: true,
      icon: <FaLinkedin />,
      iconColor: "#0077b5", //must be in hexcode
    },
    {
      media: "github",
      url: "https://github.com/yourusername",
      display: true,
      icon: <FaGithub />,
      iconColor: "#000000", //must be in hexcode
    },
    {
      media: "facebook",
      url: "https://www.facebook.com/yourpage",
      display: true,
      icon: <FaFacebook />,
      iconColor: "#4c68d7", //must be in hexcode
    },
    {
      media: "instagram",
      url: "https://www.instagram.com/yourpage",
      display: false,
      icon: <FaInstagram />,
      iconColor: "#ff6464", //must be in hexcode
    },
  ],
};
