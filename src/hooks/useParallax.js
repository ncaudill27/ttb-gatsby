import { useEffect, useState } from 'react'
import useScroll from './useScroll'


function useParallax(ref) {

  const screenHeight = window.innerHeight
  const [, scrollTop] = useScroll()
  const [backgroundStyle, setBackgroundStyle] = useState(null)

  const [imgTop, setImgTop] = useState(null)

  useEffect( () => {

    // use bounds of ref
    const top = ref.current.getBoundingClientRect().top
    const bot = ref.current.getBoundingClientRect().bottom
    const width = ref.current.getBoundingClientRect().width

    // track screen and find while ref in view
    const topInView = top >= 0 && top <= screenHeight
    const botInView = bot >= 0 && bot <= screenHeight
    const elInView = topInView || botInView

    // set updated screen changes
    setImgTop(`${-50 - top / 9}px`)

    if (elInView) {
      setBackgroundStyle({
        maxWidth: `${width}px`,
        width: `${width}px`,
        top: `${imgTop}`,
      })
    } else {
      setBackgroundStyle({
        display: 'none'
      })
    }

  }, [ref, scrollTop, screenHeight, imgTop])

  return backgroundStyle
}

export default useParallax