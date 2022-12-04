import React, { createContext, useState } from 'react';
import app from '../Firebase/FIrebase.Confige';
import  { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
export const AuthContext= createContext()

const auth= getAuth(app)


const UserContext = ({children}) => {
   const {user , setUser}= useState({name:'akash'})


 const createUser= (email, password) =>{
    
    
    return createUserWithEmailAndPassword(auth , email, password);
}



    const AuthInfo= {user , createUser}
    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;