// Libraires imports
import styled from 'styled-components'

const frame = styled.div`
  position: relative;

  min-height: 90vh;
  min-width: 80vw;
  max-width: 80vw;

  margin: 200px auto;

  background: ${props => props.theme.body_bg1};;
  overflow: hidden;
  border: 1px solid red;

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

  height: 100%;
  width: 100%;

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

        @media (min-width: 1024px) and (max-width: 1366px) {
          div {
            font-weight: 600;
            font-size: 7rem;

            height: 100px;
            width: 60px;
          }
        }

        @media (min-width: 1367px){
          div{
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

  @media (min-width: 321px) and (max-width: 768px){
    max-height: 100vh;
  }
`

export const About = styled(frame)`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 10rem;

  min-height: auto;

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
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
    gap: 20px;

    margin-top: 100px;
    overflow-x: scroll;

    @media (min-width: 1366px) {
      flex-wrap: wrap;
    }

    .card {
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      scroll-snap-align: start;

      min-height: 450px;
      max-height: 450px;
      min-width: 300px;
      max-width: 300px;

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

        height: 70%;

        margin-top: 20px;
      }

      .enroll{
        color: ${props => props.theme.blue};
        text-decoration: underline;

        position: absolute;
        right: 30px;
        bottom: 30px;

        cursor: pointer;
      }
    }
  }
`

export const Secretaries = styled(frame)`
  display: flex;
  align-items: center;

  max-height: 60vh;
  min-height: 60vh;

  min-width: 100vw;

  ul{
    font-size: 3rem;
    letter-spacing: 3px;
    color: ${props => props.theme.blue};
    min-width: 850px;

    li{
      transition: all .3s ease-in-out;
      cursor: pointer;
        
      &:hover{
        color: ${props => props.theme.text}
      }
    }

    li:nth-of-type(1){
      margin-left: 15px;
    }
    li:nth-of-type(2){
      margin-left: 30px;
    }
    li:nth-of-type(3){
      margin-left: 45px;
    }
    li:nth-of-type(4){
      margin-left: 60px;
    }
    li:nth-of-type(5){
      margin-left: 75px;
    }
    li:nth-of-type(6){
      margin-left: 90px;
    }
    li:nth-of-type(7){
      margin-left: 105px;
    }
    li:nth-of-type(8){
      margin-left: 120px;
    }

    @media (min-width: 321px) and (max-width: 768px){
      font-size: 1.5rem;
      height: 50vh;

      li:nth-of-type(1){
        margin-left: 0px;
      }
      li:nth-of-type(2){
        margin-left: 5px;
      }
      li:nth-of-type(3){
        margin-left: 10px;
      }
      li:nth-of-type(4){
        margin-left: 15px;
      }
      li:nth-of-type(5){
        margin-left: 20px;
      }
      li:nth-of-type(6){
        margin-left: 25px;
      }
      li:nth-of-type(7){
        margin-left: 30px;
      }
      li:nth-of-type(8){
        margin-left: 35px;
      }
    }
  }
`

export const Footer = styled(frame)``