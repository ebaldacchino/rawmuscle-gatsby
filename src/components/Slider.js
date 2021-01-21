import React, { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import useApp from "../functions/useApp"
export default ({
  styleClass,
  title,
  description,
  slides,
  id,
  data,
  onScreen,
}) => {
  if (typeof window === "undefined") return null
  const { windowWidth } = useApp()
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scroll, setScroll] = useState(false)
  const [index, setIndex] = useState(0)
  const slider = document.querySelector(`.slider.${styleClass}`)
  const slide = document.querySelector(`.slider > .${styleClass}`)
  const slideWidth = slide && slide.getBoundingClientRect().width
  const slidesOffScreen =
    slide && data.length - Math.round(window.innerWidth / slideWidth)

  const prevSlide = () => setIndex(index === 0 ? slidesOffScreen : index - 1)
  const nextSlide = () => setIndex(index === slidesOffScreen ? 0 : index + 1)

  const pointerDown = e => {
    setIsDown(true)
    setStartX(e.pageX)
    setScroll(0)
  }
  const pointerUp = e => {
    if (!isDown) return
    setIsDown(false)
    scroll > 10 ? prevSlide() : scroll < -10 && nextSlide()
  }
  const pointerMove = e => {
    if (!isDown) return
    setScroll(e.pageX - startX)
  }
  const handleScrollLeft = () => {
    if (!slide) return
    slider.scroll({
      left: index * slideWidth,
      behavior: "smooth",
    })
  }
  useEffect(() => {
    handleScrollLeft()
  }, [windowWidth, index])

  return (
    <section
      className={`slider-section slide-in ${onScreen ? "on-screen" : ""}`}
      id={id ? id : ""}
    >
      <h2 className="glow">{title}</h2>
      {description && <p>{description}</p>}
      <article className={`slider-container ${styleClass}`}>
        <div className="arrow-container left" onPointerUp={prevSlide}>
          <FaChevronLeft className="icon" />
        </div>

        <div
          className={`slider ${styleClass} ${isDown ? "active" : ""}`}
          onPointerDown={pointerDown}
          onPointerUp={pointerUp}
          onPointerMove={pointerMove}
        >
          {slides}
        </div>
        <div className="arrow-container right" onPointerUp={nextSlide}>
          <FaChevronRight className="icon" />
        </div>
      </article>
    </section>
  )
}
