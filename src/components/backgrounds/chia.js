import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import ChiaMobile from '../images/chiaMobile'
import ChiaTablet from '../images/chiaTablet'
import ChiaDesktop from '../images/chiaDesktop'

const ChiaBackground = (props) => {

  const breakpoints = useBreakpoint()

  if (breakpoints.sm) {
    return <ChiaMobile {...props} />
  }
  else if (breakpoints.md) {
    return <ChiaTablet {...props} />
  }
  else if (breakpoints.l) {
    return <ChiaDesktop {...props}/>
  }
  else return null
}

export default ChiaBackground