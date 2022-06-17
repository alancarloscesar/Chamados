import firebase from "./services/firebaseConnection";
import RoutesUrl from "../src/routes";
import AuthProvider from "./contexts/auth";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';//importando css padrão do toast

function App() {
  return (
    <AuthProvider>
        <RoutesUrl/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </AuthProvider>
  );
}

export default App;

// estudar a pagina import RoutesUrl from "./pages/routes"; para entender as rotas privadas