export type Customer = {
    firstName: string;
    lastName: string;
    streetaddress: string;
    postcode: string;
    city: string;
    email: string;
    phone: string;
    _links :{
        self:{
            href:string;
        }, 
        customer: {
            href:string;
        },
        trainings: {
            href: string;
        }
    }
}

export type CustomerType =Omit<Customer,"_links">

export type Trainings ={
    date: string;
    duration: number;
    activity: string;
    _links:{
        self:{
            href:string;
        },
        training:{
            href:string;
        },
        customer:{
            href:string;
        }
    }
}
export type TrainingType= Omit<Trainings, "_links">