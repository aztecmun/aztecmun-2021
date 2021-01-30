import styled from 'styled-components'

import { darkTheme } from '../theme.js'

const frame = styled.div`
  min-height: 90vh;
  min-width: 80vw;
  max-width: 80vw;

  margin: auto;

  overflow: hidden;

  .title p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 4rem;
    text-align: center;
    color: ${darkTheme.blue1};
  }
`

export const HomeWrapper = styled.div`
  color: ${darkTheme.text};

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: 100%;
  width: 100%;

  padding: 3rem;

  background: ${darkTheme.body_bg1};
  overflow-x: hidden;

  .tri {
    position: absolute;
    top: 25%;
    left: 0;
    z-index: 1;

    height: 250px;
    width: 250px;

    background: ${darkTheme.blue1};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`

export const Nav = styled.nav`
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
`

export const Header = styled(frame)`
  position: relative;
  z-index: 1;

  height: 120vh;

  margin-top: 3rem;

  .title {
    h1 {
      color: ${darkTheme.text};
    }

    span {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 10px;

      max-width: 100%;

      div {
        font-weight: 600;
        font-size: 12rem;

        width: 5vmax;
      }

      @media (max-width: 768px) {
        div {
          font-size: 3rem;

          height: 30px;
          width: 30px;
        }
      }
    }
  }

  .img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;

    height: 60%;
    width: 100%;

    background: url('/comite.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const About = styled(frame)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10rem;

  min-height: 50vh;

  div {
    font-size: 1.5rem;
    font-weight: 300;
    flex: 2;

    &:nth-of-type(1) {
      flex: 1;
    }
  }
`

export const Committees = styled(frame)`
  border: 1px solid red;
`

export const Secretaries = styled(frame)`
  border: 1px solid red;
`
