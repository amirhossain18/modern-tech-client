import React from 'react';
import { Link } from 'react-router-dom';

const Navitems = () => {
    return (
        <div className="navbar-end visible md:invisible d-block">
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
    );
};

export default Navitems;