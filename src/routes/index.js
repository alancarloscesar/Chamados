import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Customers from "../pages/Customers";
import New from "../pages/New";

export default function RoutesUrl(){
    return(
        <BrowserRouter>
            <Routes>
                <Route caseSensitive path="/" element={<SignIn/>} />
                <Route caseSensitive path="/dashboard" element={<Dashboard/>}/>
                <Route caseSensitive path="/profile" element={<Profile/>} />
                <Route caseSensitive path="/customers" element={<Customers/>} isPrivate />
                <Route caseSensitive path="/chamados" element={<New/>} />
                <Route caseSensitive path="/chamados/:id" element={<New/>} />
                {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}
