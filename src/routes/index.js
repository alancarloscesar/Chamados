import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Private from "./Private";
// import RouteWrapper from './RouteIF'

export default function RoutesUrl(){
    return(
        <BrowserRouter>
            <Routes>
                <Route caseSensitive path="/" element={<SignIn/>} />
                <Route caseSensitive path="/register" element={<SignUp/>} />
                <Route caseSensitive path="/dashboard" element={<Dashboard/>}/>
                {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}
