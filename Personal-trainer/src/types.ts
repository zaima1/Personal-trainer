export type Customer = {
    firstname: string;
    lastname: string;
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
    id: number;
    date: string;
    duration: number;
    activity: string;
    customer:{
        id: number;
        firstname:string;
        lastname: string;
        streetaddress:string;
        postcode: string;
        city: string;
        email:string;
        phone: string;
        
    }
}
export type TrainingType= Omit<Trainings, "_links">