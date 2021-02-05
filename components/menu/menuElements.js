// Libraries imports
import styled from 'styled-components'
import { darkTheme, lightTheme } from '../theme'
import { motion } from 'framer-motion'

export const Nav = styled.nav`
  color: ${darkTheme.text};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  width: 100%;

  margin: auto;
  padding: 0 40px;

  background: ${darkTheme.body_bg1};

  @media (min-width: 320px) and (max-width: 768px){
    padding: 0 5px;
  }

  .menu{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button{
      padding: 10px 25px;

      outline: none;
      border-radius: 15px;
      cursor: pointer;
    }

    .ghost{
      color: ${darkTheme.text};

      background: transparent;
      border: 1px solid ${darkTheme.text};
    }

    @media (min-width: 320px) and (max-width: 768px){
      gap: 15px;

      button{
        font-size: .8rem;

        padding: 5px 12px;
      }
    }
  }
`