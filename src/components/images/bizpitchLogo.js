import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bizpitch = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bizpitch_logo.png" }) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
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

export default Bizpitch
