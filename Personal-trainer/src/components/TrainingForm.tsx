import TextField from "@mui/material/TextField";
import type { TrainingType } from "../types";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import React from "react";

type TrainingListProps = {
  setTraining: React.Dispatch<React.SetStateAction<TrainingType>>;
  training: TrainingType;
};

export default function TrainingForm({ training, setTraining }: TrainingListProps) {

  
  return (
    <>
      <DatePicker
        label="Date"
        value={training.date ? dayjs(training.date) : null}
        onChange={(newValue) =>
          setTraining({
            ...training,
            date: newValue ? newValue.toISOString() : ""
          })
        }
      />
      <TextField
        required
        margin="dense"
        label=" Duration"
        value={training.duration}
        onChange={e => setTraining({ ...training, duration: parseInt(e.target.value) })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="Activity"
        value={training.activity}
        onChange={e => setTraining({ ...training, activity: e.target.value })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="First name"
        value={training.customer.firstname}
        onChange={e => setTraining({
          ...training,
          customer: {
            ...training.customer,
            firstname: e.target.value
          }
        })}
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="dense"
        label="Last name"
        value={training.customer.lastname}
        onChange={e => setTraining({
          ...training,
          customer: {
            ...training.customer,
            lastname: e.target.value
          }
        })}
        fullWidth
        variant="standard"
      />
    </>
  )
}