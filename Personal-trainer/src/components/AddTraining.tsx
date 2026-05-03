import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type {  TrainingType } from '../types';
import TrainingForm from './TrainingForm';


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
       id:0,
    date:"",
    duration: 0,
    activity: "",
    customer:{
      id:0,
      firstname: "",
      lastname:"",
      streetadress: "",
      postcode: "",
      city: "",
      email: "", 
      phone: ""}
      
    })
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
      Add Training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Training</DialogTitle>
        <TrainingForm training={training} setTraining={setTraining}/>
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
