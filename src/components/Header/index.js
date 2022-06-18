import React,{useContext, useEffect} from "react";
import {AuthContext} from '../../contexts/auth'
import { FiMonitor,FiUsers,FiSettings,FiLogOut  } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import avatar from '../../assets/avatar.png'

import { Container, 
        ContainerMenu,ContainerMenuAreaImg, ContainerMenuAreaOptions, ContainerMenuAreaOptionsOption,
        ContainerContext,
} from './styles'


export default function Header(){
    
    const {user,signOut} = useContext(AuthContext);
    const navigate = useNavigate();

    function LogOut(){
        signOut()
        navigate('/')
    }

    return(
        <Container>
            <ContainerMenu>
                <ContainerMenuAreaImg>
                    <img src={user === null ? avatar : user.avatarUrl } alt='Imagem do avatar' />
                </ContainerMenuAreaImg>
                <ContainerMenuAreaOptions>
                    <ContainerMenuAreaOptionsOption>
                        <FiMonitor color="#fff" size={25} />
                        <Link to='/dashboard'>Chamados</Link>
                    </ContainerMenuAreaOptionsOption>

                    <ContainerMenuAreaOptionsOption>
                        <FiUsers color="#fff" size={25} />
                        <Link to='/customers'>Clientes</Link>
                    </ContainerMenuAreaOptionsOption>

                    <ContainerMenuAreaOptionsOption>
                        <FiSettings color="#fff" size={25} />
                        <Link to='/profile'>Configurações</Link>
                    </ContainerMenuAreaOptionsOption>

                    <ContainerMenuAreaOptionsOption style={{marginTop: 40}} onClick={LogOut}>
                        <FiLogOut color="#fff" size={25} />
                        <Link to='/'>Sair</Link>
                    </ContainerMenuAreaOptionsOption>
                </ContainerMenuAreaOptions>
            </ContainerMenu>
            
        </Container>
    )
}