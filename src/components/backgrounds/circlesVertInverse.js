import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

import '../../styles/custom-properties.css'

const BackgroundContainer = ({className, children, color}) => {
  const data = useStaticQuery(
    graphql`
      query {
        mobile: file(relativePath: { eq: "circles-vert-alt.png" }) {
          childImageSharp {
            fluid( maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  if (!data?.mobile?.childImageSharp?.fluid) {
    return <div>{children}</div>
  }
  
  return (
    <BackgroundImage
      Tag='section'
      fluid={data.mobile.childImageSharp.fluid}
      backgroundColor={`var(--${color})`}
      className={className}
    >
      {children}
    </BackgroundImage>
  )
}

export default BackgroundContainer