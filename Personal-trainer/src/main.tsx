import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import React from 'react';
import CustomerList from './components/CustomerList.tsx';
import type { CustomerType, TrainingType } from './types.ts';
import Training from './components/Training.tsx';
function rooter(){   const [customer, setCustomer] = useState <CustomerType>({
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

const router = createBrowserRouter([
  // root route
  
  {
    path: "/",
    element: <App />,
    children:[{
      element:<CustomerList customer={customer}setCustomer={setCustomer}/>,
      index:true
    },
    {
      path:"training",
      element:<Training training={training} setTraining={setTraining}/>
      
    }]
  },
]);
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
}
