import React from 'react';
import { Link } from 'react-router-dom';
import Navitems from '../NavItems/Navitems';


const Header = () => {
    return (
      
        <div className="navbar bg-base-100">
        <div className="navbar-start visible md:invisible">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <Navitems></Navitems>
            </ul>
          </div>
        </div>
        <div className="navbar-center" >
          <a className="btn btn-ghost normal-case text-xl">Modern Tech</a>
        
        </div>
        <div className="navbar-end invisible md:visible ">
          <button className="btn btn-ghost btn-circle">
          <Link to='/blog'> Blog</Link>
          </button>
          <button className="btn btn-ghost btn-circle">
          <Link to='/blog'> Blog</Link>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
            <Link to='/'> Home</Link>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          
        
          </button>
        </div>
      </div>
    );
};

export default Header;