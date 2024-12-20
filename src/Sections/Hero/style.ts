import styled from "styled-components";

export const MainInfo = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Lora';
    padding-top: 12px;
    h1 {
        width: 100%;
        line-height: 35px;
        color: white;
        font-weight: 500;
        letter-spacing: 2px;
        font-size: 2.4em;
        margin-bottom: 40px;
    }

    span {
        color: #DBAA68;
    }
`
export const PrimaryButton = styled.button`
    border: none;
    background: none;
    background-color: #C38C47;
    font-family: 'Lora';
    color: #422B0F;
    font-weight: 600;
    padding: 10px 15px;
    width: 35%;
    margin-top: 40px;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 27px;
    transition: all 200ms ease-in;

    &:hover {
        filter: brightness(1.07);
        transform: scale(1.03);
    }
`

export const SecondaryButton = styled.button`
    border: 1px solid #C38C47;
    background: none;
    background-color: transparent;
    font-family: 'Lora';
    color: #C38C47;
    font-weight: 600;
    padding: 10px 15px;
    width: 50%;
    margin-top: 40px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
        background-color: #C38C47;
        color: #422B0F;
    }
`