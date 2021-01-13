import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;
  width: 100%;

  padding: 0 6rem;

  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  img {
    height: 30px;
    width: 120px;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    img {
      display: none;
    }
  }
`

export const Bars = styled(FaBars)`
  display: none;

  height: 25px;
  width: 25px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Icon = styled(VscChromeClose)`
  position: absolute;
  top: 20px;
  left: ${({ frameOpen }) => (frameOpen ? '20px' : '92%')};

  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: rotate(-360deg);
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    left: 20px;
  }
`

export const NavIcon = styled(Icon)`
  position: static;

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    height: 100vh;
    width: 40vw;

    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-200px)')};
    transition: transform 0.5s ease-in-out;
  }
`

export const NavLink = styled.li`
  text-align: center;
  text-transform: uppercase;

  position: relative;

  cursor: pointer;

  transition: all 0.5s ease-in-out;

  a {
    :before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;

      height: 2px;
      width: 0%;
      background: #3d66a8;

      transition: all 0.3s ease-in-out;
    }

    &:hover {
      color: #3d66a8;

      transition: all 0.5s ease-in-out;

      &:before {
        width: 100%;

        transition: all 0.3s ease-in-out;
      }
    }
  }

  .active {
    color: #3d66a8;

    transition: all 0.5s ease-in-out;

    &:before {
      width: 100%;

      transition: all 0.3s ease-in-out;
    }
  }
`

export const NavBtn = styled.button`
  font-size: 1rem;
  font-weight: 800;
  color: white;

  padding: 1rem 2rem;

  background: #3d66a8;
  border-radius: 10px;
  border: 1px solid #3d66a8;
  cursor: pointer;
  outline: none;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: black;
    background: white;
    transition: all 0.5s ease-in-out;
  }
`
