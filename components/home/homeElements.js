// Libraires imports
import styled from 'styled-components'

export const frame = styled.div`
  position: relative;

  min-height: 90vh;
  min-width: 80vw;
  max-width: 80vw;

  padding-top: 10px;

  margin: 200px auto;

  background: ${props => props.theme.body_bg1};

  .title{
    font-size: 4rem;
    color: ${props => props.theme.blue};
    
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
  }

  p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.5rem;
  }

  &:nth-last-of-type(1){
    margin-bottom: 0;
  }

  &:nth-of-type(1){
    margin-top: 60px;
  }

  @media (min-width: 320px) and (max-width: 768px){
    .title{
      font-size: 2.5rem;
    }

    p{
      font-size: 1.2rem;
    }
  }
`

export const HomeWrapper = styled.div`
  color: ${props => props.theme.text};

  position: relative;
  z-index: 1;

  height: 100%;
  width: 100%;

  background: ${props => props.theme.body_bg1};;
  overflow: hidden;
`

export const Header = styled(frame)`
  position: relative;
  z-index: 1;

  height: 120vh;

  margin-top: 60px;

  .header-title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    height: 30%;

    h1 {
      color: ${props => props.theme.text};;

      span {
        display: flex;
        gap: 10px;

        @media (max-width: 320px){
          div{
            font-size: 2rem;

            height: 30px;
            width: 7px;
          }
        }

        @media (min-width: 320px) and (max-width: 767px) {
          div {
            font-size: 3rem;

            height: 40px;
            width: 15px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px){
          div{
            font-size: 5rem;

            height: 100px;
            width: 34px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1366px) {
          div {
            font-weight: 600;
            font-size: 7rem;

            height: 100px;
            width: 50px;
          }
        }

        @media (min-width: 1367px){
          div{
            font-weight: 600;
            font-size: 10rem;

            height: 140px;
            width: 80px;
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

    min-height: 70%;
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
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;

  min-height: auto;

  .desc{
    grid-column: 1 / 3;
    grid-row: 1;
  }

  span{
    font-weight: bold;
    color: ${props => props.theme.blue};

    display: block;
  }

  @media (min-width: 320px) and (max-width: 768px){
    grid-template-rows: auto;

    .vision{
      grid-column: 1 / 3;
      grid-row: 2;
    }

    .mision{
      grid-column: 1 / 3;
      grid-row: 3;
    }
  }
`

export const Committees = styled(frame)`
  position: relative;

  min-height: auto;

  .scroll{
    position: absolute;
    bottom: 0px;
    right: 0;
      
    display: flex;

    animation: 2s infinite scroll;

    @media (min-width: 1024px){
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

    @media (min-width: 1024px) {
      flex-wrap: wrap;
      justify-content: center;
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

      .card-title{
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
  min-width: 100%;

  .title{
    left: 10%;
  }


  ul{
    font-size: 3rem;
    letter-spacing: 3px;
    color: ${props => props.theme.blue};
    min-width: 80%;

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

    @media (min-width: 320px) and (max-width: 768px){
      font-size: 1.5rem;
      height: 100%;
      min-width: 100%;

      li{
        margin-bottom: 15px;
      }

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

    @media (min-width: 1024px) and (max-width: 1366px){
      font-size: 3rem;
      height: 100%;
      min-width: 100%;
    }
  }
`