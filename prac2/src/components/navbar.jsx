import React from 'react';
import {styled,AppBar,Toolbar} from '@mui/material'
import { NavLink } from 'react-router-dom';

const HHeader = styled(AppBar)`
background: #111111 
`;

const Tabss = styled(NavLink)`
font-size: 30px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`
const Navbarr = () => {return(<>

<HHeader position='static'>
  <Toolbar>
<Tabss to='/'>Crud Application</Tabss>
<Tabss to='/entry'>Insert Records</Tabss>
<Tabss to='/view'>View Records</Tabss>

  </Toolbar>
</HHeader>
</>)}

      export default Navbarr ;