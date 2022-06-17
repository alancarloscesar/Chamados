import React from "react";
import { FiMonitor,FiUsers,FiSettings  } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, 
        ContainerMenu,ContainerMenuAreaImg, ContainerMenuAreaOptions, ContainerMenuAreaOptionsOption,
        ContainerContext,
} from './styles'

export default function Header(){
    return(
        <Container>
            <ContainerMenu>
                <ContainerMenuAreaImg>

                </ContainerMenuAreaImg>
                <ContainerMenuAreaOptions>
                    <ContainerMenuAreaOptionsOption>
                        <FiMonitor color="#000" size={25} />
                        <Link to='/dashboard'>Chamados</Link>
                    </ContainerMenuAreaOptionsOption>

                    <ContainerMenuAreaOptionsOption>
                        <FiUsers color="#000" size={25} />
                        <Link to='/dashboard'>Clientes</Link>
                    </ContainerMenuAreaOptionsOption>

                    <ContainerMenuAreaOptionsOption>
                        <FiSettings color="#000" size={25} />
                        <Link to='/dashboard'>FiSettings</Link>
                    </ContainerMenuAreaOptionsOption>
                </ContainerMenuAreaOptions>
            </ContainerMenu>
            <ContainerContext>
                <h1>Area do conteúdo</h1>
            </ContainerContext>
        </Container>
    )
}