import styled from "styled-components";

export const ContainerModal = styled.div`
    
    //posicionando o modal no centro aplicando o background com um opacity e deixando na frente com
    // o z-index
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentModal = styled.div`
    background-color: #fff;
    height: 20rem;
    width: 30rem;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0,0,0, 0.8);
    transition: ease-in-out 2s;
`;

export const ButtonCloseModal = styled.button`
    background-color: #F65835;
    border: 0;
    width: 6rem;
    height: 2rem;
    color: #fff;
    font-weight: 700;

    margin: 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ContentModalArea = styled.div`
    padding: 1rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #212121;
`;

export const ContentModalAreaRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    & span{
        margin-right: .5em;
    }
`;