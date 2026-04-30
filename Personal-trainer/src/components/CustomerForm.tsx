
import TextField from "@mui/material/TextField";
import type { CustomerType } from "../types";


type CustomerListProps = {
  setCustomer: React.Dispatch<React.SetStateAction<CustomerType>>;
  customer: CustomerType;
};

export default function CustomerForm({customer, setCustomer}:CustomerListProps){
    return(
    <>

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
            
       </>
    )
}