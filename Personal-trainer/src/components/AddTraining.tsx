import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type {  TrainingType } from '../types';


type TrainingListProps = {
  setTraining: React.Dispatch<React.SetStateAction<TrainingType>>;
  training: TrainingType;
};
export default function AddTraining({ training,setTraining }: TrainingListProps) {
  const [open, setOpen] = useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setTraining({
        date: "",
        duration: 0,
        activity: ""
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
              label="Date"
              value={training.date}
              onChange={e => setTraining({...training, date: e.target.value})}
              fullWidth
              variant="standard"
            />
              <TextField
              required
              margin="dense"
              label=" Duration"
              value={training.duration}
              onChange={e => setTraining({...training, duration: parseInt(e.target.value)})}
              fullWidth
              variant="standard"
            />
              <TextField
              required
              margin="dense"
              label="Activity"
              value={training.activity}
              onChange={e => setTraining({...training, activity: e.target.value})}
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
