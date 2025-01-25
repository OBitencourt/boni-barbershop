import styled from "styled-components";


export const MainInfo = styled.div`
    width: 50%;
    margin-left: 30px;
    
    h3 {
        color: #DBAA68;
        font-weight: 500;
        font-family: 'Lora';
        margin: 0;
        font-size: 2em;
    }

    p {
        color: #D9D9D9;
        font-family: 'Cormorant';
        font-size: 1.35em;
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
    bottom: 50px;
    left: 100px;


    @media (max-width: 750px) {
        z-index: -1;        
    }
    @media (max-width: 414px) {
        left: -20px;
        bottom: 0;
    }
`

export const StyledSection = styled.section`
    background-color: #301E09;
    z-index: 3;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media (max-width: 485px) {
        border-top-right-radius: 1.3em;
        border-top-left-radius: 1.3em;
        padding: 30px;
    }
`