import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import React from 'react';
import CustomerList from './components/CustomerList.tsx';
import type { CustomerType, TrainingType } from './types.ts';
import Training from './components/Training.tsx';
import Home from './components/Home.tsx';
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
      element:<Training training={training} setTraining={setTraining}/>
      
    },
   {
      path:"customerlist",
      element:<CustomerList customer={customer} setCustomer={setCustomer}/>
      
    }]
  },
]);
  return<RouterProvider router={router}/>
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Root/>
  </StrictMode>
)

