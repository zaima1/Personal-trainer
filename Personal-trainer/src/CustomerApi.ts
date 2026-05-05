import type {  CustomerType } from "./types";

export const fetchCustomer = () => fetch(import.meta.env.VITE_API_URL_CUSTOMER + "customers")
    .then(response => {
        if (!response.ok)
            throw new Error("Error ");

        return response.json();
    })

export const saveCustomer = (customer: CustomerType) => {
    return (fetch(import.meta.env.VITE_API_URL_CUSTOMER + "customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
        .then(response => {
            if (!response.ok)
                throw new Error("Error adding new Customer");
            return response.json();
        })
    )
}