import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, data, RouterProvider } from 'react-router';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CustomerList from './components/CustomerList.tsx';
import type { CustomerType, TrainingType } from './types.ts';
import Training from './components/Training.tsx';
import Home from './components/Home.tsx';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Calender from './components/Calender.tsx';
import { fetchTraining } from './TrainingApi.ts';
function Root(){   const [customer, setCustomer] = useState <CustomerType>({
   firstname: "",
   lastname:"",
   streetaddress:"",
   postcode:"",
   city:"",
   email: "",
   phone:""
  })

  const [training, setTraining] = useState<TrainingType>({
    id:0,
    date:"",
    duration: 0,
    activity: "",
    customer:{
      id:0,
      firstname: "",
      lastname:"",
      streetaddress: "",
      postcode: "",
      city: "",
      email: "", 
      phone: ""
    }

  })

 useEffect (() => {
        fetchTraining()
            .then(
              data => setTrainings(data))
            .catch(err => console.log(err));
    }, [])

  const [trainings, setTrainings] = useState<TrainingType[]> ([]);

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    children:[{
      element:<Home/>,
      index:true
    },
    {
      path:"training",
      element:<Training training={training} setTraining={setTraining} trainings={trainings} setTrainings={setTrainings}/>
      
    },
   {
      path:"customerlist",
      element:<CustomerList customer={customer} setCustomer={setCustomer}/>
      
    },
   {
      path:"calender",
      element:<Calender trainings={trainings} />
      
    }]
  },
], {
  basename: "/Personal-trainer"
});
  return<RouterProvider router={router}/>
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
  <Root/>
  </LocalizationProvider>
  </StrictMode>
)

