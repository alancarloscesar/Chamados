import React,{useState, useContext, useEffect} from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {FiSettings,FiUpload} from 'react-icons/fi'
import avatar from '../../assets/avatar.png'
import firebase from '../../services/firebaseConnection'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'

import {Container,ContextHeaderTitle, ContextMain,
        MainProfile, LabelProfile, MainProfileForm, LabelProfileImg, SpanIcon, 
        InputProfileImg, InputProfile, ButtonProfile, AreaInputButton
} from './styles'

export default function Profile(){

    const { user, setUser, storageUser, userStatus } = useContext(AuthContext);

    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
    const [imageAvatar, setImageAvatar] = useState(null)

    const navigate = useNavigate();


    useEffect(()=>{
        if(!userStatus){//se não tiver user vindo do context
            navigate('/')//navega para o index
            return;
        }else{
            navigate('/profile')//fica nessa page
            return;
        }
    },[])

    //funçao de preview da img do upload, onchange dentro do input file
    function handleFile(e){
        if(e.target.files[0]){//se tiver algo aqui é pq selecionou uma imagem
            const image = e.target.files[0];

            if(image.type === 'image/jpeg' || image.type === 'image/png'){// somente png ou jpeg
                setImageAvatar(image)
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }else{
                alert('Envie uma imagem do tipo PNG ou JPEG');
                setImageAvatar(null)
                return null;
            }
        }
    }

    async function handleUpload(){
        const currentUid = user.uid;

        const uploadTask = await firebase.storage()//entrando no storage
        .ref(`images/${currentUid}/${imageAvatar.name}`)//crinado pasta com foto de cada user
        .put(imageAvatar)
        .then(async ()=>{
            console.log('Foto enviada com sucesso')

            await firebase.storage().ref(`images/${currentUid}`)//pegando a url da foto no storage para passar depois para o firestore
            .child(imageAvatar.name).getDownloadURL()
            .then(async (url)=>{
                let urlFoto = url;

                await firebase.firestore().collection('users')//update no firestore
                .doc(user.uid)
                .update({
                    avatarUrl: urlFoto,//passando urlFoto no avatarUrl dentro do firestore
                    nome: nome
                })
                .then(()=>{
                    // se der certo editar acima
                    let data = {
                        ...user,
                        avatarUrl: urlFoto,
                        nome: nome
                    };
                    setUser(data)//atualiza auth -> context
                    storageUser(data)
                })
            })
        })
    }

    async function handleSave(e){//editando somente o nome sem a foto
        e.preventDefault();

        if(imageAvatar === null && nome !== ''){// so quer trocar o nome e não a foto
            await firebase.firestore().collection('users')
            .doc(user.uid)//pegando uid do user dentro do context user passado 
            .update({
                nome: nome
            })
            .then(()=>{
                let data = {
                    ...user,//pegando tudo
                    nome: nome//mas so passa o nome
                };
                setUser(data)
                storageUser(data);

                alert('dados alterados')
            })
        }else if(nome !== '' && imageAvatar !== null){//se quer editar o nome e a img
            handleUpload();//chama a função de upload, firebase/storage
        }
    }

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
                        <MainProfileForm onSubmit={handleSave}>
                            <LabelProfileImg>
                                <SpanIcon>
                                    <FiUpload color='#fff' size={25}/>
                                </SpanIcon>

                                <InputProfileImg type='file' accept='image/*' onChange={handleFile} /><br/>

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