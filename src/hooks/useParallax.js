import { useEffect, useState } from "react"
import useScroll from "./useScroll"

export default function useParallax(ref, color) {
  const [, scrollTop] = useScroll()
  const [backgroundStyle, setBackgroundStyle] = useState(null)

  // const [imgTop, setImgTop] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const screenHeight = window.innerHeight

      // use bounds of ref
      // const top = ref.current.getBoundingClientRect().top
      // const bot = ref.current.getBoundingClientRect().bottom
      // const width = ref.current.getBoundingClientRect().width

      // track screen and find while ref in view
      // const topInView = top >= 0 && top <= screenHeight
      // const botInView = bot >= 0 && bot <= screenHeight
      // const elInView = topInView || botInView

      // set updated screen changes
      // setImgTop(`${15 - top / 9}px`)

      setBackgroundStyle({
        width: `100%`,
        height: "120%",
        top: `0`,
        backgroundColor: `var(--${color})`,
        zIndex: "-1",
      })
    }
  }, [ref, scrollTop, color])

  return backgroundStyle
}
