import { Avatar, Grid,Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import './RegisterStudent.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { Courses } from '../../data/Courses';
import { Gender } from '../../data/Gender';
import { FormDataHandler } from '../../handlers/FormDataHandler';
import { View } from '../view/View'
import FormHelperText from '@mui/material/FormHelperText';
import { DataFormCommon } from '../common/DataFormCommon'

//get data from local storage
// const collectDataFromLocalStorage = () =>{
//   const data = localStorage.getItem('formDetails');
//   if(data){
//     return JSON.parse(data)
//   } else{
//     return []
//   }
// }

export const RegisterStudent = ()=>{

  //state management
  const [stuId,setStuId] = useState("")
  const [firstName,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  const [gender,setGender] = useState("");
  const [course,setCourse] = useState("");

  const [formDetails,setFormDetails] = useState([]);

  const handleonsubmit = (e) =>{
    e.preventDefault()
        
    const formData = {
      stuId,
      firstName,
      lastname,
      address,
      email,
      gender,
      course
    }

    console.log(formData)

    setFormDetails([...formDetails,formData])
    // FormDataHandler(formData);
  

    setStuId("");
    setFirstName("")
    setLastName("")
    setAddress("")
    setEmail("")
    setGender("")
    setCourse("")

  }
//save data in local storage
  useEffect(() =>{
    localStorage.setItem('formDetails',JSON.stringify(formDetails));
 },[formDetails]);

 //delete data
 const deleteData = (stuId) =>{
    const deleteData = formDetails.filter((ele,index)=>{
      return ele.stuId !== stuId
    })
    setFormDetails(deleteData)
 }

    const paperStyle = {padding: 20, 
      height:'105vh',width: '60vw',margin:'80px auto'}
    return(
        
        <Grid className='main-outer'>
            <form onSubmit = {handleonsubmit}>
          <Paper 
          elevation={10} 
          style={paperStyle}
          className="stu-detail-form"
          >
            <h1>Please fill all the fields</h1>
            <div>
            <Avatar><AccountCircleIcon/></Avatar>
            </div>

            <DataFormCommon
            className="forminput-age" 
            label = "Student Id"  
            variant="outlined" 
            type="number"
            value = {stuId}
            onChange = {setStuId}
            required = "required"
            />

            <DataFormCommon
            className="forminput" 
            label = "First Name"  
            variant="outlined" 
            type="text"
            value = {firstName}
            onChange = {setFirstName}
            required = "required"
            />

           <DataFormCommon
            className="forminput" 
            label = "Last Name"  
            variant="outlined" 
            type="text"
            value = {lastname}
            onChange = {setLastName}
            required = "required"
            />

            <DataFormCommon
            className="forminput"  
            label = "Address"  
            variant="outlined" 
            type="text"
            value = {address}
            onChange = {setAddress}
            required = "required"
            />

            <DataFormCommon
            className="forminput"  
            label = "Email"  
            variant="outlined" 
            type="email"
            value = {email}
            onChange = {setEmail}
            required = "required"
            />
      
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className='input-data'
          value= {gender}
          onChange={e => setGender(e.target.value)}
          label="Gender"
          required
        >
        <MenuItem value="Gender">
            <em>None</em>
          </MenuItem>
          <MenuItem value={Gender.Gender1}>Male</MenuItem>
          <MenuItem value={Gender.Gender2}>Female</MenuItem>
        </Select>
    
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          className='input-data'
          value={course}
          onChange={e => setCourse(e.target.value)}
          label="Course"
          required
        >
        <MenuItem value="Course">
            <em>None</em>
          </MenuItem>
          <MenuItem value={Courses.Course1}>CMJD</MenuItem>
          <MenuItem value={Courses.Course2}>GDSE</MenuItem>
          <MenuItem value={Courses.Course3}>DEP</MenuItem>

        </Select>
          
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="success" type='submit'>
                Save
            </Button>
            <Button variant="outlined" color="error" type='reset'>
                Reset
            </Button>
          </Stack>
          
         </Paper>
        </form>
        
   </Grid>
        
    );
}