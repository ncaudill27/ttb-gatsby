import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from './menuButton.module.css';

const HeaderLogo = ({handleClick}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <div onClick={handleClick}>
    <Img className={styles.button} fluid={data.placeholderImage.childImageSharp.fluid} />
  </div>
}

export default HeaderLogo;