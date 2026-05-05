import { useEffect } from "react";
import AddTraining from "./AddTraining";
import type {TrainingType } from "../types";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Stack } from "@mui/material";
import dayjs from "dayjs";
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchTraining, saveTraining } from "../TrainingApi";

type TrainingListProps = {
    setTraining: React.Dispatch<React.SetStateAction<TrainingType>>;
    training: TrainingType;
    setTrainings: React.Dispatch<React.SetStateAction<TrainingType[]>>;
    trainings: TrainingType[];
};
function Training({ training, setTraining, trainings, setTrainings }: TrainingListProps) {

   
    const columns: GridColDef[] = [
        {
            field: "date",
            headerName: "Date",
            valueFormatter: (params: any) =>
                dayjs(params.value).format("DD-MM-YYYY")
        },
        { field: "duration", headerName: "Duration" },
        { field: "activity", width: 150, headerName: "Activity" },
        {
            field: "firstname",
            headerName: "First name",
            width: 150,
            valueGetter: (_value, row) => row.customer?.firstname ?? "",
        },
        {
            field: "lastname",
            headerName: "Last name",
            width: 150,
            valueGetter: (_value, row) => row.customer?.lastname ?? "",
        }, {
            field: "delete",
            headerName: "",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridRenderCellParams) =>
                <GridActionsCellItem
                    label="Delete"
                    showInMenu
                    icon={<DeleteIcon color="error" />}
                    onClick={() => handelDelete(params.row.id)}
                />
        }



    ]

    const getCustomers = () => {
        fetchTraining()
            .then(
                data => setTrainings(data))
            .catch(err => console.log(err));
    }


    const handelDelete = (id: number) => {
        if (window.confirm("Are you sure?")) {
            fetch(import.meta.env.VITE_API_URL_TRAINING + "trainings/" + id, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok)
                        throw new Error("Error when deleting a training")
                    return response.json();
                })
                .then(() => getCustomers())
                .catch(err => console.error(err))

        }
    }
    useEffect(() => {
        getCustomers();
    }, []);

    const handelAdd = (training: TrainingType) => {
        saveTraining(training)
            .then(() => getCustomers())
            .catch(err => console.error(err))
    }

    return (
        <>
            <Stack sx={{ mt: 2, mb: 2 }} direction="row">
                <AddTraining training={training} setTraining={setTraining} handelAdd={handelAdd} />
            </Stack>
            <div style={{ width: "90%", height: 600, margin: "auto" }}>
                <DataGrid
                    columns={columns}
                    rows={trainings}
                    getRowId={(row) => row.id}
                    autoPageSize
                    rowSelection={false}
                />
            </div>
        </>
    )
}

export default Training;