import React from "react"
import Testimonials, { testimonials } from "../constants/testimonials"
import Slider from "../components/Slider"
export default ({ onScreen }) => {
  return (
    <Slider
      onScreen={onScreen}
      styleClass="testimonial"
      title="testimonials"
      description="Don't believe us? Ask your fellow ladies!"
      slides={<Testimonials />}
      id="testimonials"
      data={testimonials}
    />
  )
}
