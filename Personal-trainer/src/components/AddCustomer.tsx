import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { CustomerType } from '../types';
import CustomerForm from './CustomerForm';

type CustomerListProps = {
  setCustomer: React.Dispatch<React.SetStateAction<CustomerType>>;
  customer: CustomerType;
};
export default function AddCustomer({ customer,setCustomer }: CustomerListProps) {
  const [open, setOpen] = useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setCustomer({
        firstName: "",
        lastName:"",
        streetaddress:"",
        postcode:"",
        city:"",
        email: "",
        phone:""
    })
    handleClose();
  };

  return (
     <>
      <Button variant="outlined" onClick={handleClickOpen}>
      Add Customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New customer</DialogTitle>
        <CustomerForm customer={customer} setCustomer={setCustomer}/>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
    
  );
}
