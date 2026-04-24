import { useEffect, useState } from "react";
import AddTraining from "./AddTraining";
import type {  Trainings,  TrainingType } from "../types";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type TrainingListProps = {
  setTraining: React.Dispatch<React.SetStateAction<TrainingType>>;
  training: TrainingType;
};
function Training({training, setTraining}: TrainingListProps ) {

    const [trainings, setTrainings] = useState<Trainings[]> ([]);
    const columns: GridColDef[] = [
        { field: "date", headerName: "Date" },
        { field: "duration", headerName: "Duration" },
        { field: "activity",width: 150, headerName: "Activity" },
        { field: "customer", headerName: "Customer" },
        {
            field: "_link.self.href",
            headerName: "",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridRenderCellParams) =>
               <GridActionsCellItem
               label= "Delete"
               showInMenu
               icon={<DeleteIcon color="error"/>}
               onClick={()=> handelDelete(params.id as string)}
               />
        }

    ]

    const getCustomers = () => {
        fetch(import.meta.env.VITE_API_URL_TRAINING + "/trainings")
            .then(response => {
                if (!response.ok) 
                    throw new Error("Error ");

                return response.json();
            })
            .then(data => setTrainings(data._embedded.trainings))
            .catch(err => console.log(err));
    }


    const handelDelete = (url: string) => {
        if (window.confirm("Are you sure?")) {
            fetch(url, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok)
                        throw new Error("Error when deleting a training")
                    return response.json();
                })
                .then(() => getCustomers())
                .catch(err => console.error(err))

        }}
        useEffect(()=> {
            getCustomers();
        }, []);

        return(
            <>
            <Stack sx={{mt:2, mb:2}} direction="row">
                <AddTraining training={training} setTraining={setTraining} />
            </Stack>
            <div style={{width: "90%", height: 600, margin: "auto"}}>
            <DataGrid 
            columns={columns}
            rows={trainings}
            getRowId={row => row._link.self.href}
            autoPageSize
            rowSelection={false}
            />
            </div>
            </>
        )
}

export default Training;