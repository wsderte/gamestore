import React, {
    useContext,
    useState,
    useEffect,
    useRef,
    createContext,
} from 'react'
import { auth, db } from '../firebase/clientApp'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

import { doc, getDoc } from 'firebase/firestore'

// value: {
//     currentUser: null;
//     login: (email: string, password: string) => Promise<UserCredential>;
//     signup: (email: string, password: string) => void;
//     logout: () => Promise<void>;
// }

const AuthContext = createContext<any>('')

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
        return
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
