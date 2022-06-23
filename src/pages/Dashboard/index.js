import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import {FiMessageSquare, FiPlus} from 'react-icons/fi'

import { Container, ContextHeaderTitle, ContextMain, MainDash, SpanMainDash } from './styles'

export default function Dashboard(){

    const {signOut, userStatus} = useContext(AuthContext);
    const navigate = useNavigate();
    const [chamados, setChamados] = useState([]);

    useEffect(()=>{
        if(!userStatus){//se não tiver user vindo do context
            navigate('/')//navega para o index
            return;
        }else{
            navigate('/dashboard')//fica no dash
            return;
        }
    },[])


    function Sair(){
        signOut();
        navigate('/')
    }

    return(
        <>
        <Container>
            <ContextHeaderTitle>
                <Header/>

                <ContextMain>
                    {/* Enviando para o childrem o icone e um name(prop) configurando la no componente title */}
                    <Title name="Meu perfil">
                        <FiMessageSquare size={25} color='#000' />
                    </Title>

                    {
                        chamados.length === 0 ? (

                            <MainDash>
                                <SpanMainDash>Nenhum chamado registrado.</SpanMainDash>
                                <Link to='/new'>
                                        <FiPlus size={25} color='#fff' />
                                        Novo Chamado
                                </Link>

                            </MainDash>
                        ) : (
                            <>
                                <Link to='/new'>
                                        <FiPlus size={25} color='#fff' />
                                        Novo Chamado
                                </Link>
                            </>
                        )
                    }

                </ContextMain>

            </ContextHeaderTitle>
        </Container>
            
        </>
    )
}