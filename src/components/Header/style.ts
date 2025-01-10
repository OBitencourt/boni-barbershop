import { style } from "@splidejs/splide/src/js/utils";
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: transparent;
    padding: 8px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #C38C47;

    @media (max-width: 590px) {
        padding: 8px 40px
    }
`

export const StyledNavbar = styled.nav`
    display: flex;
    
    @media (max-width: 590px) {
        display: none;
    }
`

export const StyledButton = styled.button`
    border: none;
    background: none;
    font-family: 'Lora';
    color: white;
    transition: all 150ms ease-in;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 4px 16px;
    margin-right: 4px;
    
    &:hover {
        color: #C38C47;
    }
`

export const SpecialButton = styled.button`
    border: none;
    background: linear-gradient(to bottom, #9F601C, #C39C47, #DBAA69, #C88E1B);
    font-family: 'Lora';
    color: white;
    transition: all 150ms ease-in;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 16px;
    border-radius: 30px;
    
    &:hover {
        filter: brightness(0.9);
    }
`

export const InstaButton = styled.div`
    display: block;

    @media (max-width: 590px) {
        display: none;
    }
`


export const MenuButton = styled.div`
    display: none;

    @media (max-width: 590px) {
        display: block;
    }
`