import React from "react"

const Service = ({ title, price, description, buttonText, link, onScreen }) => {
  const handleClick = e => {
    const locationTop = document.querySelector(link).offsetTop
    const navHeight = document.querySelector("nav").getBoundingClientRect()
      .height

    window.scrollTo({
      top: locationTop - navHeight,
      behavior: "smooth",
    })
  }

  return (
    <article className={`slide-in ${onScreen ? "on-screen" : ""}`}>
      <h3>{title}</h3>
      <h1>{price}</h1>
      <p>{description}</p>
      <button onClick={e => handleClick(e)} className="btn">
        {buttonText || "pick a show"}
      </button>
    </article>
  )
}

export default Service
