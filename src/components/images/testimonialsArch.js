import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Arch = (props) => {
  const data = useStaticQuery(graphql`
    query {
      mainLogo: file(relativePath: { eq: "testimonials-arch.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  if (!data?.mainLogo?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div {...props}>
      <Img fluid={data.mainLogo.childImageSharp.fluid} />
    </div>
  )
}

export default Arch