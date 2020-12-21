import React, { useState, useEffect } from 'react'

import Menu from './menu'
import MenuButton from './menuButton'

const Navigation = () => {

  // const [seconds, setSeconds] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => setOpen( prev => !prev )

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
      <MenuButton handleClick={toggleOpen} />
      <Menu open={isOpen} toggleOpen={toggleOpen} />
    </>
  )
}

export default Navigation