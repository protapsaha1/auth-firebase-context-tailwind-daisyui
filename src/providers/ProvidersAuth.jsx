import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const userContext = createContext(null);

const auth = getAuth(app) 
const ProvidersAuth = ({ children }) => {
    const [user , setUser] = useState(null);
    
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignUp = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
        user,
        createUser,
        userSignUp
    }

    
    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default ProvidersAuth;