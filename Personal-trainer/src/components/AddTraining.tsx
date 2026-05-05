import { useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import type {  TrainingType } from '../types';
import TrainingForm from './TrainingForm';


type TrainingListProps = {
  setTraining: React.Dispatch<React.SetStateAction<TrainingType>>;
  training: TrainingType;
  handelAdd: (training: TrainingType) => void;
};
export default function AddTraining(props: TrainingListProps) {
  const [open, setOpen] = useState(false);
 const [trainings, setTrainings] = useState<TrainingType>({
    id: 0,
    date: "",
    duration: 0,
    activity: "",
    customer:{
        id: 0,
        firstname: "",
        lastname: "",
        streetaddress: "",
        postcode: "",
        city: "",
        email:"",
        phone: ""
    }
 })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("props",props);
    props.handelAdd(trainings);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
      Add Training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Training</DialogTitle>
        <TrainingForm training={trainings} setTraining={setTrainings}/>
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
