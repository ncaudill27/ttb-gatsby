import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MomImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dr-rivera.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 515) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div {...props}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default MomImage;