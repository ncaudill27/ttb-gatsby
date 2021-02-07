import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderLogo = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "ttb-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 290) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  if (!data?.logo?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div {...props}>
      <Img fluid={data.logo.childImageSharp.fluid} />
    </div>
  )
}

export default HeaderLogo;