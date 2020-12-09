import React, { useState, useEffect } from 'react'
import useScroll from '../hooks/useScroll'

import { slide as Menu } from 'react-burger-menu'
import MenuLink from './MenuLink'
import Image from './Image'

function Navbar({seconds}) {

  const [isOpen, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const toggleOpen = () => setOpen( prev => !prev );

  const [isUpScroll, scrollTop] = useScroll();
  
  useEffect( () => {
    const menu = document.querySelector('.bm-burger-button');
    const bars = document.querySelectorAll('.bm-burger-bars');

    const addGlow = () => {
      bars.forEach( bar => {
        if (!bar.className.includes('down') && count < 2) {
          bar.className += ' down';
          setCount(count + 1);
        }
      });
    }

    const removeGlow = () => {
      bars.forEach( bar => {
        bar.className = bar.className.replace(/ down/g, '');
      });
    }

    if ( (isUpScroll || scrollTop < 30) ) {
      menu.style.top = '27px';
      if (seconds > 5) addGlow();
    } else {
      menu.style.top = '-30px';
      removeGlow();
    }

  }, [count, seconds, isUpScroll, scrollTop]);

  return (
      <Menu
        right
        isOpen={isOpen}
        onOpen={toggleOpen}
      >
        <Image className='menu-close' asset='close' onClick={toggleOpen} />
        <MenuLink className='med-tmg' to='/' onClick={toggleOpen}>HOME</MenuLink>
        <MenuLink to='/about' onClick={toggleOpen}>ABOUT</MenuLink>
        <MenuLink to='/contact' onClick={toggleOpen}>CONTACT</MenuLink>
      </Menu>
  )
}

export default Navbar;