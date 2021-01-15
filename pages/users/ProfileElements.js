import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 100%;
  width: 100%;

  padding: 50px;
`

export const ProfileTitle = styled.p`
  font-size: 2rem;
  color: #3d66a8;
`

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 1rem;

  height: 50vh;
  width: 100%;
`

export const ProfileInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

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
