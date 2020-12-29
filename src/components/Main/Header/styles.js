import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 10vh;
    width: 100%;

    padding: 0 1rem;
    
    >img{
        height: 50px;
        width: 50px;
    }
`

export const Nav = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 70%;

    >li{
        color: grey;

        margin-right: 3rem;
        
        &:hover{
            color: blue;
        }
    }
`

export const Signup = styled.div`
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: .5rem 1rem;

    background: blue;
    border-radius: 15px;
    cursor: pointer;

    &:hover{
        transform: scale(1.01);
    }
`