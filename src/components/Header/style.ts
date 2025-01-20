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
    cursor: pointer;
    background-color: none;
    transition: 200ms all ease-in-out;
    padding: 10px;
    border-radius: 100%;
    margin-right: -15px;
    
    &:hover {
        background-color:  #301E09;
    }

    @media (max-width: 590px) {
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`


// MOBILE

export const MenuMobile = styled.div<{ isOpen: boolean }>`
    height: 100vh;
    background-color: #301e09;
    width: 100%;
    position: fixed; /* Usar fixed garante que o menu cubra toda a tela */
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    transform: translateY(${({ isOpen }) => (isOpen ? "0" : "100%")});
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

`;

export const NavMobile = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    width: 100%;
`

export const ButtonMobile = styled.button`
    border: none;
    background-color: transparent;
    background: none;
    color: white;
    width: 100%;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: #301e09;
    }

    &:active {
        transform: scale(0.95); /* Cria um efeito de "aperto" */
        background-color: rgba(250, 250, 250, 0.97); /* Adiciona um fundo para indicar o clique */
    }
`