import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  padding: 5rem 2rem;

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 0rem;
  }
`

export const ProfileContainer = styled.div`
  display: flex;

  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfilePic = styled.div`
  flex: 2;

  .pic {
    width: 100%;
    height: 400px;

    margin-bottom: 20px;

    border-radius: 50%;
  }
`

export const ProfileInfo = styled.div`
  flex: 6;
  padding: 2rem;

  input {
    width: 300px;

    background: transparent;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 1px solid ${(props) => props.theme.c_blue};
    }

  }
  select{
    font-size: 1.2rem;
    color: ${props => props.theme.c_blue};

    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
      border: 1px solid ${props => props.theme.c_blue};
    }
  }
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    
    margin-bottom: 20px;

    .name {
      font-size: 2rem;
    }

    .school {
      font-size: 1.2rem;

      align-self: flex-end;
      display: flex;
      gap: 2px;

      margin-left: 20px;
    }
  }

  .about {

    .icon {
      font-size: 1.2rem;

      width: 90%;

      margin-bottom: 20px;
      padding-bottom: 10px;

      border-bottom: 3px solid ${(props) => props.theme.c_blue};
    }

    .contact {
      display: grid;
      grid-template-columns: 70px 1fr;
      grid-template-rows: auto;

      .c1 {
        grid-column: 1 / 2;
        justify-self: start;

        margin-bottom: 20px;
      }

      .c2 {
        grid-column: 2 / 3;

        margin-bottom: 20px;
      }

      .dec {
        text-decoration: underline;
        color: ${(props) => props.theme.c_blue};
      }
    }
  }

  @media (max-width: 768px){
      padding: 1rem;

      .top{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

        margin-bottom: 40px;

        .school{
          align-self: flex-start;
          margin-left: 0;
        }
      }
  }
`