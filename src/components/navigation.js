import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Menu from './menu'
import Navlink from './navlink'

const Navigation = () => {

  const breakpoints = useBreakpoint()

  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allSitePage(filter: {path: {nin: ["/dev-404-page/", "/", "/404/", "/404.html"]}}) {
          nodes {
            path
          }
        }
      }
    `
  )

  // escape if no data retrieved
  if (!data?.allSitePage?.nodes) return null

  if (breakpoints.sm) {
    return <Menu routes={data.allSitePage.nodes} />
  } else if (breakpoints.md || breakpoints.l) {
    return (
      <>
        {
          data.allSitePage.nodes.map( ({path}) => {
            return <Navlink path={path} />
          })
        }
      </>
    )
  }
  else return null
}

export default Navigation