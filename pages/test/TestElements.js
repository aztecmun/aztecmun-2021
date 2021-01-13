import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  height: 100vh;
  width: 100vw;

  overflow: hidden;
  -webkit-user-select: none;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 15vw;

  border: 1px solid red;

  @media (max-width: 768px) {
    width: 30vw;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 50%;
`

export const NavLink = styled.li`
  font-weight: 800;
  text-transform: uppercase;

  position: relative;

  cursor: pointer;

  &:hover {
    &:after {
      width: 100%;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;

    width: 0;
    height: 2px;

    background: #000;

    transition: width 0.3s ease-in-out;
  }
`

export const ContentContainer = styled.div`
  height: 100vh;
  width: 85vw;
`
