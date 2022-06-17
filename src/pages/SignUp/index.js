// import React,{useState,useContext,useEffect} from 'react';
// import {Link, useNavigate} from 'react-router-dom';
// import img from '../../assets/logo.svg'; 
// import { AuthContext } from '../../contexts/auth';
// import LottieFile from '../../components/LottieFile';

// import {
//     Container, ContextLogo, Title, ContextLogoImg, ContextInputs, ContextInputsInput, ContextInputsBtn
// } from './styles'


// export default function SignUp() {

//     const {CadastrarUser, userStatus, LoginUser, loadingAuth} = useContext(AuthContext)
//     const navigate = useNavigate()
    
//     const[nome, setNome] = useState('');
//     const[email, setEmail] = useState('');
//     const[senha, setSenha] = useState('');

      
    
//     function handleCreateUser(e){//função para verificar se está logando ou cadastrando 
//             e.preventDefault();
            
//             if(email !== '' && senha !== '' && nome !== ''){

//               CadastrarUser(email, senha, nome)
//             }
//     }


//  return (
//    <Container>
//        <ContextLogo>
//             <ContextLogoImg src={img}/>
//        </ContextLogo>

//        <Title>Cadastrar</Title>

//        <ContextInputs onSubmit={handleCreateUser}>

//            <ContextInputsInput placeholder='Nome' type='text'
//                 value={nome}
//                 onChange={(e)=>setNome(e.target.value)}
//            />

//            <ContextInputsInput placeholder='E-mail' type='email'
//                 value={email}
//                 onChange={(e)=>setEmail(e.target.value)}
//            />
//            <ContextInputsInput placeholder='*******' type='password'
//                 value={senha}
//                 onChange={(e)=>setSenha(e.target.value)}
//            />
//            <ContextInputsBtn type='submit'>Cadastrar</ContextInputsBtn>
       
//            <Link to='/' style={{color: '#000', marginTop: 14}}>Fazer login</Link>
//        </ContextInputs>
//    </Container>
//   );
// }
// // }