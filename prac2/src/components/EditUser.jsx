import React, { useState,useEffect } from "react";
import { FormControl, FormGroup, Input, InputLabel,Typography,styled,Button } from "@mui/material";
import { editUser,getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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



const EditUser = () => {
     const [user,setuser] = useState(data);
    const {id} = useParams();
  const navigate = useNavigate()
  
  const loadUserDetails = async() => {
    const response = await getUser(id);
    setuser(response.data[0])
    }

  useEffect(() => {
    loadUserDetails();
  },[]) 

 
  
  const valuechangehandler = (e) => {
    setuser({...user,[e.target.name]: e.target.value})};

  const edituserdetails = async() => {
    await editUser(user,id)
    navigate('/view')
  }
  return(

<Container>
  <Typography variant="h4">Edit User</Typography>
  <FormControl>
    <InputLabel>Name</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)} name="name" value={user.name}/>
  </FormControl>

  <FormControl>
    <InputLabel>UserName</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)} name="username" value={user.username}/>
  </FormControl>

  <FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)} name="email" value={user.email}/>
  </FormControl>

  <FormControl>
    <InputLabel>Phone</InputLabel>
    <Input onChange={(e) => valuechangehandler(e)}  name="phone" value={user.phone}/>
  </FormControl>

  <FormControl>
    <Button variant="contained" onClick={()=> edituserdetails()}>Update</Button>
  </FormControl>
</Container>

)}

export default EditUser 