import styled from "styled-components";

export const ContainerNewUser = styled.div`

    width: 50%;

    input {
        margin: 10px 0;
        border: 1px solid #585858;
        color: black;
    }

    input:focus{
        border: 1px solid green;
    }
`

export const ButtonCard = styled.div`
    margin: 10px 0;
`
export const Icon = styled.span`
    margin-right: 7px; 
    font-size: 15px;
`

export const NameLastName = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const LastName = styled.div`
    margin-left: 10px;
    width: 100%;
`


export const LeftAddon = styled.div`
    margin: 10px 0;
`

export const HeaderForm = styled.div`
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    border: 1px solid #363636;
    padding: 25px;
    width: 100%;
    min-width: 500px;
    border-radius: 15px;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column !important;
    margin-left: 20px;

`

export const TitleCard = styled.div`
    font-size: 20px;
    font-weight: 700;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`

export const Alerts = styled.div`
    margin: 5px 0;   
    width: 50%;

`