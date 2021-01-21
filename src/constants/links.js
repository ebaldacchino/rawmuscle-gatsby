import React from "react"
import { Link } from "gatsby"
const links = [
  {
    text: "home",
    link: "/",
  },
  {
    text: "the show",
    link: "/shows",
  },
  {
    text: "home visits",
    link: "/privates",
  },
  {
    text: "e-store",
    url: "https://www.rawtoyz.com.au",
  },
  {
    text: "contact us",
    link: "/contact",
  },
]

export default ({ styleClass }) => (
  <nav className={`page-links ${styleClass ? styleClass : ""}`}>
    {links.map(({ text, link, url }, id) => {
      return link ? (
        <Link activeClassName="active-link" key={id} to={link}>
          {text}
        </Link>
      ) : (
        <a key={id} href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
      )
    })}
  </nav>
)
