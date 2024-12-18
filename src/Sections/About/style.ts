import styled from "styled-components";

export const StyledSection = styled.section`
    height: 100vh;
    width: 100%;
    background-color: #301E09;
    z-index: 3;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

export const MainInfo = styled.div`
    width: 50%;
    margin-left: 30px;
    
    h3 {
        color: #DBAA68;
        font-weight: 500;
        font-family: 'Lora';
        margin: 0;
        font-size: 30px;
    }

    p {
        color: #D9D9D9;
        font-family: 'Cormorant';
        font-size: 18px;
        line-height: 24px;
        margin-top: 32px;
    }
`