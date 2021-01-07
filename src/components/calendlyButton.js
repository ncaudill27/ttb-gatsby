import React from 'react'
import { openPopupWidget } from 'react-calendly'

import Button from './button'

import '../styles/calendly.css'

const CalendlyButton = ({ url, prefill, pageSettings, utm}) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm})

  return <Button onClick={onClick} color='blueberry'>Schedule an appointment with me!</Button>
}

export default CalendlyButton