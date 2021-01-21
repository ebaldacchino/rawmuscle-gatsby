import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/social-links"
import { Link } from "gatsby"
import Logo from "../assets/logo.svg"

export default ({ isOpen, toggle }) => (
  <nav className="navbar">
    <Link to="/" className="logo">
      <img
        src={Logo}
        height="72px"
        width="242px"
        alt="Raw Muscle Australia logo"
      />
    </Link>
    <article className="menu-items">
      <Links />
      <SocialLinks />
    </article>
    <article
      id="menu-icon"
      onClick={toggle}
      className={isOpen ? "change-menu-icon" : ""}
    >
      <div className="menu-icon-bar1"></div>
      <div className="menu-icon-bar2"></div>
      <div className="menu-icon-bar3"></div>
    </article>
  </nav>
)
