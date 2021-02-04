import { useEffect, useContext } from 'react'
import { ScrollContext } from './scrollContainer'

export default (props) => {
  const context = useContext(ScrollContext)
  useEffect(() => context.addBlock(props), [])
  return props.children
}
  