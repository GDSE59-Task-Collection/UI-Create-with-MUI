import { Avatar, Grid,Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import './DataForm.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const DataForm = ()=>{
    const paperStyle = {padding: 20, height:'85vh',width: '60vw',margin:'80px auto'}
    return(
        
        <Grid>
            <FormControl>
          <Paper 
          elevation={10} 
          style={paperStyle}
          className="stu-detail-form"
          >
            <h1>Fill the data to register</h1>
            <div>
            <Avatar><AccountCircleIcon/></Avatar>
            </div>                       
            <TextField className="forminput" label="First Name" variant="outlined"/>
          
            <TextField className="forminput" label="Last Name" variant="outlined" />
         
          
            <TextField className="forminput" label="Address" variant="outlined" />
        
            <TextField className="forminput" label="Email" variant="outlined" />
                
      
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          className='input-data'
        //   value=age
        //   onChange={handleChange}
          label="Age"
        >
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
        </Select>
    
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          className='input-data'
        //   value=age
        //   onChange={handleChange}
          label="Age"
        >
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>CMJD</MenuItem>
          <MenuItem value={20}>GDSE</MenuItem>
          <MenuItem value={30}>DEP</MenuItem>

        </Select>
          
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="success">
                Save
            </Button>
            <Button variant="outlined" color="error">
                Reset
            </Button>
         </Stack>
         </Paper>
        </FormControl>
   </Grid>
        
    );
}