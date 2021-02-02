// Libraires imports
import styled from 'styled-components'

// Theme import
import { darkTheme } from '../theme.js'

const frame = styled.div`
  min-height: 90vh;
  min-width: 80vw;
  max-width: 80vw;

  margin: auto;

  background: ${darkTheme.body_bg1};
  overflow: hidden;

  .title p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 4rem;
    color: ${darkTheme.blue1};
  }
`

export const HomeWrapper = styled.div`
  color: ${darkTheme.text};

  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 200px;

  height: 100%;
  width: 100%;

  padding: 3rem;

  background: ${darkTheme.body_bg1};
  overflow-x: hidden;

  .bg {
    position: absolute;
    top: 30%;
    left: -20%;
    z-index: -1;

    height: 500px;

    @media (max-width: 768px) {
      top: 25%;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40%;

    h1 {
      color: ${darkTheme.text};

      span {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 10px;

        div {
          font-weight: 600;
          font-size: 12rem;

          width: 5vmax;
        }

        @media (max-width: 768px) {
          div {
            font-size: 3rem;

            height: 40px;
            width: 15px;
          }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const Committees = styled(frame)`
  .card {
    height: 100px;
    width: 200px;

    border: 1px solid red;
  }
`

export const Secretaries = styled(frame)``
