// Next import
import Link from 'next/Link'

// Libraries import
import { motion } from 'framer-motion'

// Icons import
import { GoThreeBars } from 'react-icons/go'

// Styled import
import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;

  height: 7vh;
  width: 100%;

  background: #1458e4;
  border-bottom: 2px solid rgba(255, 2555, 255, 0.2);
`

export const NavMenu = styled.ul`
  color: #f3f6fe;
  font-size: 2rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  height: 100%;

  padding: 0 1rem;

  border-right: 2px solid rgba(255, 2555, 255, 0.2);
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const NavIcon = styled(GoThreeBars)`
  font-size: 1.5rem;

  cursor: pointer;
`

export const NavPanel = styled(motion.div)``
