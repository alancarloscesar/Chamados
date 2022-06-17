import styled from 'styled-components';

export const Container = styled.div`
display: flex;
height: 100vh;
flex-direction: row;
`;

export const ContextMenu = styled.div`
background-color: #000411;
width: 25vw;
color: #fff;
font-weight: 500;
display: flex;
flex-direction: column;
align-items: center;
padding-left: 14px;
padding-right: 14px;
`;

export const ContextMenuUl = styled.ul`
margin-top: 10px;
border-top: 0.5px solid #fff;
padding-top: 25px;
display: flex;
flex-direction: column;
width: 100%;
align-items: flex-start;
`;

export const ContextMenuli = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
height: 8vh;
width: 100%;
padding-left: 20px;
&:hover{
    background-color: #efcb68;
    color: #000;
    font-weight: bold;
}
`;

export const Linka = styled.a`
color: #fff;
font-size: 17px;

`;


export const BtnTeste = styled.button`
background-color: #efcb68;
margin-top: 40px;
margin-left: 80px;
border: 0;
width: 12vw;
height: 8vh;
color: #212121;
font-size: 18px;
font-weight: bold;
`;

export const ContextMenuLogo  = styled.div`
    font-size: 60px;
    margin-top: 4vw;
    margin-bottom: 4vh;
`;

export const ContextMenuItemArea = styled.div`
    
`;


export const ContextBody = styled.div`
background-color: #160c28;
width: 75vw;
color: #fff;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 4vh;

`;

export const Input = styled.input`
height: 2.5rem;
width: 85%;
border: 0;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 7px;

`

