import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

  const {signIn} = useContext(AuthContext)


  const handleSubmit = event => {
    event.preventDefault();
    const form= event.target;
    const email= form.email.value;
    const password= form.password.value;
    console.log(email , password)
  
    signIn(email, password)
    .then(result=> {
      const user = result.user
      console.log(user)
    })
    .catch(err => { 
      const error= err.message
      console.error(error)
    })
  }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  name="password" type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <h6> Are you New Our site , pleace Registrations Fast</h6>
          
            <Link   className="btn btn-outline btn-success" to="/regestration"> Go TO Registrations</Link>
          </div>
        </div>
      </div>
    );
};

export default Login;