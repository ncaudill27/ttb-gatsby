import React, { useState, useEffect } from "react"

export default function useWindowSize() {

  const isSSR = typeof window !== "undefined"

  const [windowSize, setWindowSize] = useState(isSSR ? 1200 : window.innerWidth)
  const [isResizing, setIsResizing] = useState(false)
  
  const changeWindowSize = () => setWindowSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    if (windowSize !== window.innerWidth) {
      setIsResizing(true)
    } else {
      setIsResizing(false)
    }
    return () => {
      window.removeEventListener("resize", changeWindowSize)
    };
  }, [windowSize]);

  return [windowSize, isResizing]
}