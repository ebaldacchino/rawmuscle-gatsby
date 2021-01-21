import React from "react"
import { Link } from "gatsby"
import useApp from "../functions/useApp"
import TourDate from "./TourDate"
export default ({ onScreen }) => {
  const { events, loading } = useApp()
  const [selectedState, setSelectedState] = React.useState("")
  const states = [...new Set(events.map(event => event.state))]
  const filteredEvents = events.filter(event => event.state === selectedState)
  React.useEffect(() => setSelectedState(states[0]), [events])
  return (
    <section
      id="tour-dates"
      className={`slide-in ${onScreen ? "on-screen" : ""}`}
    >
      <h2 className="glow">tour dates</h2>
      {loading ? (
        <div className="loading"></div>
      ) : events ? (
        <>
          <div className="tab">
            {states.map((state, id) => (
              <button
                key={id}
                className={state === selectedState ? "active" : ""}
                onClick={() => setSelectedState(state)}
              >
                {state}
              </button>
            ))}
          </div>
          {filteredEvents.map((event, id) => (
            <TourDate key={id} {...event} />
          ))}
        </>
      ) : (
        <>
          <p>
            Hey ladies! Unfortunately, no events are booked at the moment.
            However, we are still able to offer male strippers, topless waiters
            and more private party services anywhere Australia-wide.
          </p>
          <p>
            Interested in getting someone hot and sexy for your special night?
            Get in touch today!
          </p>
          <Link className="center-btn" to="/contact">
            <button className="btn">make an enquiry</button>
          </Link>
        </>
      )}
    </section>
  )
}
