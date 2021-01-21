// Next import
import Link from 'next/Link'

// Libraries import
import { motion } from 'framer-motion'

// Icons import
import { GoThreeBars, GoX } from 'react-icons/go'

// Styled import
import styled from 'styled-components'

export const NavWrapper = styled.nav`
  position: relative;

  display: flex;

  height: 7vh;
  width: 100%;

  background: #1458e4;
  border-bottom: 2px solid rgba(255, 2555, 255, 0.2);

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    height: 105%;
    width: 100%;

    background: white;
    transform: ${({ open }) =>
      open ? 'transalateY(0%)' : 'translateY(-105%)'};

    transition: all 0.3s ease-in-out;
  }
`

export const NavMenu = styled.ul`
  color: ${({ open }) => (open ? '#212121' : '#f3f6fe')};
  font-size: 2rem;

  z-index: 2;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  height: 100%;

  padding: 0 1rem;

  border-right: 2px solid rgba(255, 2555, 255, 0.2);

  transition: color 0.3s ease-in-out;
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

  display: ${({ open }) => (open ? 'none' : 'block')};

  cursor: pointer;
  transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(360deg)')};

  transition: all 0.2s ease-in-out;
`

export const NavIconClose = styled(GoX)`
  font-size: 1.5rem;

  display: ${({ open }) => (open ? 'block' : 'none')};

  cursor: pointer;
`

export const NavPanel = styled(motion.div)`
  position: absolute;
  top: 7vh;
  left: 0;
  z-index: 3;

  height: 93vh;
  width: 100vw;

  background: #fff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translate(-100%)')};

  transition: all 0.3s ease-in-out;
  transition-delay: 0.3s;
`
