// Libraries imports
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Scrollbar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 5px;
  width: 100%;

  background: ${props => props.theme.blue};;
`
