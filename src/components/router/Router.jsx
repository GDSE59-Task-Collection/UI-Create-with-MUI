import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from '../nav/Nav'
import { Login } from '../nav/Nav'
import { SignUp } from '../signup/Signup'
import { DataForm } from '../dataform/DataForm'
import { View } from '../view/View'

export const Router = () =>{
    return(
        <>
         <BrowserRouter>
            <Nav/>
            <Routes>
               <Route path="/" element={SignUp}/>
               <Route path="/signup" element={SignUp}/>
               <Route path="/login" element={Login}/>
               <Route path="/dataform" element={DataForm}/>
               <Route path="/view" element={View}/>
            </Routes>
         </BrowserRouter>
        </>
    );
}