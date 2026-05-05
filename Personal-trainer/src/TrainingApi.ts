export const fetchTraining = ()=> fetch(import.meta.env.VITE_API_URL_TRAINING + "gettrainings")
            .then(response => {
                if (!response.ok)
                    throw new Error("Error ");

                return response.json();
            })