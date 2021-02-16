import styled from 'styled-components'

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

      height: 50px;
      width: 50px;
      
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
    ._2{ background: url('./svg/committees_bg.svg'); background-size: cover; }
    ._3{ background: ${props => props.theme.c_orange}; }
    ._4{ background: ${props => props.theme.c_red}; }
    ._5{ background: ${props => props.theme.c_greenAqua}; }
    ._6{ background: ${props => props.theme.c_blue}; }
  }

  @media (min-width: 300px) and (max-width: 768px){
    position: sticky;
    bottom: 0;
    left: 0;

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