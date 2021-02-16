import styled from 'styled-components'

export const Frame = styled.div`
  position: relative;

  min-height: 90vh;
  width: 90%;

  margin: 5vh auto 0 auto;

  h1 {
    font-size: 3rem;

    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    line-height: 30px;
    letter-spacing: 0.5px;

    margin-bottom: 30px;
  }
`

export const HomeWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  max-height: 100%;

  overflow-y: scroll;
  overflow-x: hide;

  @media (max-width: 768px){ max-height: 100vh; }
`

export const HomeHeader = styled(Frame)`
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: ${(props) => props.theme.c_blue};

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 80%;

    img {
      width: 100%;
    }

    h1 {
      position: absolute;
      top: 15%;
      right: 0;
    }
  }

  @media (max-width: 320px) {
    min-height: 20vh;

    .title {
      max-width: 90%;

      h1 {
        font-size: 1rem;
        top: -5%;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    min-height: 30vh;

    .title {
      h1 {
        font-size: 1rem;
        top: 5%;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 80vh;

    .title {
      h1 {
        font-size: 1.8rem;
        top: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 90vh;

    .title {
      h1 {
        font-size: 1.8rem;
        top: 0;
      }
    }
  }
`

export const HomeAbout = styled(Frame)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  gap: 30px;

  min-height: auto;

  .sec1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    h1 {
      color: ${(props) => props.theme.c_red};
    }

    .button {
      color: ${(props) => props.theme.c_white};
      font-size: 1.2rem;

      display: inline-block;

      margin-right: 20px;
      padding: 0.5rem 1.5rem;

      border: 3px solid ${(props) => props.theme.c_greenAqua};
      background: ${(props) => props.theme.c_greenAqua};
      border-radius: 10px;
      transition: ${(props) => props.theme.trans};
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }

    .ghost {
      color: ${(props) => props.theme.c_greenAqua};

      border: 3px solid ${(props) => props.theme.c_greenAqua};
      background: transparent;
    }
  }

  .sec2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;

    img {
      height: 500px;
      width: 500px;
    }
  }

  .sec3 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    h1 {
      color: ${(props) => props.theme.c_orange};
    }
  }

  .sec4 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    h1 {
      color: ${(props) => props.theme.c_blue};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, auto);
    gap: 50px;

    .sec1 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      .button {
        font-size: 1rem;
        text-align: center;

        display: block;

        max-width: 80%;

        margin: 5px auto;
      }
    }

    .sec2 {
      display: none;
    }

    .sec3 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .sec4 {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 75px;

    min-height: auto;

    .sec1 {
      grid-column: 1 / 3;
      grid-row: 1 / 2;

      .button {
        font-size: 1rem;
        text-align: center;

        display: inline-block;

        min-width: 30%;

        margin: 0 10%;
      }
    }

    .sec2 {
      display: none;
    }

    .sec3 {
      grid-column: 1;
      grid-row: 2 / 3;
    }

    .sec4 {
      grid-column: 2;
      grid-row: 2 / 3;
    }
  }
`

export const HomeCommittees = styled(Frame)`
  display: flex;
  flex-direction: column;

  padding: 10px 5%;

  height: 100%;
  min-width: 100%;

  background: ${(props) => props.theme.c_orange};
  background-image: url('/svg/committees_bg.svg');
  background-position: center;
  background-size: cover;

  .title {
    h1 {
      color: ${(props) => props.theme.c_white};
      text-align: center;
    }

    p {
      color: ${(props) => props.theme.c_white};
    }
  }

  .committees {
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-type: x mandatory;

    overflow-x: scroll;

    .card {
      height: 450px;
      width: 300px;

      margin: 20px 50px;
      padding: 1rem;

      border-radius: 20px;
      background: rgba(255, 255, 255, 0.85);

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 25%;
        width: 100%;

        margin-bottom: 20px;

        img {
          display: block;

          max-height: 100%;
          max-width: 100%;
        }
      }

      .desc {
        height: 50%;
        width: 100%;

        margin-bottom: 20px;

        h1 {
          font-size: 1.5rem;
        }

        p {
          color: ${(props) => props.theme.c_black};
          font-size: 1rem;
          letter-spacing: 0;
          line-height: 25px;
        }
      }

      .button {
        text-align: center;
        color: ${(props) => props.theme.c_white};

        width: 100%;

        padding: 1rem;

        background: ${(props) => props.theme.c_blue};
        border-radius: 12px;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 320px) and (max-width: 1023px) {
    min-height: auto;

    .title {
      p {
        display: none;
      }
    }

    .committees {
      flex-wrap: no-wrap;
      justify-content: flex-start;

      .card {
        margin: 10px;
        scroll-snap-align: start;

        min-height: 400px;
        min-width: 260px;

        .logo {
          height: 20%;
        }

        .desc {
          height: 60%;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .committees {
      flex-wrap: wrap;
    }
  }
`

export const HomeSecretaries = styled(Frame)`
  min-height: auto;

  .title {
    text-align: center;

    h1 {
      color: ${(props) => props.theme.c_orange};
    }
  }

  .secretarie {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 10% 60%;

    height: 50vh;
    width: 100%;

    .photo {
      grid-column: 1;
      grid-row: 1 / 3;

      pointer-events: none;

      img{
        height: 100%;
        width: 100%;
      }
    }

    .title {
      text-align: start;

      grid-column: 2;
      grid-row: 1;

      h1 {
        font-size: 2rem;
      }
    }

    .desc {
      grid-column: 2;
      grid-row: 2;
      align-self: start;
    }

    ._1 {
      color: ${(props) => props.theme.c_red};
    }
    ._2 {
      color: ${(props) => props.theme.c_blue};
    }
    ._3 {
      color: ${(props) => props.theme.c_green};
    }
    ._4 {
      color: ${(props) => props.theme.c_orange};
    }
    ._5 {
      color: ${(props) => props.theme.c_greenAqua};
    }
  }

  .rec-carousel-item:focus {
    outline: none;
  }

  .rec.rec-arrow {
    display: none;
  }

  @media (max-width: 768px) {
    .secretarie {
      display: flex;
      flex-direction: column;

      height: auto;

      .photo{ display: none; }
    }
  }
`

export const HomeGallery = styled(Frame)`
  height: auto;
  width: 80%;

  img{
    height: 100%;
    width: 100%;

    pointer-events: none;
  }

  @media (max-width: 768px){
    max-height: 70vh;
    min-height: 70vh;

    .rec.rec-arrow { display: none; }
  }
`
