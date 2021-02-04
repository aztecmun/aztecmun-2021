import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #EDEDED;
  position: relative;

  height: 100vh;
  width: 100%;

  background: #141518;
`

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 8rem);
  
  width: 100%;
  transition: all 0.2s ease-in-out;
`

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  justify-items: center;
  align-items: center;

  height: 90%;
  width: 90%;

  background: #1f2125;
  border-radius: 20px;
`

const FormLogIn = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100%;
  width: 100%;

  transition: all 0.3s ease-in-out;

  span {
    color: #45ADFF;
    text-decoration: underline;

    cursor: pointer;
  }

  input {
    padding: 15px 2rem;

    background: #e2e2e2;
    border-radius: 15px;
    border: 1px solid transparent;
    outline: none;
    transition: all 0.3s ease-in-out;

    &:focus {
      border: 1px solid #45ADFF;
    }

    &:hover {
      border: 1px solid #45ADFF;
    }
  }
`

export const Signup = styled(FormLogIn)`
  gap: 1.2rem;

  opacity: ${({ frameOpen }) => (frameOpen ? '1' : '0')};
  transform: ${({ frameOpen }) =>
    frameOpen ? 'translateX(0)' : 'translate(100%)'};
  pointer-events: ${({ frameOpen }) => (frameOpen ? '' : 'none')};

  @media (max-width: 768px) {
    display: ${({ frameOpen }) => (frameOpen ? '' : 'none')};
  }
`

export const Login = styled(FormLogIn)`
  opacity: ${({ frameOpen }) => (frameOpen ? '0' : '1')};
  transform: ${({ frameOpen }) =>
    frameOpen ? 'translateX(-100%)' : 'translate(0)'};
  pointer-events: ${({ frameOpen }) => (frameOpen ? 'none' : '')};

  @media (max-width: 768px) {
    display: ${({ frameOpen }) => (frameOpen ? 'none' : '')};
  }
`

export const FormFrame = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  height: 100%;
  width: 50%;

  background: #1f2125;
  background-image: url('/img/logo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 20px;

  transition: all 0.3s ease-in-out;
  transform: ${({ frameOpen }) =>
    frameOpen ? 'translateX(0)' : 'translate(-100%)'};
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 800;
  color: white;

  margin-bottom: 15px;
  padding: 1rem 2rem;

  background: #45ADFF;
  border-radius: 10px;
  border: 1px solid #45ADFF;
  cursor: pointer;
  outline: none;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: black;

    background: white;

    transition: all 0.5s ease-in-out;
  }
`

export const Input = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  margin-bottom: 15px;
`

export const Close = styled.div`
  position: absolute;
  top: 2%;
  left: ${({frameOpen}) => frameOpen ? '2%' : '98%'};
  z-index: 2;

  height: 25px;
  width: 25px;

  cursor: pointer;
  transition: all .3s ease-in-out;

  @media (max-width: 768px){
    top: 25px;
    left: 25px;
  }

  .icon{
    position: relative;

    height: 100%;
    width: 2px;

    background: white;
    transform: rotate(155deg);

    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      height: 100%;
      width: 2px;

      background: white;

      transform: rotate(50deg);
    }
  }
`