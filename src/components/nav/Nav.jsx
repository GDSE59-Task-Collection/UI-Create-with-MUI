import { Button } from "@mui/material";
import './Nav.css'

export const Nav = ()=>{
    return(
       <div className="nav-outer">
           <div className="btn-outer">
           <Button variant="outlined" className="nav">Login</Button>
           <Button variant="outlined" className="nav">Sign-Up</Button>
           <Button variant="outlined" className="nav">Register</Button>
           <Button variant="outlined" className="nav">View</Button>
           </div>
       </div>
    );
}