import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import type { Customer, CustomerType } from '../types';
import CustomerForm from './CustomerForm';



type CustomerListProps = {
  setCustomer: React.Dispatch<React.SetStateAction<CustomerType>>;
  customer: Customer;
  handleUpdate: (url: string, updateCustomer: CustomerType) => void
};


export default function EditCusomer( props : CustomerListProps) {
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState<CustomerType>({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postcode: "",
    city: "",
    email: "",
    phone:""

  });

  const handleClickOpen = () => {
    setCustomers({
      firstname: props.customer.firstname,
      lastname: props.customer.lastname,
      streetaddress: props.customer.streetaddress,
      postcode: props.customer.postcode,
      city: props.customer.city,
      email: props.customer.email,
      phone: props.customer.phone
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.handleUpdate(props.customer._links.self.href, customers);
    handleClose();
  };

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>
        EDIT
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Customer</DialogTitle>
        <CustomerForm customer={customers} setCustomer={setCustomers} />
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
