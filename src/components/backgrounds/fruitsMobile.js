import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import classNames from 'classnames'

import BackgroundImage from 'gatsby-background-image'

import styles from '../section.module.css'
import '../../styles/custom-properties.css'

const BackgroundContainer = React.forwardRef(({className, children, color}, ref) => {
  const data = useStaticQuery(
    graphql`
      query {
        mobile: file(relativePath: { eq: "fruits_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
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
      className={classNames(styles.section, className)}
    >
      <div ref={ref}>
        {children}
      </div>
    </BackgroundImage>
  )
})

export default BackgroundContainer