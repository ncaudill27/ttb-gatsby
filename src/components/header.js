import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import HeaderLogo from "./images/headerLogo"
import Navigation from "./navigation"

import styles from "./header.module.css"

const Header = () => (
  <header className={styles.root}>
    <div className={styles.wrapper}>
      <Link to="/">
        <HeaderLogo className={styles.logo} />
      </Link>
      <Navigation />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
