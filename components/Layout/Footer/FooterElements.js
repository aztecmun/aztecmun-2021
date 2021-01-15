import styled from 'styled-components'

export const FooterContainer = styled.footer`
  color: white;

  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3rem;
  width: 100%;

  padding: 0 2rem;

  background-color: #3d66a8;

  p {
    &::nth-of-type(1) {
      font-style: italic;
    }
  }

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`
