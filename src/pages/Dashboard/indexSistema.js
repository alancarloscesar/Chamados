import {useEffect,useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import './styles'
import { Container,ContextMenu, ContextBody, ContextMenuLogo,BtnTeste, ContextMenuUl, 
  ContextMenuli, Linka, Form, Input } from './styles';




export default function DashboardSistema() {

  const {signed} = useContext(AuthContext)

  // if(signed){
  //   alert('logadooo')
  // }else{
  //   return <Navigate to='/' />
  // }



 return (
    <Container>
        <ContextMenu>
            <ContextMenuLogo>GAP</ContextMenuLogo>
            <ContextMenuUl>
              <ContextMenuli><Linka href='#' >Realizar Venda</Linka></ContextMenuli>
              <ContextMenuli><Linka href='#' >Cadastro de Produtos</Linka></ContextMenuli>
              <ContextMenuli><Linka href='#' >Cadastro de Fornecedores</Linka></ContextMenuli>
              <ContextMenuli><Linka href='#' >Realizar Compra</Linka></ContextMenuli>
              <ContextMenuli><Linka href='#' >Faturamento</Linka></ContextMenuli>
              <ContextMenuli><Linka href='#' >Dashboard</Linka></ContextMenuli>
              <ContextMenuli style={{marginTop: 50,backgroundColor: '#ff595e'}}><Linka href='#' >Sair</Linka></ContextMenuli>
            </ContextMenuUl>
        </ContextMenu>
        <ContextBody>
            <h1>Cadastro de Produtos</h1>
            <Form>
              <label>
              Produto:
              <Input type='text'  />
              </label>
              <Input type='text'  />
              <Input type='text'  />
            </Form>
            <BtnTeste>Cadastrar</BtnTeste>
        </ContextBody>
    </Container>
  );
}