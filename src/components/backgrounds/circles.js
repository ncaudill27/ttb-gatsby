import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import CirclesVertInverse from './circlesVertInverse'
import CirclesDesk from './circlesDesk'

const CirclesBackground = ({children, ...props}) => {

  const breakpoints = useBreakpoint()
  

  if (breakpoints.sm) {
    return <CirclesVertInverse {...props}>{children}</CirclesVertInverse>
  }
  else if (breakpoints.md || breakpoints.l) {
    return <CirclesDesk {...props}>{children}</CirclesDesk>
  }
  else return null
}

export default CirclesBackground