import styled from 'styled-components'

import { lightTheme } from '../theme.js'

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
    color: ${lightTheme.blue};
  }
`

export const HomeWrapper = styled.div`
  color: ${lightTheme.text};

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: 100%;
  width: 100%;

  padding: 3rem;

  background: ${lightTheme.body_bg1};
  overflow-x: hidden;

  .tri {
    position: absolute;
    top: 25%;
    left: 0;
    z-index: 1;

    height: 250px;
    width: 250px;

    background: ${lightTheme.blue};
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

export const Bars = styled.div`
  position: relative;

  height: 3px;
  width: 33px;

  background: black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  transform: ${({ open }) => (open ? 'rotate(55deg)' : 'rotate(0deg)')};

  &:before {
    content: '';
    position: absolute;
    top: ${({ open }) => (open ? '0px' : '6px')};
    left: 0;

    height: 3px;
    width: ${({ open }) => (open ? '100%' : '50%')};
    background: black;
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'rotate(70deg)' : 'rotate(0deg)')};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 0;

    height: 3px;
    width: 75%;
    background: black;
    transition: all 0.3s ease-in-out;

    opacity: ${({ open }) => (open ? '0' : '1')};
  }

  &:hover {
    background: ${lightTheme.blue};

    &:after {
      width: 100%;
      background: ${lightTheme.blue};
    }

    &:before {
      width: 100%;
      background: ${lightTheme.blue};
    }
  }
`

export const Header = styled(frame)`
  position: relative;
  z-index: 1;

  height: 120vh;

  margin-top: 3rem;

  .title {
    h1 {
      color: ${lightTheme.text};
    }

    span {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      max-width: 100%;

      div {
        font-weight: 600;
        font-size: 12rem;

        height: 100px;
        width: 100px;

        margin-bottom: 60px;
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
  position: relative;

  .scrollable {
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    gap: 2rem;
    align-items: center;
    scroll-snap-type: x mandatory;

    height: 60%;
    width: 100%;

    padding: 0 2rem;

    overflow: scroll;

    .card {
      scroll-snap-align: start;

      min-height: 70%;
      min-width: 400px;

      border: 1px solid black;
      border-radius: 20px;
    }
  }
`

export const Secretaries = styled(frame)`
  border: 1px solid red;
`

export const Footer = styled(frame)`
  border: 1px solid red;
`
