import styled from 'styled-components'

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  height: 50px;
  width: 50px;

  .hamburguer{
    position: relative;
    z-index: 3;

    cursor: pointer;

    &:hover .bars{
      background: ${props => props.theme.c_blue};
    }

    .bars{
      z-index: 3;

      height: 8px;
      width: 100%;

      margin: 6px 0;

      border-radius: 30px;
      border: 1px solid ${props => props.theme.c_blue};
      transition: ${props => props.theme.trans};

      &[data-menuOpen="true"]{
        background: ${props => props.theme.c_blue};
      }
    }
  }


  .menu{
    text-align: end;

    position: absolute;
    top: 0;
    right: -2000%;
    z-index: 2;

    height: 90vh;
    width: 50vw;

    padding: 3rem;

    opacity: 0;
    background: ${props => props.theme.c_white};
    box-shadow: -10px 0 20px ${props => props.theme.c_white};
    transition: ${props => props.theme.trans};

    &[data-menuOpen='true']{
      right: 0;
      opacity: 1;
    }

    li{
      font-size: 4rem;

      margin:0 0 40px 0;

      cursor: pointer;
      transition: ${props => props.theme.trans};
    }

    ._1:hover{ color: ${props => props.theme.c_red}; }
    ._2:hover{ color: ${props => props.theme.c_blue}; }
    ._3:hover{ color: ${props => props.theme.c_green}; }
    ._4:hover{ color: ${props => props.theme.c_orange}; }

    .button{
      color: ${props => props.theme.c_white};
      font-size: 1.2rem;

      display: inline-block;
    
      margin-right: 20px;
      padding: .5rem 1.5rem;

      border: 3px solid ${props => props.theme.c_greenAqua};
      background: ${props => props.theme.c_greenAqua};
      border-radius: 10px;
      transition: ${props => props.theme.trans};
      cursor: pointer;

      &:hover{
        transform: scale(1.05);
      }
    }

    .ghost{
      color: ${props => props.theme.c_greenAqua};

      border: 3px solid ${props => props.theme.c_greenAqua};
      background: transparent;
    }
  }

  @media (max-width: 1023px){
    display: none;
  }
`