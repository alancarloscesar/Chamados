import React,{useState, useContext} from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {FiSettings,FiUpload} from 'react-icons/fi'
import avatar from '../../assets/avatar.png'

import { AuthContext } from '../../contexts/auth'

import {Container,ContextHeaderTitle, ContextMain,
        MainProfile, LabelProfile, MainProfileForm, LabelProfileImg, SpanIcon, 
        InputProfileImg, InputProfile, ButtonProfile, AreaInputButton
} from './styles'

export default function Profile(){

    const { user } = useContext(AuthContext);

    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)

    return(
        <Container>
            <ContextHeaderTitle>
                <Header/>

                <ContextMain>
                    {/* Enviando para o childrem o icone e um name(prop) configurando la no componente title */}
                    <Title name="Meu perfil">
                        <FiSettings size={25} color='#000' />
                    </Title>

                    <MainProfile>
                            {/* <h1>Olá, {user && user.nome}.</h1> */}
                        <MainProfileForm>
                            <LabelProfileImg>
                                <SpanIcon>
                                    <FiUpload color='#000' size={25}/>
                                </SpanIcon>

                                <InputProfileImg type='file' accept='image/*' /><br/>

                                {
                                    avatarUrl === null 
                                    ?
                                    <img src={avatar} width='250' height='250' alt="Foto de perfil" />
                                    :
                                    <img src={avatarUrl} width='250' height='250' alt="Foto de perfil" />
                                }

                            </LabelProfileImg>
                            
                            <AreaInputButton>
                                <LabelProfile>Nome:</LabelProfile>
                                <InputProfile type='text' value={nome} onChange={(e)=>setNome(e.target.value)} />

                                <LabelProfile>Email: </LabelProfile>
                                <InputProfile type='text' value={email} disabled={true}/>

                                <ButtonProfile type='submit'>Salvar</ButtonProfile>
                            </AreaInputButton>


                        </MainProfileForm>
                    </MainProfile>
                </ContextMain>

            </ContextHeaderTitle>
        </Container>
    )
}