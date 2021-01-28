import styled from 'styled-components'

import { lightTheme } from '../theme.js'

const frame = styled.div`
  min-height: calc(100vh - 6rem);
  min-width: calc(100vw - 15rem);

  margin: auto;

  overflow: hidden;
`

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: 100%;
  width: 100%;

  padding: 3rem;

  background: ${lightTheme.body_bg1};
`

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  height: 4rem;
  width: calc(100vw-10rem);

  margin: auto;

  background: red;
`

export const Header = styled(frame)`
  position: relative;
  z-index: 1;

  height: 100vh;

  margin-top: 3rem;

  border: 1px solid red;

  .title {
    span {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      max-width: 100%;

      div {
        font-weight: 600;
        font-size: 8rem;

        height: 70px;
        width: 70px;

        margin-bottom: 30px;
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

    background: url('/comite.jfif') no-repeat center;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const About = styled(frame)`
  border: 1px solid red;
`

export const Committees = styled(frame)`
  border: 1px solid red;
`

export const ScrollableCommittees = styled.div`
  display: flex;
  gap: 1rem;
  scroll-snap-type: x mandatory;

  height: 70%;
  width: 80%;

  margin: auto;
  padding: 1rem;

  border: 1px solid blue;
  overflow: scroll;

  .card {
    scroll-snap-align: center;

    min-height: 400px;
    min-width: 200px;

    border: 1px solid purple;
  }
`

export const Secretaries = styled(frame)`
  border: 1px solid red;
`

export const Footer = styled(frame)`
  border: 1px solid red;
`
