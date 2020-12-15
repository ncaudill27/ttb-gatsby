import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import HeaderLogo from './headerLogo'
import Menu from './menu'

const Navigation = () => {

  // const [seconds, setSeconds] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen( prev => !prev );

  // useEffect( () => {
  //   const timer = setInterval( () => {
  //     setSeconds( seconds => seconds + 1 );
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, [seconds]);

  // const [count, setCount] = useState(0);

  // const [isUpScroll, scrollTop] = useScroll();

  // useEffect( () => {
  //   const removeGlow = () => {
  //       // menu.className.replace(/ down/g, '');
  //   }

  //   if ( (isUpScroll || scrollTop < 30) ) {
  //     menu.style.top = '27px';
  //     if (seconds > 5) addGlow();
  //   } else {
  //     menu.style.top = '-30px';
  //     removeGlow();
  //   }

  // }, [count, seconds, isUpScroll, scrollTop]);

  return (
    <>
      <button onClick={toggleOpen}>Open Menu</button>

      <Menu open={isOpen} toggleOpen={toggleOpen} />
    </>
  )
}

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
