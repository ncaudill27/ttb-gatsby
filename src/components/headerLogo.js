import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import logoStyles from './headerLogo.module.css';

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ttb-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 290) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <div className={logoStyles.logo}>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </div>
}

export default HeaderLogo;