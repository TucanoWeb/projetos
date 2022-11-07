import styled from 'styled-components';
import { ICardContainerStyled } from './types';

export const Container = styled.div`
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    width: 750px;
    cursor: pointer;
    

`

export const CardContainer = styled.div`

    ${({ value }: ICardContainerStyled) => value === 0 && `
background-color: rgba(0, 0, 0, 0.219);
transition: .3s ease-in-out;
border-radius: 22px 22px 0 0;
padding: 25px;

    `}

${({ value }) => value > 0 && `
background-color: rgba(0, 0, 0, 0.219);
transition: .3s ease-in-out;
padding: 25px;

    `}

${({ final }) => final === undefined && `
background-color: rgba(0, 0, 0, 0.219);
transition: .3s ease-in-out;
border-radius: 0 0 22px 22px;
padding: 25px;

    `}


     &:hover{
    background-color: rgba(0, 0, 0, 0.400);    

    }

    a {
        text-decoration: none;
    }



`



export const Date = styled.div`
    color: #9D9EA1;
    text-transform: uppercase;
    opacity: 5;
    z-index: 999;
    font-size: 20px;
    font-weight: 700;
`

export const Title = styled.div`
    color: white;
    text-transform: uppercase;
    font-size: 25px;
    margin-top: 15px;
`

export const Description = styled.div`
    color: #9D9EA1;
    text-transform: uppercase;
    opacity: 5;
    z-index: 999;
    font-size: 15px;
    margin-top: 15px;
    font-weight: 600;
`

export const Icon = styled.div`
    color: #541C22;
    font-size: 30px;
    margin-top: 15px;
`