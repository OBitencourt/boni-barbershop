import styled from "styled-components";


export const MainInfo = styled.div`
    width: 50%;
    margin-left: 30px;
    
    h3 {
        color: #DBAA68;
        font-weight: 500;
        font-family: 'Lora';
        margin: 0;
        font-size: 1.7em;
    }

    p {
        color: #D9D9D9;
        font-family: 'Cormorant';
        font-size: 1.1em;
        line-height: 24px;
        margin-top: 32px;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`

export const ImageDiv = styled.div`
    display: block;


    @media (max-width: 750px) {
        display: none;
    }
`

export const LogoDiv = styled.div`
    position: absolute;
    bottom: -20px;
    left: -50px;


    @media (max-width: 750px) {
        z-index: -1;        
    }
`