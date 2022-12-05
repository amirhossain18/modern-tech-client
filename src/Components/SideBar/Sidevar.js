import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Context/UserContext';
import { BsGoogle } from "react-icons/bs";
const Sidevar = () => {
const {providerGoogle , loading}= useContext(AuthContext)




const googleProvider= new GoogleAuthProvider()

    const handelSignin = ()=>{
        providerGoogle(googleProvider)
        .then(result=>{
            const user = result.user
            console.log(user)
            loading(false);
        })
        .catch(err=>console.error(err))
    }


    
    return (
        <div>
    <Button className="align-items-center" onClick={handelSignin}  variant="outline-success">Google Sign in <BsGoogle></BsGoogle></Button>
        </div>
    );
};

export default Sidevar;