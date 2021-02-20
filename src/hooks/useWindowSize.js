import { useState, useEffect } from "react"

export default function useWindowSize() {

  const isSSR = typeof window !== "undefined"

  const [windowSize, setWindowSize] = useState(typeof window !== 'undefined' ? isSSR ? 1200 : window.innerWidth : null)
  const [isResizing, setIsResizing] = useState(false)
  
  const changeWindowSize = () => {
    if (windowSize !== window.innerWidth) {
      setIsResizing(true)
    }

    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    const timer = setTimeout(() => setIsResizing(false), 10)

    return () => {
      window.removeEventListener("resize", changeWindowSize)
      clearTimeout(timer)
    }
  }, [windowSize, changeWindowSize]);

  return [windowSize, isResizing, changeWindowSize]
}