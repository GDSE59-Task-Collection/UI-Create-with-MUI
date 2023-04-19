import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import './View.css'
import { useEffect,useState } from 'react';

export const View =()=>{ 
const [stuData,setStuData] = useState([])

  useEffect(()=>{
    console.log("component loaded")
    const data = localStorage.getItem('formDetails')
    setStuData(JSON.parse(data))   
  },[])

    return(
      <div className="tbl-view">
      <table>
        <thead>
          <th>Student Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Course</th>
        </thead>

        <tbody>
          {stuData.map((details)=>{
            return(
          <tr>    
          <td>{details.stuId}</td>
          <td>{details.firstName}</td>
          <td>{details.lastname}</td>
          <td>{details.gender}</td>
          <td>{details.email}</td>
          <td>{details.course}</td>
          <td onClick={()=>alert("Deleted")}>
            <IconButton aria-label="delete" color='warning'>
            <DeleteIcon />
            </IconButton>
            </td>
            <td>
            <IconButton aria-label="delete" color='success'>
            <UpgradeIcon />
            </IconButton>
          </td>
          </tr>
            )
          })}       
        </tbody>
      </table>
    </div>
    )
    // return formDetails.map(data => (
    //      <tr key = {data.stuId}>
    //          <td>{data.stuId}</td>
    //          <td>{data.firstName}</td>
    //          <td>{data.lastname}</td>
    //          <td>{data.email}</td>
    //          <td>{data.course}</td>
    //          <td onClick={()=>deleteData(data.stuId)}>
    //          <IconButton aria-label="delete" color='primary'>
    //          <DeleteIcon />
    //          </IconButton>
    //          </td>
             
    //      </tr>
    // ));
} 


