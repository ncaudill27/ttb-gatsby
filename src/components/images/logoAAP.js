import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AAP = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "AAP_Logo.png" }) {
        childImageSharp {
          fixed(width: 234, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  
  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <div {...props}>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </div>
  )
}

export default AAP