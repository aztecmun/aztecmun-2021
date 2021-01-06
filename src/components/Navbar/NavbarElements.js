import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

export const Nav = styled.nav`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;
  width: 100%;

  padding: 0 2rem;
`

export const Bars = styled(FaBars)`
  display: none;

  height: 25px;
  width: 25px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 50%;
  height: 100%;

  @media (max-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    height: 93.5vh;
    width: 40vw;

    background: white;
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

  &:before {
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
`

export const NavIcon = styled(VscChromeClose)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavBtn = styled.div`
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 110px;

  background: #3d66a8;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: black;

    background: white;
    border: 1px solid #3d66a8;

    transition: all 0.5s ease-in-out;
  }
`
export const Form = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  background: rgba(0, 0, 0, 0.5);
  transform: ${({ formOpen }) => (formOpen ? 'scale(100%)' : 'scale(0)')};
  transition: all 0.2s ease-in-out;
`

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  justify-items: center;
  align-items: center;

  height: 70%;
  width: 90%;

  background: white;
  border-radius: 20px;
`

export const Signup = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100%;
  width: 100%;

  opacity: ${({ frameOpen }) => (frameOpen ? '1' : '0')};
  transform: ${({ frameOpen }) =>
    frameOpen ? 'translateX(0)' : 'translate(100%)'};

  transition: all 0.3s ease-in-out;

  input {
    padding: 15px 2rem;

    background: #e2e2e2;
    border-radius: 15px;
    border: none;
    outline: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Login = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100%;
  width: 100%;

  opacity: ${({ frameOpen }) => (frameOpen ? '0' : '1')};
  transform: ${({ frameOpen }) =>
    frameOpen ? 'translateX(-100%)' : 'translate(0)'};

  transition: all 0.3s ease-in-out;

  input {
    padding: 15px 2rem;

    background: #e2e2e2;
    border-radius: 15px;
    border: none;
    outline: none;
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
`

export const Button = styled.div`
  font-weight: 850;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: white;

  padding: 1rem 2rem;

  background: #3d66a8;
  border-radius: 30px;
  border: 1px solid #3d66a8;
  cursor: pointer;
  pointer-events: none;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: black;

    background: white;

    transition: all 0.5s ease-in-out;
  }
`

export const Frame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  height: 100%;
  width: 50%;

  background: white;
  background-image: url('/img/logo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 20px;

  transition: all 0.3s ease-in-out;
  transform: ${({ frameOpen }) =>
    frameOpen ? 'translateX(0)' : 'translate(-100%)'};

  @media (max-width: 768px) {
    display: none;
  }
`
