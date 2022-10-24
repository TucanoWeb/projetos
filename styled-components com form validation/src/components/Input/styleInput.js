import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: white;
    border: 0;
    height: 30px;
    width: 100%;
`

export const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin: 5px 0;
    font-family: 'Open Sans';
`