import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const ContextHeaderTitle = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContextMain = styled.div`
    margin: 2em 2em 0em 2em;
    width: 100%;
`;

export const MainDash = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 2em 0;
    align-items: center;
    margin-bottom: 1em;
    margin-top: 1.5rem;

    & a{
        background-color: #83bf02;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: ease-in 0.2s;
        float: right;
        margin: 2em 0 1em 0;

        color: #fff;
        font-weight: 600;
        padding: .5em;
        border-radius: 6px;
    }

    & a:hover{
        background-color: #5fd204;
        transform: scale(1.1);
    }
`;

export const SpanMainDash = styled.span`

`;