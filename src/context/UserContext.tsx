import type {User} from "../types/user";
import {getUsers} from "../services/userService";
import { createContext, useEffect, useState  } from "react";

interface UserContextType {
    users: User[];
    // loading: boolean,
    // error: string | null,
    addUser: ( user: User ) => void
}

export const UserContext = createContext<UserContextType | null>(null);
export const UserProvider = ( {children} : {children: React.ReactNode} ) => {
    const [users, setUsers]     = useState<User[]>([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError]     = useState<string | null >(null);

    useEffect( () => {
        getUsers().then( (data)=> {
            setUsers(data);
        });
    }, []);

    const addUser = (user: User) => {
        setUsers((prev) => [...prev, user]);
    };

    return (
        <UserContext.Provider value = {{users, addUser}}>
            {children}
        </UserContext.Provider>
    )
}


