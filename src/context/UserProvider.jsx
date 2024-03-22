import { useEffect, useState } from "react"
import { UserContext } from "./userContext"


export const UserProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '');
    const [logueado, setLogueado] = useState( JSON.parse(localStorage.getItem('logueado')) || false)

    //Effect para logueado
    useEffect(()=> {
        localStorage.setItem('logueado', JSON.stringify(logueado))

    }, [logueado]);

    useEffect(()=> {
        localStorage.setItem('user', JSON.stringify(user));
    })


    return (
        <UserContext.Provider value={{user, setUser, logueado, setLogueado}}>
            {children}
        </UserContext.Provider>
    )
}


