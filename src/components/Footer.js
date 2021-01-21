import React, { useState, useEffect } from "react"
import SocialLinks from "../constants/social-links"
const defaultServerState = {
  submitting: false,
  submitted: false,
}
const Footer = ({onScreen}) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("Email required")
  const [serverState, setServerState] = useState(defaultServerState)

  const handleSubmit = e => {
    e.preventDefault()
    !serverState.submitting &&
      setServerState({ ...serverState, submitting: true })
    if (!error) {
      console.log("handle backend time")
      setServerState({ submitted: true, submitting: false })
      setEmail("")
    }
  }
  const checkError = () => {
    if (!email.trim()) {
      setError("Email required")
    } else if (
      !/^((".{0,62}")|([^. ]{1,64}))(\.((".+")|([^. ]+))){0,32}@[^. ]+(\.[^. ]{1,253}){0,127}$/i.test(
        email
      )
    ) {
      setError("Email invalid")
    } else {
      setError(false)
    }
  }
  useEffect(checkError, [email])

  return (
    <footer className={`slide-in ${onScreen ? 'on-screen' : ''}`}>
      {!serverState.submitted ? (
        <>
          <h2 className="glow">subscribe now</h2>
          <p>To hear about the next show near you!</p>
          <form className="subscribe" onSubmit={handleSubmit} noValidate>
            {serverState.submitting && error && <small>{error}</small>}
            <div className="form-control">
              <input
                className={
                  !serverState.submitting ? "" : error ? "error" : "success"
                }
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />
              <button className="btn">subscribe</button>
            </div>
          </form>
        </>
      ) : (
        <h3 className="glow">thank you for subscribing</h3>
      )}
      <SocialLinks />
      <p>
        Copyright © {new Date().getFullYear()} Raw Muscle | Website by{" "}
        <a
          href="https://ebaldacchino.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          EB Web Solutions
        </a>
      </p>
    </footer>
  )
}

export default Footer
