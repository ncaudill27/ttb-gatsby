import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

function MenuLink({to, children, handleClick}) {

  let color = window.location.pathname === to ? 'active' : '';
  
  if (!to) return null;
  return (
      <Link to={to}>
        <div onClick={handleClick}>
          {children}
        </div>
      </Link>
  );
}

MenuLink.PropTypes = {
  to: PropTypes.string,
}

MenuLink.defaultProps = {
  to: '',
}

export default MenuLink;