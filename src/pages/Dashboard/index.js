import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import {FiMessageSquare, FiPlus, FiSearch, FiEdit} from 'react-icons/fi'
import {format} from 'date-fns'
import firebase from '../../services/firebaseConnection'
import './tableDashboard.css'
import Modal from '../../components/Modal';

import { Container, ContextHeaderTitle, ContextMain, MainDash, SpanMainDash, ButtonMore } from './styles'

export default function Dashboard(){

    const {signOut, userStatus} = useContext(AuthContext);
    const navigate = useNavigate();

    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [lastDocs, setLastDocs] = useState();


    const [showPostModal, setShowPostModal] = useState(false);
    const [detail, setDetail] = useState();


    const listRef = firebase.firestore().collection('chamados').orderBy('created','desc');//buscando collection e ordenando decrescente

    useEffect(()=>{
        if(!userStatus){//se não tiver user vindo do context
            navigate('/')//navega para o index
            return;
        }else{
            navigate('/dashboard')//fica no dash
            return;
        }
    },[])

    useEffect(()=>{//effect para trazer a função de load chamdado
        loadChamados();

        return () => {

        }
    },[])

    
    
    async function loadChamados(){
        await listRef.limit(5)
        .get()
        .then((snapshot)=>{
            updateState(snapshot)//chamando função e passando o snap
        })
        .catch((error)=>{
            console.log('Deu algum problema: ',error)
            setLoadingMore(false)
        })
        setLoading(false)
    }


    async function updateState(snapshot){
        const isCollectionEmpty = snapshot.size === 0;

        if(!isCollectionEmpty){
            let lista = [];

            snapshot.forEach((doc)=>{
                lista.push({
                    id: doc.id,
                    assunto: doc.data().assunto,
                    cliente: doc.data().cliente,
                    clienteId: doc.data().clienteId,
                    created: doc.data().created,
                    createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),//formatando data
                    status: doc.data().status,
                    complemento: doc.data().complemento
                })
            })
            const lastDoc = snapshot.docs[snapshot.docs.length -1]; //pegando o ultimo documento buscado

            setChamados(chamados => [...chamados, ...lista]);
            setLastDocs(lastDoc);
        }else{
            setIsEmpty(true)
        }
        setLoadingMore(false)
    }



    async function handleMore(){
        setLoadingMore(true)
        await listRef.startAfter(lastDocs).limit(5)
        .get()
        .then((snapshot)=>{
            updateState(snapshot)
        })
    }

    function togglePostModal(item){//função que chamará o modal passando o item(linha da tabela)
        setShowPostModal(!showPostModal)//trocando de true para false
        setDetail(item)
    }


    if(loading){
        return(
            <Container>
                <ContextHeaderTitle>
                     <Header/>

                <ContextMain>
                    {/* Enviando para o childrem o icone e um name(prop) configurando la no componente title */}
                    <Title name="Meu perfil">
                        <FiMessageSquare size={25} color='#000' />
                    </Title>

                    <MainDash>
                        <SpanMainDash>Buscando chamados...</SpanMainDash>
                    </MainDash>
                </ContextMain>
                </ContextHeaderTitle>
            </Container>
        )
    }


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
                    <Title name="Dashboard">
                        <FiMessageSquare size={25} color='#000' />
                    </Title>

                    {
                        chamados.length === 0 ? (

                            <MainDash>
                                <SpanMainDash>Nenhum chamado registrado.</SpanMainDash>
                                <Link to='/chamados'>
                                        <FiPlus size={25} color='#fff' />
                                        Novo Chamado
                                </Link>

                            </MainDash>
                        ) : (
                            <>
                                <Link to='/chamados' className='BtnCadastrar'>
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
                                        {chamados.map((item, index)=>{
                                            return(
                                                <tr key={index}>
                                                <td data-label="Cliente">{item.cliente}</td>
                                                <td data-label="Assunto">{item.assunto}</td>
                                                <td data-label="Status">
                                                    <span className="badge" style={{backgroundColor: item.status === 'Em Aberto' ? '#5cb85c' : '#999' }}>{item.status}</span>
                                                </td>
                                                <td data-label="Cadastrado">{item.createdFormated}</td>
                                                <td data-label="#">
                                                    <button className="action" style={{backgroundColor: '#3583f6' }} onClick={()=>togglePostModal(item)}>
                                                        <FiSearch color="#FFF" size={17} />
                                                    </button>
                                                    <Link className="action" style={{backgroundColor: '#F6a935' }} to={`/chamados/${item.id}`}>
                                                        <FiEdit color="#FFF" size={17} />
                                                    </Link>
                                                </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                    
                                {loadingMore && <h3 style={{textAlign: 'center', marginTop: 15 }}>Buscando dados...</h3>}
                                { !loadingMore && !isEmpty && <ButtonMore className="btn-more" onClick={handleMore}>Buscar mais</ButtonMore> }

                            </>
                        )
                    }

                </ContextMain>

            </ContextHeaderTitle>
        </Container>
            
        {showPostModal && (
            <Modal
                conteudo={detail}
                close={togglePostModal}
            />
        )}
        
        </>
    )
}