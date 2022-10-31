import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid white;
    background: white;
    width: 500px;
    height: 300px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input[value]{
        padding-left: 15px;
    }
    
`

export const Title = styled.h1`
    font-size: 45px;
    color: #83249d;
    margin: 5px 15px;
    display: flex;
    width: 90%;
`