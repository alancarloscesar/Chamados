import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const ContextHeaderTitle = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContextMain = styled.div`
    margin: 2rem 5rem;
    width: 100%;
`;

export const MainProfile = styled.div`
    display: flex;
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: .8em;
    align-items: center;
    margin-bottom: 1em;
    margin-top: 1.5rem;

`;

export const MainProfileForm = styled.form`
    margin-top: .6em;
`;

export const LabelProfileImg = styled.label`
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;


    & img{
        border-radius: 50%;
        object-fit: cover;
    }
`;


export const SpanIcon = styled.span`
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition: all .5s;
    
    &:hover{
        opacity: 1;
        transform: scale(1.4);
        cursor: pointer;
    }
`;

export const AreaInputButton = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

export const LabelProfile = styled.label`
    font-size: 1.2em;
`;

export const InputProfileImg = styled.input`
    display: none;

`;

export const InputProfile = styled.input`
    margin-bottom: 1.5em;
    font-size: 18px;
    padding: 0.4em .6em;
    border: 0;
    background-color: #fff;

    &:disabled{
        cursor: not-allowed;
    }
`;

export const ButtonProfile = styled.button`
    border: 0;
    background-color: #181c2e;
    height: 2rem;
    color: #fff;
    border-radius: 7px;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;

`;
