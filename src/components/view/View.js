import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export const View = ({formDetails,deleteData})=>{ 
    return formDetails.map(data => (
         <tr key = {data.stuId}>
             <td>{data.stuId}</td>
             <td>{data.firstName}</td>
             <td>{data.lastname}</td>
             <td>{data.email}</td>
             <td>{data.course}</td>
             <td onClick={()=>deleteData(data.stuId)}>
             <IconButton aria-label="delete" color='primary'>
             <DeleteIcon />
             </IconButton>
             </td>
             
         </tr>
    ));
} 


