import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';


const Footer = () => {
  const {user}= useContext(AuthContext)

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
    {user?.name}
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <h2>icon</h2>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    );
};

export default Footer;