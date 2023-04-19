import { Routes, Route } from "react-router-dom"
import Nav  from '../nav/Nav.jsx'
import Login  from '../login/Login.jsx'
import SignUp  from '../signup/Signup.jsx'
import { RegisterStudent } from '../dataform/RegisterStudent.jsx'
import { View } from '../view/View'

export const RouteHandler = () =>{
    return(
        <>   
            <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="Sign-up" element={<SignUp/>}/>
               <Route path="Login" element={<Login/>}/>
               <Route path="Register Student" element={<RegisterStudent/>}/>
               <Route path="View" element={View}/>
            </Routes>
        </>
    );
}