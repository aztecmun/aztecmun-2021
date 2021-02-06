// Libraires imports
import styled from 'styled-components'

const frame = styled.div`
  min-height: 90vh;
  min-width: 80vw;
  max-width: 80vw;

  margin: auto;

  background: ${props => props.theme.body_bg1};;
  overflow: hidden;

  .title p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 4rem;
    color: ${props => props.theme.blue};;
  }
`

export const HomeWrapper = styled.div`
  color: ${props => props.theme.text};

  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 300px;

  height: 100%;
  width: 100%;

  padding: 3rem;

  background: ${props => props.theme.body_bg1};;
  overflow-x: hidden;

  .bg {
    position: absolute;
    top: 50%;
    left: -20%;
    z-index: -1;

    height: 500px;

    @media (max-width: 768px) {
      top: 25%;
    }
  }
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
      color: ${props => props.theme.text};;

      span {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 10px;

        @media (max-width: 320px){
          div{
            font-size: 2rem;

            height: 30px;
            width: 7px;
          }
        }

        @media (min-width: 321px) and (max-width: 768px) {
          div {
            font-size: 3rem;

            height: 40px;
            width: 15px;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px){
          div{
            font-size: 5rem;

            height: 100px;
            width: 30px;
          }
        }

        @media (min-width: 1224px){
          div {
            font-weight: 600;
            font-size: 10rem;

            height: 140px;
            width: 75px;
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

    min-height: 60%;
    width: 100%;

    background: url('/comite.jpg');
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
  position: relative;

  .scroll{
    position: absolute;
    bottom: 0px;
    right: 0;
      
    display: flex;

    animation: 2s infinite scroll;

    @media (min-width: 1220px){
      display: none;
    }
  }

  @keyframes scroll{
    50%{
      transform: translateX(-10px);
    }
    0%, 100%{
      transform: translateX(0);
    }
  }

  .slides{
    position: relative;

    display: flex;
    scroll-snap-type: x mandatory;
    gap: 20px;

    margin-top: 100px;
    overflow-x: scroll;

    .card {
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      scroll-snap-align: start;

      min-height: 450px;
      min-width: 300px;

      padding: 20px;

      border-radius: 20px;
      background: ${props => props.theme.body_bg2};;

      .title{
        font-size: 1.5rem;
        font-weight: bolder;
        text-align: center;
        text-transform: uppercase;
        color: ${props => props.theme.blue};;

        height: 20%;
      }

      .descrip{
        font-size: 1.2rem;
        letter-spacing: 1px;
        line-height: 22px;

        height: 60%;

        margin-top: 20px;
      }

      .enroll{
        color: ${props => props.theme.blue};
        text-decoration: underline;

        position: absolute;
        right: 15px;
        bottom: 10px;
      }
    }
  }
`

export const Secretaries = styled(frame)``
