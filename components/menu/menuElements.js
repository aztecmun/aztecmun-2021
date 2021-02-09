// Libraries imports
import styled from 'styled-components'

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
  animation: fade-in 3s;

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