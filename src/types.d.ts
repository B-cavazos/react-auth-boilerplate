type User = {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type Creds = {
    email:string;
    password:string;
}

type InitialStateType = {
    users: User [];
    user: User | undefined;
    alert: boolean;
    saveUser:  (user:User) => void;
    getUsers:  () => void;
}


type AuthStateType = {
    alert: string;
    loading:boolean;
    error: string;
    userLogin: (creds:Creds) => void;
    registerUser: (user:User) => void;
}