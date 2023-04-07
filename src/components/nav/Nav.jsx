import { Button } from "@mui/material";
import './Nav.css'

export const Nav = ()=>{
    return(
       <div className="nav-outer">
           <div className="btn-outer">
           <Button variant="text" className="nav">Login</Button>
           <Button variant="text" className="nav">Sign-Up</Button>
           <Button variant="text" className="nav">Register</Button>
           <Button variant="text" className="nav">View</Button>
           </div>
       </div>
    );
}