import React from "react"

export default ({ onScreen }) => {
  return (
    <section
      className={`slide-in ${onScreen ? "on-screen" : ""}`}
    >
      <h2 className="glow">sneak peak</h2>
      <iframe
        // width="560"
        // height="315"
        loading="lazy"
        src="https://www.youtube.com/embed/q-im8TsEQPw"
        frameBorder="0"
        title="Raw Muscle Australia"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  )
}
