import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
export default ({ name, sign, image }) => {
  const imageData = useStaticQuery(query).images.nodes.find(img =>
    img.fluid.src.match(image)
  ).fluid
  const slug = name.replace(" ", "-").toLowerCase()
  return (
    <Link to={`/male-strippers/${slug}`} className="image">
      <Image fluid={imageData} alt={`Male stripper ${name}`} />
      <div className="description-container">
        <span>{name}</span>
        <span className="contrast">{sign}</span>
      </div>
    </Link>
  )
}
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
