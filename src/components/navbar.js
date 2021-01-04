import React from 'react'

import Navlink from './navlink'

const Navbar = ({routes}) => (
  <>
    {
      routes.map( ({path}) => {
        return <Navlink path={path} />
      })
    }
  </>
)

export default Navbar