import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const CarContext = createContext();

const auth = getAuth(app)



const AuthContext = ({ children }) => {

    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginWithEmailPassword =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle= Provider =>{
        
        return signInWithPopup(auth, Provider)
    }

    const emailVarify =()=>{
        sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            // console.log(currentUser);
            setUser(currentUser)

        });
        return ()=>{
            return unSubscribe();
        }


    },[]);

    const signUp=()=>{
        signOut(auth)
    }





    const authValue = {
        signInWithGoogle,
        user,
        loading,
        signUp,
        createUser,
        emailVarify,
        loginWithEmailPassword
    }
    return (

        <CarContext.Provider value={authValue}>
            {children}
        </CarContext.Provider>
    );
};

export default AuthContext;