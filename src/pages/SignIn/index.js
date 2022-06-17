import React,{useState,useContext,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import img from '../../assets/logo.svg'; 
import { AuthContext } from '../../contexts/auth';
import LottieFile from '../../components/LottieFile';


import {
    Container, ContextLogo, Title, ContextLogoImg, ContextInputs, ContextInputsInput, ContextInputsBtn
} from './styles'


export default function SignIn() {

    const {CadastrarUser, userStatus, LoginUser, loadingAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    const[loginCadTitulo, setLoginCadTitulo] = useState('Entrar')
    const[btnPrincipal, setBtnPrincipal] = useState('Acessar')
    const[link, setLink] = useState('Criar uma conta')

    
    useEffect(()=>{//use Effect para verificar se tem user -> true
        
        if(userStatus){//se sim abre direto a dashboard
            navigate('/dashboard')
            return;
        }else{
            navigate('/')
            return;
        }
        
    },[])
    
   
    
    function handleVerificaUp(e){//função para verificar se está logando ou cadastrando 
        e.preventDefault();

        if(loginCadTitulo === 'Entrar'){
            
            if(email !== '' && senha !== ''){
                LoginUser(email, senha)
            }else{
                alert('Preencha todos os campos!')
            }
            return;

        }else{
            if(email !== '' && senha !== '' && nome !== ''){
               CadastrarUser(email, senha, nome)
            }else{
                alert('Preencha todos os campos!')
            }
            return;
        }
    }

    function mudaStatus(){
        setBtnPrincipal(!loginCadTitulo)
        setLoginCadTitulo(!btnPrincipal)
        setLink(!link)
    }


    if(loadingAuth){//se o loading estiver rolando.... chama o lottie
        return(
            <LottieFile/>
        )
    }

    
 return (
   <Container>
       <ContextLogo>
            <ContextLogoImg src={img}/>
       </ContextLogo>

       <Title>{loginCadTitulo ? 'Entrar' : 'Cadastrar'}</Title>

       <ContextInputs onSubmit={handleVerificaUp}>

           {!loginCadTitulo &&(
           <ContextInputsInput placeholder='Nome' type='text'
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
           />
            )}

           <ContextInputsInput placeholder='E-mail' type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
           />
           <ContextInputsInput placeholder='*******' type='password'
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}
           />
           <ContextInputsBtn type='submit'>{loginCadTitulo ? 'Acessar' : 'Cadastrar'}</ContextInputsBtn>
       
           <Link to='/' onClick={mudaStatus} style={{color: '#000', marginTop: 14}}>{link ? 'Criar uma conta' : 'Fazer login'}</Link>
       </ContextInputs>
   </Container>
  );
}