import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;

  padding: 5rem 2rem;

  background: #141518;
  overflow-y: scroll;
`

export const ProfileContainer = styled.div`
  color: #EDEDED;

  display: flex;

  height: 100%;
  width: 100%;

  @media (max-width: 768px){
    flex-direction: column;
  }
`

export const ProfilePic = styled.div`
  flex: 2;

  .pic{
    color: #EDEDED;

    width: 100%;
    height: 400px;

    margin-bottom: 20px;

    background: #1f2125;
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
      color: #a8a8a8;
      font-size: 1.2rem;
      align-self: flex-end;

      display: flex;
      gap: 2px;

      margin-left: 20px;
    }

    .committee{
      font-size: 1.2rem;
      color: #45ADFF;
    }
  }

  .about{
    
    .icon{
      font-size: 1.2rem;

      margin-bottom: 20px;

      border-bottom: 3px solid #45ADFF;

      .edit{
        margin-left: 50%;

        border-radius: 5px;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover{
          background: #2a2c2e;
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
        color: #45ADFF;
      }
    }
  }
`