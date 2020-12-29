import React, { useState, useEffect, useRef } from 'react'

import styles from './map.module.css'

export default function Map({ options, onMount, className, onMountProps }) {

  const ref = useRef()
  const [map, setMap] = useState()

  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))

    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        process.env.GOOGLE_MAPS_API_KEY
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])
  
  if (map && typeof onMount === `function`) onMount(map, onMountProps)
  
  // if (typeof window !== 'undefined') return null
  return (
    <div
      {...{ ref, className }}
    />
  )
}

function addMarker(map, link) {
  
  const marker = new window.google.maps.Marker({
    map,
    position: link.coords,
    // label: `1`,
    title: link.title
  })

  // marker.addListener('click', () => {
  //   window.location.href = link.url
  // })
  
}

Map.defaultProps = {
  options: {
    center: {
      lat: 32.019275,
      lng: -80.972615
    },
    zoom: 13,
  },
  className: styles.map,
  onMount: addMarker,
  onMountProps: {
    coords: {
      lat: 32.019275,
      lng: -80.972615
    },
    title: 'The Tiny Beet'
  }
}