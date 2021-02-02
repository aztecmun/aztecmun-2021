// React imports
import React, { useState, useEffect } from 'react'

// Styles
import { Scrollbar } from './scrollbarElements'

export default function index() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sp1 = offsetY * 0.0005

  return (
    <Scrollbar
      style={{
        scaleY: sp1,
        originY: 0,
      }}
    />
  )
}
