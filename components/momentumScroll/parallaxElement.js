import { useEffect, useContext } from 'react'
import { ScrollContext } from './scrollContainer'

const parallax = (props) => {
  const context = useContext(ScrollContext)
  useEffect(() => context.addBlock(props), [])
  return props.children
}

export default parallax
