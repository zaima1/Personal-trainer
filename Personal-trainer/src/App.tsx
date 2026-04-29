
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import { Link, Outlet } from 'react-router';

function App() {


  return (
    <>
    <nav>
      <Link to={"/customerlist"}>Customer list</Link>
      <Link to={"/training"}>Training</Link>
      
    </nav>
    <Outlet/>
       <Container maxWidth="lg">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">Customers</Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
    </Container>
  
    </>
  )
}

export default App
