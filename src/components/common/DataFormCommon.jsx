import TextField from '@mui/material/TextField'

export const DataFormCommon = (props)=>{
    return(
       <TextField
       className={props.className}
       label= {props.label}
       variant = {props.variant}
       type = {props.type}
       value = {props.value}
       onChange = {e => {props.onChange(e.target.value)}}
       required = {props.required}
       >
       </TextField>
    )
}