import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import type { CustomerType } from '../types';
import CustomerForm from './CustomerForm';

type CustomerListProps = {
  setCustomer: React.Dispatch<React.SetStateAction<CustomerType>>;
  customer: CustomerType;
   handelAdd: (customer: CustomerType) => void;
};
export default function AddCustomer(props: CustomerListProps) {
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState<CustomerType>({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postcode: "",
    city: "",
    email: "",
    phone: ""
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.handelAdd(customers)
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New customer</DialogTitle>
        <CustomerForm customer={customers} setCustomer={setCustomers}  />
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
