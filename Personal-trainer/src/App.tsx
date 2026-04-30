
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import {  Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
function App() {

  const textTyphography = useLocation();

   const getTitle = (): string => {
    switch (textTyphography.pathname) {
      case "/":
        return "Home";
      case "/training":
        return "Training";
      case "/customerlist":
        return "Customer list";
      default:
        return "App";
    }
  };

  return (
    <>
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/customerlist"}>Customer list</Link>
      <Link to={"/training"}>Training</Link>
      
    </nav>
   
       <Container maxWidth="lg">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            {getTitle()}
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
       <Outlet/>
    </Container>
  
    </>
  )
}

export default App
