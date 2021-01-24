// React import
import React, { useRef, useEffect } from 'react'
import useWindowSize from 'components/hooks/useWindowSize'

// Local Compoenents import
import Navbar from './Navbar'

// Styled Components import
import { LayoutWrapper, LayoutContainer } from './LayoutSyles'

export default function layout({ children }) {
  const size = useWindowSize()

  const app = useRef()
  const scrollContainer = useRef()

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])

  useEffect(() => {
    setBodyHeight()
  }, [size.height])

  // Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }

  // Scrolling
  const skewScrolling = () => {
    // Set Current to the scroll position amount
    data.current = window.scrollY
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100

    // Difference between
    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5

    // Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`

    // loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  return (
    <LayoutWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
      ref={app}
    >
      <Navbar />
      <LayoutContainer ref={scrollContainer}>{children}</LayoutContainer>
    </LayoutWrapper>
  )
}
