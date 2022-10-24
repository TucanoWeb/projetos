import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    font-family: 'Open Sans';
`

export const Column = styled.div`
    flex: 1;
`

export const Content = styled.div`
    margin: 150px 50px;
    font-size: 35px;
    font-weight: 700;
    width: 600px;
    display: flex;
    flex-direction: column;
    

    form {
        margin-top: 30px;
        padding: 10px;   
        
    }

    button{
        width: 250px;
    }


`
export const InputWrapper = styled.div`
    width: 100%;
`

export const Icons = styled.span`
    font-size: 25px;
`

export const Description = styled.p`
    font-size: 15px;
    margin-top: 15px;
    font-weight: 400;
`

export const UrlLogin = styled.span`
    color: green;
    margin-left: 5px;

`

