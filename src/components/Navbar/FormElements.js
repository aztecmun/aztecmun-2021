import styled from 'styled-components'

export const Form = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  background: rgba(0, 0, 0, 0.5);
  transform: ${({ formOpen }) => (formOpen ? 'scale(100%)' : 'scale(0)')};
  transition: all 0.2s ease-in-out;
`

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  justify-items: center;
  align-items: center;

  height: 70%;
  width: 90%;

  background: white;
  border-radius: 20px;
`

const FormLogIn = styled.div`
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
    color: #3d66a8;
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
      border: 1px solid #3d66a8;
    }

    &:hover {
      border: 1px solid #3d66a8;
    }
  }
`

export const Signup = styled(FormLogIn)`
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

  background: white;
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
