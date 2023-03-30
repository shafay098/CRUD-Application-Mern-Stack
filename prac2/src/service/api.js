import axios from 'axios'

const URL = 'http://localhost:8000';

export const addUser = async(data) => {
try{
return await axios.post(`${URL}/entry`,data)
}
catch (error) {console.log('the error is ' ,error) ;} 
}

export  const getUsers = async() => {
    try{return await axios.get(`${URL}/view`)}catch(error){console.log('error while calling users',error,error)}
}

export const getUser = async(id) => {
    try{return await axios.get(`${URL}/${id}`)} catch(error){console.log('error while getting a single user',error)}
}

export const editUser = async(user,id) => {
    try{return await axios.post(`${URL}/${id}`,user)}catch(error){console.log("error while edit user api" , error)}
}

export const DeleteUser = async(id) => {
    try{return await axios.delete(`${URL}/${id}`)}catch(error){console.log("error while deleteing user " , error)}
}