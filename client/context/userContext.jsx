import axios from 'axios';
import { createContext, useState, useEffect } from 'react';


export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }
    }, [])

    const loginUser = (userData) => {
        setUser(userData);
    };
    return (
        <UserContext.Provider value={{user, setUser: loginUser}}>
            {children}
        </UserContext.Provider>
    )
}