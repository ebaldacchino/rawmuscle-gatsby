import { useState, useEffect } from "react"
import axios from "axios"
import cheerio from "cheerio"

export default () => {
  const getSessionStorage = () => {
    if (typeof window === "undefined") return []
    let list = sessionStorage.getItem("events")
    if (list) {
      return (list = JSON.parse(list))
    } else {
      return []
    }
  }

  const [events, setEvents] = useState(getSessionStorage())
  const [loading, setLoading] = useState(true)
  const corsPatch = "https://cors-anywhere.herokuapp.com/"
  const url = "https://www.eventbrite.com.au/o/raw-muscle-30390508778"

  const fetchData = () => {
    axios
      .get(corsPatch + url)
      .then(response => {
        let $ = cheerio.load(response.data)
        const dates = $(
          ".eds-text-color--primary-brand.eds-l-pad-bot-1.eds-text-weight--heavy.eds-text-bs"
        )
          .text()
          .split(", ")
          .filter((e, i) => i % 2 !== 0)

        const towns = $(".card-text--truncated__one")
          .text()
          .split(" • ")
          .filter((e, i) => i % 2 === 0)

        const states = towns.map(town =>
          town.split(", ").length === 1 ? "NZ" : town.split(", ")[1]
        )

        const links = $(".eds-event-card-content__action-link")

        let eventsList = []
        for (let i = 0; i < dates.length; i++) {
          const newEvent = {
            date: dates[i],
            town: towns[i].split(", ")[0],
            state: states[i],
            url: links[i * 2]["attribs"]["href"],
          }
          eventsList.push(newEvent)
        }
        setEvents(eventsList)
        sessionStorage.setItem("events", JSON.stringify(eventsList))
      })
      .catch(e => {
        console.log(e)
      })
    setLoading(false)
  }

  useEffect(fetchData, [])
  return { events, loading }
}
