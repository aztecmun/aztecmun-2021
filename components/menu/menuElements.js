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

    padding: 3rem 6rem;

    opacity: 0;
    background: ${props => props.theme.c_white};
    box-shadow: -10px 0 20px ${props => props.theme.c_white};
    transition: ${props => props.theme.trans};

    &[data-menuOpen='true']{
      right: -200%;
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

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  display: flex;
  align-items: center;

  width: 120px;
  height: 100%;

  ul{
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    height: 50%;

    li{
      color: ${props => props.theme.c_white};
      font-size: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 60px;
      width: 60px;
      
      border-radius: 15px;
      transform: translateX(50px);
      cursor: pointer;

      &:hover .text{ opacity: 1; left:-300%; }

      .text{
        font-size: 1rem;
        color: ${props => props.theme.c_white};

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 20%;
        left: 0%;

        height: 30px;
        width: 150px;

        padding: 0 1rem;

        opacity: 0;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.5);
        transition: ${props => props.theme.trans};
      }
    }

    ._1{ background: ${props => props.theme.c_red}; }
    ._2{ background: url('./committees_bg.svg'); background-size: cover; }
    ._3{ background: ${props => props.theme.c_orange}; }
    ._4{ background: ${props => props.theme.c_red}; }
    ._5{ background: ${props => props.theme.c_greenAqua}; }
    ._6{ background: ${props => props.theme.c_blue}; }
  }

  @media (min-width: 300px) and (max-width: 768px){
    position: fixed;
    top: 93vh;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 60px;

    background: ${props => props.theme.c_white};

    ul{
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      width: 100%;
      
      li{
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        
        transform: translateX(0);

        .text{ display: none; }
      }
    }
  }
`