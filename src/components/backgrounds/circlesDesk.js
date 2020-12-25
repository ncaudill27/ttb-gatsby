import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

import '../../styles/custom-properties.css'

const BackgroundContainer = ({className, children, color}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "circles.png" }) {
          childImageSharp {
            fluid( maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  if (!data?.desktop?.childImageSharp?.fluid) {
    return <div>{children}</div>
  }

  return (
    <BackgroundImage
      Tag='section'
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`var(--${color})`}
      className={className}
    >
      {children}
    </BackgroundImage>
  )
}

export default BackgroundContainer