import React from 'react';
import{Container, NameChildren} from './styles'

export default function Title({children, name}){//desconstruindo children e name vindo do profile
    return(
        <Container>
            {/* renderizando o children vindo do profile */}
            {children}

            {/* Name passado por prop */}
            <NameChildren>{name}</NameChildren>
        </Container>
    )
}