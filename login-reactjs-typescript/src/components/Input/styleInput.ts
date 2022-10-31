import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const InputText = styled.input`
    display: flex;
    border: 1px solid #83249d;
    height: 50px;
    width: 90%;    
    border-radius: 22px;
    margin: 10px 0;

    &::placeholder {
        padding: 10px;
    }   
`

export const TextError = styled.div`
    font-size: 12px;
    color: red;
    display: flex;
    width: 90%;
    left: 0;
    
    
`