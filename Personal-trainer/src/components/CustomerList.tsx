import { useEffect, useState } from "react";
import type { Customer, CustomerType } from "../types";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Stack } from "@mui/material";
import AddCustomer from "./AddCustomer";
import DeleteIcon from '@mui/icons-material/Delete';
import EditCustomer from "./EditCustomer";
import { fetchCustomer, saveCustomer } from "../CustomerApi";

type CustomerListProps = {
    setCustomer: React.Dispatch<React.SetStateAction<CustomerType>>;
    customer: CustomerType;
};
function CustomerLists({ customer, setCustomer }: CustomerListProps) {

    const [customers, setCustomers] = useState<Customer[]>([])


    const columns: GridColDef[] = [
        { field: "firstname", headerName: "First name" },
        { field: "lastname", headerName: "Last name" },
        { field: "streetaddress", width: 150, headerName: "Address" },
        { field: "postcode", width: 70, headerName: "Postcode" },
        { field: "city", headerName: "City" },
        { field: "email", width: 130, headerName: "E-mail" },
        { field: "phone", width: 130, headerName: "Phone number" },
        {
            field: "_links.self.href",
            headerName: "",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridRenderCellParams) =>
                <GridActionsCellItem
                    label="Delete"
                    showInMenu
                    icon={<DeleteIcon color="error" />}
                    onClick={() => handelDelete(params.id as string)}
                />
        }, {
            field: "_links.car.href",
            headerName: "",
            sortable: false,
            filterable: false,
            disableColumnMenu: false,
            renderCell: (params: GridRenderCellParams) =>
                <EditCustomer customer={params.row} setCustomer={setCustomer} handleUpdate={handleUpdate} />

        }

    ]

    const getCustomers = () => {
        fetchCustomer()
            .then(data => { console.log(data); setCustomers(data._embedded.customers) })
            .catch(err => console.log(err));
    }


    const handleUpdate = (url: string, updatedCustomer: CustomerType) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCustomer)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error updating data");
                return response.json();
            })
            .then(() => {
                getCustomers();

            })
            .catch(err => console.error(err))
    }
    const handelAdd = (customer: CustomerType) => {
        saveCustomer(customer)
            .then(() => getCustomers())
            .catch(err => console.error(err))
    }
    const handelDelete = (url: string) => {
        if (window.confirm("Are you sure?")) {
            fetch(url, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok)
                        throw new Error("Error when deleting a customer")
                    return response.json();
                })
                .then(() => getCustomers())
                .catch(err => console.error(err))

        }
    }
    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <>
            <Stack sx={{ mt: 2, mb: 2 }} direction="row">
                <AddCustomer customer={customer} setCustomer={setCustomer} handelAdd={handelAdd} />
            </Stack>
            <div style={{ width: "90%", height: 600, margin: "auto" }}>
                <DataGrid
                    columns={columns}
                    rows={customers}
                    getRowId={row => row._links.self.href}
                    autoPageSize
                    rowSelection={false}
                />
            </div>
        </>
    )
}

export default CustomerLists;