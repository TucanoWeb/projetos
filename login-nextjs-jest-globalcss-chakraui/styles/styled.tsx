import styled from "styled-components";

/* HEADER */
export const HeaderContainer = styled.div`
    
    width: 100%;
    height: 50px;
    background-color: black;
    align-items: center;
    display: flex;
    color: white;

    button {
        margin: 0px 30px;
    }


`
export const LogotipoStyle = styled.div`
    width: 10%;
    flex: 2;
    text-align: center;
`

export const SpaceHeader = styled.div`
    width: 30%;
    flex: 4;
`

export const MenuHeader = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    flex: 4;
    justify-content: center;
    align-items: center;

    h1{
        text-transform: uppercase;
        margin-left: 25px;
        cursor: pointer;
    }

    h1:hover{
        text-decoration: underline;
    }
`

/*BLOCO FOOTER */

export const ContainerFooter = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`


/* BLOCO BODY */

export const ContainerBody = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: center;

    input{
        margin: 5px 0;
    }

`

export const ContainerButton = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;

    button {
        width: 80%;
        margin: 10px 0;
    }
`

export const ContainerWarning = styled.div`
    width: 30%;
    margin-bottom: 15px;
`