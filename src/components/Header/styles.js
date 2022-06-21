import styled from 'styled-components';
import ImgUrl from '../../assets/cover.png'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContainerMenu = styled.div`
    background-color: #181c2e;
    width: 20vw;
    height: 100vh;
`;

export const ContainerMenuAreaImg = styled.div`
    height: 25vh;
    background: url(${ImgUrl});//img importada
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img{
        width: 100px;
        height: 100px;
        border-radius: 50%;

    }
`;

export const ContainerMenuAreaOptions = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition: ease-in-out .4s;

    & :hover{
        background-color: #212121;
    }
`;

export const ContainerMenuAreaOptionsOption = styled.div`
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    width: 100%;

    & a{
        color: #fff;
        margin-left: 1rem;
    }
    
`;

