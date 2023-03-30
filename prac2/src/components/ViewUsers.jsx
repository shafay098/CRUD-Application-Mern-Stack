
import {Table,TableHead,TableCell,TableRow, TableBody,styled, Button} from '@mui/material'
import { getUsers , DeleteUser} from '../service/api';
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'

const TableContainer = styled(Table)`
width:90%;
margin: 50px auto 0 auto
`

const RowContainer = styled(TableRow)`
background-color: black;
& > th {
    color: #fff;
    font-size: 20px;
}
`

const BodyRowContainer = styled(TableRow)`
& > td {
    font-size: 20px ;
}
`

const ViewRecords = () => {



    const [users,setusers] = useState([]);


useEffect(()=>{
    getallusers();
},[])

const getallusers = async () => {

   let response =  await getUsers();
   console.log(response.data) 
   setusers(response.data);
}

const DeleteLogic = async(id) => {
    console.log(id);
    await DeleteUser(id)
    getallusers()
}


    return(
        <TableContainer>
            <TableHead>
                <RowContainer>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </RowContainer>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <BodyRowContainer>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                         <TableCell>
<Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
<Button variant='contained' color='secondary' onClick={() => DeleteLogic(user._id)}>Delete</Button>
                        </TableCell>
                        </BodyRowContainer>
                    ))
                }
            </TableBody>

        </TableContainer>

)}

export default ViewRecords ;