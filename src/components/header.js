import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import HeaderLogo from './headerLogo'
import Navigation from './navigation'

const Header = () => (
  <header>
    <Link to="/">
      <HeaderLogo />
    </Link>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
