import {useState, createContext, useEffect} from "react";
import firebase from '../../src/services/firebaseConnection';
import { useNavigate,Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});


function AuthProvider({ children }){
    const [user, setUser] = useState(null)
    const [userStatus, setUserStatus] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loginRegisterStatus, setLoginRegisterStatus] = useState(false);
    //const navigate = useNavigate();

    useEffect(()=>{
        function loadingStorage(){
            const storageUserCheck = localStorage.getItem('SistemaUser');

            if(storageUserCheck){
                setUser(JSON.parse(storageUserCheck))
                setUserStatus(true);
                setLoading(false);
                console.log(user)
            }
             else{
                setUserStatus(false)
                setLoading(false)
            }            
        }
        loadingStorage();
    },[])

    //fazendo login
    async function LoginUser(email, password){
        setLoadingAuth(true)
        
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;//armazenando user de quem estiver logando

            //entrando dentro do firestore e pegando a collection users passando já o uid de user
            const userProfile = await firebase.firestore().collection('users')
            .doc(uid).get();

            let data = {//objeto com os dados
                uid: uid,
                nome: userProfile.data().nome,
                avatarUrl: userProfile.data().avatarUrl,
                email: value.user.email,
            }

            setUser(data);
            setUserStatus(true);
            storageUser(data);
            setLoadingAuth(false);
            setLoginRegisterStatus(true);

            toast.success(`Bem vindo de volta, ${data.nome}`)

        })
        .catch((error)=>{
            setLoadingAuth(false)
            setUserStatus(false)
            setLoginRegisterStatus(false);
            toast.error('Erro ao efetuar login')
        })
    }
   
    //cadastrando user
    async function CadastrarUser(email, password, nome){//parametros usados nos inputs
        setLoadingAuth(true)

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value)=>{
            await firebase.firestore().collection('users')//criando collection
            .doc(value.user.uid)//criando um doc com o uid do user
            .set({//criando os campo do doc
                nome: nome,
                avatarUrl: null,
            })
            .then(()=>{
                let data = {//objeto com os dados
                    uid: value.user.uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                }
                setUser(data)
                setUserStatus(true)
                storageUser(data)
                setLoadingAuth(false)

                toast.success('Usuário cadastrado')

            })
        })
        .catch((error)=>{
            console.log(error)
            setLoadingAuth(false)
            setUserStatus(false)
            toast.error('Erro ao cadastrar user')
        })
    }

    function storageUser(data){
        localStorage.setItem('SistemaUser',JSON.stringify(data));
        setUserStatus(true)
        return;
    }

    async function signOut(){
        await firebase.auth().signOut;//logout user
        localStorage.removeItem('SistemaUser')// limpando o localstorage
        setUserStatus(false)
        setLoadingAuth(false)
        return;
    }


    return(
        //!! converte o objeto user para boolean
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            userStatus,
            loading,
            CadastrarUser,
            signOut,
            LoginUser,
            loginRegisterStatus,
            loadingAuth,
            setUser,
            storageUser
            }} >

            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

