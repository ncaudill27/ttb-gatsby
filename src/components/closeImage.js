import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from './closeImage.module.css'

const CloseImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "close.png" }) {
        childImageSharp {
          fluid(maxWidth: 35) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img styles={styles.close} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default CloseImage
