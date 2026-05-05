import type { TrainingType } from "./types";

export const fetchTraining = ()=> fetch(import.meta.env.VITE_API_URL_TRAINING + "gettrainings")
            .then(response => {
                if (!response.ok)
                    throw new Error("Error ");

                return response.json();
            })

            export const saveTraining = (training: TrainingType) => {
                return (fetch(import.meta.env.VITE_API_URL_CUSTOMER + "trainings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(training)
                })
                    .then(response => {
                        if (!response.ok)
                            throw new Error("Error adding new training");
                        return response.json();
                    })
                )
            }