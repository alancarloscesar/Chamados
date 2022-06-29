import React,{useState, useEffect, useContext} from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {FiPlusCircle} from 'react-icons/fi'
import { AuthContext } from '../../contexts/auth'
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify'

import {Container, ContainerNew, ContextHeaderTitle, ContextMain
        ,FormNew, LabelNew, SelectNew,OptionNew,
        InputRadioOption, SpanNew, AreaInputsRadio, TextAreaNew,ButtonNew
} from './styles'

export default function New(){
      
    const [loadCustomers, setLoadCustomers] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [customerSelected, setCustomerSelected] = useState(0);

    const [assuntos, setAssuntos] = useState('Suporte')
    const [status, setStatus] = useState('Em Aberto')
    const [complemento, setComplemento] = useState('')

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        async function loadCustomers(){
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        nomeFantasia: doc.data().nomeFantasia
                    })
                })
                if(lista.length === 0){
                    console.log('NENHUMA EMPRESA ENCONTRADA');
                    setCustomers([ { id: '1', nomeFantasia: 'FREELA' } ]);
                    setLoadCustomers(false);
                    return;
                }
                setCustomers(lista);
                setLoadCustomers(false);
            })
            .catch((error)=>{
                console.log('DEU ALGUM ERRO!', error);
                setLoadCustomers(false);
                setCustomers([ { id: '1', nomeFantasia: '' } ]);
            })
        }
        loadCustomers();
    },[])

      //Chamado quando troca de cliente
  function handleChangeCustomers(e){
    //console.log('INDEX DO CLIENTE SELECIONADO: ', e.target.value);
    //console.log('Cliente selecionado ', customers[e.target.value])
    setCustomerSelected(e.target.value);
  }

    async function handleAddNew(e){
        e.preventDefault();

        await firebase.firestore().collection('chamados')
        .add({
            created: new Date(),
            cliente: customers[customerSelected].nomeFantasia,
            clienteId: customers[customerSelected].id,
            assunto: assuntos,
            status: status,
            complemento: complemento,
            userID: user.uid
        })
        .then(()=>{
            toast.success('Chamado criado com sucesso!!!')
        })
        .catch((error)=>{
            toast.error('Ops, erro ao cadastrar chamado.')
            console.log('Erro ao cadastrar: ',error)
        })
    }


    return(
    <Container>
        <ContextHeaderTitle>
            <Header/>
    
            <ContextMain>
                <Title name='Novo Chamado'>
                    <FiPlusCircle size={25} />
                </Title>

                <ContainerNew>
                    <FormNew onSubmit={handleAddNew}>
                        <LabelNew>Clientes</LabelNew>
                        {loadCustomers ? (
                            <input type='text' disabled value='Carregando clientes...' />
                        ) : (
                            <SelectNew value={customerSelected} onChange={handleChangeCustomers}>
                                {customers.map((item, index) => {
                                    return(
                                        <OptionNew key={item.id} value={index}>
                                            {item.nomeFantasia}
                                        </OptionNew>
                                    )
                                })}
                            </SelectNew>
                        )}
                        

                        <LabelNew>Assuntos</LabelNew>
                        <SelectNew value={assuntos} onChange={(e) => setAssuntos(e.target.value)}>
                            <OptionNew value='Suporte'>Suporte</OptionNew>
                            <OptionNew value='Visita Técnica'>Visita Técnica</OptionNew>
                            <OptionNew value='Financeiro'>Financeiro</OptionNew>
                        </SelectNew>

                        <LabelNew>Status</LabelNew>

                        <AreaInputsRadio>
                            <InputRadioOption
                                type='radio'
                                name='radio'
                                value='Aberto'
                                checked={status === 'Em Aberto'}
                                onChange={(e) => setAssuntos(e.target.value)}
                                />
                            <SpanNew>Em Aberto</SpanNew>

                            <InputRadioOption
                                type='radio'
                                name='radio'
                                value='Progresso'
                                checked={status === 'Progresso'}
                                onChange={(e) => setAssuntos(e.target.value)}
                                />
                            <SpanNew>Progresso</SpanNew>

                            <InputRadioOption
                                type='radio'
                                name='radio'
                                value='Atendido'
                                checked={status === 'Atendido'}
                                onChange={(e) => setAssuntos(e.target.value)}
                                />
                            <SpanNew>Atendido</SpanNew>
                        </AreaInputsRadio>

                        <LabelNew>Complemento</LabelNew>
                        <TextAreaNew type='text' placeholder='Descreva seu complemento... (opcional)'
                                     value={complemento} onChange={(e)=>setComplemento(e.target.value)}
                        />

                        <ButtonNew type='submit'>Registrar</ButtonNew>

                    </FormNew>
                </ContainerNew>

            </ContextMain>
        </ContextHeaderTitle>
    </Container>
    )
}