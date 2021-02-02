// Libraries imports
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Scrollbar = styled(motion.div)`
  position: fixed;
  top: 25%;
  left: 50px;
  right: 0;

  height: 300px;
  width: 2px;

  background: #45adff;

  @media (max-width: 768px) {
    left: 25px;
  }
`
