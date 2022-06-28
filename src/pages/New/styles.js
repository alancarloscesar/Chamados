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

export const ContainerNew = styled.div`
    background-color: #f8f8f8;
    padding: 2rem;
    margin-top: 1.5rem;
`;

export const FormNew = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 30em;
`;

export const LabelNew = styled.label`
    font-size: 1.3em;
`;

export const SelectNew = styled.select`
    height: 2.5em;
    width: 100%;
    background-color: #fff;
    padding-left: 10px;
    margin-bottom: 1rem;
    border: 0;
`;

export const OptionNew = styled.option`
    background-color: #fff;
`;

export const AreaInputsRadio = styled.div`
    display: flex;
    flex-direction: row;
    margin: .7em 0 2em;
`;

export const InputRadioOption = styled.input`
    &:not(:first-child){
        margin-left: 1rem;
    }
`;

export const SpanNew = styled.span`
    margin-left: .4em;
`;

export const TextAreaNew = styled.textarea`
    min-height: 6rem;
    padding: 1em;
`;

export const ButtonNew = styled.button`
    border: 0;
    background-color: #181c2e;
    height: 2rem;
    color: #fff;
    border-radius: 7px;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
    margin-top: 1rem;
`;