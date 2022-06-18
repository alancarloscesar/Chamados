import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {FiSettings} from 'react-icons/fi'
import {Container,ContextHeaderTitle, ContextMain} from './styles'

export default function Profile(){
    return(
        <Container>
            <ContextHeaderTitle>
                <Header/>

                <ContextMain>
                    {/* Enviando para o childrem o icone e um name(prop) configurando la no componente title */}
                    <Title name="Meu perfil">
                        <FiSettings size={25} color='#000' />
                    </Title>
                </ContextMain>

            </ContextHeaderTitle>
        </Container>
    )
}