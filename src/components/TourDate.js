import React from "react"

export default ({ date, state, town, url }) => {
  return (
    <div className="tour-listing">
      <p>{date}</p>
      <p>
        {town}, {state}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="btn">get tickets</button>
      </a>
    </div>
  )
}
