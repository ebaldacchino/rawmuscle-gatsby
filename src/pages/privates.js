import React from "react"
import Layout from "../components/Layout"
import { privates } from "../constants/services"
import Service from "../components/Service"
import Strippers from "../components/strippers"
import useApp from "../functions/useApp"
export default () => {
  const { isHalfShown } = useApp()
  return (
    <Layout title="Male Strippers To Your Home" footerOnScreen={isHalfShown[5]}>
      <h1 className="glow">home visits</h1>
      <section className="info">
        <p>
          First of all, do you like an adventurous bad boy, or a sweet and
          sensitive charmer? Seeing as you’re only planning on one hens night,
          you can always get both. But why?
        </p>
        <p>
          Firstly, a bachelorette needs someone to serve her drinks and pamper
          her. Secondly, she needs a rock hard canvas for her body shots.
          Thirdly, she needs someone to fulfill her hens night fantasies. In
          conclusion, our sexy male strippers and topless waiters will be sure
          to make your ladies night nothing short of amazing.
        </p>
      </section>
      <section className="row">
        {privates.map((priv, id) => (
          <Service
            {...priv}
            key={id}
            onScreen={isHalfShown[id]}
            link="#male-strippers"
          />
        ))}
      </section>
      <Strippers onScreen={isHalfShown[4]} />
    </Layout>
  )
}
