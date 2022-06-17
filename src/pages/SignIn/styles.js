import styled from 'styled-components';

export const Container  = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #1b1b1b;
    justify-content: center;
    align-items: center;
`;

export const ContextLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 631px;
    height: 179px;
    background-color: #181c2e;
`;

export const ContextLogoImg = styled.img`
    width: 170px;
    height: 128px;
`;

export const Title = styled.h1`
    color: #e6e6e6;
    margin-top: -35px;
    margin-left: 30vw;
`;

export const ContextInputs = styled.form`
    background-color: #eaeaec;
    width: 631px;
    padding-left: 22px;
    padding-right: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const ContextInputsInput = styled.input`
    height: 40px;
    padding-left: 24px;
    margin-bottom: 33px;
    width: 100%;
    border: 0;
    background-color: #fff;
    font-size: 16px;
`;

export const ContextInputsBtn = styled.button`
    background-color: #181c2e;
    width: 100%;
    height: 40px;
    border-radius: 7px;
    border: 0;
    color: #fff;
    font-size: 18px;
`;

export const Link = styled.a`
    margin-top: 14px;
    color: #000;
`;
