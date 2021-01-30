// React imports
import React, { useState, useEffect } from 'react'

// Libraries imports
import { motion } from 'framer-motion'

export default function index() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sp1 = offsetY * 0.0005

  return (
    <motion.div
      style={{
        width: 2,
        height: 300,
        background: '#45ADFF',
        position: 'fixed',
        top: '25%',
        left: 50,
        right: 0,
        scaleY: sp1,
        originY: 0,
      }}
    />
  )
}
