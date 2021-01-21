import React from "react"
import { shows } from "../constants/services"
import Layout from "../components/Layout"
import Service from "../components/Service"
import TourDates from "../components/TourDates"
import Strippers from "../components/strippers"
import useApp from "../functions/useApp"
export default () => {
  const { isHalfShown } = useApp()
  return (
    <Layout title="Male Strip Shows" footerOnScreen={isHalfShown[6]}>
      <h1 className="glow">about the show</h1>
      <section className="info">
        <p>
          The perfect girls night out. Winners of the X-Awards 2019 Male Strip
          Show Of The Year. In other words, we pull all the stops to make your
          night amazing. It doesn’t matter whether you’re celebrating a hens
          night, birthday party, divorce party or simply a ladies night. Our
          team of male strippers are coming for you.
        </p>
        <p>
          The men of Raw Muscle tour Australia and New Zealand wide.
          Consequently, our hot hunks are travelling everywhere from Perth to
          Christchurch. You can run, but you can’t hide!
        </p>
      </section>
      <section className="row">
        {shows.map((show, id) => (
          <Service
            {...show}
            key={id}
            onScreen={isHalfShown[id]}
            link="#tour-dates"
          />
        ))}
      </section>
      <TourDates onScreen={isHalfShown[4]} />
      <Strippers onScreen={isHalfShown[5]} />
    </Layout>
  )
}
