import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SleepPillar = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Pillars_Sleep.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
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

export default SleepPillar;