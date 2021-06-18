import { useState, useEffect } from "react"

export default function useWindowSize() {
  const isSSR = typeof window === "undefined"

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? (isSSR ? 1200 : window.innerWidth) : null
  )

  const changeWidth = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", changeWidth)

    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [])

  return [width]
}
