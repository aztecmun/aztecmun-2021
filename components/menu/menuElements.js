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
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

  height: 60px;
  width: 100vw;

  margin: auto;
  padding: 0 40px;

  background: ${props => props.theme.body_bg1};

  .title{
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

  .menu{
    position: relative;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    width: 100%;
    height: 100%;
    
    .hamburguer{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;

      height: 60%;
      width: 30px;

      cursor: pointer;
      transition: all .3s ease-in-out;

      .bars{
        height: 3px;
        width: 100%;

        background: ${props => props.theme.text};

        @media (min-width: 500px) {
          display: none;
        }
      }
    }
  }
`

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    transition: all .3s ease-in-out;

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

    .close{
      position: relative;

      display: flex;
      align-items: center;

      height: 30px;
      width: 30px;

      .bars{
        position: absolute;
        top: 10;

        width: 100%;
        height: 2px;

        background: ${props => props.theme.text};
        border-radius: 30px;

        &:nth-of-type(1){
          transform: rotate(70deg)
        }

        &:nth-of-type(2){
          transform: rotate(-70deg)
        }
      }

      @media(min-width: 500px){
        display: none;
      }
    }

    @media (max-width: 500px){
      position: absolute;
      top: 0;
      transform: translateX(200%);

      display: flex;
      flex-direction: column;

      height: 100vh;
      width: 80%;

      background: ${props => props.theme.body_bg2};

      &[data-isOpen="true"]{
        transform: translateX(20%);
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
  z-index: 10;

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
    background: ${props => props.theme.body_bg1};
  }
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${props => props.theme.body_bg1};
`