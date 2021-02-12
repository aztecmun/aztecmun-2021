// Libraries imports
import styled from 'styled-components'
import { BiUserCircle } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'

export const Nav = styled.nav`
  color: ${props => props.theme.text};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  width: 100vw;

  margin: auto;
  padding: 0 40px;

  background: ${props => props.theme.body_bg1};
  /* animation: fade-in 3s; */

  @keyframes fade-in{
    0%, 50%{
      opacity: 0;
      top: -200px;
    }

    100%{
      opacity: 1;
      top: 0;
    }
  }

  a{
    font-size: 1.5rem;

    position: relative;

    span{
      font-weight: bolder;
      font-size: .8rem;
      color: ${props => props.theme.blue};

      position: absolute;
      top: -10px;
      right: 0px;
    }
  }

  @media (min-width: 320px) and (max-width: 768px){
    padding: 0 5px;

    a{
      font-size: 1rem;
    }
  }

  .menu{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button{
      color: #EDEDED;

      padding: 10px 25px;

      border: 1px solid transparent;
      background: ${props => props.theme.blue};
      border-radius: 15px;
      outline: none;
      cursor: pointer;
    }

    .ghost{
      color: ${props => props.theme.text};

      background: transparent;
      border: 1px solid ${props => props.theme.blue};
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

export const User = styled.div`
  font-size: 1.5rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 1rem 2rem;
`

export const UserIcon = styled(BiUserCircle)`
  color: ${props => props.theme.text};
`

export const UserDrop = styled(IoMdArrowDropdown)`
  color: ${props => props.theme.text};

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(1px);
  }
`

export const UserMenu = styled.div`
  position: absolute;
  top: 120%;
  right: 25%;

  height: 130px;
  width: 160px;

  padding: 1rem;

  background: ${props => props.theme.body_bg2};
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  opacity: ${({ userOpen }) => (userOpen ? '1' : '0')};
  pointer-events: ${({ userOpen }) => (userOpen ? 'default' : 'none')};
`

export const UserOptions = styled.ul`
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  a{
    font-size: 1rem;
  }
`

export const Option = styled.li`
  padding: 0.5rem 1rem;

  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${props => props.theme.body_bg1 };
  }
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${props => props.theme.body_bg1};
`