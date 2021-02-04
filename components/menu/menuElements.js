// Libraries imports
import styled from 'styled-components'
import { darkTheme } from '../theme'

export const Nav = styled.nav`
  color: ${darkTheme.text};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100%;

  margin: auto;
  padding: 0 40px;

  background: ${darkTheme.body_bg1};
`

export const MenuWrapper = styled.div`
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 33px;
  width: 33px;

  cursor: pointer;

  .bars {
    position: relative;

    height: 3px;
    width: 33px;

    background: white;
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'rotate(55deg)' : 'rotate(0deg)')};

    &:after {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 0;

      height: 3px;
      width: 80%;

      background: white;
      transition: all 0.3s ease-in-out;
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:before {
      content: '';
      position: absolute;
      top: ${({ open }) => (open ? '0px' : '6px')};
      left: 0;

      height: 3px;
      width: ${({ open }) => (open ? '100%' : '50%')};

      background: white;
      transition: all 0.3s ease-in-out;
      transform: ${({ open }) => (open ? 'rotate(70deg)' : 'rotate(0deg)')};
    }
  }

  &:hover .bars {
    width: 100%;

    &:after {
      width: 100%;
    }

    &:before {
      width: 100%;
    }
  }
`

export const MenuContainer = styled.div`
  padding: 2rem;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: grid;
  grid-template-columns: 1;
  grid-template-rows: repeat (3, 1fr);

  height: 100vh;
  width: 50%;

  background: #1f2125;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-1000px)')};

  @media (max-width: 768px) {
    width: 100%;
  }

  .links {
    grid-column: 1;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    .link {
      font-size: 2rem;
      color: white;

      position: relative;

      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;

        height: 2px;
        width: 0;

        background: white;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        transform: scale(1.05);

        &:after {
          width: 100%;
        }
      }
    }
  }

  .login {
    grid-column: 1;
    grid-row: 2 / 3;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .button {
      padding: 1rem 2rem;

      border: none;
      border-radius: 20px;
      cursor: pointer;
      outline: none;
    }

    .ghost {
      color: white;

      border: 2px solid white;
      background: transparent;
    }
  }

  .footer {
    grid-column: 1;
    grid-row: 3 / 4;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 1.5rem;

    .icons {
      color: white;

      height: 30px;
      width: 30px;

      cursor: pointer;
    }
  }
`