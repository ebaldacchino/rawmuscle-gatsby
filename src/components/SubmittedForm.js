import React from "react"
import { FaCheckCircle } from "react-icons/fa"

export default ({ closeSection }) => {
  return (
    <section className="form-submitted-bg">
      <article className="form form-submitted-container">
        <h2 className="glow">success</h2>
        <FaCheckCircle className="icon" />
        <p>Thank you for reaching out. We'll be in touch soon!</p>
        <button className="submit-btn btn" onClick={closeSection}>
          ok
        </button>
      </article>
    </section>
  )
}
