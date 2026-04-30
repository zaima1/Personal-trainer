import TextField from "@mui/material/TextField";
import type { TrainingType } from "../types";

type TrainingListProps = {
  setTraining: React.Dispatch<React.SetStateAction<TrainingType>>;
  training: TrainingType;
};

export default function TrainingForm( {training, setTraining}: TrainingListProps){

    return(
        <>
           <TextField
              required
              margin="dense"
              label="Date"
              type='date'
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
            </>
    )
}