import { Button } from "@mui/material";
import {Link} from "react-router-dom";
import './Nav.css'

export const Nav = ()=>{
    return(
       <nav className="nav-outer">
           <div className="btn-outer">
               
           
                <Button variant="text" className="nav">Login</Button>
          
       
                <Button variant="text" className="nav">Sign-Up</Button>
        

       
                <Button variant="text" className="nav">Register</Button>
      

      
                <Button variant="text" className="nav">View</Button>
                
           </div>




           
       </nav>
    );
}