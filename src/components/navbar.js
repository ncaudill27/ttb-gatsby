import React from 'react'

import Navlink from './navlink'

const Navbar = ({routes}) => (
  <>
    {
      routes.map( ({path}) => {
        return <Navlink path={path} key={path} />
      })
    }
  </>
)

export default Navbar