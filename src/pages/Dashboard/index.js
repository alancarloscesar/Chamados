import React,{useContext, useEffect} from 'react';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

export default function Dashboard(){

    const {signOut, userStatus} = useContext(AuthContext);
    const navigate = useNavigate();

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
        // <div>
        //     <h1>Pagina Dashboard...</h1>
        //     <button onClick={Sair}>Sair do sistema</button>
        // </div>
        <Header/>
    )
}