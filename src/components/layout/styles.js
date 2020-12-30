import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 100vh;
  width: 100%;
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 10;

  height: 80px;
  width: 100%;

  padding: 0.5rem calc((100vw - 1000px) / 2);
  background: #3d66a8;
`

export const NavLink = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  color: #fff;

  display: none;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled.li`
  color: #fff;
  padding: 10px 22px;
  background-color: #256ce1;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
`

export const Content = styled.div`
  min-height: 85vh;
  width: 100%;
`

export const Footer = styled.div`
  width: 100%;
  height: 40px;

  background: #3d66a8;
`
