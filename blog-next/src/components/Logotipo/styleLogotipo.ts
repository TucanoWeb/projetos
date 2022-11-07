import styled from "styled-components";
import { ILogotipoStyled } from './types';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    

    ${({value}: ILogotipoStyled) => value === 'footer' && `
        color: #9D9EA1;
        font-size: 15px;
        margin: 100px 0;
        font-weight: 700;
    
    `}

`


export const Description = styled.div`
    font-size: 20px;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    
    a {
        text-decoration: none;
        color: white;
    }

`