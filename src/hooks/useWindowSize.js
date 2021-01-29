import React, { useState, useEffect } from "react"

export default function useWindowSize() {

  const isSSR = typeof window !== "undefined"

  const [windowSize, setWindowSize] = useState(isSSR ? 1200 : window.innerWidth)
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
  }, [windowSize]);

  return [windowSize, isResizing]
}