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

export const ContainerCustomers = styled.div`
    background-color: #f8f8f8;
    padding: 2rem;
    margin-top: 1.5rem;
`;

export const FormCustomers = styled.form`
    display: flex;
    flex-direction: column;
`;

export const LabelCustomers = styled.label`
    font-size: 1.2em;
`;

export const InputCustomers = styled.input`
    max-width: 20rem;
    height: 2.5em;
    border: 0;
    margin-bottom: 1.2em;
    padding-left: 1em;
    font-size: 1em;
`;

export const ButtonCustomers = styled.button`
    border: 0;
    background-color: #181c2e;
    height: 2rem;
    color: #fff;
    border-radius: 7px;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
    max-width: 20rem;
    margin-top: 1rem;
`;
