import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/social-links"
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside onClick={toggle} className={isOpen ? "open" : ""}>
      <article>
        <Links />
        <SocialLinks />
      </article>
    </aside>
  )
}

export default Sidebar
