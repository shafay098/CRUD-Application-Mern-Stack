import './App.css';


//components
import EntryForm from './components/AddUser';
import Navbarr from './components/navbar';
import ViewRecords from './components/ViewUsers';
import CrudApplication from './components/crudapplication';
import EditUser from './components/EditUser';

//react router
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbarr/>
    <Routes>
      <Route path='/entry' element={<EntryForm/>}/>
      <Route path='/view' element={<ViewRecords/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      <Route path='/' element={<CrudApplication/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
