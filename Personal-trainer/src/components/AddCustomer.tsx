import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { CustomerType } from '../types';

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
        <DialogTitle>New Customer</DialogTitle>
        <DialogContent>
            <TextField
              required
              margin="dense"
              label="First name"
              value={customer.firstName}
              onChange={e => setCustomer({...customer, firstName: e.target.value})}
              fullWidth
              variant="standard"
            />
              <TextField
              required
              margin="dense"
              label="Last name"
              value={customer.lastName}
              onChange={e => setCustomer({...customer, lastName: e.target.value})}
              fullWidth
              variant="standard"
            />
              <TextField
              required
              margin="dense"
              label="Streeraddress"
              value={customer.streetaddress}
              onChange={e => setCustomer({...customer, streetaddress: e.target.value})}
              fullWidth
              variant="standard"
            />
              <TextField
              required
              margin="dense"
              label="Postcode"
              value={customer.postcode}
              onChange={e => setCustomer({...customer, postcode: e.target.value})}
              fullWidth
              variant="standard"
            />
              <TextField
              required
              margin="dense"
              label="City"
              value={customer.city}
              onChange={e => setCustomer({...customer, city: e.target.value })}
              fullWidth
              variant="standard"
            />
              <TextField
              required
              margin="dense"
              label=" E-mail"
              value={customer.email}
              onChange={e => setCustomer({...customer, email:  e.target.value})}
              fullWidth
              variant="standard"
            />
             <TextField
              required
              margin="dense"
              label=" Phone number"
              value={customer.phone}
              onChange={e => setCustomer({...customer, phone:  e.target.value})}
              fullWidth
              variant="standard"
            />
            
        </DialogContent>
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
