import React from "react"
import IFrame from "../components/IFrame"
import Layout from "../components/Layout"
import TourDates from "../components/TourDates"
import Strippers from "../components/strippers"
import Testimonials from "../components/Testimonials"
import useApp from "../functions/useApp"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    imageSharp(
      fluid: {
        src: {
          eq: "/static/87238737ebf20238d569469322abd6c8/14b42/male-strippers-banner.jpg"
        }
      }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export default () => {
  const { isHalfShown } = useApp()
  const image = useStaticQuery(query)
  return (
    <Layout title="Home" footerOnScreen={isHalfShown[4]}>
      <Image
        fluid={image.imageSharp.fluid}
        className="hero-img no-margin-top"
        objectFit="contain"
        objectPosition="center center"
        alt="Raw Muscle Banner"
      />
      <IFrame onScreen={isHalfShown[0]} />
      <TourDates onScreen={isHalfShown[1]} />
      <Strippers onScreen={isHalfShown[2]} />
      <Testimonials onScreen={isHalfShown[3]} />
    </Layout>
  )
}
