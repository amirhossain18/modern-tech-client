import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
const Sidevar = () => {
const {providerGoogle }= useContext(AuthContext)
const Navigate= useNavigate()
const location = useLocation()
const from= location.state?.from?.pathname || '/';



const googleProvider= new GoogleAuthProvider()

    const handelSignin = ()=>{
        providerGoogle(googleProvider)
        .then(result=>{
            const user = result.user
            console.log(user)
            Navigate(from , {replace: true})
        })
        .catch(err=>console.error(err))
    }


    
    return (
        <div>
            <div class="d-grid gap-2 col-6 mx-auto">
  <button onClick={handelSignin} class="btn btn-primary" type="button"> <i class="fa-brands fa-google"> </i> Sign In</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
    <Button className="align-items-center"   variant="outline-success">Google Sign in</Button>
        </div>
    );
};

export default Sidevar;