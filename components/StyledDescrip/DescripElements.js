import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export const Header = styled.div`
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 35vh;

  background: url(/Img/SECRETARIAS.png) no-repeat center;
  background-size: cover;
`

export const Title = styled.div`
  color: white;

  position: absolute;
  top: -10px;
  left: -10px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 5vh;
  width: 50vw;

  background: url(/Img/TITULO.png) no-repeat center;
  background-size: cover;

  @media (max-width: 768px) {
    font-size: 0.5rem;

    width: 70vw;
  }
`

export const Description = styled.div`
  font-weight: lighter;
  text-align: justify;

  position: relative;

  height: 30vh;
  width: 100%;

  padding: 50px;

  @media (max-width: 768px) {
    height: auto;
  }
`
