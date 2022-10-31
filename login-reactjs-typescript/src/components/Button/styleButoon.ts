import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const Container = styled.div<IButtonStyled>`
    margin: 15px;
    display: flex;
    width: 90%;
    

    button {

        border: 1px solid #83249d;
        font-size: 20px;
        width: 100%;
        height: 50px;
        background: #83249d;
        color: white;
        border-radius: 22px;
        
        cursor: pointer;
       
    }

`