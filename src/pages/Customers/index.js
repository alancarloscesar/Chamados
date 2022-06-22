import React,{useState} from 'react'
import Title from '../../components/Title'
import Header from '../../components/Header'
import {FiUser} from 'react-icons/fi'
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify'


import { ButtonCustomers, Container, ContainerCustomers, ContextHeaderTitle,
     ContextMain, FormCustomers, InputCustomers, LabelCustomers } from './styles'

export default function Customers(){

    const [nomeFantasia, setNomeFantasia] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleAdd(e){
        e.preventDefault();

        if(nomeFantasia !== '' && cnpj !== '' && endereco !== ''){
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                cnpj: cnpj,
                endereco: endereco
            })
            .then(()=>{
                setNomeFantasia('')
                setCnpj('')
                setEndereco('')
                toast.success('Cliente cadastrado!')
            })
        }else{
            toast.error('Preencha todos os campos!')
        }
    }

    return(
        <Container>
            <ContextHeaderTitle>
                <Header/>

                <ContextMain>
                    {/* Enviando para o childrem o icone e um name(prop) configurando 
                    la no componente title */}
                    <Title name="Clientes">
                        <FiUser size={25} color='#000' />
                    </Title>

                    <ContainerCustomers>
                        <FormCustomers onSubmit={handleAdd}>
                            <LabelCustomers>Nome Fantasia</LabelCustomers>
                            <InputCustomers placeholder='Nome da empresa' value={nomeFantasia} onChange={(e)=>setNomeFantasia(e.target.value)} />

                            <LabelCustomers>CNPJ</LabelCustomers>
                            <InputCustomers placeholder='Seu CNPJ' value={cnpj} onChange={(e)=>setCnpj(e.target.value)} />

                            <LabelCustomers>Endereço</LabelCustomers>
                            <InputCustomers placeholder='Seu Endereço' value={endereco} onChange={(e)=>setEndereco(e.target.value)} />

                            <ButtonCustomers type='submit'>Cadastrar</ButtonCustomers>
                        </FormCustomers>
                    </ContainerCustomers>
                    

                </ContextMain>
            </ContextHeaderTitle>
        </Container>
    )
}