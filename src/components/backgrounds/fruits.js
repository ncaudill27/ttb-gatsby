import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Mobile from './fruitsMobile'
import Tablet from './fruitsTablet'
import Desktop from './fruitsDesktop'

const FruitsBackground = React.forwardRef(({children, ...props}, ref) => {

  const breakpoints = useBreakpoint()
  

  if (breakpoints.sm) {
    return <Mobile ref={ref} {...props}>{children}</Mobile>
  }
  else if (breakpoints.md) {
    return <Tablet ref={ref} {...props}>{children}</Tablet>
  }
  else if (breakpoints.l) {
    return <Desktop ref={ref} {...props}>{children}</Desktop>
  }
  else return null
})

export default FruitsBackground