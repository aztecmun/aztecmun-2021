import styled from 'styled-components'

export const LayoutWrapper = styled.div`

  min-height: 100vh;
  min-width: 100%;

  overflow-x: hidden;
  overflow-y: scroll;
`

export const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;

  display: flex;
  align-items: center;

  width: 60px;
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
      transform: translateX(20px)
    }

    ._1{ background: ${props => props.theme.c_greenAqua}; }
    ._2{ background: ${props => props.theme.c_red}; }
    ._3{ background: ${props => props.theme.c_blue}; }
    ._4{ background: ${props => props.theme.c_orange}; }
    ._5{ background: ${props => props.theme.c_green}; }
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
        display: flex;
        align-items: center;
        justify-content: center;
        
        transform: translateX(0);
      }
    }
  }
`