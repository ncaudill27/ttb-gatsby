import React, { useState, useEffect, useRef } from "react"

import styles from "./map.module.css"

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef()
  const [map, setMap] = useState()

  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options))

    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        process.env.GATSBY_GOOGLE_MAPS_API_KEY
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])

  if (map && typeof onMount === `function`) onMount(map, onMountProps)

  // if (typeof window !== 'undefined') return null
  return <section {...{ ref, className }} />
}

function addMarker(map, link) {
  new window.google.maps.Marker({
    map,
    position: link.coords,
    title: link.title,
  })

  // marker.addListener('click', () => {
  //   window.location.href = link.url
  // })
}

Map.defaultProps = {
  options: {
    center: {
      lat: 32.03474634954871,
      lng: -81.01038494681949,
    },
    zoom: 13,
  },
  className: styles.map,
  onMount: addMarker,
  onMountProps: {
    coords: {
      lat: 32.03474634954871,
      lng: -81.01038494681949,
    },
    title: "The Tiny Beet",
  },
}
