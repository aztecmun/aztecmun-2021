import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;

  padding: 5rem 2rem;

  background: ${props => props.theme.body_bg2};
  overflow: hidden;

  @media (min-width: 321px) and (max-width: 768px){
    padding: 5rem 0rem;
  }
`

export const ProfileContainer = styled.div`
  color: ${props => props.theme.text};

  display: flex;

  height: 100%;
  width: 100vw;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

export const ProfilePic = styled.div`
  flex: 2;

  .pic{
    color: ${props => props.theme.text};

    width: 100%;
    height: 400px;

    margin-bottom: 20px;

    background: ${props => props.theme.body_bg1};
    border-radius: 20px;
  }
`

export const ProfileInfo = styled.div`
  flex: 6;

  padding: 2rem;

  .top{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    margin-bottom: 20px;

    .name{
      font-size: 2rem;
    }

    .school{
      color: ${props => props.theme.text};
      font-size: 1.2rem;
      align-self: flex-end;

      display: flex;
      gap: 2px;

      margin-left: 20px;
    }

    .committee{
      font-size: 1.2rem;
      color: ${props => props.theme.blue};
    }
  }

  .about{

    .icon{
      font-size: 1.2rem;

      margin-bottom: 20px;

      border-bottom: 3px solid ${props => props.theme.blue};

      .edit{
        margin-left: 50%;

        border-radius: 5px;
        cursor: pointer;
        transition: background-color .3s ease-in-out;

        &:hover{
          background: ${props => props.theme.body_bg1};
        }
      }
    }

    .contact{
      display: grid;
      grid-template-columns: 50px 1fr;
      grid-template-rows: auto;
      
      .c1{
        grid-column: 1 / 2;
        justify-self: start;

        margin-bottom: 20px;
      }

      .c2{
        grid-column: 2 / 3;

        margin-bottom: 20px;
      }

      .dec{
        text-decoration: underline;
        color: ${props => props.theme.blue};
      }
    }
  }
`