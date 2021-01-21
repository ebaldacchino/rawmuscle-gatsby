import React from "react"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Strippers from "../components/Strippers"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import AvailabilityForm from "../components/AvailabilityForm"
import useApp from "../functions/useApp"

const query = graphql`
  {
    images: allImageSharp {
      nodes {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ({ pathContext }) => {
  const { isHalfShown } = useApp()
  const { name, sign, image, image2, image3, image4, description } = pathContext
  const { images } = useStaticQuery(query)
  const imageData = x => images.nodes.find(img => img.fluid.src.match(x)).fluid
  const firstImage = imageData(image)
  const secondImage = imageData(image2)
  return (
    <Layout title={`Male Stripper | ${name}`} footerOnScreen={isHalfShown[2]}>
      <h1 className="glow">{name}</h1>
      <section className="stripper-profile no-margin-top">
        <h3 className="glow">{sign}</h3>
        <article className="about-stripper">
          <Image
            className="main-img"
            fluid={firstImage}
            alt={`Male stripper ${name}`}
          />
          <ReactMarkdown source={description} />
        </article>
        {image2 && image3 && image4 && (
          <article className="smaller-images">
            <Image
              className="image1"
              alt={`Male stripper ${name}`}
              fluid={secondImage}
            />
            <Image
              className="image2"
              alt={`Male stripper ${name}`}
              fluid={secondImage}
            />
            <Image
              className="image3"
              alt={`Male stripper ${name}`}
              fluid={secondImage}
            />
          </article>
        )}
      </section>
      <AvailabilityForm name={name} onScreen={isHalfShown[0]} />
      <Strippers onScreen={isHalfShown[1]} />
    </Layout>
  )
}
