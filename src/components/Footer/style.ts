import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 50px 90px;
    background-color: #DBAA68;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 680px) {
        justify-content: center;
        
    }
`
export const InfoWrapper = styled.div`
    display: grid;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70%;


    @media (max-width: 450px) {
        width: 100%;
        display: grid;
        gap: 20px;
        margin-top: 28px;
    }
`
