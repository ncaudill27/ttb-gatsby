import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import CirclesVertInverse from './circlesVertInverse'
import CirclesDesk from './circlesDesk'

const CirclesBackground = React.forwardRef(({children, ...props}, ref) => {

  const breakpoints = useBreakpoint()
  

  if (breakpoints.sm) {
    return <CirclesVertInverse ref={ref} {...props}>{children}</CirclesVertInverse>
  }
  else if (breakpoints.md || breakpoints.l) {
    return <CirclesDesk ref={ref} {...props}>{children}</CirclesDesk>
  }
  else return null
})

export default CirclesBackground