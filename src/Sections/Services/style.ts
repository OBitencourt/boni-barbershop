import styled from "styled-components";

export const MainInfo = styled.div`

    font-size: 22px;
    color: #FFFF;
    width: 50%;
    padding: 50px;
    font-family: 'Cormorant';

    span {
        color: #DBAA68;
        font-size: 30px;
        font-weight: 700;
    }

    @media (max-width: 900px) {
        width: 100%;
        font-size: 17px;
        padding: 20px 0px;
        text-align: center;
    }
`

export const ServicesDiv = styled.div`
    padding: 20px;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 30px;

    @media (max-width: 710px) {
        width: 100%;
        padding: 0;
    }
`

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 12px;

    @media (max-width: 550px) {
        width: 100%;
        border-right: none;
        border-bottom: 0;
        border-left: 0;
        border-top: 1px solid #DBAA68;
        padding: 20px;
    }
`