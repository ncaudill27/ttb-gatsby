import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"

import BackgroundImage from "gatsby-background-image"

import styles from "../section.module.css"
import "../../styles/custom-properties.css"

const BackgroundContainer = React.forwardRef(
  ({ className, children, color }, ref) => {
    const data = useStaticQuery(
      graphql`
        query {
          desktop: file(relativePath: { eq: "cottage.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2300) {
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
        Tag="section"
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`var(--${color})`}
        className={classNames(styles.section, className)}
      >
        <div ref={ref}>{children}</div>
      </BackgroundImage>
    )
  }
)

export default BackgroundContainer
