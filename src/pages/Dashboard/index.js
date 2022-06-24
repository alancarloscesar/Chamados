import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import {FiMessageSquare, FiPlus, FiSearch, FiEdit} from 'react-icons/fi'
import './tableDashboard.css'

import { Container, ContextHeaderTitle, ContextMain, MainDash, SpanMainDash } from './styles'

export default function Dashboard(){

    const {signOut, userStatus} = useContext(AuthContext);
    const navigate = useNavigate();
    const [chamados, setChamados] = useState([1]);

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
                                <Link to='/new' className='BtnCadastrar'>
                                        <FiPlus size={25} color='#fff' />
                                        Novo Chamado
                                </Link>

                                <table>
                                    <thead>
                                        <tr>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Assunto</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Cadastrado em</th>
                                        <th scope="col">#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td data-label="Cliente">Sujeito</td>
                                        <td data-label="Assunto">Suporte</td>
                                        <td data-label="Status">
                                            <span className="badge" style={{backgroundColor: '#5cb85c' }}>Em aberto</span>
                                        </td>
                                        <td data-label="Cadastrado">20/06/2021</td>
                                        <td data-label="#">
                                            <button className="action" style={{backgroundColor: '#3583f6' }}>
                                                <FiSearch color="#FFF" size={17} />
                                            </button>
                                            <button className="action" style={{backgroundColor: '#F6a935' }}>
                                                <FiEdit color="#FFF" size={17} />
                                            </button>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )
                    }

                </ContextMain>

            </ContextHeaderTitle>
        </Container>
            
        </>
    )
}