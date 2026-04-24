
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import CustomerList from './components/CustomerList';
import  Training from './components/Training';
import { type TrainingType, type CustomerType } from './types';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {

   const [customer, setCustomer] = useState <CustomerType>({
   firstName: "",
   lastName:"",
   streetaddress:"",
   postcode:"",
   city:"",
   email: "",
   phone:""
  })

  const [training, setTraining] = useState<TrainingType>({
    date:"",
    duration: 0,
    activity: ""
  })
  return (
    <>
       <Container maxWidth="lg">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">Customers</Typography>
        </Toolbar>
      </AppBar>
      <Training training={training} setTraining={setTraining}/>
      <CustomerList  customer ={customer} setCustomer={ setCustomer}/>
      <CssBaseline />
    </Container>
  
    </>
  )
}

export default App
