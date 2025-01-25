import styled from "styled-components";

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
    transition: all 200ms ease-in;
    font-size: 1.1em;

    &:hover {
        filter: brightness(1.07);
        transform: scale(1.03);
    }
`