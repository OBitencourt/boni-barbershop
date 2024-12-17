import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: transparent;
    padding: 8px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #C38C47;
`

export const StyledNavbar = styled.nav`
    display: flex;
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