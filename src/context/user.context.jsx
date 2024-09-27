import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils'
import { createUser } from '../services/users'

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()  => null
});

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null)
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            console.log('onAuthStateChangedListener')
            console.log(user)
            if (user) {
                await createUser(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>
        { children }
    </UserContext.Provider>
}

