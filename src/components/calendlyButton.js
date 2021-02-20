import React from 'react'
import { openPopupWidget } from 'react-calendly'

import Button from './button'

import '../styles/calendly.css'

const CalendlyButton = ({url, prefill, pageSettings, utm}) => {
  const handleClick = () => openPopupWidget({url, prefill, pageSettings, utm})

  return <Button onClick={handleClick}>Schedule Meet &amp; Greet</Button>
}

export default CalendlyButton