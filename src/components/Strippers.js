import React from "react"
import { strippers } from "../constants/strippers"
import Slider from "../components/Slider"
import ImageSlide from "../components/ImageSlide"
const Strippers = () => {
  return (
    <>
      {strippers.map((stripper, id) => (
        <ImageSlide key={id} {...stripper} />
      ))}
    </>
  )
}
export default ({ onScreen }) => {
  return (
    <Slider
      onScreen={onScreen}
      styleClass="image"
      title="the guys"
      description="Got a Raw Muscle guy you fantasize about? Click on him below for just a little bit 'more'!"
      slides={<Strippers />}
      id="male-strippers"
      data={strippers}
    />
  )
}
