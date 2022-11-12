import styled from "styled-components";
import { IButtonStyled } from './types';

export const Container = styled.div<IButtonStyled>`
    
    button {
        border: 1px solid white;
        font-size: 15px;
        background: white;
        padding: 5px;
        border-radius: 5px;
        transition: .3s ease-in-out;
        margin: 0 15px;

        cursor: pointer;


        &:hover {
            background: green;
            color: white;
        }
    }

    ${({ value }) => value === 'delete' && `

    button {
        border: 1px solid white;
        font-size: 15px;
        background: white;
        padding: 5px;
        border-radius: 5px;
        transition: .3s ease-in-out;

        cursor: pointer;


    &:hover {
        background: red;
        color: white;
    }

    `}

`
