import React,{useState, useEffect, useContext} from "react";
import firebase from '../services/firebaseConnection'
import {Navigate} from 'react-router-dom'
import { AuthContext } from "../contexts/auth";

export default function Private(){
    const [signed, setSigned] = useState(false)
   // const []

    useEffect(()=>{
        const storageUserCheck = localStorage.getItem('SistemaUser');

        if(storageUserCheck){
            setSigned(true)
        }
    },[])
    

   

    // if(loading){//se o loading estiver rodando
    //     <div>
    //         <h1>Carregando...</h1>
    //     </div>
    // }

    if(!signed){//se não tiver user
        return <Navigate to='/' />
        alert('nao tinha user então fui para o signin')
    }else{
        return <Navigate to='/dashboard' />
    }
}