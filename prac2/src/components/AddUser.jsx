

import React, { useState } from "react";
import { FormControl, FormGroup, Input, InputLabel,Typography,styled,Button } from "@mui/material";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
  margin-top: 30px ;
}
`

const data = {
  name:'',
  username:'',
  email:'',
  phone:''
}



const Adduser = () => {

  const [user,setuser] = useState(data);
  
  const valuechangehandler = (e) => {
    setuser({...user,[e.target.name]: e.target.value})};

  const adduserdetails = async() => {
    console.log(user)
    await addUser(user)
  }
  return(

<Container>
  <Typography variant="h4">Add User</Typography>
  <FormControl>
    <InputLabel>Name</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)} name="name"/>
  </FormControl>

  <FormControl>
    <InputLabel>UserName</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)} name="username"/>
  </FormControl>

  <FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)} name="email"/>
  </FormControl>

  <FormControl>
    <InputLabel>Phone</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)}  name="phone"/>
  </FormControl>

  <FormControl>
    <Button variant="contained" onClick={()=> adduserdetails()}>Add User</Button>
  </FormControl>
</Container>

)}

export default Adduser 