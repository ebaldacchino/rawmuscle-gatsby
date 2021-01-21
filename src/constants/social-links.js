import React from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa"
const links = [
  {
    icon: <FaFacebookF className="icon" />,
    link: "https://www.facebook.com/rawmuscle",
  },
  {
    icon: <FaInstagram className="icon" />,
    link: "https://www.facebook.com/rawmuscle",
  },
  {
    icon: <FaYoutube className="icon" />,
    link: "https://www.facebook.com/rawmuscle",
  },
  {
    icon: <FaMailBulk className="icon" />,
    link: "https://www.facebook.com/rawmuscle",
  },
  {
    icon: <FaPhone className="icon" />,
    link: "https://www.facebook.com/rawmuscle",
  },
]
export default () => (
  <ul className="social-links">
    {links.map(({ link, icon }, id) => (
      <li key={id}>
        <a href={link}>{icon}</a>
      </li>
    ))}
  </ul>
)
